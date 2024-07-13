---
layout: page
title: Aruco tracking drone
description: Course project for Contemporary Electronic System Design.
img: assets/img/Aruco-minifly.jpeg
importance: 1
category: course
---

## Hardware

1. ATK-MiniFly basic kit
2. Optical flow module of Minifly
3. Wifi camera module of Minifly

## Task

1. Use detected Aruco id to determine the target height of the drone. The target height is `3 × aruco_id`.
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/Aruco-demo1.gif" title="task 1" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
   The id of aruco are 45, 35 and 25, thus the height are 135cm, 105cm and 75cm accordingly. Notice the ascent/descent of the drone when detecting the aruco.
2. Track the position of the detected aruco. (Hover over the detected aruco)
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/Aruco-demo2.gif" title="task 2" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
   After moving the drone rightwards using the remoter, the drone automatically returned directly above the aruco.

## System

The block diagram of our system:

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/Aruco-SysBlockDiagram.jpg" title="Block Diagram" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Diagram of the drone:

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/Aruco-DroneBlockDiagram.jpg" title="Drone Block Diagram" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
