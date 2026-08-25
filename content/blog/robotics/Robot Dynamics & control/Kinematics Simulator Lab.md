---
title:  "Robot Dynamics & Control: Lab - The Robot Kinematics Simulator"
description: "robotics_and_control"
date: 2026-08-25
weight: 40
math: true
collection_type: Article
toc: true
---

## What This Lab Is For

The four lectures in this series build the algebra of manipulator kinematics: rigid motions, homogeneous transforms, the Denavit-Hartenberg convention, and the inverse problem. This post is the companion lab — a browser-based simulator where those matrices stop being symbols on a page and start moving an arm.

Read it in about five minutes before the session. Everything below is written against the interface as it appears on screen, so the button and tab names are quoted exactly.

![](/images/Robot_dynamics/lab/01-overview.png)

The screen is three columns: __left__ are the joint values, __middle__ is the 3D viewport, __right__ are the three exercise tabs.

> __Every computation runs on the server.__ The browser sends joint values and draws what comes back — it computes no matrix of its own. The reference implementation is therefore not in the page source, and no amount of reading the JavaScript will reveal an answer.

That is a deliberate design choice rather than an inconvenience. A kinematics tool that solves the problem in the browser is a tool you can read instead of a problem you can solve.

---

## The Left Column: Robot Selection and Joint Control

The __ROBOT__ selector in the title bar chooses the arm model. The status chip in the top-right corner reads __ok__ once the server is connected; if it turns red, nothing else on the page will work — tell the lecturer.

![](/images/Robot_dynamics/lab/02-joint-values.png)

The __JOINT VALUES__ panel for the KUKA KR 6 R900.

- Each joint $q_1 \ldots q_6$ has a slider and a numeric field. Drag the slider or type the number directly; both drive the same variable.
- The __deg__ / __rad__ toggle switches the angular unit. Check which one is active before you copy a number into your working — a factor of $180/\pi$ is the single most common error in this material.
- __Home__ returns the arm to its reference pose, __Zero__ sets every joint to zero, and __Random__ draws an arbitrary configuration. __Random__ is the most useful of the three: it lets you set your own exercises.

Above the panel are the link dimensions ($d_1$, $a_2$, and so on). These are exactly the constants that appear in the DH table of Lecture 3, and they are the numbers you need when you work the problem by hand.

---

## The Middle Column: The 3D Viewport

![](/images/Robot_dynamics/lab/03-viewport.png)

The labels $\{0\} \ldots \{6\}$ are the frames $o_i x_i y_i z_i$ attached to each link.

- __Rotate__: hold the left mouse button and drag. __Zoom__: scroll wheel. __Pan__: hold the right mouse button and drag.
- The buttons in the top-right corner — __iso__, __top (xy)__, __front (xz)__ — switch the camera; __fit__ frames the whole robot again after an over-enthusiastic zoom.
- The checkbox row toggles the overlays: __frames__ (the coordinate frames), __labels__, __joint axes__ (the axis each joint rotates about), __workspace__ (the reachable volume), __TCP trail__ (the path the tool point has travelled), __echo 3 s__ (faint red dots that fade over three seconds, showing where the tool point has just been — useful when watching an inverse-kinematics solution land, or a move to a taught point) and __CAD__ (the solid model instead of the wireframe).

Keyboard shortcuts: <kbd>1</kbd> <kbd>2</kbd> <kbd>3</kbd> switch between the three camera views, and <kbd>f</kbd> is the __fit__ button.

> __TCP__ (Tool Center Point) is the red point at the end of the arm. Most exercises ask about the position of exactly this point — the translation column of $T^0_n$.

---

## Tab 1: __Transforms__ — Building a Transform From Its Parts

This tab is the lesson that comes *before* the DH table. Each row in the list is __one__ rotation (__Rot__) or __one__ translation (__Trans__) about or along a single axis.

![](/images/Robot_dynamics/lab/04-transforms.png)

Two steps, the __Run__ button, and the $4 \times 4$ matrix the server returns.

How to use it:

1. Add a step with __+ rotation__ or __+ translation__; remove one with the __×__ at the end of the row.
2. Choose the axis (__x__, __y__, __z__) and type the value — angles in degrees, distances in metres.
3. Press __Run__ to evaluate.

The last column of each row is where the confusion lives, and it is the whole point of the tab:

| Setting | Meaning |
|---|---|
| __moving__ | Rotate or translate about an axis of __the frame as it currently stands__. This is what a DH row does. In matrix terms: __post-multiply__ (multiply on the right). |
| __world__ | Rotate or translate about the __fixed axes of the base frame__. In matrix terms: __pre-multiply__ (multiply on the left). |

This is the current-frame versus fixed-frame distinction from Lecture 2, made clickable. If the rule "successive rotations about the current frame compose by right multiplication" has never quite stuck, build a two-step sequence here, flip the setting, and watch which way the arm goes.

