---
title:  "Robot Dynamics & Control: Lecture 2 - Rigid Motions and Homogeneous Transforms"
description: "robotics_and_control"
date: 2018-03-05
weight: 30
math: true
collection_type: Article
toc: true
---

## Introduction

Robot kinematics is concerned with establishing the various coordinate systems used to represent the __positions and orientations__ of rigid objects, and with the __transformations__ among these coordinate frames.

__Homogeneous transformations__ combine the operations of rotation and translation into a _single matrix multiplication_, and this is what is used to derive _the forward kinematic equations_: one matrix expresses both the position and the orientation of one frame relative to another.

------

## Representing Positions

In robotics it is necessary to specify a coordinate frame before the coordinates of a __point__ can be assigned. A point corresponds to a specific location in space, whereas a __vector__ specifies a direction and a magnitude:

$$
v^0_1 =
\begin{bmatrix} 5 \\ 6 \end{bmatrix}
$$

------

## Representing Rotations

### Rotation in the plane

The __orientation matrix__ specifies the coordinate vectors for the axes of frame $o_1 x_1 y_1$ with respect to the coordinate frame $o_0 x_0 y_0$:

$$
\begin{aligned}
R^0_1
&= \begin{bmatrix} x^0_1 & y^0_1 \end{bmatrix} \\
&=
\begin{bmatrix}
\cos\theta & -\sin\theta \\
\sin\theta & \cos\theta
\end{bmatrix}
\end{aligned}
$$

An alternative approach uses the __dot product__ of two unit vectors; physically, each entry is the projection of one axis onto another (for example $x_1$ projected onto $x_0$):

$$
\begin{aligned}
R^0_1
&= \begin{bmatrix} x^0_1 & y^0_1 \end{bmatrix} \\
&=
\begin{bmatrix}
x_1 \cdot x_0 & y_1 \cdot x_0 \\
x_1 \cdot y_0 & y_1 \cdot y_0
\end{bmatrix} \\
&= \left(R^1_0\right)^{-1}
\end{aligned}
$$

> Note: the column vectors are of __unit length__ and __mutually orthogonal__.

### Rotations in three dimensions

The projection technique scales naturally to the three-dimensional case:

$$
\begin{aligned}
R^0_1
&= \begin{bmatrix} x^0_1 & y^0_1 & z^0_1 \end{bmatrix} \\
&=
\begin{bmatrix}
x_1 \cdot x_0 & y_1 \cdot x_0 & z_1 \cdot x_0 \\
x_1 \cdot y_0 & y_1 \cdot y_0 & z_1 \cdot y_0 \\
x_1 \cdot z_0 & y_1 \cdot z_0 & z_1 \cdot z_0
\end{bmatrix}
\in SO(3)
\end{aligned}
$$

### Example 2.1

Suppose the frame $o_1 x_1 y_1 z_1$ is rotated through an angle $\theta$ about the $z_0$ axis, and we wish to find the resulting transformation matrix $R^0_1$. Note that by convention the positive sense of the angle is given by the right-hand rule: a positive rotation about the $z$-axis would advance a right-hand threaded screw along the positive $z$-axis.

![](/images/Robot_dynamics/lec2/1.png)

$$
\begin{aligned}
x_1 \cdot x_0 &= \cos\theta & y_1 \cdot x_0 &= -\sin\theta \\
x_1 \cdot y_0 &= \sin\theta & y_1 \cdot y_0 &= \cos\theta \\
z_0 \cdot z_1 &= 1
\end{aligned}
$$

Thus

$$
R^0_1 =
\begin{bmatrix}
\cos\theta & -\sin\theta & 0 \\
\sin\theta & \cos\theta & 0 \\
0 & 0 & 1
\end{bmatrix}
\in SO(3)
$$

### The basic rotation matrices

