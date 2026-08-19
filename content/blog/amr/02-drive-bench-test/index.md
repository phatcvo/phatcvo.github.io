---
title: "Testing the Drive System on the Bench"
date: 2026-08-19
weight: 20
toc: true
tags: ["AMR", "ROS 2", "RS485"]
categories: ["Robotics"]
description: "Getting two BLDC motors to turn from ROS 2 over RS485 — finding the link, reading the protocol, and the two numbers that scale everything downstream."
draft: false
---

*Companion to video 02. 📺 Watch: **link coming with the video**.*

The robot cannot move yet. Before anything gets bolted to a chassis, the drive
system is going to be tested on a bench with the wheels off the ground.

> Before you assemble everything onto the robot, test every layer of the system
> separately.

This is not caution for its own sake. A drive system that does not respond has at
least five candidate causes — wiring, power, baud rate, node address, protocol —
and once the motors are mounted on a 40 kg platform under a stack of ROS nodes,
you cannot tell those five apart. On the bench you can.

## 1. The chain

```text
PC
 ↓  ROS 2
ros2_control
 ↓  RS485 (USB adapter)
MD200T controller
 ↓
Motor L / Motor R
```

Every arrow in that diagram is a place it can break. The plan is to bring them up
bottom-up: wire, then link, then protocol, then one wheel, then both, then ROS 2.

## 2. The hardware

The controller is an **MDROBOT MD200T**: one board, two BLDC channels, DC 12–48 V,
10 A per channel. Both wheels are driven from the same board and answer on the
**same RS485 bus**.

That single-bus detail shapes everything later. There is one link to get right,
not two — but also one link whose failure takes out both wheels at once.

### What RS485 actually is

If you have only used UART or USB, RS485 is worth thirty seconds:

- **Differential pair.** Two wires, A and B. The signal is the *difference*
  between them, so electrical noise that hits both wires equally cancels out. This
  is why it survives in a machine full of motor drivers.
- **Half duplex.** One pair, one direction at a time. The host asks, then listens.
  Everyone else stays quiet.
- **Multi-drop.** Many devices on one pair, each with a **node ID**. A frame
  carries the ID of who it is for.
- **Long runs.** Hundreds of metres, where plain UART gives up after a few.

So to talk to the drive you need three things right: the wiring (A to A, B to B —
swapping them is the classic first bug), the **baud rate**, and the **node ID**.

### Bench setup checklist

1. Wheels **off the ground**, or motors on the bench with nothing attached.
2. Power supply in range (12–48 V) and current-limited if your supply can do it.
3. USB–RS485 adapter, A/B to the controller's A/B, common ground.
4. Nobody's hands near the wheels. A commanded RPM is a commanded RPM.

## 3. Finding the link

Do **not** start the control stack. A full `ros2_control` graph gives you exactly
one symptom — "the wheels don't turn" — and it means the same thing whether the
serial cable is unplugged or the controller is perfectly healthy but nobody is
commanding it.

Instead, the workspace ships a small bring-up tool, `md200t_probe`, that talks to
the drive with no controller manager in the way:

```bash
./run.sh motor                     # listen for 3 s on /dev/ttyUSB0
./run.sh motor --sweep             # try every baud rate and every node ID
```

The probe **listens by default**. Motion requires an explicit `--rpm`. That is a
deliberate choice: a bring-up tool that spins motors when you run it with no
arguments is a bring-up tool that will eventually spin them into somebody's hand.

Its full options:

```text
  --device PATH   serial device        (default /dev/ttyUSB0)
  --baud N        9600..115200         (default 115200)
  --id N          drive node id, 0-254 (default 1)
  --rpm N         motor RPM; 0 listens only
  --channel N     spin only channel 1 or 2; the other is held at 0
  --seconds S     how long to run      (default 3)
  --sweep         try every baud rate and node id, then exit
```

### What `--sweep` found

