---
title: "Teaching the AMR to Find Its Charging Station"
date: 2026-08-19
weight: 190
toc: true
tags: ["AMR", "ROS 2"]
categories: ["Robotics"]
description: "Battery state triggers a return, dock detection aligns the approach, and charging closes the loop."
draft: false
---

*Companion to video 19. 📺 Watch: **link coming with the video**.*

> **Work in progress.** This article is published as an outline and will be
> filled in when the video is made.

## Where the robot is

The robot navigates and protects itself. It still stops dead when the battery runs out, and someone has to go and plug it in.

## What this article will cover

- Using battery state to decide when to return.
- Dock detection: finding the station, not just its rough position.
- The precision approach — navigation tolerance is far looser than a charging contact needs.
- Making contact and confirming charge.
- Undocking.
- Recovery when the approach fails, because it will.

## Next

The robot can keep itself running. Now it needs a reason to exist — a job.
