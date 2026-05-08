---
type: gap-spec
face: Shaman
related_face: Shaman
category: asset-pipeline
status: draft
created: 2026-05-03
tags:
  - shaman
  - asset-pipeline
  - visual-soul
  - calrunia
  - aesthetic-identity
---

# PIPELINE — Shaman Gap Spec

## The Gap

We can evaluate whether an asset is technically correct. We cannot yet evaluate whether it feels like Calrunia. The pipeline without visual identity produces technically valid assets that may feel like they came from different games.

**Root cause:** We have not named the aesthetic constraints that define Calrunia's visual soul. Without this, quality scoring is anchored to individual rater taste, not to the world's visual identity.

---

## What Shaman Is Asking For

A **Visual Soul Definition** — a Calrunia-specific reference set that answers: "What is Calrunia? What is *not* Calrunia?"

This is not a style guide. Style guides describe what to do. Visual soul describes what *is*.

---

## The Reference Set

**10 "This is Calrunia" images** — assets, screenshots, or reference images that embody what we mean when we say something feels right for this world.

**10 "This is NOT Calrunia" images** — assets that are technically fine but feel wrong. Over-stylized, wrong palette, wrong proportion, wrong energy.

**Usage:** Before scoring any experiment asset, the rater calibrates against the reference set. "This feels like image #3 in the Calrunia set" vs. "This feels like image #7 in the Not-Calrunia set." The calibration anchors the 1–5 quality score to world identity rather than personal preference.

---

## What Makes Something "Calrunia"

The question Shaman is holding: **What is the visual soul of Calrunia?**

Initial questions that need answering:

1. **Palette:** What colors are native to Calrunia? What colors are foreign?
2. **Proportion:** Are characters chunky pixel (GBA-era)? Lean and modern (Celeste-style)? Somewhere in between?
3. **Line weight:** Heavy outlines or sprite-native without outlines?
4. **Animation philosophy:** Smooth interpolation or snappy frame-by-frame?
5. **World density:** Sparse and contemplative (Environmental storytelling) or rich and layered (Breath of the Wild density)?
6. **Mood register:** What is the emotional baseline of Calrunia's visual world — what feeling do you want a player to have when they enter it?

---

## Why This Must Precede the Quality Scoring

If we score experiment assets without calibrating against visual soul:
- Different raters will score the same asset differently
- Assets that are technically excellent but Calrunia-feeling-wrong will score high
- We risk committing to a source that produces beautiful assets that destroy the world's visual coherence

With visual soul calibration:
- Quality = "Does this feel like Calrunia?" + "Is this technically correct?"
- The score is about world identity, not personal taste
- The experiment produces assets that are comparable because they were scored against the same standard

---

## Owner
**Shaman** — @wendell-britt

## Status
Draft — awaiting visual soul definition work session

## Pre-flight Action
Gather 20 images: 10 labeled "Calrunia," 10 labeled "Not Calrunia." Sources: existing Calrunia/LDtk assets, pixel art reference collections, screenshot comparisons from other games.

## Dependencies
- This gap spec must close before Architect's Integration Contract can be finalized (visual soul defines what the QA checklist is checking for)
- This gap spec must close before Challenger's blind rater calibration can be finalized
