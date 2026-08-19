---
title: "Controlling an AMR from Outside ROS 2"
date: 2026-08-19
weight: 210
toc: true
tags: ["AMR", "ROS 2"]
categories: ["Robotics"]
description: "The seam between a robot and the system that dispatches it: missions, commands, status and telemetry."
draft: false
---

*Companion to video 21. 📺 Watch: **link coming with the video**.*

> **Work in progress.** This article is published as an outline and will be
> filled in when the video is made.

## Where the robot is

The robot does a job when someone sends it a goal from RViz. Nothing in a real facility runs RViz.

## What this article will cover

- Why a fleet system should not speak ROS 2 directly.
- Designing the API surface: missions, commands, status, telemetry.
- Mission state, and what happens when one is cancelled mid-run.
- Status and telemetry — what the outside world genuinely needs to know.
- Keeping the interface stable while the internals keep changing.
- The message types that form the seam.

## Next

One robot can be commanded from outside. Now put several of them in the same building.