$$
R_{z,\theta} =
\begin{bmatrix}
\cos\theta & -\sin\theta & 0 \\
\sin\theta & \cos\theta & 0 \\
0 & 0 & 1
\end{bmatrix},
\quad
R_{x,\theta} =
\begin{bmatrix}
1 & 0 & 0 \\
0 & \cos\theta & -\sin\theta \\
0 & \sin\theta & \cos\theta
\end{bmatrix},
\quad
R_{y,\theta} =
\begin{bmatrix}
\cos\theta & 0 & \sin\theta \\
0 & 1 & 0 \\
-\sin\theta & 0 & \cos\theta
\end{bmatrix}
$$

$$
\begin{aligned}
R_{z,0} &= I \\
R_{z,\theta} R_{z,\phi} &= R_{z,\theta+\phi} \\
R^{-1}_{z,\theta} &= R_{z,-\theta}
\end{aligned}
$$

------

## Rotational Transformations

We wish to determine the coordinates of a point $p$ relative to a fixed reference frame $o_0 x_0 y_0 z_0$, given its expression in $o_1 x_1 y_1 z_1$:

$$
p = u x_1 + v y_1 + w z_1
$$

Projecting $p$ onto each axis of the reference frame $o_0 x_0 y_0 z_0$ gives

$$
p^0 =
\begin{bmatrix}
p \cdot x_0 \\
p \cdot y_0 \\
p \cdot z_0
\end{bmatrix}
$$

![](/images/Robot_dynamics/lec2/2.png)

Combining these two equations,

$$
\begin{aligned}
p^0
&=
\begin{bmatrix}
(u x_1 + v y_1 + w z_1) \cdot x_0 \\
(u x_1 + v y_1 + w z_1) \cdot y_0 \\
(u x_1 + v y_1 + w z_1) \cdot z_0
\end{bmatrix} \\
&=
\begin{bmatrix}
x_1 \cdot x_0 & y_1 \cdot x_0 & z_1 \cdot x_0 \\
x_1 \cdot y_0 & y_1 \cdot y_0 & z_1 \cdot y_0 \\
x_1 \cdot z_0 & y_1 \cdot z_0 & z_1 \cdot z_0
\end{bmatrix}
\begin{bmatrix}
u \\ v \\ w
\end{bmatrix}
\end{aligned}
$$

and finally

$$
p^0 = R^0_1 p^1
$$

The rotation matrix can therefore be used not only to represent the __orientation__ of coordinate frame $o_1 x_1 y_1 z_1$ with respect to frame $o_0 x_0 y_0 z_0$, but also to __transform the coordinates__ of a point from one frame to another.

------

## Composition of Rotations

### Rotation with respect to the __current coordinate frame__

Suppose we now add a third coordinate frame $o_2 x_2 y_2 z_2$ related to the frames $o_0 x_0 y_0 z_0$ and $o_1 x_1 y_1 z_1$ by rotational transformations:

$$
\begin{aligned}
p^0 &= R^0_1 p^1 \\
p^1 &= R^1_2 p^2 \\
\therefore\ p^0 &= R^0_1 R^1_2 p^2 = R^0_2 p^2
\end{aligned}
$$

Suppose initially that all three coordinate frames coincide. We __first rotate__ the frame $o_1 x_1 y_1 z_1$ relative to $o_0 x_0 y_0 z_0$ according to the __transformation $R^0_1$__. Then, with the frames $o_1 x_1 y_1 z_1$ and $o_2 x_2 y_2 z_2$ coincident, we __rotate__ $o_2 x_2 y_2 z_2$ relative to $o_1 x_1 y_1 z_1$ according to the __transformation $R^1_2$__. In each case the rotation occurs with respect to the __current frame__, and the corresponding matrices are __post-multiplied__.

> Note:
> > It is important to remember that __the order__ in which a sequence of rotations is carried out __is crucial__.
> > A rotation matrix gives different results depending on the order of the sequence.

### Rotation with respect to the __fixed coordinate frame__

