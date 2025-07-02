---
title: "[MPC] Learning Model Predictive Control for autonomous racing"
date: 2023-11-03
tags: ["racing", "MPC"]
categories: ["Motion Planning"]
description: "Learning Model Predictive Control for autonomous racing."
draft: false
math: true
---


The Learning Model Predictive Control is a data-driven control framework developed at UCB in the MPC lab. In this example, we implemented the LMPC for the autonomous racing problem. The controller drives several laps on race track and it learns from experience how to drive faster.


![](https://raw.githubusercontent.com/phatcvo/Learning-MPC-for-racing/main/src/ClosedLoop.gif)
![](https://raw.githubusercontent.com/phatcvo/Learning-MPC-for-racing/main/src/ClosedLoopStates.gif)
![](https://raw.githubusercontent.com/phatcvo/Learning-MPC-for-racing/main/src/ClosedLoop_multiLap.gif)

In the above animation we see the vehicle's closed-loop trajectory (in black) for laps 5, 30, 31 and 32. At each time instant the LMPC leverages forecast to plan the vehicle trajectory (in red) few seconds into the future. This trajectory is planned to minimize the lap time, but it is constrained to land into the safe set (in green). This safe set is the domain of the approximation to the value function and it is updated after each lap using historical data.

## Description

### The Plant
The vehicle is modelled using the dynamics signle track bicycle model and the tire forces are modelled using the Pacejka formula.

### The Path Following
1) Lap 1: a PID path following controller is used to drive the vehicle around the track.
2) Lap 2: the data from lap 1 are used to estimate a LTI model used to design a MPC for path following
3) Lap 3: the data from lap 1 are used to estimate a LTV model used to design a MPC for path following

Installation
------------

To use this project, install it locally via:
```
git clone https://github.com/phatcvo/Learning-MPC-for-racing.git
```

The dependencies can be installed by running:
```
pip install cvxopt
pip install osqp
pip install pathos
```

To execute the code, run:
```
python3 main.py
```

## References
[1][Learning Model Predictive Control for Iterative Tasks. A Data-Driven Control Framework](https://ieeexplore.ieee.org/document/8039204/)

[2][Learning how to autonomously race a car: a predictive control approach](https://ieeexplore.ieee.org/abstract/document/8896988)

[3] [Learning Model Predictive Control for Iterative Tasks: A Computationally Efficient Approach for Linear System](https://arxiv.org/pdf/1702.07064.pdf)
