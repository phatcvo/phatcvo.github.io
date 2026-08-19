---
title: "Teaching the AMR to Go to a Target"
date: 2026-08-19
weight: 150
toc: true
tags: ["AMR", "ROS 2"]
categories: ["Robotics"]
description: "Nav2: goal in, path planned, path followed, obstacles avoided, /cmd_vel out."
draft: false
---

*Companion to video 15. 📺 Watch: **link coming with the video**.*

> **Work in progress.** This article is published as an outline and will be
> filled in when the video is made.

## Where the robot is

The robot has a map and knows its position on it. Everything is in place except a reason to move.

## What this article will cover

- Sending a goal pose.
- The global planner: a route through the map.
- The local controller: turning that route into velocity commands.
- Costmaps, global and local.
- The footprint, inflation, and why they come from the URDF rather than a guess.
- Dynamic obstacle avoidance.
- Behaviour trees and recovery behaviours.

```text
START
  ↓
  ↓
  ↓
GOAL
```

## Next

The robot reached a goal. Reaching one goal once is not a working navigation system, and the next article is about proving that.
