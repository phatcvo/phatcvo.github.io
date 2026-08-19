---
title: "Turning the AMR into a Real Service Robot"
date: 2026-08-19
weight: 200
toc: true
tags: ["AMR", "ROS 2"]
categories: ["Robotics"]
description: "Payload handling, a lift, a signal tower, an operator interface, and diagnostics."
draft: false
---

*Companion to video 20. 📺 Watch: **link coming with the video**.*

> **Work in progress.** This article is published as an outline and will be
> filled in when the video is made.

## Where the robot is

The robot drives, navigates, protects itself and charges. It does not yet do anything useful for anyone.

## What this article will cover

- Payload: carrying something, and what that does to the dynamics.
- The prismatic lift — mechanism, controller, and a hardware component that has to exist before the controller manager will start at all.
- Signal tower: making robot state visible from across a room.
- HMI for an operator who is not going to open a terminal.
- Robot status reporting.
- Fault handling and diagnostics: what the robot says when something is wrong.

## Next

One robot does a job. The last two articles are about robots that are not alone.
