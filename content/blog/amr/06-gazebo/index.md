---
title: "Turning the AMR into a Digital Robot"
date: 2026-08-19
weight: 60
toc: true
tags: ["AMR", "ROS 2"]
categories: ["Robotics"]
description: "Putting the URDF into Gazebo with differential drive and controllers, so the robot can be tested without leaving the desk."
draft: false
---

*Companion to video 06. 📺 Watch: **link coming with the video**.*

> **Work in progress.** This article is published as an outline and will be
> filled in when the video is made.

## Where the robot is

The real robot drives and has a description. But every hardware test costs setup time and carries risk, and some tests are not safe to run at all.

## What this article will cover

- Loading the URDF into Gazebo Harmonic.
- Inertias and masses — the part that decides whether the simulation is believable.
- `gz_ros2_control` and the differential drive controller.
- Basic sensors in simulation.
- `/cmd_vel` in, `/odom` out.
- The bridge between Gazebo topics and ROS 2 topics.

**The idea that matters:** the simulation is not a separate project. It is a digital copy of *this* robot.

## Next

There are now two robots. Next they become one.
