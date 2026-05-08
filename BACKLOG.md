# Inner Garden — Development Backlog

> Status: **Active Development**
> Last Updated: Current Session

---

## Legend

- 🔵 **Backlog** — Not started, waiting
- 🟡 **In Progress** — Being actively worked
- 🟢 **Done** — Complete and merged
- ⚪ **Deferred** — Postponed to later version

---

## Phase 0: Foundation (Done)

- [x] Movement & collision (WASD + obstacles)
- [x] Camera system (follow player)
- [x] Asset generator (procedural 8-bit sprites)
- [x] Dialog system with choices and text animation
- [x] NPC interaction (talk to NPCs)
- [x] Day/night cycle + time display
- [x] Basic HUD (cultivation, time, emotion panel)
- [x] Journal system (record emotions → create seeds)
- [x] Meditation system (boost seed quality)
- [x] Farming system (plant, water, harvest)
- [x] Seed quality mechanic (quality → stat gains)
- [x] Story system (SceneManager + StoryScript)
- [x] Watering can tool (Master Wu gift)

🟢 **Done** — 17 files, core game loop working

---

## Phase 1: Save System

- [ ] `js/systems/SaveManager.js` — localStorage read/write
- [ ] Save schema (player stats, deck, farm, flags)
- [ ] Auto-save hooks (journal, harvest, battle, close)
- [ ] Manual save/load in menu
- [ ] First-time player detection → tutorial flow

🟡 **Status**: Not started

---

## Phase 2: Card Data & Deck

- [ ] `js/data/Cards.js` — Card template definitions
- [ ] `js/systems/CardSystem.js` — Deck management
- [ ] Card name generation (from emotion + quality)
- [ ] Quality → Power/Rarity/Cost mapping
- [ ] Element system (Fire/Water/Earth/Metal/Wood)
- [ ] Card creation from harvest (fruit → card)
- [ ] Game content card seeds from story rewards
- [ ] Deck persistence in save data

🟡 **Status**: Not started

---

## Phase 3: Card Inventory UI

- [ ] `js/ui/CardView.js` — Card rendering component
- [ ] Deck browser in menu (I key)
- [ ] Sort/filter: by element, rarity, level
- [ ] Card detail view (full stats, journal text, history)
- [ ] Battle loadout selection

🟡 **Status**: Not started

---

## Phase 4: Battle System

- [ ] `js/systems/BattleSystem.js` — Turn structure, Qi
- [ ] `js/entities/Enemy.js` — World enemy + Inner Demon
- [ ] `js/ui/BattleUI.js` — Battle HUD (hand, health, Qi)
- [ ] Real-time movement + time-freeze hand access
- [ ] Card play: select → target → resolve
- [ ] Card effects: damage, heal, shield, buff, debuff, draw
- [ ] Enemy AI: scripted (world) / journal-based (demon)
- [ ] Victory / defeat / retreat flows
- [ ] Encounter map nodes (story progression)

🟡 **Status**: Not started

---

## Phase 5: Inner Demon System

- [ ] Demon generation from journal data (see `SPEC_INNER_DEMONS.md`)
- [ ] Wu Xing elemental cycle (generation bonuses)
- [ ] Demon deck = player's journal cards
- [ ] Demon spawn locations in garden world
- [ ] Pre-battle dialog with journal text integration
- [ ] Rewards pipeline (EXP, stat bonuses, card upgrades)
- [ ] Scaling by player level + emotional density
- [ ] Edge cases (no entries, neglect, multi-element)

🟡 **Status**: Designed in spec, not implemented

---

## Phase 6: Polish & Expansion

- [ ] Card animations (play, draw, discard, summon)
- [ ] Elemental visual effects per card type
- [ ] Sound effects / music integration
- [ ] Card upgrade system (level up through use)
- [ ] Emotion combos (Joy + Sadness = Bittersweet) ⚪
- [ ] Card memory (times played, battles won) ⚪
- [ ] Multi-card harvest (future scaling) ⚪
- [ ] Inverse Garden (mirror dimension) ⚪
- [ ] Mobile / responsive layout ⚪
- [ ] Cloud save (optional) ⚪

🟡 **Status**: Deferred to v1.x

---

## Current Sprint Focus

**Phase 1**: Save System
- Priority: High (needed before card storage)
- Estimated effort: 1-2 sessions
- Blocks: Phase 2, 3, 4, 5

---

## Key Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| Current | 5 elements = Wu Xing generation cycle | No destruction — bonus Qi for correct sequencing |
| Current | 1 card per harvest | Simplicity for MVP, scaling deferred |
| Current | Time-freeze card play | Reduces complexity of real-time card management |
| Current | No mid-battle retreat | Makes engagement meaningful |
| Current | Demon deck = player's journals | Creates the core tension of the inner demon mechanic |
| Current | Player starts with empty deck | Tutorial introduces everything gradually |

---

## Open Questions

- [ ] Should defeated Inner Demons leave behind a "remnant" object in the world?
- [ ] Can the player choose which emotion to face, or is it forced by density?
- [ ] How does the "first play each day" mechanic work — calendar-based or session-based?
