---
title: "Teaching the AMR to Build Its Own Map"
date: 2026-08-19
weight: 110
toc: true
tags: ["AMR", "ROS 2"]
categories: ["Robotics"]
description: "LiDAR plus odometry plus TF, through slam_toolbox, into an occupancy grid."
draft: false
---

*Companion to video 11. 📺 Watch: **link coming with the video**.*

> **Work in progress.** This article is published as an outline and will be
> filled in when the video is made.

## Where the robot is

The robot can see what is around it right now, and it can estimate how it has moved. Put those together over time and you get something it has never had: memory of a place.

## What this article will cover

- What SLAM is solving, and why mapping and localisation are the same problem.
- The three inputs: LiDAR, odometry, and a correct TF tree.
- `slam_toolbox` configuration.
- Driving the robot around to build coverage.
- The occupancy grid: free, occupied, unknown.
- Loop closure, and what it looks like when it fires.
- Saving the map.

## Next

There is a map. Whether it is a *good* map is a separate question, and the next article is about refusing to skip it.
