---
title: "Giving the AMR Eyes with LiDAR"
date: 2026-08-19
weight: 90
toc: true
tags: ["AMR", "ROS 2"]
categories: ["Robotics"]
description: "How a 2D scanner works, what a LaserScan contains, and getting the first obstacle to appear in RViz."
draft: false
---

*Companion to video 09. 📺 Watch: **link coming with the video**.*

> **Work in progress.** This article is published as an outline and will be
> filled in when the video is made.

## Where the robot is

The robot knows how it is moving. It knows nothing whatsoever about what is around it.

## What this article will cover

- How a 2D LiDAR works: time of flight, a spinning mirror, one scan per revolution.
- `sensor_msgs/LaserScan`: ranges, angles, min/max, and what `inf` means.
- The scanner's frame, and why its position in the URDF has to be right.
- Mounting height, blind zones, and what the robot cannot see.
- Visualising a live scan in RViz.
- Walking in front of the robot and watching the obstacle appear.
- Merging two 270° corner scanners into one 360° scan (on the larger platform).

## Next

The robot can see its surroundings — but it forgets them the instant they leave the scan. Next it learns to remember.
