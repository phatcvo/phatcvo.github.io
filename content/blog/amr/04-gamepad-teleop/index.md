---
title: "Driving the AMR with a Logitech F710"
date: 2026-08-19
weight: 40
toc: true
tags: ["AMR", "ROS 2"]
categories: ["Robotics"]
description: "Joystick control through ROS 2 joy and twist_mux — and the three safety rules that come from the pad being wireless."
draft: false
---

*Companion to video 04. 📺 Watch: **link coming with the video**.*

> **Work in progress.** This article is published as an outline and will be
> filled in when the video is made.

## Where the robot is

The robot drives when commanded, but every command has to be typed. That is fine for a bench and useless for a floor.

## What this article will cover

- The Logitech F710/F720, and the X/D input-mode switch on the back.
- The ROS 2 `joy` node, and what `/joy` actually contains.
- Mapping stick axes to `/cmd_vel`.
- `twist_mux`: what happens when the planner and a human both want to drive.
- **Hold-to-enable.** Nothing moves unless a button is held.
- **Stale input is a stop.** No `/joy` for 0.5 s and the command goes to zero — a pad that sleeps, runs flat, or leaves range must not leave a command running.
- **Re-arm after any stop.** Clearing an E-stop with the stick still pushed does not resume motion.
- Deadzone, and why the remaining travel gets rescaled.
- The MODE button trap: it swaps the left stick with the D-pad, and nothing about the failure looks broken.

## Next

The real robot drives. But every test costs setup time and carries risk — so next the robot gets a digital twin, starting with a description of its own body.
