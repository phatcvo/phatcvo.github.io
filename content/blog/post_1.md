---
title: "Model-Predictive Control"
date: 2022-09-23
tags: ["notes", "MPC"]
categories: ["Control theory"]
description: "The MPC controller controls vehicle speed and steering based on linearized model."
draft: false
math: true
---

## Vehicle model linearization
Vehicle model is 

$$ \dot{x} = vcos(\phi)$$
$$ \dot{y} = vsin((\phi)$$
$$ \dot{v} = a$$
$$ \dot{\phi} = \frac{vtan(\delta)}{L}$$

State and Input vector:
$$ z = [x, y, v,\phi] $$
$$u = [a, \delta]$$

x: x-position; y:y-position; v:velocity; φ: yaw angle; a: acceleration; δ: steering angle

ODE is 
$$ \dot{z} =\frac{\partial }{\partial z} z = f(z, u) = A'z+B'u$$