Many times it is desirable to perform __a sequence of rotations, each about a given fixed coordinate frame__, rather than about successive current frames. In that case the matrices are __pre-multiplied__ instead: if $R^0_1$ is the current orientation and a further rotation $R$ is performed about an axis of the fixed frame, the resulting orientation is $R\,R^0_1$.

------

## Parameterization of Rotations

There are three ways in which an arbitrary rotation can be represented using only three independent quantities:

- __Euler angle representation__
- __Roll-pitch-yaw representation__
- Axis/angle representation

### Euler Angles

A common method of specifying a rotation matrix is by Euler angles. We can specify the orientation of the frame $o_1 x_1 y_1 z_1$ relative to the frame $o_0 x_0 y_0 z_0$ by three angles $(\phi, \theta, \psi)$, applied as follows:

1. Rotation about the __$z$-axis__ by the angle $\phi$.
2. Rotation about the current __$y$-axis__ by the angle $\theta$.
3. Rotation about the current __$z$-axis__ by the angle $\psi$.

> Note
> > The order of the sequence can be defined in several ways, but $z$-$y$-$z$ is the common choice.

![](/images/Robot_dynamics/lec2/3.png)

$$
\begin{aligned}
R^0_1
&= R_{z,\phi} R_{y,\theta} R_{z,\psi} \\
&=
\begin{bmatrix}
c_{\phi} & -s_{\phi} & 0 \\
s_{\phi} & c_{\phi} & 0 \\
0 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
c_{\theta} & 0 & s_{\theta} \\
0 & 1 & 0 \\
-s_{\theta} & 0 & c_{\theta}
\end{bmatrix}
\begin{bmatrix}
c_{\psi} & -s_{\psi} & 0 \\
s_{\psi} & c_{\psi} & 0 \\
0 & 0 & 1
\end{bmatrix} \\
&=
\begin{bmatrix}
c_{\phi}c_{\theta}c_{\psi} - s_{\phi}s_{\psi} & -c_{\phi}c_{\theta}s_{\psi} - s_{\phi}c_{\psi} & c_{\phi}s_{\theta} \\
s_{\phi}c_{\theta}c_{\psi} + c_{\phi}s_{\psi} & -s_{\phi}c_{\theta}s_{\psi} + c_{\phi}c_{\psi} & s_{\phi}s_{\theta} \\
-s_{\theta}c_{\psi} & s_{\theta}s_{\psi} & c_{\theta}
\end{bmatrix}
\end{aligned}
$$

Now consider the inverse problem of determining the Euler angles $(\phi, \theta, \psi)$ given the rotation matrix

$$
\begin{aligned}
R
&=
\begin{bmatrix}
r_{11} & r_{12} & r_{13} \\
r_{21} & r_{22} & r_{23} \\
r_{31} & r_{32} & r_{33}
\end{bmatrix} \\
&=
\begin{bmatrix}
c_{\phi}c_{\theta}c_{\psi} - s_{\phi}s_{\psi} & -c_{\phi}c_{\theta}s_{\psi} - s_{\phi}c_{\psi} & c_{\phi}s_{\theta} \\
s_{\phi}c_{\theta}c_{\psi} + c_{\phi}s_{\psi} & -s_{\phi}c_{\theta}s_{\psi} + c_{\phi}c_{\psi} & s_{\phi}s_{\theta} \\
-s_{\theta}c_{\psi} & s_{\theta}s_{\psi} & c_{\theta}
\end{bmatrix}
\end{aligned}
$$

If $r_{13}$ and $r_{23}$ are not both zero, then $s_{\theta} \neq 0$; hence $r_{31}$ and $r_{32}$ are not both zero and $r_{33} \neq \pm 1$, so

