---
title: "I'm Building an AMR from Zero"
date: 2026-08-19
weight: 10
toc: true
tags: ["AMR", "ROS 2"]
categories: ["Robotics"]
description: "What BEEBOT2 is, what hardware and software go into it, and what the robot will be able to do by the end of the series."
draft: false
---

*Companion to video 01. 📺 Watch: **link coming with the video**.*

This is the first article of a build log. Over the series a robot goes from an
empty workspace to a machine that drives itself around a warehouse: it learns to
move, to feel its own motion, to see, to map, to know where it is, to plan a
route, to stop before it hits something, and eventually to work alongside other
robots.

This article is the map of that journey.

## 1. What is an AMR?

An **AMR** — Autonomous Mobile Robot — is a robot that moves through an
environment on its own, deciding its own route.

The distinction people usually reach for is against an **AGV** (Automated Guided
Vehicle):

| | AGV | AMR |
|---|---|---|
| How it follows a route | fixed infrastructure — magnetic tape, buried wire, reflectors | a map plus onboard sensing |
| Blocked path | stops and waits | plans around it |
| Changing the route | re-lay the tape | edit the map |
| What it needs from the building | a lot | almost nothing |

That difference is not really about wheels or motors. It is about *what the robot
knows*. An AGV knows one line. An AMR knows a map, its own position on that map,
and what is currently in front of it. Everything in this series is about building
up that knowledge, one sensor and one algorithm at a time.

## 2. Meet BEEBOT2

The robot in this series is **BEEBOT2**, a differential-drive indoor AMR: two
driven wheels on a common axis, plus casters for balance. Steering is done by
driving the two wheels at different speeds — no steering rack, no servo.

The workspace also carries a second, much larger platform called **AMR**, a
300 kg warehouse vehicle whose geometry was measured from a 2018 machine. Both
robots share the same code; the same launch files bring up either one. That is
deliberate — it is the cheapest possible proof that nothing in the stack is
secretly hard-coded to one chassis.

| | BEEBOT2 | AMR |
|---|---|---|
| Envelope | 0.50 × 0.53 m | 1.14 × 0.94 m |
| Chassis | 0.43 × 0.43 × 0.40 m | 1.00 × 0.80 × 0.38 m |
| Mass | 40 kg | 300 kg |
| Wheels | ⌀0.13 m, track 0.48 m | ⌀0.22 m, track 0.663 m |
| Scanners | 360° roof + 180° front safety | 2 × 270° corner, merged to 360° |
| Swept diameter | 0.729 m | 1.477 m |
| Lift | no | yes |

> **Note — BEEBOT2 is wider than it is long.**
>
> The drive wheels sit *outboard* of the 0.43 m shell and reach ±0.265 m in y,
> while the caster spheres only reach ±0.25 m in x. This is easy to get backwards,
> and getting it backwards means the navigation footprint is wrong in the one
> direction that matters when squeezing through a doorway. The footprint follows
> the envelope, not the chassis.

## 3. The hardware

### Drive

Two BLDC gear motors, driven by a single **MDROBOT MD200T** two-channel
controller (DC 12–48 V, 10 A per channel). Both wheels hang off one **RS485**
bus. Article 02 is entirely about getting this link alive.

### Power

A lithium pack with a **DALY BMS**. The BMS speaks a serial protocol that gives
pack voltage, current and state of charge — which becomes a
`sensor_msgs/BatteryState` topic, so the rest of the stack can ask "how much
runtime is left?" without knowing anything about batteries. Article 10.

### Sensing

| Sensor | What it gives the robot |
|---|---|
| LiDAR | distance to everything around it, ~15 times a second |
| IMU | acceleration and rotation rate — how it is *actually* moving |
| Wheel encoders | how far each wheel turned |
| RGBD camera | colour + depth, for higher-level perception later |
| Bumper | physical contact, the last line of defence |

### Compute

A single PC running Linux and ROS 2. Everything in the series runs in Docker, so
the development machine and the robot run the same image and the "it works on my
laptop" class of bug simply cannot happen.

## 4. The software

**ROS 2 Jazzy** on the robot, **Gazebo Harmonic** for simulation. The pieces:

