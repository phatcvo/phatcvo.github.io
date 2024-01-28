---
title: "[MPC] Trajectory tracking with a quadrotor by LMPC"
date: 2023-11-01
tags: ["MPC"]
categories: ["Motion Tracking"]
description: "Trajectory tracking with a quadrotor by LMPC."
draft: false
math: true
---

The non-linear dynamics are linearized about a linearization trajectory $\bar{x}, \bar{u}$ while the quadrotor aims to track a different reference trajectory 
$x_{ref}, u_{ref}$.

![](https://raw.githubusercontent.com/phatcvo/Quadrotor-MPC/main/images/drone_image.png)

The MPC controller solves the following optimization problem :


$$\\begin{aligned} 
\\min\_{x_{1:N},u_{1:N-1}} \\quad & \\sum\_{i=1}^{N-1} \\bigg[ (x\_i - x\_{i,ref})^TQ(x\_i - x\_{i,ref}) + (u\_i - u\_{i,ref})^TR(u\_i - u\_{i,ref}) \\bigg] + \\frac{1}{2} (x\_N - x\_{N,ref})^TQ\_f(x\_N - x\_{N,ref}) \\\\
\\textrm{s.t.} \\quad 
 & x\_1 = x\_{\\text{IC}} \\\\ 
 & x\_{k+1} = f(\\bar{x}\_k, \\bar{u}\_k) + \\bigg[\\frac{\\partial f}{\\partial x} \\bigg|\_{\\bar{x}\_k, \\bar{u}\_k}  \\bigg](x\_k - \\bar{x}\_k) + \\bigg[\\frac{\\partial f}{\\partial u} \\bigg|_{\\bar{x}_k, \\bar{u}_k}  \\bigg](u_k - \\bar{u}_k)   \\quad \\text{for } i = 1,2,\\ldots,N-1 \\\\ 
 & u\_{min} \\leq u\_i \\leq u\_{max} \\quad ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \\text{for } i = 1,2,\\ldots,N-1 \\\\ 
 \\end{aligned}$$


![](https://raw.githubusercontent.com/phatcvo/Quadrotor-MPC/main/images/drone.gif)
![](https://raw.githubusercontent.com/phatcvo/Quadrotor-MPC/main/images/state_trajectories_pos.png)
![](https://raw.githubusercontent.com/phatcvo/Quadrotor-MPC/main/images/state_trajectories_vel.png)
Installation
------------

To use this project, install it locally via:
```
git clone https://github.com/phatcvo/Quadrotor-MPC.git
```

The dependencies can be installed by running:
```
pip install -r requirements.txt
```

To execute the code, run:
```
python3 main.py
```
