---
title: "[MPC] Trajectory tracking with a quadrotor by LMPC"
date: 2023-11-01
tags: ["MPC"]
categories: ["Motion Tracking"]
description: "Trajectory tracking with a quadrotor by LMPC."
draft: false
weight: 50
math: true
---

2023-11-01

The non-linear dynamics are linearized about a linearization trajectory
$\bar{x}, \bar{u}$ while the quadrotor aims to track a different
reference trajectory $x_{ref}, u_{ref}$.

![](https://raw.githubusercontent.com/phatcvo/Quadrotor-MPC/main/images/drone_image.png)

The MPC controller solves the following optimization problem :

 $$ \begin{aligned} \min_{x_{1:N},u_{1:N-1}} \quad & \sum_{i=1}^{N-1} \bigg[ (x_i - x_{i,ref})^TQ(x_i - x_{i,ref}) + (u_i - u_{i,ref})^TR(u_i - u_{i,ref}) \bigg] + \frac{1}{2} (x_N - x_{N,ref})^TQ_f(x_N - x_{N,ref}) \\ \text{s.t.} \quad & x_1 = x_{\text{IC}} \\ & x_{i+1} = f(\bar{x}_i, \bar{u}_i) + \bigg[\frac{\partial f}{\partial x} \bigg|_{\bar{x}_i, \bar{u}_i} \bigg](x_i - \bar{x}_i) + \bigg[\frac{\partial f}{\partial u} \bigg|_{\bar{x}_i, \bar{u}_i} \bigg](u_i - \bar{u}_i) \quad \text{for } i = 1,2,\ldots,N-1 \\ & u_{\min} \leq u_i \leq u_{\max} \quad \text{for } i = 1,2,\ldots,N-1 \\ \end{aligned} $$ 

![](https://raw.githubusercontent.com/phatcvo/Quadrotor-MPC/main/images/drone.gif)
![](https://raw.githubusercontent.com/phatcvo/Quadrotor-MPC/main/images/state_trajectories_pos.png)
![](https://raw.githubusercontent.com/phatcvo/Quadrotor-MPC/main/images/state_trajectories_vel.png)
Installation ————

To use this project, install it locally via:

    git clone https://github.com/phatcvo/Quadrotor-MPC.git

The dependencies can be installed by running:

    pip install -r requirements.txt

To execute the code, run:

    python3 main.py