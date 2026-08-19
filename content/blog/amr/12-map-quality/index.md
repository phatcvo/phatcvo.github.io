---
title: "The Map Looks Good — But Is It Actually Good?"
date: 2026-08-19
weight: 120
toc: true
tags: ["AMR", "ROS 2"]
categories: ["Robotics"]
description: "Measuring a SLAM map instead of eyeballing it: coverage, accuracy, and when it is good enough for navigation."
draft: false
---

*Companion to video 12. 📺 Watch: **link coming with the video**.*

> **Work in progress.** This article is published as an outline and will be
> filled in when the video is made.

## Where the robot is

The robot produced a map, and it looks right. "Looks right" is not a measurement, and navigation will inherit every error in it.

## What this article will cover

- What can be wrong with a map that still looks fine.
- Coverage: how much of the building actually got surveyed.
- Accuracy against ground truth — possible in simulation, harder in reality.
- Systematic scale error, and how it traces back to odometry parameters.
- Speckle and stray obstacles, and cleaning them.
- Scoring a map automatically instead of by eye.
- **When is a map good enough to navigate on?**

## Next

A trusted map exists. The robot still has to work out where it is on it — starting with a better answer to how it moved.
