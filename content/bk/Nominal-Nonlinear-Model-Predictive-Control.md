---
title: "[MPC] Nominal Nonlinear Model Predictive Control"
date: 2023-05-20
tags: ["MPC"]
categories: ["Motion Planning"]
description: "Nominal Nonlinear Model Predictive Control"
draft: false
---
Nonlinear model predictive control (NMPC) is a popular control method for multivariable control problems with important process constraints. The dynamic equation system is assumed to be given by differential algebraic equations (DAE). The code is mostly meant to be used as a way to verify the performance of more novel algorithms against an implementation more likely to be found in industry. It has the following features: 

* Cheap NMPC implementation for both receding and shrinking time horizons
* Parameter and state estimation using the UKF
* Efficient solution of nonlinear dynamic optimization formulation using automatic differentiation
* Always feasible due to soft-constraints

![](https://www.researchgate.net/profile/Eric-Bradford/publication/332637986/figure/fig12/AS:812403809845250@1570703570114/Temperature-trajectories-of-100-MC-simulation-for-nominal-NMPC.jpg)

## Example
This is a basic nonlinear model predictive control (NMPC) implementation in Python with soft constraints, which uses an Unscented Kalman filter for state estimation. The NMPC algorithm does not consider possible uncertainties and is therefore referred to as *nominal*. For more information on the required modules and packages refer to section [Technical requirements](#Tr) [[1]](#1)[[2]](#2). [Simulation](https://github.com/phatcvo/Nominal-Nonlinear-Model-Predictive-Control/blob/main/Simulation.py) should run the pre-defined problem. Once this works the problem definition can be edited in [Problem_definition](https://github.com/phatcvo/Nominal-Nonlinear-Model-Predictive-Control/blob/main/Problem_defination.py) to define your own problem.


## References
The code was written using [CasADi](https://web.casadi.org/) in Python 3.9 and hence requires [CasADi](https://web.casadi.org/) with all its sub-dependencies. Simply download a Python distribution and install CasADi following the [instructions](https://github.com/casadi/casadi/wiki/InstallationInstructions). In addition, it uses the Unscented Kalman filter implementation from [filterpy](https://filterpy.readthedocs.io/en/latest/). 

[1] [Output feedback stochastic nonlinear model predictive control for batch processes](https://www.sciencedirect.com/science/article/pii/S0098135419300286). 
<a name="1">
</a>

[2] [Economic stochastic model predictive control using the unscented Kalman filter](https://www.sciencedirect.com/science/article/pii/S2405896318320196). 
<a name="2">
</a>