$$
\begin{aligned}
\theta
&= \operatorname{atan2}\!\left(\pm\sqrt{1 - r^2_{33}},\; r_{33}\right) \\
&= \operatorname{atan2}\!\left(\pm\sqrt{1 - c^2_{\theta}},\; c_{\theta}\right) \\
&= \operatorname{atan2}\!\left(\pm s_{\theta},\; c_{\theta}\right)
\end{aligned}
$$

![](/images/Robot_dynamics/lec2/4.png)

If $\theta > 0$,

$$
\begin{aligned}
\phi
&= \operatorname{atan2}(r_{23},\, r_{13}) \\
&= \operatorname{atan2}(s_{\phi}s_{\theta},\, c_{\phi}s_{\theta}) \\[6pt]
\psi
&= \operatorname{atan2}(r_{32},\, -r_{31}) \\
&= \operatorname{atan2}(s_{\theta}s_{\psi},\, s_{\theta}c_{\psi})
\end{aligned}
$$

If $\theta < 0$,

$$
\begin{aligned}
\phi
&= \operatorname{atan2}(-r_{23},\, -r_{13}) \\
&= \operatorname{atan2}(-s_{\phi}s_{\theta},\, -c_{\phi}s_{\theta}) \\[6pt]
\psi
&= \operatorname{atan2}(-r_{32},\, r_{31}) \\
&= \operatorname{atan2}(-s_{\theta}s_{\psi},\, -s_{\theta}c_{\psi})
\end{aligned}
$$

If $r_{13} = r_{23} = 0$, then $r_{33} = \pm 1$ by __orthogonality__:

$$
R =
\begin{bmatrix}
r_{11} & r_{12} & 0 \\
r_{21} & r_{22} & 0 \\
0 & 0 & \pm 1
\end{bmatrix}
$$

#### Case $r_{33} = 1$

Then $c_{\theta} = 1$, $s_{\theta} = 0$ and $\theta = 0$:

$$
\begin{aligned}
\begin{bmatrix}
c_{\phi}c_{\theta}c_{\psi} - s_{\phi}s_{\psi} & -c_{\phi}c_{\theta}s_{\psi} - s_{\phi}c_{\psi} & c_{\phi}s_{\theta} \\
s_{\phi}c_{\theta}c_{\psi} + c_{\phi}s_{\psi} & -s_{\phi}c_{\theta}s_{\psi} + c_{\phi}c_{\psi} & s_{\phi}s_{\theta} \\
-s_{\theta}c_{\psi} & s_{\theta}s_{\psi} & c_{\theta}
\end{bmatrix}
&=
\begin{bmatrix}
c_{\phi}c_{\psi} - s_{\phi}s_{\psi} & -c_{\phi}s_{\psi} - s_{\phi}c_{\psi} & 0 \\
s_{\phi}c_{\psi} + c_{\phi}s_{\psi} & -s_{\phi}s_{\psi} + c_{\phi}c_{\psi} & 0 \\
0 & 0 & 1
\end{bmatrix} \\
&=
\begin{bmatrix}
c_{\phi+\psi} & -s_{\phi+\psi} & 0 \\
s_{\phi+\psi} & c_{\phi+\psi} & 0 \\
0 & 0 & 1
\end{bmatrix} \\
&=
\begin{bmatrix}
r_{11} & r_{12} & 0 \\
r_{21} & r_{22} & 0 \\
0 & 0 & 1
\end{bmatrix} \\[6pt]
\because\ \sin(\alpha \pm \beta) &= \sin\alpha \cos\beta \pm \cos\alpha \sin\beta \\
\cos(\alpha \pm \beta) &= \cos\alpha \cos\beta \mp \sin\alpha \sin\beta
\end{aligned}
$$

Thus

$$
\begin{aligned}
\phi + \psi
&= \operatorname{atan2}(r_{21},\, r_{11}) \\
&= \operatorname{atan2}(-r_{12},\, r_{11})
\end{aligned}
$$

Only the sum $\phi + \psi$ is determined, so there are infinitely many solutions.

#### Case $r_{33} = -1$

