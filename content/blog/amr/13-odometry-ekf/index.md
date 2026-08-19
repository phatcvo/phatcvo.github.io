---
title: "How Does the AMR Know How It Moved?"
date: 2026-08-19
weight: 130
toc: true
tags: ["AMR", "ROS 2"]
categories: ["Robotics"]
description: "Wheel odometry, its failure modes, and fusing it with the IMU through an EKF."
draft: false
---

*Companion to video 13. 📺 Watch: **link coming with the video**.*

> **Work in progress.** This article is published as an outline and will be
> filled in when the video is made.

## Where the robot is

The robot has wheel odometry and an IMU. Both are wrong in different ways, and neither one alone is good enough to navigate on.

## What this article will cover

- Encoder counts to wheel rotation to robot motion.
- Differential-drive kinematics.
- Where wheel odometry fails: slip, uneven floors, and heading drift that never recovers.
- Where the IMU fails: bias and integration drift.
- Sensor fusion with an EKF (`robot_localization`).
- The `odom → base_link` transform, and who is allowed to publish it.
- Measuring the improvement rather than assuming it — in simulation, heading error of 0.72° fused against 6.52° raw.

## Next

Odometry is good, but it still drifts without bound. Next the robot anchors itself to the map.
