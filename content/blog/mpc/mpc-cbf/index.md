---
title: "[MPC] Model Predictive Control with discrete-time Control Barrier Functions"
date: 2023-10-30
tags: ["MPC", "CBF"]
categories: ["Motion Planning"]
description: "Model Predictive Control with discrete-time Control Barrier Functions (MPC-CBF) for a wheeled mobile robot."
draft: false
weight: 40
math: true
---

2023-10-30

The MPC-CBF optimization problem is given by:

 $$ \begin{aligned} \min_{u_{t:t+N-1|t}} \quad & \frac{1}{2} \tilde{x}_N^T Q_x \tilde{x}_N+\sum_{k=0}^{N-1} \frac{1}{2} \tilde{x}_k^T Q_x \tilde{x}_k+\frac{1}{2} u_k^T Q_u u_k\\ \text{s.t.} \quad & x_{t+k+1|t}=x_{t+k|t}+f\left(x_{t+k|t}, u_{t+k|t}\right) \cdot T_s, \quad k=0, \ldots, N-1,\\ & x_{\min} \leq x_{t+k|t} \leq x_{\max}, \quad k=0, \ldots, N-1,\\ & u_{\min} \leq u_{t+k|t} \leq u_{\max}, \quad k=0, \ldots, N-1, \\ & x_{t|t}=x_t, \\ & \Delta h\left(x_{t+k|t}, u_{t+k|t}\right) \geq-\gamma h\left(x_{t+k|t}\right), \quad k=0, \ldots, N-1 \\ \end{aligned} $$ 

where $\tilde{x}_k=x_{des,k} - x_{k}$

## Results

### Scenario 1

![](https://raw.githubusercontent.com/phatcvo/MPC-CBF/main/images/Display/path_comparisons.png)
![](https://raw.githubusercontent.com/phatcvo/MPC-CBF/main/images/Display/path_scenario1.png)
![](https://raw.githubusercontent.com/phatcvo/MPC-CBF/main/images/Display/trajectories_animation_scenario1.gif)

### Scenario 3

![](https://raw.githubusercontent.com/phatcvo/MPC-CBF/main/images/Display/path_animation_scenario3.gif)
![](https://raw.githubusercontent.com/phatcvo/MPC-CBF/main/images/Display/cbf_scenario3.png)

### Scenario 4

![](https://raw.githubusercontent.com/phatcvo/MPC-CBF/main/images/Display/path_animation_scenario4.gif)
![](https://raw.githubusercontent.com/phatcvo/MPC-CBF/main/images/Display/cbf_scenario4.png)
![](https://raw.githubusercontent.com/phatcvo/MPC-CBF/main/images/Display/trajectories_scenario4.png)

### Scenario 5

![](https://raw.githubusercontent.com/phatcvo/MPC-CBF/main/images/Display/path_animation_scenario5.gif)
![](https://raw.githubusercontent.com/phatcvo/MPC-CBF/main/images/MPC-CBF/scen5_N20_safd03_gamma02/trajectories_animation.gif)

### Scenario 6

![](https://raw.githubusercontent.com/phatcvo/MPC-CBF/main/images/Display/path_animation_scenario6.gif)
![](https://raw.githubusercontent.com/phatcvo/MPC-CBF/main/images/Display/cbf_scenario6.png)
![](https://raw.githubusercontent.com/phatcvo/MPC-CBF/main/images/MPC-CBF/scen6_N20_safed03_gamma06/trajectories_animation.gif)

### Gazebo simulation with turtlebot3

![](https://raw.githubusercontent.com/phatcvo/MPC-CBF/main/images/Display/s1.gif)
![](https://raw.githubusercontent.com/phatcvo/MPC-CBF/main/images/Display/s2.gif)

## Installation

To use this project, install it locally via:

    git clone https://github.com/phatcvo/MPC-CBF.git

The dependencies can be installed by running:

    pip install -r requirements.txt

The controller configuration can be changed through the
[config.py](https://github.com/phatcvo/MPC-CBF/blob/main/config.py).

To execute the code, run:

    python3 main.py

## References

- [\[1\] J. Zeng, B. Zhang, and K. Sreenath, “Safety-Critical Model
  Predictive Control with Discrete-Time Control Barrier Function,” in
  2021 American Control Conference (ACC), May 2021,
  pp. 3882–3889.](https://ieeexplore.ieee.org/document/9483029)