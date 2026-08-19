---
title: "When Multiple AMRs Share One Warehouse"
date: 2026-08-19
weight: 220
toc: true
tags: ["AMR", "ROS 2"]
categories: ["Robotics"]
description: "Namespaces, a shared map, traffic, deadlock, and mission management across a fleet."
draft: false
---

*Companion to video 22. 📺 Watch: **link coming with the video**.*

> **Work in progress.** This article is published as an outline and will be
> filled in when the video is made.

## Where the robot is

Everything so far assumed one robot in an empty building. Add a second robot and several assumptions quietly stop holding.

## What this article will cover

- Namespacing a ROS 2 graph so two robots do not fight over topic names.
- Spawning multiple robots into one simulation.
- A shared map, and where each robot's localisation stays private.
- Traffic management: robots as obstacles that plan back.
- Deadlock in a narrow aisle, and resolving it.
- Collision avoidance between robots.
- Mission management: who gets which task, and why.

## Next

That is the series. The robot went from nothing to a fleet member — and every step of the way, the tools showed up only when the robot needed them.
