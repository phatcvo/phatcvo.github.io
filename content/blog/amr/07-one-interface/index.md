---
title: "One ROS 2 Interface for the Real Robot and Simulation"
date: 2026-08-19
weight: 70
toc: true
tags: ["AMR", "ROS 2"]
categories: ["Robotics"]
description: "Same commands, same controllers, same odometry — only the hardware layer swaps."
draft: false
---

*Companion to video 07. 📺 Watch: **link coming with the video**.*

> **Work in progress.** This article is published as an outline and will be
> filled in when the video is made.

## Where the robot is

There is a real robot and a simulated robot. Keeping them in step by hand is a losing game: two launch files drift apart, and then simulation stops predicting anything.

## What this article will cover

- The same `/cmd_vel` on both sides.
- The same controller configuration and the same `diff_drive_controller`.
- `ros2_control` hardware components: `gz_ros2_control` on one side, the MD200T RS485 driver on the other.
- `sim.launch.py` and `robot.launch.py` as deliberate mirrors.
- Running the identical command sequence in Gazebo and on the robot, and comparing the odometry.

**The payoff:** anything that behaves differently between the two is a real difference in the robot — not an artefact of two configurations drifting apart.

## Next

One robot, two worlds. Now it starts growing senses.