**This drive answers at 115200 baud, node ID 1** — *not* the 19200 that the MD
family ships with. Someone had reconfigured it at some point with the
`PID_BAUD_RATE` (135) setting.

That is the whole reason `--sweep` exists. Without it you sit at 19200 reading
silence and conclude the board is dead. Two minutes of brute force answers a
question that documentation could not, because the documentation described a
factory default the board no longer had.

> **Lesson.** When a serial device is silent, the first hypothesis is not "it is
> broken." It is "I am shouting in the wrong language."

## 4. The protocol

Once the link is up, the frames. The MD200T uses a compact binary format:

```text
RMID  TMID  ID  PID  LEN  [payload …]  CHECKSUM
 1     1    1    1    1      LEN            1
```

- **RMID / TMID** — receiver and transmitter IDs. The controller is 183, the host
  is 184.
- **ID** — which node on the bus.
- **PID** — which parameter or command. This is the interesting byte.
- **LEN** — payload length.
- **CHECKSUM** — one byte, so a corrupted frame is dropped rather than acted on.

The MD200T is a **"PNT" (two-motor) controller**, so it uses the two-motor command
set rather than the single-motor one — a distinction that costs an afternoon if
you miss it, because the single-motor PIDs are also valid and simply do nothing
useful:

| PID | Name | Meaning |
|---|---|---|
| 207 | `PID_PNT_VEL_CMD` | target RPM for **both** channels in one frame (7-byte payload) |
| 210 | `PID_PNT_MAIN_DATA` | the feedback reply: RPM, encoder counts, status (18-byte payload) |
| 174 | `PID_PNT_TQ_OFF` | both motors free-wheel — *not* a brake |
| 175 | `PID_PNT_BRAKE` | electromagnetic brake engaged, motors held |
| 13 | `PID_POSI_RESET` | zero both encoder counters |
| 4 | `PID_REQ_PID_DATA` | "send me the current value of PID *n*" |

One command frame is 5 + 7 + 1 = **13 bytes**; one feedback frame is
5 + 18 + 1 = **24 bytes**. So a complete round trip on the wire is **37 bytes**.
Hold on to that number — §7 needs it.

All of this is testable without hardware. The workspace has 20 protocol tests that
encode and decode frames with nothing plugged in, which means "did I build the
frame correctly?" and "is the cable connected?" stay separate questions.

## 5. Spinning one wheel

Now the moment the bench setup was for:

```bash
./run.sh motor --rpm 60 --channel 1 --seconds 2   # MOVES A WHEEL
```

`--channel 1` / `--channel 2` spins one wheel at a time. This is how you answer
the two questions the datasheet cannot:

1. **Which output drives which side of the robot?**
2. **Which way does each one turn when commanded positive?**

There is no way to reason your way to those answers. You command a channel and you
watch.

> **Why the other channel is commanded to zero, not disabled.**
>
> A *disabled* channel is one the drive **ignores** — so it keeps running at
> whatever it was last told. On a two-channel velocity command that is a genuinely
> dangerous failure mode: you think you selected one wheel, and the other is still
> spinning from the previous test. So the unselected channel is explicitly
> commanded to 0 RPM in every frame.

## 6. The two numbers that scale everything

With wheels turning, the drive still does not know how far it has gone. Two
parameters convert between motor-space and robot-space, and they scale the
*command* and the *odometry* together:

| Parameter | Value | What it is | How it was established |
|---|---|---|---|
| `gear_ratio` | **1.0** | motor revolutions per wheel revolution | direct drive — there is no gearbox |
| `encoder_ppr` | **60** | encoder counts per motor revolution | measured on both channels: 60.1 and 59.6 |

Both were inherited from an older geared machine as 15.0 and 24.0. Both were
wrong, and one of them spectacularly so.

### The 15× incident

`gear_ratio` of 15 on a direct-drive machine **multiplied every command by
fifteen**. A commanded 0.08 m/s ran at roughly 1.2 m/s. Full stick would have been
6 m/s — on a 300 kg vehicle.

