---
title: "[MPC] Linear Model Predictive Control"
date: 2022-09-23
tags: ["Model", "MPC"]
categories: ["Motion Planning"]
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

$$ z = \begin{bmatrix}
x-position \\\\\\
y-position \\\\\\
velocity \\\\\\
yaw-angle\end{bmatrix} = \begin{bmatrix}
x \\\\\\
y \\\\\\
v \\\\\\
\phi\end{bmatrix} $$

$$u = \begin{bmatrix}
acceleration \\\\ 
steering-angle
\end{bmatrix} 
= \begin{bmatrix}
a \\\\ 
\delta
\end{bmatrix} $$

ODE is 

$$ \dot{z} =\frac{\partial }{\partial z} z = f(z, u) = A'z+B'u$$

where

$$ A' =
\begin{bmatrix}
\frac{\partial }{\partial x}v\cos(\phi) & 
\frac{\partial }{\partial y}v\cos(\phi) & 
\frac{\partial }{\partial v}v\cos(\phi) &
\frac{\partial }{\partial \phi}v\cos(\phi) \\\\\\
\frac{\partial }{\partial x}v\sin(\phi) & 
\frac{\partial }{\partial y}v\sin(\phi) & 
\frac{\partial }{\partial v}v\sin(\phi) &
\frac{\partial }{\partial \phi}v\sin(\phi) \\\\\\
\frac{\partial }{\partial x}a& 
\frac{\partial }{\partial y}a& 
\frac{\partial }{\partial v}a&
\frac{\partial }{\partial \phi}a \\\\\\
\frac{\partial }{\partial x}\frac{v\tan(\delta)}{L}& 
\frac{\partial }{\partial y}\frac{v\tan(\delta)}{L}& 
\frac{\partial }{\partial v}\frac{v\tan(\delta)}{L}&
\frac{\partial }{\partial \phi}\frac{v\tan(\delta)}{L}
\end{bmatrix}
　=
\begin{bmatrix}
0 & 0 & \cos(\bar{\phi}) & -\bar{v}\sin(\bar{\phi}) \\\\\\
0 & 0 & \sin(\bar{\phi}) & \bar{v}\cos(\bar{\phi}) \\\\\\
0 & 0 & 0 & 0 \\\\\\
0 & 0 &\frac{\tan(\bar{\delta})}{L} & 0 \\\\\\
\end{bmatrix}
$$

$$
B' =
\begin{bmatrix}
\frac{\partial }{\partial a}v\cos(\phi) &
\frac{\partial }{\partial \delta}v\cos(\phi) \\\\\\
\frac{\partial }{\partial a}v\sin(\phi) &
\frac{\partial }{\partial \delta}v\sin(\phi) \\\\\\
\frac{\partial }{\partial a}a &
\frac{\partial }{\partial \delta}a \\\\\\
\frac{\partial }{\partial a}\frac{v\tan(\delta)}{L} &
\frac{\partial }{\partial \delta}\frac{v\tan(\delta)}{L} \\\\\\
\end{bmatrix}
　=
\begin{bmatrix}
0 & 0 \\\\\\
0 & 0 \\\\\\
1 & 0 \\\\\\
0 & \frac{\bar{v}}{L\cos^2(\bar{\delta})} \\\\\\
\end{bmatrix}
$$

You can get a discrete-time mode with Forward Euler Discretization with sampling time dt.

$$z(k+1) = z(k)+f(z(k),u(k))dt$$

Using first-degree Tayer expansion around zbar and ubar
$$z(k+1) = z(k)+(f(\bar{z},\bar{u})+A'z(k)+B'u(k)-A'\bar{z}-B'\bar{u})dt$$

$$z(k+1) = (I + dtA')z(k)+(dtB')u(k) + (f(\bar{z},\bar{u})-A'\bar{z}-B'\bar{u})dt$$

So, 

$$z(k+1) = Az(k)+Bu(k) +C$$

where

$$A = (I + dt A') =
\begin{bmatrix} 
1 & 0 & \cos(\bar{\phi})dt & -\bar{v}\sin(\bar{\phi})dt \\\\\\
0 & 1 & \sin(\bar{\phi})dt & \bar{v}\cos(\bar{\phi})dt \\\\\\
0 & 0 & 1 & 0 \\\\\\
0 & 0 &\frac{\tan(\bar{\delta})}{L}dt & 1 \\\\\\
\end{bmatrix}$$

$$B = dt B' =
\begin{bmatrix} 
0 & 0 \\\\\\
0 & 0 \\\\\\
dt & 0 \\\\\\
0 & \frac{\bar{v}}{L\cos^2(\bar{\delta})}dt \\\\\\
\end{bmatrix}$$


$$ C = (f(\bar{z},\bar{u})-A'\bar{z}-B'\bar{u})dt \\\\
= dt(\begin{bmatrix} 
\bar{v}\cos(\bar{\phi}) \\\\\\
\bar{v}\sin(\bar{\phi}) \\\\\\
\bar{a} \\\\\\
\frac{\bar{v}tan(\bar{\delta})}{L} \\\\\\
\end{bmatrix} - 
\begin{bmatrix} 
\bar{v}\cos(\bar{\phi})-\bar{v}\sin(\bar{\phi})\bar{\phi} \\\\\\
\bar{v}\sin(\bar{\phi})+\bar{v}\cos(\bar{\phi})\bar{\phi} \\\\\\
0 \\\\\\
\frac{\bar{v}\tan(\bar{\delta})}{L} \\\\\\
\end{bmatrix} -
\begin{bmatrix} 0 \\\\\\ 0\\\\\\ \bar{a}\\\\\\
\frac{\bar{v}\bar{\delta}}{L\cos^2(\bar{\delta})}\\\\\\
\end{bmatrix}) =
\begin{bmatrix} 
\bar{v}\sin(\bar{\phi})\bar{\phi}dt\\\\\\
-\bar{v}\cos(\bar{\phi})\bar{\phi}dt\\\\\\
0\\\\\\
-\frac{\bar{v}\bar{\delta}}{L\cos^2(\bar{\delta})}dt\\\\\\
\end{bmatrix}
$$

## MPC approach:

The cost function:
$$
\begin{aligned} 
\min\_{x_{1:N},u_{1:N-1}} \quad & \sum Q'(z(T,ref)-z(T))^2 + Q \Sigma ({z(t, ref) - z(t)})^2 + R \Sigma {u(t)}^2+ R' \Sigma({u(t+1)-u(t)})^2\\\\
\text{st} \quad 
& z(t+1)=Az_t+Bu+C \\\\
& z(0)=z(0, ob) \\\\
& \underline{v} < v(t) < \overline{v}\\\\
& \underline{u} < u(t) < \overline{u} \\\\
& |u(t+1)-u(t)| < \Delta \overline{u} \\\\
& |u(t)| < \overline{u}
\end{aligned}
$$

where $z_{ref}$ comes from the target path and speed.
## Reference

- This code uses [CVXPY](http://www.cvxpy.org/) as an optimization modeling tool 
- [Vehicle Dynamics and Control \| Rajesh Rajamani \| Springer](http://www.springer.com/us/book/9781461414322)