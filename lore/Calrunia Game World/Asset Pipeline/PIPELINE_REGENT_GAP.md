---
type: gap-spec
face: Regent
related_face: Regent
category: asset-pipeline
status: draft
created: 2026-05-03
tags:
  - regent
  - asset-pipeline
  - pixellab
  - sorceress
  - cost-benefit
  - calrunia
---

# PIPELINE — Regent Gap Spec

## The Gap

The experiment spec models PixelLab as "active subscription" and Sorceress as "new cost." It does not account for what we're already paying, what we're getting for it, or whether the existing subscription has remaining capacity before we add a second tool.

**Known facts:**
- PixelLab: $11/month active subscription
- Sorceress: $49 one-time + $10/month AI credits (optional)

**Unknowns:**
- How many assets have we generated with PixelLab in the last 30 days?
- What is our actual monthly usage against the $11 plan limits?
- Is the PixelLab subscription already justified by volume, or are we paying $11 for occasional use?

---

## What Regent Is Asking For

A **PixelLab Usage Audit** — a 30-day lookback at actual PixelLab usage to determine whether the subscription is earning its keep, and a **break-even analysis** that tells us when Sorceress Lifetime pays for itself vs. continuing with PixelLab.

---

## Questions to Answer

### Usage Questions
1. How many assets generated in last 30 days?
2. What asset types (characters, tilesets, UI)?
3. Average attempts per usable asset?
4. What would the cost have been at Pay-Per-Use rates?

### Break-Even Questions
1. Sorceress Lifetime ($49) + estimated AI credits ($10/mo) — at what monthly usage does this beat PixelLab's $11/mo?
2. If we commit to Sorceress, do we cancel PixelLab or run both?
3. What is the minimum monthly asset volume that justifies Sorceress Lifetime?

### Decision Questions
1. Does PixelLab's $11/mo subscription have a usage cap? If so, are we hitting it?
2. Is PixelLab's MCP integration already wired into any workflow? (If yes, switching costs real time.)
3. Can PixelLab and Sorceress serve different asset types in the same pipeline? (e.g., PixelLab for characters, Sorceress for tilesets)

---

## Why This Matters for the Experiment

If PixelLab is generating fewer than 10 assets/month, the $11/mo subscription is hard to justify. But if it's already generating 20+ assets/month and those assets are working, switching costs more than it saves.

The experiment cannot produce a valid "commit or pause" decision without this data.

---

## Owner
**Regent** — @wendell-britt

## Status
Draft — awaiting PixelLab usage data

## Pre-flight Action
Check PixelLab dashboard for 30-day usage statistics. If not accessible, cross-reference with any asset generation logs in the workspace.