The reason this class of bug is survivable at all is that the same factor applies
to the odometry, so the robot *reports* a wrong distance rather than silently
running away with a correct-looking one. But it still makes every map and every
navigation goal wrong by that same factor.

> If you copy a configuration from another machine: **measure the gear ratio.
> Do not assume it.**

### Measuring `encoder_ppr` for free

The protocol hands you this measurement if you notice the arithmetic:
`PID_PNT_MAIN_DATA` reports **counts per second**. At **60 motor RPM the motor
turns exactly once per second.** So at 60 RPM, counts-per-second *is*
counts-per-revolution, read directly off the feedback frame.

That is the entire measurement. No jig, no protractor, no tape measure — which is
why it is worth looking for this kind of coincidence in every protocol you meet.

### The one setting with no electrical test

Alongside those live `left_channel`, `left_invert` and `right_invert`. On this
robot `right_invert` is **true** — established by commanding both channels the
same way and watching the machine pirouette on the spot instead of driving
forward.

**Odometry cannot tell you this.** The driver applies the inversion to the command
*and* to the feedback, so odometry reads identically whether the robot is
translating or spinning. So do `joint_states`, and so do the raw encoder counts,
since the drive reports each motor in its own frame.

You watch the robot, or you add an IMU. There is no third option.

## 7. Watching the link budget

37 bytes per control cycle. At 115200 baud that is about **3.2 ms** on the wire,
so a 100 Hz control loop fits comfortably.

At 19200 the same 37 bytes take about **19 ms**, and the loop cannot exceed
roughly **52 Hz** no matter how fast the controller manager ticks.

The driver computes this at startup, logs the resulting cap, and **paces its own
writes to match**. That pacing matters more than it looks: an unbounded kernel
transmit queue means every setpoint arrives later than the last, and the symptom
is not a serial error. It is sluggish, drifting steering — a *control* problem
that sends you looking in entirely the wrong place.

> If the drive is ever reset to factory defaults, expect that 52 Hz line in the
> log, and put the baud rate back to 115200 with `PID_BAUD_RATE` (135).

## 8. Failing safe

**If feedback stops for 500 ms, the driver stops the motors and reports an error**,
which deactivates the hardware interface.

The reasoning: dead-reckoning odometry off a frozen encoder is worse than a halt.
A stopped robot is a problem you can see. A robot that is confidently reporting
positions from an encoder that stopped updating is a robot that will drive into
something while insisting it is somewhere else.

## 9. It is not a node

One last piece of architecture, because it is what makes article 07 possible.

`beebot2_motor` is **not a standalone ROS node**. It is a `ros2_control` **system
component**. `diff_drive_controller` keeps ownership of `cmd_vel`, the kinematics
and the odometry; the component only does two things:

- convert wheel velocities into RS485 frames, and
- convert encoder counts back into wheel positions.

That is the whole job. Which means the same controller graph runs unchanged in
Gazebo and on the real machine, with only the plugin underneath swapping.

## Bench sign-off

Before anything gets mounted, all of these should be true:

- [ ] `--sweep` finds the drive, and you know its baud rate and node ID
- [ ] `--rpm 60 --channel 1` turns exactly one wheel
- [ ] `--rpm 60 --channel 2` turns exactly the other one
- [ ] you know which channel is the left side of the robot
- [ ] you know the sign convention for each side (`right_invert`)
- [ ] `gear_ratio` and `encoder_ppr` are **measured**, not copied
- [ ] the startup log shows the loop rate you expect, not a 52 Hz cap
- [ ] pulling the serial cable stops the motors within 500 ms

## Next

The drive system works on the bench. Now it goes onto the platform — motors,
wheels, controller mounting, wiring, and the first time the robot moves under its
own power.

**Next: Making the AMR Move for the First Time.**