Then $c_{\theta} = -1$, $s_{\theta} = 0$ and $\theta = \pi$:

$$
\begin{aligned}
\begin{bmatrix}
-c_{\phi-\psi} & -s_{\phi-\psi} & 0 \\
-s_{\phi-\psi} & c_{\phi-\psi} & 0 \\
0 & 0 & -1
\end{bmatrix}
&=
\begin{bmatrix}
r_{11} & r_{12} & 0 \\
r_{21} & r_{22} & 0 \\
0 & 0 & -1
\end{bmatrix} \\[6pt]
\because\ \sin(\alpha \pm \beta) &= \sin\alpha \cos\beta \pm \cos\alpha \sin\beta \\
\cos(\alpha \pm \beta) &= \cos\alpha \cos\beta \mp \sin\alpha \sin\beta
\end{aligned}
$$

Thus

$$
\begin{aligned}
\phi - \psi
&= \operatorname{atan2}(-r_{12},\, -r_{11}) \\
&= \operatorname{atan2}(-r_{21},\, r_{22})
\end{aligned}
$$

Again only the difference $\phi - \psi$ is determined, so there are infinitely many solutions.

-----------

### Roll, Pitch, Yaw Angles

A rotation matrix $R$ can also be described as a product of successive rotations about the principal coordinate axes $x_0$, $y_0$, $z_0$. These rotations define the roll, pitch and yaw angles $(\phi, \theta, \psi)$. The rotation order is:

- $x_0 \rightarrow y_0 \rightarrow z_0$ from the __fixed (global) frame__ perspective, where the matrices are pre-multiplied.
- $z \rightarrow y \rightarrow x$ from the __current frame__ perspective, where the matrices are post-multiplied.

Both readings produce the same product $R_{z,\phi} R_{y,\theta} R_{x,\psi}$.

![](/images/Robot_dynamics/lec2/5.png)

$$
\begin{aligned}
R^0_1
&= R_{z,\phi} R_{y,\theta} R_{x,\psi} \\
&=
\begin{bmatrix}
c_{\phi} & -s_{\phi} & 0 \\
s_{\phi} & c_{\phi} & 0 \\
0 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
c_{\theta} & 0 & s_{\theta} \\
0 & 1 & 0 \\
-s_{\theta} & 0 & c_{\theta}
\end{bmatrix}
\begin{bmatrix}
1 & 0 & 0 \\
0 & c_{\psi} & -s_{\psi} \\
0 & s_{\psi} & c_{\psi}
\end{bmatrix} \\
&=
\begin{bmatrix}
c_{\phi}c_{\theta} & -s_{\phi}c_{\psi} + c_{\phi}s_{\theta}s_{\psi} & s_{\phi}s_{\psi} + c_{\phi}s_{\theta}c_{\psi} \\
s_{\phi}c_{\theta} & c_{\phi}c_{\psi} + s_{\phi}s_{\theta}s_{\psi} & -c_{\phi}s_{\psi} + s_{\phi}s_{\theta}c_{\psi} \\
-s_{\theta} & c_{\theta}s_{\psi} & c_{\theta}c_{\psi}
\end{bmatrix}
\end{aligned}
$$

> Note
> > Here the order of the sequence is $z$-$y$-$x$, but $x$-$y$-$z$ is an equally valid definition.

Consider the inverse problem of determining the roll, pitch and yaw angles $\phi$, $\theta$, $\psi$ given the rotation matrix

$$
\begin{aligned}
R
&=
\begin{bmatrix}
r_{11} & r_{12} & r_{13} \\
r_{21} & r_{22} & r_{23} \\
r_{31} & r_{32} & r_{33}
\end{bmatrix} \\
&=
\begin{bmatrix}
c_{\phi}c_{\theta} & -s_{\phi}c_{\psi} + c_{\phi}s_{\theta}s_{\psi} & s_{\phi}s_{\psi} + c_{\phi}s_{\theta}c_{\psi} \\
s_{\phi}c_{\theta} & c_{\phi}c_{\psi} + s_{\phi}s_{\theta}s_{\psi} & -c_{\phi}s_{\psi} + s_{\phi}s_{\theta}c_{\psi} \\
-s_{\theta} & c_{\theta}s_{\psi} & c_{\theta}c_{\psi}
\end{bmatrix}
\end{aligned}
$$

