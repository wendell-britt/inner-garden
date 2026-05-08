---
type: gap-spec
face: Architect
related_face: Architect
category: asset-pipeline
status: draft
created: 2026-05-03
tags:
  - architect
  - asset-pipeline
  - integration-contract
  - calrunia
---

# PIPELINE — Architect Gap Spec

## The Gap

The asset pipeline has no shared definition of "game-ready." When we score an asset 1–5, we are scoring it against a moving, subjective standard. Two raters can give the same asset a 3 and a 5 for different reasons. This makes the experiment results argueable rather than decisive.

**Root cause:** We have not defined what an asset must satisfy to be considered "integrated into Calrunia." Without this definition, the pipeline cannot know when it has succeeded.

---

## What Architect Is Asking For

An **Integration Contract** — a one-page document that specifies what "game-ready" means for Calrunia specifically. This is not a style guide. It is a technical specification that any asset source must produce in order to be considered for integration.

---

## What the Integration Contract Must Define

### 1. File Format and Storage
- Asset type (sprite sheet, tileset, UI element, audio)
- File format (PNG, WAV, etc.)
- Storage location pattern in workspace
- Naming convention (e.g., `{npc_id}_{action}_{frame}.png`)

### 2. LDtk Integration Specification
- Grid size requirements (16×16 for Calrunia overworld tiles)
- Tile coordinate conventions
- Layer assignment
- Entity definition format for custom entities

### 3. Sprite Registry Entry
- JSON schema for the sprite registry
- Required fields per asset type
- Metadata requirements (source, generation date, attempt count, rater notes)

### 4. QA Checklist (per asset)
- [ ] Correct grid dimensions verified
- [ ] Naming convention satisfied
- [ ] Registry entry created
- [ ] LDtk tile/entity confirmed present or added
- [ ] Trigram alignment tag assigned
- [ ] Quality score recorded with rater ID

---

## Why This Matters for the Experiment

The experiment's quality scoring (1–5) is only meaningful if raters are scoring against the same standard. The Integration Contract makes the standard explicit and inspectable.

Without it: "The sprite looks good" is a valid score.
With it: "The sprite satisfies all 6 QA checklist items and was rated 4 byrater calibration against the Calrunia/Not-Calrunia reference set."

---

## Owner
**Architect** — @wendell-britt

## Status
Draft — awaiting input from Shaman (visual soul definition must precede this) and Regent (current PixelLab usage data)

## Dependencies
- Shaman gap spec must close first (visual soul definition)
- Regent gap spec (PixelLab usage audit)
