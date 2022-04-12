---
title: 'Collaborative AI: Exam Notes'
metaTitle: 'Collaborative AI: Exam Notes'
metaDesc: 'Notes for the course Collaborative Artificial Intelligence. These notes are made speficially for preparing for the exam of april 2022.'
metaImg: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.battlesnake.com%2Fcontent%2Fimages%2F2021%2F06%2FMediumSocial-1.png&f=1&nofb=1'
date: '2022-04-12'
tags:
  - notes
  - collaborative ai
  - university
  - exam
---
[[toc]]

## Negotiation

### Utility

- **Kalai-Smorodinsky**: U_a = U_b
- **Nash product**: $max\{U_a \cdot U_b\}$
- **Pareto optimal frontier**: the set of bids such that there is no better bid that is better for at least one party, without making things worse for other parties.
- **Equal proportion of potential line (EPP)**: the line from $(0,0)$ to $(1,1)$.

### Social Welfare

- Simple: $max_{a \in A}\{\sum_{p \in P}U_p(a)\}$
- **Egalitarian** (Rawls point):  $max_{a \in A}\{min_{p \in P}\{U_p(a)\}\}$
- **Utalitarian** (Kalai-Smorodinsky point): $min_{a \in A}\{r_a - r_{eq}\}$, or, the point on the Pareto optimal frontier that is the shortest distance from the EPP.

### Domain Modeling

- **Preference Independence**: A set of attributes $Y\sub X$ is preferentially independent of it complement $X\not Y$ when the preference order over outcomes with varying values of attributes in $Y$ does not change when the attributes of $X \not Y$ are fixed to any value.
  - Preferences are not dependent on each other (e.g. the price of an item and length of the included warranty would, normally, be dependent).