The solution is

$$
\begin{aligned}
\phi
&= \operatorname{atan2}(r_{21},\, r_{11}) & &\text{if } -\tfrac{\pi}{2} < \theta < \tfrac{\pi}{2} \\
&= \operatorname{atan2}(-r_{21},\, -r_{11}) & &\text{if } \theta < -\tfrac{\pi}{2} \ \text{ or } \ \theta > \tfrac{\pi}{2} \\[6pt]
\theta
&= \operatorname{atan2}\!\left(-r_{31},\; c_{\phi}r_{11} + s_{\phi}r_{21}\right) \\
&= \operatorname{atan2}\!\left(s_{\theta},\; c_{\theta}\left(c^2_{\phi} + s^2_{\phi}\right)\right) \\[6pt]
\psi
&= \operatorname{atan2}\!\left(s_{\phi}r_{13} - c_{\phi}r_{23},\; -s_{\phi}r_{12} + c_{\phi}r_{22}\right) \\
&= \operatorname{atan2}\!\left(s_{\psi}\left(s^2_{\phi} + c^2_{\phi}\right) + s_{\phi}c_{\phi}s_{\theta}c_{\psi} - c_{\phi}s_{\phi}s_{\theta}c_{\psi},\; c_{\psi}\left(s^2_{\phi} + c^2_{\phi}\right) + s_{\phi}c_{\phi}s_{\theta}s_{\psi} - c_{\phi}s_{\phi}s_{\theta}s_{\psi}\right)
\end{aligned}
$$

If $\theta = \pm\frac{\pi}{2}$ there is no unique solution, so we generally assume that $-\frac{\pi}{2} < \theta < \frac{\pi}{2}$.

-----------

## Homogeneous Transformations

In this section we __combine position (translation) and orientation__ to define homogeneous transformations. If frame $o_1 x_1 y_1 z_1$ is obtained from frame $o_0 x_0 y_0 z_0$ by first applying a rotation specified by $R^0_1$ followed by a translation given (with respect to $o_0 x_0 y_0 z_0$) by $d^0_1$, then the coordinates $p^0$ are given by

$$
p^0 = R^0_1 p^1 + d^0_1
$$

A transformation of this form is said to define a __rigid motion__ if $R$ is orthogonal. Consider two such rigid motions:

$$
\begin{aligned}
p^0 &= R^0_1 p^1 + d^0_1 \\
p^1 &= R^1_2 p^2 + d^1_2
\end{aligned}
$$

Their composition defines a third rigid motion:

$$
\begin{aligned}
p^0
&= R^0_1 \left(R^1_2 p^2 + d^1_2\right) + d^0_1 \\
&= R^0_2 p^2 + R^0_1 d^1_2 + d^0_1
\end{aligned}
$$

Since the relationship between $p^0$ and $p^2$ is also a rigid motion,

$$
p^0 = R^0_2 p^2 + d^0_2
$$

so we have the relationships

$$
\begin{aligned}
R^0_2 &= R^0_1 R^1_2 \\
d^0_2 &= d^0_1 + R^0_1 d^1_2
\end{aligned}
$$

where $d^0_1$ is the vector from $o_0$ to $o_1$ expressed in $o_0 x_0 y_0 z_0$, and $R^0_1 d^1_2$ is the vector from $o_1$ to $o_2$ expressed in the orientation of $o_0 x_0 y_0 z_0$.

The same composition is obtained by a single $4 \times 4$ matrix product, where $0$ denotes the row vector $\begin{bmatrix} 0 & 0 & 0 \end{bmatrix}$:

