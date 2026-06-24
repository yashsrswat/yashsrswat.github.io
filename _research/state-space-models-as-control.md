---
title: State-space models, read as control theory in disguise
date: 2026-05-18
description: Why the recent wave of state-space sequence models feels so familiar if you've spent time around dynamics and control.
math: true
---

The first time I read through a modern state-space sequence model, I had the
odd feeling of meeting an old acquaintance under a new name. Strip away the
deep-learning vocabulary and what's left is a linear dynamical system — a
hidden state that evolves, an input that nudges it, an output read off through a
projection. That is, almost verbatim, the object control theory has studied for
seventy years.

## The same equations, different priorities

A continuous linear system is usually written as

$$
\dot{x}(t) = A\,x(t) + B\,u(t), \qquad y(t) = C\,x(t) + D\,u(t).
$$

Control theory cares about _stability_ and _controllability_: where do the
eigenvalues of $A$ sit, and can the input $u$ steer the state anywhere we like?
Sequence modelling inherits the same matrices but asks a different question —
can this thing _remember_? A token from a thousand steps ago has to survive the
repeated action of $A$ without exploding or decaying to nothing. That is an
eigenvalue question wearing a memory costume.

> The interesting move isn't the architecture. It's deciding that _memory_ and
> _stability_ are the same constraint viewed from two ends of the timeline.

## Why this framing earns its keep

Once you accept the dictionary, a lot of design choices stop looking like
hyperparameter folklore and start looking like consequences:

- **Initialization schemes** that keep eigenvalues near the unit circle are just
  the discrete-time version of placing poles for marginal stability.
- **Diagonalizing the recurrence** is the same trick that turns a coupled system
  into independent modes — and it's what makes the whole thing fast.
- **The decay of a mode** sets, very literally, the timescale over which the
  model can hold information.

None of this tells you the architecture will work. But it tells you _where to
look_ when it doesn't, and that's most of what a good mental model buys you.

I'll come back to the discretization step in a later note — the jump from the
continuous system to the recurrence you actually run is where a surprising
amount of the behaviour is decided.
