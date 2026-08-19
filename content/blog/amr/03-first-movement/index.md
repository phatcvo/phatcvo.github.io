---
title: "Making the AMR Move for the First Time"
date: 2026-08-19
weight: 30
toc: true
tags: ["AMR", "ROS 2"]
categories: ["Robotics"]
description: "Motors, wheels and controller onto the platform — wiring, power checks and the first movement under ROS 2 control."
draft: false
---

*Companion to video 03. 📺 Watch: **link coming with the video**.*

> **Work in progress.** This article is published as an outline and will be
> filled in when the video is made.

## Where the robot is

The drive electronics answer on the bench and both channels turn a wheel. Nothing is mounted yet, and the robot has never carried its own weight.

## What this article will cover

- Mounting the motors into the platform, and the wheels onto the motors.
- Fixing the motor controller to the frame — where it goes and why.
- Wiring: power, RS485, and keeping the two apart.
- Power-up checks before anything is commanded.
- Confirming rotation direction now that there is a chassis to define "forward".
- Running the ROS 2 stack against the real drive.
- Driving forward, backward, rotate left, rotate right.

**The moment:** first movement.

## Next

The robot moves, but only from typed commands. Next it learns to take orders from a human hand.