$$
\begin{aligned}
\begin{bmatrix}
R^0_1 & d^0_1 \\
0 & 1
\end{bmatrix}
\begin{bmatrix}
R^1_2 & d^1_2 \\
0 & 1
\end{bmatrix}
&=
\begin{bmatrix}
R^0_1 R^1_2 & R^0_1 d^1_2 + d^0_1 \\
0 & 1
\end{bmatrix} \\
&=
\begin{bmatrix}
R^0_2 & R^0_1 d^1_2 + d^0_1 \\
0 & 1
\end{bmatrix}
\end{aligned}
$$

The homogeneous transformation is therefore

$$
H =
\begin{bmatrix}
R & d \\
0 & 1
\end{bmatrix};
\qquad R \in SO(3),\ d \in \mathbb{R}^3
$$

and, using the fact that $R$ is orthogonal,

$$
H^{-1} =
\begin{bmatrix}
R^T & -R^T d \\
0 & 1
\end{bmatrix}
$$

In order to use the __homogeneous transformation__ we need to augment the vectors $p$ by the addition of a fourth component equal to $1$, giving the __homogeneous representation__

$$
P^0 =
\begin{bmatrix}
p^0 \\
1
\end{bmatrix},
\qquad
P^1 =
\begin{bmatrix}
p^1 \\
1
\end{bmatrix}
$$

so that the rigid motion becomes a single matrix product:

$$
\begin{aligned}
p^0 &= R^0_1 p^1 + d^0_1 \\[6pt]
P^0 &= H^0_1 P^1
\end{aligned}
$$

A set of basic homogeneous transformations is

$$
\begin{aligned}
Trans_{x,a}
&=
\begin{bmatrix}
1 & 0 & 0 & a \\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix};
& Rot_{x,\alpha}
&=
\begin{bmatrix}
1 & 0 & 0 & 0 \\
0 & c_{\alpha} & -s_{\alpha} & 0 \\
0 & s_{\alpha} & c_{\alpha} & 0 \\
0 & 0 & 0 & 1
\end{bmatrix} \\
Trans_{y,b}
&=
\begin{bmatrix}
1 & 0 & 0 & 0 \\
0 & 1 & 0 & b \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix};
& Rot_{y,\beta}
&=
\begin{bmatrix}
c_{\beta} & 0 & s_{\beta} & 0 \\
0 & 1 & 0 & 0 \\
-s_{\beta} & 0 & c_{\beta} & 0 \\
0 & 0 & 0 & 1
\end{bmatrix} \\
Trans_{z,c}
&=
\begin{bmatrix}
1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & c \\
0 & 0 & 0 & 1
\end{bmatrix};
& Rot_{z,\gamma}
&=
\begin{bmatrix}
c_{\gamma} & -s_{\gamma} & 0 & 0 \\
s_{\gamma} & c_{\gamma} & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
\end{aligned}
$$

> Note
> > The result of a homogeneous transformation is different depending on the order of the sequence.

The most general homogeneous transformation is

$$
H^0_1 =
\begin{bmatrix}
n_x & s_x & a_x & d_x \\
n_y & s_y & a_y & d_y \\
n_z & s_z & a_z & d_z \\
0 & 0 & 0 & 1
\end{bmatrix} =
\begin{bmatrix}
n & s & a & d \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

- $n = (n_x, n_y, n_z)^T$: direction of $x_1$ in $o_0 x_0 y_0 z_0$.
- $s = (s_x, s_y, s_z)^T$: direction of $y_1$ in $o_0 x_0 y_0 z_0$.
- $a = (a_x, a_y, a_z)^T$: direction of $z_1$ in $o_0 x_0 y_0 z_0$.
- $d = (d_x, d_y, d_z)^T$: vector from $o_0$ to the origin $o_1$ in $o_0 x_0 y_0 z_0$.
