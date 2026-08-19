---
title: "Building the AMR in URDF"
date: 2026-08-19
weight: 50
toc: true
tags: ["AMR", "ROS 2"]
categories: ["Robotics"]
description: "Describing the robot's body to ROS 2 — links, joints, frames, and one source of truth for every dimension."
draft: false
---

*Companion to video 05. 📺 Watch: **link coming with the video**.*

> **Work in progress.** This article is published as an outline and will be
> filled in when the video is made.

## Where the robot is

The robot moves, but ROS 2 has no idea what shape it is. Nothing downstream — TF, sensors, footprints, navigation — can work without that.

## What this article will cover

- Links and joints: chassis, wheels, casters.
- Frames, and why `base_link` and `base_footprint` are not the same thing.
- Measuring real dimensions and getting them into the model.
- xacro: macros and parameters instead of copy-paste.
- The TF tree, and reading it in RViz.
- `robot_state_publisher` and the robot description.

**One rule:** every dimension lives in exactly one file. A 2018 predecessor of this robot declared a wheel separation of 0.64 m while its joints sat 0.663 m apart — a 3.6 % odometry error that survived for years. That bug class is unrepresentable when there is only one number.

## Next

The robot has a body in ROS 2. Next it gets a world to put that body in.
