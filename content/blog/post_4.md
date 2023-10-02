---
title: "MPC-based tracking control for quadrotor"
date: 2022-05-18
tags: ["ROS", "tracking", "Optimal"]
categories: ["Control theory"]
description: "MPC-based tracking control for quadrotor"
draft: false
---
# The MPC tracking for quadrotor

The controller for quadrotor tracking are include 3 subcontrollers. They are Altititude controller , Position controller and Attitude controller. The detail of them are shown in the Figure below.

![MPC quad](https://github.com/phatcvo/phatcvo.github.io/blob/main/content/blog/post_4/images/quad_controller.png)

The MPC solver is using [CasADi](https://web.casadi.org/).
## The tracking of each controller
Implement 3 MPC controller without relation

### The altitude tracking
![altitude](https://github.com/phatcvo/phatcvo.github.io/blob/main/content/blog/post_4/images/attitude_tracking.png)

### The position tracking
![position](https://github.com/phatcvo/phatcvo.github.io/blob/main/content/blog/post_4/images/position_tracking.png)

## The quadrotor tracking
![tracking](https://github.com/phatcvo/phatcvo.github.io/blob/main/content/blog/post_4/images/quad_mpc_tracking.png)
![control](https://github.com/phatcvo/phatcvo.github.io/blob/main/content/blog/post_4/images/quad_mpc_control.png)

## Todo

* Implement LNMPC controller for stable behavior