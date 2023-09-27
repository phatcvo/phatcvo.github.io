---
title: "Model-Predictive Control"
date: 2022-09-23
tags: ["notes", "MPC"]
categories: ["Control theory"]
description: "The MPC controller controls vehicle speed and steering based on linearized model."
draft: false
math: true
---

<script>
    document.addEventListener("DOMContentLoaded", function() {
        renderMathInElement(document.body, {
            delimiters: [
                {left: "$$", right: "$$", display: true},
                {left: "$", right: "$", display: false}
            ]
        });
    });
</script>

$x = {-b \pm \sqrt{b^2-4ac} \over 2a}$