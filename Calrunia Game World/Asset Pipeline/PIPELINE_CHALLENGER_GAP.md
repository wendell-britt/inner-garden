---
type: gap-spec
face: Challenger
related_face: Challenger
category: asset-pipeline
status: draft
created: 2026-05-03
tags:
  - challenger
  - asset-pipeline
  - experiment-design
  - calrunia
  - stress-test
---

# PIPELINE — Challenger Gap Spec

## The Gap

The experiment tests 5 assets × 2 sources. This is enough to establish "which tool is faster and cheaper" but not enough to establish "which pipeline survives contact with real complexity." The assets that will break a production pipeline are the ones with edge cases — multi-frame animations, equipment variants, irregular grids, assets that require cross-tool iteration.

**Root cause:** We are testing tools on easy inputs. The stress-test is missing.

---

## What Challenger Is Asking For

Three changes to the experiment design:

### 1. Expand the Test Set to Quest-Real Complexity

Identify the next actual quest in Calrunia's delivery pipeline. What assets does that quest actually need? Test on those — not a representative sample.

**Why this matters:** A sprite sheet for a standing NPC is different from a sprite sheet for an NPC who has 4 directional walks, 2 attack animations, and an equipment swap state. The tools may perform identically on simple assets and diverge wildly on complex ones.

### 2. Add a Stress-Test Asset

One asset specifically designed to break the pipeline. Options:
- Animated sprite with equipment swap (changes costume mid-animation)
- Multi-tile door entity (spans more than one grid cell)
- UI element with dynamic state (health bar that fills/drains)
- Tileset with irregular grid requirements (non-16×16 elements)
- Sound effect with specific timing requirements tied to animation frames

The stress test asset is not expected to succeed. It is expected to reveal where the pipeline's failure modes are.

### 3. Specify the Blind Rater

"Third party rates quality" — who? What is their calibration process?

Options:
- **Self-blind:** You score assets without knowing which source generated them. Risk: you may recognize your own outputs.
- **Player blind:** A player at the table scores assets without context. Risk: they may score based on "cool factor" rather than Calrunia-fit.
- **AI blind:** A separate AI instance scores without knowing source. Risk: AI scoring of pixel art is unreliable without specific calibration.
- **Calibration first:** Rater scores the 10 Calrunia / 10 Not-Calrunia reference set first, establishing baseline. Experiment assets scored against that baseline.

Challenger's recommendation: **Calibration-first self-blind** — you score after calibrating against the reference set, and you don't know which source generated each asset until after scoring is recorded.

---

## Why This Matters

If we commit to a source after testing on simple assets and it fails on quest-real complexity, we have built integration tooling around the wrong source. The cost of that mistake is higher than the cost of running a more rigorous experiment.

---

## Owner
**Challenger** — @wendell-britt

## Status
Draft — awaiting identification of next quest asset list and stress-test asset selection

## Dependencies
- Architect gap spec (Integration Contract) must be in draft before the expanded test set can be defined
- Shaman gap spec (Visual Soul) must be in draft before blind rater calibration process can be finalized