> __Does order matter?__ Yes. Swap the two steps and press __Run__ again — the line under the result will tell you whether they commute. Explain *why* to yourself before you read it.

The __move the robot with the frame__ checkbox applies the transform to the whole arm rather than to a lone triad, which makes the result far easier to picture. The __Load a DH row__ button loads one row of the DH table as four steps, so you can see that a DH row is nothing more elaborate than

$$
A_i = \operatorname{Rot}_{z,\theta_i} \; \operatorname{Trans}_{z,d_i} \; \operatorname{Trans}_{x,a_i} \; \operatorname{Rot}_{x,\alpha_i}
$$

Four elementary motions, in that order, all about the current frame. The DH convention is a naming discipline for choosing the frames — it is not a new kind of matrix.

At the bottom of the tab is the __Worksheet__: six short exercises in increasing order of difficulty. The ticks are remembered on the machine you are working at.

---

## Tab 2: __Teach Points__ — Teaching Positions Like a Real Robot

Industrial manipulators are usually programmed by __teaching points__: the operator jogs the arm to where it needs to be, presses save, and plays the sequence back. This tab reproduces that workflow.

![](/images/Robot_dynamics/lab/05-teach-points.png)

Two taught points, each with two ways of returning to it.

Three modes at the top of the tab:

- __look__ — moves the camera only, never the robot.
- __joint jog__ — drag a link and it rotates about its own joint axis. This is __forward kinematics__: you supply the angles, the software reports the position.
- __Cartesian jog__ — drag the tool point to where you want it in space. This is __inverse kinematics__: you supply the position, the software has to find the angles.

Press __Teach point__ to store the current pose. Each stored point has two buttons, and __the difference between them is the substance of the whole tab__:

| Button | What it does |
|---|---|
| __Go (joint)__ | Replays the stored __joint values__. Reaches exactly one pose, identically every time. |
| __Go (IK)__ | Discards the joint values, keeps only the __Cartesian coordinates__, and solves the inverse problem for the angles. It may well arrive in a __different__ pose from the one you taught, because several joint configurations reach the same point. Sometimes there is no solution at all. |

> __Do this one yourself.__ Teach a point, press __Go (joint)__, then press __Go (IK)__, and watch. That is the reason the inverse problem is harder than the forward one: forward kinematics is a function evaluation, and inverse kinematics is a search for solutions that may be multiple, or may not exist. Being able to explain that difference means you have understood half of this course.

With two or more points stored, __Run sequence__ drives the arm through them in order, pausing __dwell__ seconds at each. The __export__ / __import__ buttons write and read the point list as JSON — worth using before you change machines, because points are stored only in the browser you taught them in.

---

## Tab 3: __Your Answers__ — Submitting and Being Marked

You do the calculation on paper (or in code), type the result here, and the server marks it. The key property: __the platform never gives you the answer__ — it only tells you how far from it you are.

![](/images/Robot_dynamics/lab/06-your-answers.png)

A wrong answer: the platform reports a 0.50 m discrepancy without stating the correct figure.

1. Choose the direction: __Forward__ (given joint angles, find the pose) or __Inverse__ (given the pose, find the joint angles).
2. Choose the form of the answer: __TCP position__ (three numbers — the translation column of $T^0_n$), __T₀ⁿ__ (the full $4 \times 4$ matrix), __All T₀ⁱ__ or __All Aᵢ__ (one matrix per frame, or one per DH row).
3. Type the numbers and press __Check answer__.

- __TOL [m]__ is the accepted tolerance. The default of __1e-6__ is strict; if you rounded while working by hand, loosen it to __1e-3__ — that is honest, not a shortcut.
- __Draw it__ overlays *your* answer on the actual robot. When only one link is wrong, this makes it obvious at a glance which one.
- When the error matches a classic mistake — degrees confused with radians, a link omitted, a sign flipped — the platform says so.

The __Exercise set__ section at the foot of the tab generates a problem set: pick a __count__ and a __seed__, then press __Load__. The same seed always produces the same questions, so a lecturer can reissue an identical set — use the seed you were given.

---

## Suggested Order, and Troubleshooting

The three tabs are arranged in the order they should be worked:

1. __Transforms__ — understand what a transform is assembled from.
2. __Teach points__ — see how forward and inverse kinematics differ at the same point in space.
3. __Your answers__ — compute it yourself and check.

| Symptom | Cause and remedy |
|---|---|
| Status chip is red | The server is down or the network dropped. Reload; if it persists, tell the lecturer. |
| The robot will not move when dragged | You are in __look__ mode on the __Teach points__ tab. Switch to __joint jog__ or __Cartesian jog__. |
| Taught points have disappeared | Points live in this browser only. Use __export__ before switching machines. |
| A correct answer is marked wrong | Check the unit (degrees or radians) and loosen __TOL [m]__ if you rounded. |

The platform is open source at [github.com/phatcvo/amr-sim-web](https://github.com/phatcvo/amr-sim-web).
