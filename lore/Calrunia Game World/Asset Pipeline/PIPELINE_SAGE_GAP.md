---
type: gap-spec
face: Sage
related_face: Sage
category: asset-pipeline
status: draft
created: 2026-05-03
tags:
  - sage
  - asset-pipeline
  - decision-threshold
  - pixellab
  - sorceress
  - calrunia
---
# PIPELINE — Sage Gap Spec

## The Gap

The experiment spec sets a 5-day timeline and a conservative decision threshold ("commit if ≥ 4 quality AND ≤ 30 min AND ≤ $5/asset"). Sage's read: the break-even is faster than this. If a source is genuinely better, we should know by asset 3 or 4 and be able to decide early.

**The real question:** Not "which source is better?" but **"which source has the smallest correction loop for Calrunia-type assets specifically?"**

---

## What Sage Is Asking For

### 1. A Real-Time Decision Rule

The current rule: "Wait 5 days, collect all data, then decide."
Sage's rule: **Commit immediately if: ≥ 4 quality AND ≤ 4 attempts average. Stop the experiment and declare the source the winner.**

Rationale: 4 attempts is the threshold where the correction loop stops being a burden. If a source consistently gets to usable in 3–4 passes, it doesn't matter that it's not perfect on pass 1 — the iteration cost is low enough to be acceptable.

If neither source clears the threshold by asset 4, extend to the full 5-asset test but flag the decision as "neither source meets the standard — define pipeline further before committing."

### 2. Pre-Flight Confirmation: Tools Are Actually Accessible

The most common experiment failure is not bad data — it's not running the experiment because pre-flight wasn't done. Sage wants confirmation that before Day 1:

- [ ] PixelLab API key confirmed working via MCP tool
- [ ] PixelLab $11/mo subscription confirmed active
- [ ] Sorceress free tier confirmed accessible (no credit card required)
- [ ] Sorceress Auto-Sprite v2 confirmed working on a sample input

**If any of these are false, the experiment cannot run. Flag it now, not on Day 1.**

### 3. The Primary Metric: Attempts to Usable

For each asset generated, record: **How many attempts before the rater called it "usable"?**

This is the number Sage cares about most. Quality score is secondary. A source that scores 5 but takes 12 attempts is worse than a source that scores 4 and takes 3. Here's why:

- 12 attempts × 5 minutes each = 60 minutes of iterative correction
- 3 attempts × 5 minutes each = 15 minutes of iterative correction
- The 4× time difference dwarfs the 1-point quality difference

**Decision rule in plain language:**
- Small correction loop (≤ 4 attempts): Acceptable, commit if quality ≥ 4
- Medium correction loop (5–8 attempts): Proceed with caution, requires lower quality threshold to justify
- Large correction loop (> 8 attempts): Reject regardless of quality — the iteration cost is too high

---

## The Most Important Number in the Experiment

Attempts to usable, not quality score.

The quality score tells you whether the end result is worth using.
The attempts count tells you whether the process is worth tolerating.

A source with quality 4 / 3 attempts is more valuable than a source with quality 5 / 10 attempts.

---

## Owner
**Sage** — @wendell-britt

## Status
Draft — awaiting pre-flight confirmation of tool accessibility

## Pre-flight Action
Run the pre-flight checklist TODAY. Confirm PixelLab MCP is working. Confirm Sorceress free tier access. If either fails, that is the experiment-blocking finding — not a minor inconvenience.

---

## Pre-Flight Results (2026-05-03)

### PixelLab ✅ CONFIRMED
- [x] PIXELLAB_API_KEY works — live API call successful
- [x] Balance confirmed: $10.00 USD credit
- [x] $11/mo subscription active
- **Accessibility: FULL — ready for experiment**

### Sorceress ✅ CONFIRMED — Purchased 2026-05-03
- [x] Pro Plan purchased ($49 one-time, lifetime access)
- [x] All non-AI tools unlocked: Auto-Sprite v2, Tileset Forge, True Pixel, 3D Studio, etc.
- [x] AI Generation Credits: optional add-on ($10/mo for 1,000 credits) — not purchased yet
- **Accessibility: FULL — ready for experiment**

---

## Decision Rule (Updated)

**Commit threshold:** ≥ 4 quality AND ≤ 4 attempts average, by asset 4

**Source availability at experiment start:**
- PixelLab: ✅ Available now
- Sorceress: ✅ Available now (Pro Plan purchased)

**Decision:**
1. Run PixelLab experiment immediately — no blocker
2. Sorceress cannot be included in Phase 1 without purchase decision
3. If PixelLab hits the commit threshold by asset 4 → experiment complete, Sorceress decision deferred
4. If PixelLab fails the threshold → assess Sorceress purchase as a fallback investment

**Cost context:**
- PixelLab current balance: $10.00 (sufficient for ~25+ 64×64 character generations)
- Sorceress entry cost: $49 one-time (lifetime access to all non-AI tools)
