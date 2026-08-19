---
title: "A Safety System the Robot Couldn't Escape From"
date: 2026-08-19
weight: 180
toc: true
tags: ["AMR", "ROS 2"]
categories: ["Robotics"]
description: "A real deadlock: protective stop triggers, the robot stops, and the command that would clear it is blocked by the stop itself."
draft: false
---

*Companion to video 18. 📺 Watch: **link coming with the video**.*

> **Work in progress.** This article is published as an outline and will be
> filled in when the video is made.

## Where the robot is

The safety system works. It works so well that in one situation the robot could not get out of it.

## What this article will cover

- Reaching a protective stop.
- The robot stops, correctly.
- The reverse command that should clear it does nothing.
- Tracing the deadlock through the command chain.
- The fix: fields face the direction being commanded, so reversing is guarded by the *rear* field rather than blocked by the front one.
- Distinguishing a *latched* stop (bumper, E-stop — needs an explicit reset) from a *protective* stop (drive out of it).
- Re-testing, with a measured escape.

**The failure stays in the video.** This is the article with the highest ratio of practical value to screen time.

## Next

The robot is safe and can recover. Next it learns to keep itself running.
