---
title: "Giving the AMR a Sense of Motion"
date: 2026-08-19
weight: 80
toc: true
tags: ["AMR", "ROS 2"]
categories: ["Robotics"]
description: "What an IMU measures, how it reaches ROS 2, and why wheel odometry alone is not enough."
draft: false
---

*Companion to video 08. 📺 Watch: **link coming with the video**.*

> **Work in progress.** This article is published as an outline and will be
> filled in when the video is made.

## Where the robot is

The robot knows how far its wheels turned. That is not the same as knowing how far it went — wheels slip, and a slipping wheel lies confidently.

## What this article will cover

- What an IMU is: accelerometer, gyroscope, and what each one is good for.
- Mounting and orientation — the frame convention that everything downstream assumes.
- The ROS 2 driver and `sensor_msgs/Imu`.
- Visualising orientation and angular velocity.
- Cross-checking: spin the robot 360° and compare the IMU against the wheels.
- Drift, bias, and why an IMU alone is not a heading source either.

## Next

The robot can feel itself move. Next it learns to see the world outside itself.
