---
type: project-overview
category: asset-pipeline
status: planning
created: 2026-05-03
tags:
  - asset-pipeline
  - pixellab
  - sorceress
  - calrunia
  - game-dev
---

# Asset Pipeline — Project Overview

**Context:** We are running multiple AI asset generation tools with no structured comparison framework. Each tool gets evaluated ad-hoc, results live in chat memory, and the decision to commit to a tool source is made on vibes rather than data. We want a reusable, source-agnostic pipeline that can absorb new tools without re-engineering.

---

## The Core Problem

**Current state:** Ad-hoc sprite generation. PixelLab at $11/mo is active. Sorceress ($49 lifetime + $10/mo AI credits) is under evaluation. No integration contract exists. No quality scoring system. No visual soul definition for Calrunia.

**What we need:**
1. A generic pipeline architecture that treats tools as interchangeable sources
2. A way to evaluate tools without committing prematurely
3. A decision framework for when to commit to a source
4. Integration points into the Calrunia/LDtk game world

---

## Active Tools Under Evaluation

| Tool | Cost | Status | Strengths | Known Weaknesses |
|------|------|--------|----------|-----------------|
| PixelLab AI | $11/mo subscription | Active | Established workflow, MCP available, character generation tested | Animation frames inconsistent, iterative refinement slow |
| Sorceress | $49 one-time + $10/mo AI credits | Under evaluation | Auto-Sprite v2, Tileset Forge, True Pixel mode, audio generation | Untested, no MCP, credit-based costs |

---

## What Each Face Identified

### 🧠 Architect — Integration Contract Missing
The pipeline has no shared definition of "game-ready." Quality scores are subjective. Needs: LDtk format spec, sprite registry schema, QA checklist.

### 🏛 Regent — Existing Costs Not Modeled
$11/mo PixelLab subscription active. Sorceress Lifetime would be a second subscription. Decision brief must include "cancel PixelLab?" Needs: current PixelLab usage data, break-even analysis.

### ⚔️ Challenger — Test Set Too Small
5 assets is not enough to make a pipeline commitment. Needs: full next quest asset list, one stress-test asset designed to break the pipeline, blind rater specification.

### 🎭 Diplomat — Pipeline Should Feed Design Apprenticeship
The trigram advocacy system should learn from pipeline results. Sorceress = Thunder (decisive action). PixelLab = Fire (illumination before commit). Needs: trigram feedback loop in experiment log.

### 🌊 Shaman — Visual Soul Not Defined
Pipeline without visual identity = technically correct but Calrunia-feeling-wrong assets. Needs: 10 "Calrunia" / 10 "Not Calrunia" reference set for rater calibration.

### 📖 Sage — Decision Threshold Too Conservative
"Commit immediately if ≥ 4 quality AND ≤ 4 attempts." The break-even is faster than 5 days. Needs: real-time decision rule, pre-flight confirmation that tools are accessible.

---

## Proposed Structure

```
The Library/04 Quests/Calrunia Game World/Asset Pipeline/
├── ASSET_PIPELINE_OVERVIEW.md          ← this file
├── pixellab-cost-analysis.md             ← Regent: PixelLab $11/mo usage/break-even
├── PIPELINE_REGENT_GAP.md               ← Regent gap spec: existing costs not modeled
├── PIPELINE_ARCHITECT_GAP.md            ← Architect gap spec: integration contract missing
├── PIPELINE_CHALLENGER_GAP.md           ← Challenger gap spec: test set too small
├── PIPELINE_DIPLOMAT_GAP.md             ← Diplomat gap spec: trigram feedback loop missing
├── PIPELINE_SHAMAN_GAP.md               ← Shaman gap spec: visual soul not defined
└── PIPELINE_SAGE_GAP.md                ← Sage gap spec: decision threshold + pre-flight
```

---

## Pre-Flight: What Needs to Be True Before the Experiment Runs

- [ ] PixelLab $11/mo subscription confirmed active
- [ ] PixelLab API key accessible and tested
- [ ] Sorceress free tier accessible (no credit card required for evaluation)
- [ ] Sorceress Auto-Sprite v2 confirmed working on sample input
- [ ] LDtk integration contract drafted (grid size, naming, registry entry)
- [ ] 10 Calrunia / 10 Not Calrunia reference images gathered for rater calibration
- [ ] Experiment log template created with trigram feedback loop column

---

## Next Steps

**Phase 0 — Close Pre-Flight Gaps (this session)**
1. Regent: Audit PixelLab usage — how many assets generated in last 30 days? Is $11/mo justified by volume?
2. Architect: Draft Integration Contract (LDtk grid, sprite registry, naming convention)
3. Shaman: Gather 10 Calrunia / 10 Not Calrunia reference images
4. Sage: Confirm PixelLab API key works via MCP; confirm Sorceress free tier access
5. Challenger: Identify the next quest in Calrunia's delivery pipeline — what assets does it actually need?

**Phase 1 — Run Experiment**
5-day sprint, 5 asset types × 2 sources, blind evaluation, trigram feedback loop.

**Phase 2 — Decision Brief**
Decision: commit to which source, cancel PixelLab, or pause and define pipeline further.

---

## Reference Documents

- Sorceress research: `The Library/04 Quests/Calrunia Game World/TOOL_RESEARCH_SORCERESS.md`
- PixelLab skill: `Skills/pixellab-asset-gen/SKILL.md`
- I Ching trigram archetypes: `The Library/08 Source Library/I_CHING_TRIGRAMS.md`
