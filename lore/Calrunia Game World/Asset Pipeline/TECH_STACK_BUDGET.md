---
type: financial-tracking
category: tech-stack
created: 2026-05-03
updated: 2026-05-03
tags:
  - budget
  - subscriptions
  - dev-tools
  - tech-stack
---

# Tech Stack & Subscription Tracker

Development costs for Calrunia game, bars-engine, and Zo Computer projects.

---

## Active Subscriptions

| Service | Cost | Billing | Purpose | Status |
|---------|------|---------|---------|--------|
| PixelLab | $11/mo | Monthly | Pixel art character generation, animations, rotations | Active |
| Sorceress Pro Plan | $49 one-time | Once | Auto-Sprite v2, Tileset Forge, True Pixel, 3D Studio | Active — purchased 2026-05-03 |

---

## Subscription Details

### PixelLab — $11/mo
- **Billing:** Monthly
- **Account:** wendellbritt (confirmed active)
- **Current balance:** $10.00 USD credit
- **Features used:** Pixflux API, Bitforge style generation, Inpaint, Animation
- **Approx. cost per asset:** ~$0.008–$0.015 per generation
- **Notes:** 64×64 character generation runs ~$0.008/gen. Balance of $10 covers ~25+ character gens.

### Sorceress Pro Plan — $49 one-time
- **Billing:** One-time lifetime purchase
- **Purchased:** 2026-05-03
- **Features unlocked:**
  - Auto-Sprite v2 (video → sprite sheet)
  - Tileset Forge (AI art → perfect tilesets)
  - True Pixel (video/image → pixel art sprites)
  - 3D Studio (models, rigging, text-to-animation)
  - Procedural Walk (IK rig for multi-legged creatures)
  - Sprite Analyzer + Slicer
  - 3D → 2D (any 3D model into sprite sheets)
  - Canvas (in-browser image editor)
  - Batch Utilities
  - Notes + synced scratchpad
  - Publishing + Play Arcade
  - Layout Preview
  - All future non-AI tools (free)
- **AI Generation Credits:** Optional add-on ($10/mo for 1,000 credits) — not purchased
- **Notes:** AI generation tools require separate credit purchase at direct API pricing. Core tools are fully unlocked.

---

## Asset Pipeline Experiment Budget

| Item | Allocated | Spent | Remaining |
|------|-----------|-------|-----------|
| PixelLab top-up (experiment run) | $10.00 | $0.00 | $10.00 |
| Sorceress Pro Plan | $49.00 | $49.00 | $0.00 |
| Sorceress AI Credits (if needed) | $0.00 | $0.00 | $0.00 |
| **Total** | **$59.00** | **$49.00** | **$10.00** |

---

## Budget Rules

1. **Experiment first, expansion second** — run PixelLab-only Phase 1 before spending Sorceress AI credits
2. **Sorceress AI credits** — only purchase if experiment shows Sorceress AI generation is materially better than PixelLab for Calrunia assets
3. **Monthly review** — first of each month, audit subscription usage against active projects
4. **Decommission rule** — if a subscription hasn't been used in 60 days, flag for review

---

## Cost Comparison: PixelLab vs Sorceress

### Per-Asset Rough Estimates

| Operation | PixelLab | Sorceress AI |
|-----------|----------|--------------|
| 64×64 character gen | ~$0.008 | ~$0.01–0.05 (varies by model) |
| 8-direction rotation | ~$0.07 (7 chained) | N/A (Auto-Sprite handles differently) |
| Animation (8 frames) | ~$0.05–0.10 | TBD per model |
| Tileset | Available (Map/Tileset endpoint) | Tileset Forge (AI → perfect tilesets) |
| Video → Sprites | Not available | Auto-Sprite v2 (Sorceress flagship) |

### Break-Even

- PixelLab at $11/mo covers ~700–1,000 character generations/month at current API rates
- Sorceress at $49 one-time + optional $10/mo AI credits — pays for itself vs PixelLab if generating 50+ assets/month at higher quality needs

---

## TODO

- [ ] Set up Sorceress account and confirm Pro Plan access
- [ ] Run PixelLab experiment Phase 1 (5 assets, measure attempts-to-usable)
- [ ] Assess Sorceress Auto-Sprite v2 on a sample video input
- [ ] Establish monthly review date for subscription audit

---

*Last updated: 2026-05-03*