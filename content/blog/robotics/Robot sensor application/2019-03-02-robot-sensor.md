---
layout: post
title:  "robotics_and_control"
categories: robotics_and_control
tags: robotics
comments: true
---


#  [Robot sensor application] Basic concept


## Table of Contents
{:.no_toc}
1. this unordered seed list will be replaced by toc as unordered list
{:toc}

---------


## Sensor

-   Device to measure the physical quantity of concern
    -   position, velocity, acceleration torque, temperature 
-   Transducer
    -   Device to convert from one kind of energy to another kind one.
        -   light energy à electrical energy



### General Classification

-   Active vs Passive
    -   __Active__: emit energy to environment
        -   More robust, less efficient
    -   __Passive__: passively receive energy from environment.
        -   Less intrusive, but depends on environment e.g. light for camera
-   Analog vs Digital
-   Contact vs Non-contact


by physical quantity 

<figure>
  <img alt="An image with a caption" src="/static/images/Sensor/1.png" class="lead"   style="width:480px; height:=360px"/>
</figure>
<figure>
  <img alt="An image with a caption" src="/static/images/Sensor/2.png" class="lead"   style="width:480px; height:=360px"/>
</figure>


### Terminology

-   _Range, Span_
    -   The range of a transducer defines the limits between which the input can vary. n The span is the maximum value of the input minus the minimum value
    -   if a thermometer cover -40°~ +50°C, Range is -40°~ +50°C and span is 90°C.
- _Error:_
  - measured value - true value.
- _Accuracy:_
  - guaranteed minimum and maximum error including all possible effects.
  - accuracy ± 2
- _Repeatability/Reproducibility_
  - ability to give the same output for repeated applications of the same input value.
  - described by % of full range.

<figure>
  <img alt="An image with a caption" src="/static/images/Sensor/3.png" class="lead"   style="width:480px; height:=360px"/>
</figure>

-   _Sensitivity_
    -   The sensitivity is the relationship indicating how much output is produced
if unit input is applied.
    -   dy/dx
-   _Linearity_
    -   dy/dx is const for all x
-    _Dynamic range_
     -    cover __wide measurement range__ as well as detect __small changes of measure__. $$\rightarrow$$ wide Dynamic range.
     -    logarithmic response $$\rightarrow$$ wide dynamic range camera
-   _Response Time_
    -   Time needed to result in change output after changes in input
-   _Resolution_
    -   __minimum input change__ can be recognized from output
-   _Bandwidth_
    -   __input frequency limit__ can be read 70% magnitude of dc input 
-   _Hysteresis error_
    -   hystera means a psychological disorder.
    -   hysteresis represents exaggerated or uncontrollable errors of a device

<figure>
  <img alt="An image with a caption" src="/static/images/Sensor/4.png" class="lead"   style="width:480px; height:=360px"/>
</figure>


---------------

## Laplace transform

-   Purpose:
    -   Differential Eq. in __time domain__ $$\rightarrow$$ Algebraic Eq. in __complex domain__
-   Definition :

$$
\begin{aligned}
\textrm{F}(s) = \int^\infty _{0-} f(t) e^{-st} dt
\end{aligned}
$$

여기서, s는 복소변수 그리고 f(t) = 0, for t < 0

-   Linearity of Laplace operator
    -   Superposition(homogeneity, additivity)

$$
\begin{aligned}
& L[a f(t)] = a L[f(t)] \\
& L[f(t) + g(t)] = L[f(t)] + L[g(t)]
\end{aligned}
$$

__Why Laplace transformation?__


<figure>
  <img alt="An image with a caption" src="/static/images/Sensor/5.png" class="lead"   style="width:640px; height:=480px"/>
</figure>

Table of Laplace Tr.

<figure>
  <img alt="An image with a caption" src="/static/images/Sensor/6.png" class="lead"   style="width:480px; height:=640px"/>
</figure>

Formula

<figure>
  <img alt="An image with a caption" src="/static/images/Sensor/7.png" class="lead"   style="width:640px; height:=480px"/>
</figure>

최종값 및 초기값의 정리

<figure>
  <img alt="An image with a caption" src="/static/images/Sensor/8.png" class="lead"   style="width:640px; height:=480px"/>
</figure>


## Inverse Laplace transform

-   Laplace tr. $$\rightarrow$$ algebraic eq.
    -   if solution of the algebraic eq. is F(s)
    -   A(s) : denominator of F(s)
        -   __Poles__: roots of polynomial A(s) = 0
    -   There are 3 cases in the poles of F(s)
        -   (1) Distinct real poles
        -   (2) Multiple real poles
        -   (3) Complex poles
    -   cf. Root of equation B(s)=0 are called __zeros__.

$$
\begin{aligned}
F(s) = \frac{B(s)}{A(s)}
\end{aligned}
$$
  

-   Partial fraction expansion:

<figure>
  <img alt="An image with a caption" src="/static/images/Sensor/9.png" class="lead"   style="width:640px; height:=480px"/>
</figure>






------------------

## Reference

- [Seoultech, Robot sensor application](http://eclass.seoultech.ac.kr/ilos/st/course/lecture_material_view_form.acl?ARTL_NUM=889652&SCH_KEY=&SCH_VALUE=&display=1&start=1)