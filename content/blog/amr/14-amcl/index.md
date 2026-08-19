---
title: "How Does the AMR Know Where It Is?"
date: 2026-08-19
weight: 140
toc: true
tags: ["AMR", "ROS 2"]
categories: ["Robotics"]
description: "Particle-filter localisation: matching live LiDAR against a saved map to correct accumulated drift."
draft: false
---

*Companion to video 14. 📺 Watch: **link coming with the video**.*

> **Work in progress.** This article is published as an outline and will be
> filled in when the video is made.

## Where the robot is

Odometry drifts. Over a long enough run it always drifts. The map is fixed — so the robot needs to keep matching what it sees against what the map says.

## What this article will cover

- Why odometry alone cannot solve this.
- The idea behind a particle filter: many hypotheses, weighted by how well each explains the scan.
- AMCL configuration.
- Setting an initial pose, and what happens without one.
- The `map → odom → base_link` chain, and what each transform means.
- Watching the particle cloud converge.
- Measuring localisation error — stationary versus while driving. The gap between those two numbers is usually the interesting part.

## Next

The robot knows where it is. It still has no idea where it should go.
