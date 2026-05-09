# Gap Analysis: Calrunia Lore → Game Content

> Based on lore docs in `lore/Calrunia Game World/`
> 8 Trigram NPCs, 4 Pantheon Deities, 5 Nations concept

**Status:** Design spec updated with canon from [GENERATIVE_QUESTIONS_WORKTHROUGH.md](Calrunia%20Game%20World/GENERATIVE_QUESTIONS_WORKTHROUGH.md). All 20 questions answered. Implementation phases 4-9 in `DESIGN.md` now reflect canon.

**See also:** [BARS_ENGINE_INNER_GARDEN_GAP.md](BARS_ENGINE_INNER_GARDEN_GAP.md) — cross-repo comparison with **bars-engine** (BAR platform vs Inner Garden canvas), shared contracts, and integration tiers. Fifth nation canon: [Calrunia Game World/NATIONS_CANON.md](Calrunia%20Game%20World/NATIONS_CANON.md).

---

## What We Have (Lore Side)

### The 8 Trigram NPCs (Design Advocates)

| Trigram | Name | Design Archetype | Conflicts With |
|---------|------|-----------------|----------------|
| ☰ Heaven | The Bold Heart | Vercel | Earth (speed vs care) |
| ☷ Earth | The Devoted Guardian | Airbnb | Heaven (warmth vs precision) |
| ☲ Fire | The Truth Seer | Figma | Mountain (reveal vs withhold) |
| ☵ Water | The Danger Walker | Linear | Lake (depth vs delight) |
| ☴ Wind | The Subtle Influence | Notion | Thunder (gradual vs decisive) |
| ☳ Thunder | The Decisive Storm | Stripe | Wind (force vs patience) |
| ☶ Mountain | The Still Point | Basecamp | Fire (boundary vs illumination) |
| ☱ Lake | The Joyful Connector | Dribbble | Water (joy-first vs depth-first) |

**Key structural insight:** Each trigram has a named opposition pair. These frictions are a ready-made **dialectic system** — conversations between opposing trigrams could drive story branches, quest choices, and moral dilemmas.

### The Pantheon (First Cultivators)

| Deity | Nation | Aspect | Trigram | Practice |
|-------|--------|--------|---------|---------|
| **Caelath** | Argyra | Neutral | Mountain | Stillness, Control moves |
| **Kerath** | Argyra | Dissatisfaction | Thunder | velath-torr (dread-cutting) |
| **Verathane** | Argyra | Satisfaction | Lake | Transcend moves, clarity |
| **Cindrel** | Pyrakanth | Dissatisfaction | Water | Flow-as-containment, complete burn |

**Key structural insight:** The pantheon operates on a Satisfaction/Dissatisfaction/Neutral triad. This maps directly to gameplay — player choices on how to process emotions (satisfied acceptance vs restless dissatisfaction vs balanced neutrality) determine which deity's path you walk.

### The 5 Nations (Concept)

**Canon (integrity pass 2026-05-08):** All five nations are **named**: Argyra, Pyrakanth, Meridia, Lamenth, **Virelune** (fifth — often only in group concept art; was unnamed in older drafts). EA channels and sects: [Calrunia Game World/NATIONS_CANON.md](Calrunia%20Game%20World/NATIONS_CANON.md).

Concept art filenames may still list only four; treat **NATIONS_CANON** as naming authority for tools.

---

## What's Missing (Game Implementation Gaps)

### Gap 1: No Nation/Zone System in the Game World

**Current state:** The garden world has no nations, no regions, no sense of place beyond "temple area" and "garden plots."

**What lore wants:** 5 distinct nations (Argyra, Pyrakanth, Meridia, Lamenth, +1) each with:
- Unique tile aesthetics (architecture, flora, palette)
- A Pantheon shrine or encounter
- An NPC who embodies the nation's trigram/philosophy
- Travel between nations as a form of progression

**Implementation path:** Extend the map from 1200×900 to a larger tile grid. Add zone transitions (like the existing pond/water mechanic). Each nation is a screen or screen-and-a-half of unique tiles.

### Gap 2: No Trigram NPCs in the Game

**Current state:** 3 NPCs (Master Wu, Mei-Lin, Young Disciple) — generic roles.

**What lore wants:** 8 trigram NPCs with distinct visual designs, philosophical positions, and named conflicts with each other.

