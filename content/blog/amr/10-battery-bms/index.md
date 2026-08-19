---
title: "Reading the AMR's Battery with ROS 2"
date: 2026-08-19
weight: 100
toc: true
tags: ["AMR", "ROS 2"]
categories: ["Robotics"]
description: "Talking to a DALY BMS over serial and publishing pack telemetry as sensor_msgs/BatteryState."
draft: false
---

*Companion to video 10. 📺 Watch: **link coming with the video**.*

> **Work in progress.** This article is published as an outline and will be
> filled in when the video is made.

## Where the robot is

The robot drives, feels and sees. It has no idea how much longer it can do any of it.

## What this article will cover

- The battery pack and what a BMS is for.
- The DALY serial protocol, and testing it before meeting a live pack.
- Reading voltage, current, and state of charge.
- Publishing `sensor_msgs/BatteryState`, so nothing downstream needs to know about batteries.
- Displaying pack state.
- **Reporting honestly when the link is down**: `NaN` and `present: false` rather than a stale last-known value. A confident wrong number is worse than no number.

## Next

The robot knows its own power state. Now it has everything it needs to build a map.
