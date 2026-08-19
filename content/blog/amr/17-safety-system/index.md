---
title: "Building a Safety System for the AMR"
date: 2026-08-19
weight: 170
toc: true
tags: ["AMR", "ROS 2"]
categories: ["Robotics"]
description: "Warning and protective fields, speed scaling, protective stop, E-stop, and command priority."
draft: false
---

*Companion to video 17. 📺 Watch: **link coming with the video**.*

> **Work in progress.** This article is published as an outline and will be
> filled in when the video is made.

## Where the robot is

The robot navigates. Every layer so far has assumed the world cooperates. On a machine with real mass, that assumption is the dangerous one.

## What this article will cover

- Warning zone and protective zone.
- Speed reduction on a warning-field intrusion.
- Protective stop on a protective-field intrusion.
- Speed-scaled field depth: faster means the fields reach further, because stopping distance does.
- E-stop, and the restart interlock.
- Command priority: `safety > teleop > navigation`.

```text
LiDAR
 ↓
Safety Monitor
 ↓
Warning / Stop
 ↓
twist_mux
 ↓
Robot
```

**One design note:** the safety layer is deliberately *not* started without live scanners. Starting it with no scan data makes it evaluate its fields against nothing and publish "clear" — a safety layer asserting the world is empty is worse than an absent one, because everything downstream looks healthy.

## Next

The robot protects itself. In the next article it protects itself a little too well.
