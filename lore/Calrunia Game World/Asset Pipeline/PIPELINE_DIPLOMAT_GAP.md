---
type: gap-spec
face: Diplomat
related_face: Diplomat
category: asset-pipeline
status: draft
created: 2026-05-03
tags:
  - diplomat
  - asset-pipeline
  - trigrams
  - apprenticeship
  - design-advocacy
  - calrunia
---

# PIPELINE — Diplomat Gap Spec

## The Gap

The experiment is framed as a tool evaluation: "Which source produces better assets?" But Sorceress and PixelLab are not just tools — they are positions in a design debate. When players advocate for one source over another, they are practicing specific GM muscles: holding a position, understanding opposition, updating when presented with genuine evidence.

The experiment results should feed back into the trigram advocacy system. Currently, they don't.

---

## What Diplomat Is Asking For

A **Trigram Feedback Loop** — a column in the experiment log that captures which trigram position each result argues for or against. This makes the experiment do double duty: tool evaluation + design debate calibration.

---

## The Design Debate Dimension

| Source | Trigram Position | Design Argument |
|--------|-----------------|----------------|
| Sorceress (fast, decisive, credit-based) | **Thunder** — Decisive Storm | Get to sprite sheet fast and correct later. Decisive action beats prolonged deliberation. |
| PixelLab (iterative, visible, subscription-based) | **Fire** — Truth Seer | See exactly what you're getting before you commit. Illumination before investment. |

When a player argues for Sorceress, they are practicing being a Storm.
When a player argues for PixelLab, they are practicing being a Fire.

**The feedback loop:** After the experiment, update the NPC manifestos in `NPC_Design_Advocates/` with what the results showed about each position's strengths and failure modes in practice.

---

## What the Trigram Feedback Loop Captures

For each asset evaluated, record:

1. **Which trigram position did the player take when advocating for this source?**
2. **Was the advocacy accurate — did the source perform as the trigram would predict?**
3. **Where did the trigram position overstate or understate the source's actual behavior?**

**Example:**
- Player advocated for Sorceress (Storm): "It'll be fast and decisive."
- Result: Sorceress generated the tile set in 4 minutes, but required 7 correction passes to fix grid alignment.
- Trigram feedback: Storm overstated decisiveness — the source is fast at generation but requires more corrections than expected. The Storm position is partially correct but misses the adaptive depth challenge.

---

## Why This Matters

The design apprenticeship arena only works if the manifestos are calibrated against reality. If NPCs advocate for positions that don't match real tool behavior, players will eventually notice the gap and the system loses credibility.

The experiment is an opportunity to tighten the trigram advocacy system with actual data.

---

## Structural Requirement

The experiment log must have the trigram feedback loop column from Day 1. This is not an add-on to be filled in later — it requires the log template to be updated before the experiment starts.

---

## Owner
**Diplomat** — @wendell-britt

## Status
Draft — awaiting experiment log template update

## Dependencies
- NPC_Design_Advocates/ folder must exist and be populated (see I_CHING_TRIGRAMS.md)
- Experiment log template must be updated to include trigram feedback loop column