| Layer | What it does |
|---|---|
| `ros2_control` | the seam between "wheel velocity" and "bytes on a wire" |
| `diff_drive_controller` | turns a velocity command into left/right wheel speeds, and encoder counts back into odometry |
| `robot_localization` (EKF) | fuses wheel odometry with the IMU into one better estimate |
| `slam_toolbox` | builds a map from LiDAR while the robot drives |
| **AMCL** | finds the robot's position on a map it already has |
| **Nav2** | plans a path to a goal and follows it |
| `twist_mux` | decides whose velocity command wins when several are talking at once |

Split across packages, that is:

| Package | Contents |
|---|---|
| `beebot2_description` | URDF/xacro, meshes, geometry regression tests |
| `beebot2_motor` | MD200T drive over RS485, plus a bring-up probe tool |
| `beebot2_control` | teleop (keyboard and gamepad), command relay |
| `beebot2_bringup` | launch files, controller config, EKF config |
| `beebot2_gazebo` | the simulated warehouse |
| `beebot2_perception` | merges two 270° LiDARs into one 360° scan |
| `beebot2_slam` | mapping, localisation, map scoring tools |
| `beebot2_navigation` | Nav2 parameters — planner, controller, costmaps |
| `beebot2_safety` | protective and warning fields, E-stop, command priority |
| `beebot2_bms` | battery telemetry |
| `beebot2_interfaces` | the message types a fleet system would attach to |

## 5. Simulation is not a side project

The most important architectural decision in this build is this one:

> The simulation is not a separate project. It is a **digital copy of the same
> robot**, running the same ROS 2 graph.

Concretely: `sim.launch.py` and `robot.launch.py` are deliberate mirrors of each
other. Same controller configuration, same `diff_drive_controller`, same EKF,
same command relay. **Only the hardware component underneath swaps** — Gazebo's
on one side, the MD200T RS485 driver on the other.

```text
                    /cmd_vel
                        │
                    twist_mux
                        │
              diff_drive_controller
                        │
              ┌─────────┴─────────┐
              │                   │
      gz_ros2_control        beebot2_motor
              │                   │
          Gazebo              RS485 → MD200T
                                  │
                            Motor L / Motor R
```

The payoff is that anything which behaves differently between simulation and the
real machine is a *real difference in the robot* — not an artefact of two launch
files that drifted apart. That turns simulation from a demo into a debugging
tool.

## 6. Where the project actually stands

Being honest about this is more useful than a highlight reel.

**In simulation** the robot drives, maps, localises and plans. Odometry over a
4 m line comes back as 3.926 m. EKF heading error is 0.72° against 6.52° raw.
The warehouse world loads in 7 seconds at 0.9× real time.

**On the real robot, only the drive works.** The RS485 link is confirmed, both
wheels turn, and the rotation direction is established. There is no LiDAR driver,
no IMU driver and no camera driver in the workspace yet — so everything
downstream of them (safety fields, SLAM, localisation, Nav2) is simulation-only
for now.

And navigation, even in simulation, reaches **7 of 16 benchmark goals** against a
>95 % target. That is not a success. It is a known blocker, and article 16 is
about exactly that.

> **This is on purpose.**
>
> A build log that only shows the parts that worked teaches nothing. Where a real
> failure happens in this series, it stays in — including the debugging.

## 7. The road ahead

| # | The robot learns to… | Article |
|---|---|---|
| 2 | turn its wheels from a PC | Bench-testing the drive system |
| 3 | move for the first time | Drive system on the platform |
| 4 | take commands from a human | Gamepad teleop |
| 5 | describe its own body | URDF |
| 6 | exist in simulation | Gazebo |
| 7 | be one robot in two worlds | A single interface |
| 8 | feel its own motion | IMU |
| 9 | see | LiDAR |
| 10 | know its own power state | Battery / BMS |
| 11 | build a map | SLAM |
| 12 | judge whether the map is good | Map evaluation |
| 13 | know how it moved | Odometry + EKF |
| 14 | know where it is | AMCL |
| 15 | go somewhere | Nav2 planning |
| 16 | fail, and be debugged | Navigation failures |
| 17 | stop before it hits something | Safety system |
| 18 | escape its own safety system | Safety failure |
| 19 | charge itself | Docking |
| 20 | do a job | Payload, HMI, diagnostics |
| 21 | be commanded from outside ROS | Robot API |
| 22 | share a warehouse | Multi-robot |

## Next

The robot cannot do anything yet — it cannot even turn a wheel. Before bolting
anything to a chassis, the drive system gets tested on a bench, one layer at a
time.

**Next: [Testing the Drive System on the Bench](../02-drive-bench-test/).**