**Implementation path:** Map each trigram to a position in the world. Their dialogs are their manifestos. Their quests are their "moment of friction" — Heaven asks you to move fast, Earth asks you to slow down. Choosing which side to help IS the gameplay.

### Gap 3: No Pantheon/Deity System

**Current state:** Emotion → seed → fruit → stat gain is the only progression axis. No higher aspiration.

**What lore wants:** Four documented First Cultivators embodying Satisfaction/Dissatisfaction/Neutral. The player's emotional alignment should map to which deity's path they walk.

**Implementation path:** The three Argyran siblings (Satisfaction, Dissatisfaction, Neutral) become the player's "alignment trinity." Gameplay choices and emotional processing style push the player toward one aspect. Each aspect unlocks different card types, different quests, different endings.

### Gap 4: No Dialectic/Friction System

**Current state:** Dialog choices are simple branches — "show meditation tutorial" or "close."

**What lore wants:** The trigram conflicts (Heaven vs Earth, Fire vs Mountain, etc.) are not just lore notes — they are **active gameplay systems**. The player should encounter NPC pairs in disagreement and be asked to mediate or choose.

**Implementation path:** Add a "Friction Encounter" system — two NPCs are at an impasse. The player hears both sides, chooses a resolution, and the game world changes based on the choice. This IS the inner demon mechanic — the friction is the inner conflict made manifest.

### Gap 5: Nation-Based Progression Gates

**Current state:** One flat garden world. All features available immediately.

**What lore wants:** The 5 nations should represent increasing challenge tiers. Argyra (starting nation) → Meridia → Lamenth → Pyrakanth → the fifth, unknown nation.

**Implementation path:** Gates between zones require cultivation level, specific card types, or quest completions. Each nation has its own garden plots, its own NPC trigram advocate, and its own Pantheon shrine.

### Gap 6: The First Cultivator's Moves (EA Terms)

**Current state:** No combat/move system implemented.

**What lore wants:** The pantheon docs reference specific moves: Transcend, Descend, Control. These are emotional cultivation techniques.

**Implementation path:** These move types map to card gameplay:
- **Transcend** (Satisfaction) — buff/heal/transform cards. Joy/Wood aligned.
- **Descend** (Dissatisfaction) — attack/debuff/release cards. Anger/Fire aligned.
- **Control** (Neutral) — draw/manipulate/defend cards. Neutral/Earth aligned.

### Gap 7: Calrunia as a Named Place, Not a Generic Garden

**Current state:** The game calls itself "Inner Garden." No reference to "Calrunia."

**What lore wants:** The game world has a name, a history, a pantheon, nations, and a lineage of First Cultivators.

**Implementation path:** Rename the world map in code, update the welcome dialog, add the pantheon to the temple interior, let Master Wu be the first NPC who speaks of Calrunia.

### Gap 8: No "Dread-Cutting" Mechanic (velath-torr)

**Current state:** Meditation boosts seed quality. That's the only emotional processing mechanic.

**What lore wants:** Kerath's practice of "velath-torr" — dread-cutting — is a specific technique for confronting fear/dissatisfaction directly.

**Implementation path:** Add a second meditation type — "Confrontation Meditation" (hold a different key, or choose at the temple). Instead of gently boosting quality, it rapidly processes one specific negative emotion, converting it directly into a card effect. High risk, high reward.

---

## Summary: Lore-to-Game Mapping

| Lore Element | Current Game State | Target State | Effort |
|-------------|-------------------|--------------|--------|
| 5 Nations | 1 flat map | Zoned world with travel | High |
| 8 Trigram NPCs | 3 generic NPCs | 8 philosophical NPCs with friction pairs | Medium |
| Pantheon | Not present | Shrines, alignment tracking | High |
| First Cultivator Moves | No combat | Transcend/Descend/Control card types | High |
| Calrunia naming | "Inner Garden" | "Calrunia — The Inner Garden" | Low |
| Dialectic system | Simple dialog branches | Friction encounters with world consequences | Medium |
| velath-torr (dread-cutting) | Meditation only | Active confrontation mechanic | Medium |
| Nation progression | No gates | Tiered zones | High |

**Effort key:** Low = hours, Medium = days, High = weeks of iteration
