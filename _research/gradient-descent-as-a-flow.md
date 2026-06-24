---
title: Gradient descent is a flow we keep sampling badly
date: 2026-06-09
description: Treating optimization as a continuous-time dynamical system, and what the discretization quietly costs us.
math: true
---

A clean way to think about training is to forget the discrete updates entirely
and imagine the parameters flowing continuously downhill:

$$
\dot{\theta}(t) = -\nabla L(\theta(t)).
$$

This _gradient flow_ is the idealized object. Actual gradient descent is what
you get when you sample it with a finite step size — a forward Euler
discretization of the flow. Almost everything we call an "optimization trick"
is, from this angle, a statement about how to integrate this ODE without the
numerics betraying us.

## Momentum is a second-order system

Plain gradient flow is first-order and overdamped — it slides straight to the
nearest basin. Momentum changes the physics: it adds inertia, turning the
dynamics into a damped second-order system, something like a heavy ball rolling
through the loss landscape with friction. The familiar oscillation-then-settle
behaviour isn't an artifact; it's exactly what an underdamped oscillator does.

## Where the discretization bites

The continuous flow is unconditionally well-behaved. The trouble is entirely in
the sampling:

1. **Step size is a stability budget**, not a speed dial. Too large and the Euler
   scheme overshoots and diverges — the same failure mode as integrating a stiff
   ODE too coarsely.
2. **Sharp minima are stiff regions.** High curvature means fast local dynamics,
   which demands small steps, which is why curvature keeps showing up wherever
   learning rates are discussed.

Seen this way, the learning-rate schedule is an adaptive integrator and the
loss landscape is the vector field. I find this lens clarifying precisely
because it refuses to treat optimization as a bag of tricks — it insists there's
a single continuous object underneath, and that our discrete algorithms are just
better or worse approximations of it.
