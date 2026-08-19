---
title: "It Can Navigate — But Why Does It Still Fail?"
date: 2026-08-19
weight: 160
toc: true
tags: ["AMR", "ROS 2"]
categories: ["Robotics"]
description: "Benchmarking many goals, and tracing failures back through localisation, map, footprint and controller."
draft: false
---

*Companion to video 16. 📺 Watch: **link coming with the video**.*

> **Work in progress.** This article is published as an outline and will be
> filled in when the video is made.

## Where the robot is

The robot drove to a goal on camera. On a benchmark of 16 goals it currently reaches 7, against a target of over 95 %.

## What this article will cover

- Building a repeatable benchmark instead of demoing one lucky run.
- Which goals fail, and whether they fail consistently.
- Ruling out the controller: cross-track error on failing goals versus passing ones.
- Localisation under motion — settled error of 0.02–0.09 m against 0.17 m mean and 0.55 m peak while driving.
- Aisle clearance arithmetic: how much slack the costmap actually leaves.
- Map quality feeding straight back into navigation success.
- Footprint and inflation.
- Changing one thing at a time and measuring.

> A robot that drove once does not mean the system is good.

## Next

Navigation is being made reliable. But nothing so far stops the robot from hitting anything.
