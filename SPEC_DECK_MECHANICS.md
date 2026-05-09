# Inner Garden — Deck Mechanics Spec

> **Status:** Design spec — no code yet
> **Related:** [DESIGN.md](DESIGN.md), [GENERATIVE_QUESTIONS_WORKTHROUGH.md](Calrunia%20Game%20World/GENERATIVE_QUESTIONS_WORKTHROUGH.md)
>
> **Decks are Cultivation Manuals.** A manual is a fixed set of techniques (cards) the player learns as a coherent system. You cannot swap individual cards until you reach the Custom Deck milestone.

---

## Core Concept

**The 52-card deck** is the full collection of known techniques across all manuals the player has mastered. The milestone: collect 52 unique cards.

| Suit | Pillar | Symbol | Element | Source |
|------|--------|--------|---------|--------|
| ♠ Spades | **Wake Up** | ⬡ Awareness | 🔥 Fire | Harvested Anger, Story, Insight, Intentions |
| ♥ Hearts | **Clean Up** | ○ Processing | 💧 Water | Harvested Sadness, Daemon defeats, Emotional alchemy |
| ♣ Clubs | **Grow Up** | △ Growth | ⚔️ Metal | Harvested Fear, Card leveling, Cultivation |
| ♦ Diamonds | **Show Up** | □ Action | 🌳 Wood | **Real life only** — journals about real actions |

---

## Decks Are Cultivation Manuals

A manual is a fixed 13-card set. Each one covers all 4 suits in a specific ratio determined by its trigram philosophy.

### Fixed Suit Counts (All Manuals Are Balanced)

Every complete 13-card manual has the exact same suit count:

| Suit | Count | Why |
|------|-------|-----|
| ♠ Wake Up | **3** | Discovery, insight, intentions |
| ♥ Clean Up | **3** | Processing, emotional alchemy |
| ♣ Grow Up | **4** | Leveling, cultivation (slightly more because growth is the core loop) |
| ♦ Show Up | **3** | Real-world action, consistency |

**Design rule:** No manual ever has fewer than 3 of any suit. No player choice can create an unfillable gap.

The trigram philosophy shifts **card power within each suit**, not the count:
- A Fire manual has powerful ♠ Wake Up cards (high damage, sharp effects)
- A Lake manual has powerful ♦ Show Up cards (strong streak bonuses)
- A Meridia manual has powerful ♦ and ♥ (real-world and processing support)
- But ALL manuals have exactly 3♠ 3♥ 4♣ 3♦ — the ratio never changes

### Power Profile by Nation (Suit Counts Are Equal, Power Varies)

| Nation (Trigram) | ♠ Power | ♥ Power | ♣ Power | ♦ Power | Playstyle |
|------------------|---------|---------|---------|---------|-----------|
| **Argyra** (Lake) | Medium | Medium | Medium | **High** | Balanced, Show Up focused |
| **Pyrakanth** (Fire) | **High** | Medium | Low | Medium | Aggressive, Wake Up specialist |
| **Virelune** (Wind) | Medium | Medium | **High** | Medium | Growth specialist, gradual |
| **Meridia** (Earth) | Low | Medium | Medium | **High** | Steady, real-world support |
| **Lamenth** (Water) | Medium | **High** | Medium | Low | Depth, processing mastery |

**The choice of nation changes playstyle flavor, never collection viability.**

### Manual Examples

| Manual | Trigram | Power Focus | Sample Cards |
|--------|---------|-------------|-------------|
| **Argyran Nation Manual** | Lake | ♦ Show Up | "Shared Stillness" (♥), "Reflective Surface" (♠), "Joy in Company" (♦) |
| **Pyrakanth Nation Manual** | Fire | ♠ Wake Up | "Burning Truth" (♠), "Cleansing Flame" (♥), "Heat of Growth" (♣) |
| **Virelune Nation Manual** | Wind | ♣ Grow Up | "Gentle Shaping" (♣), "Forest Breath" (♠), "Patient Growth" (♣) |
| **Meridia Nation Manual** | Earth | ♦ Show Up | "Unshakeable Ground" (♥), "Rooted Strength" (♣), "Welcoming Hearth" (♦) |
| **Lamenth Nation Manual** | Water | ♥ Clean Up | "Depth Gaze" (♥), "Grief Current" (♥), "Still Depths" (♠) |
| **Mountain Sect Manual** | Mountain | ♣ Grow Up | "Unmoved" (♣), "The Gate" (♣), "Boundary Clear" (♥) |
| **Thunder Sect Manual** | Thunder | ♠ Wake Up | "Breaking Point" (♠), "Sudden Growth" (♣), "Storm Clearing" (♠) |
| **Heaven Sect Manual** | Heaven | ♠ Wake Up | "First Stroke" (♠), "Courage to Begin" (♠), "Skyward" (♣) |

---

## Player Progression (The Manual Arc)

```
Phase 1: Start in HOME NATION → plant seeds → unlock Home Manual (13 cards)
              ↓
Phase 2: Complete home manual → Wandering Cultivators appear from other nations
              ↓
Phase 3: Befriend a Wanderer → earn Foreign Manual cards → switch decks
              ↓
Phase 4: Collect 52 unique across all manuals → unlock Custom Deck building
              ↓
Phase 5: Mix cards from any manual you own into a custom 13-52 card deck
```

### Phase 1 — Home Nation Manual (Tutorial)

There are **5 different starting experiences**, one per nation. The player chooses (or is assigned) their home nation at game start.

| Home Nation | Starter Manual | Trigram | Playstyle |
|-------------|---------------|---------|-----------|
| **Argyra** | "Argyran Gate" | Lake | Balanced, Show Up focused |
| **Pyrakanth** | "Pyrakanth Flame" | Fire | Aggressive, Wake Up specialist |
| **Virelune** | "Virelune Roots" | Wind | Growth specialist, gradual |
| **Meridia** | "Meridia Stand" | Earth | Steady, real-world support |
| **Lamenth** | "Lamenth Depths" | Water | Depth, processing mastery |

The player starts with **0 cards** and plants seeds to unlock their home manual card by card:

1. Plant a seed → harvest → **key fragment**
2. Collect enough fragments → unlock the next card in the home manual (fixed order)
3. All 13 cards unlocked → home manual is complete

```
Example progression (Argyra/Lake):
  Plant 1 → unlock "The Witness" (♠)
  Plant 3 → unlock "Shared Stillness" (♥)
  Plant 5 → unlock "Joy in Company" (♦)
  Plant 8 → unlock "Reflective Surface" (♠)
  ... until all 13 unlocked
```

**During this phase:** Empty slots = starter filler cards. The player cannot leave their home nation until their manual is complete.

### Phase 2 — Wandering Cultivators (Cross-Nation Cards)

After completing the home manual, **wandering cultivators** begin appearing in the player's home nation. These are NPCs from other nations who carry foreign manuals.

**Rules:**

- Each wanderer has a **home nation** (one of the other 4) and a **backstory** for how they got their deck
- They appear in the player's home nation with **visa status** (temporary permission to be there)
- The player cannot copy their deck directly — only earn cards through interaction

**Unlocking foreign cards:**

1. Befriend the wanderer (dialog, favors, shared cultivation)
2. Each favor completed → they teach the player **one card** from their manual
3. Cards go into a new "Foreign" manual sub-entry in the player's Collection
4. Once the player has enough foreign cards, they can **switch to that manual** as their active deck

**Visas & citizenship:**

- Wanderers are in the host nation **by visa** — temporary permission from the host nation's authorities
- Some wanderers seek **citizenship** — permanent residence
- The player can help them obtain citizenship (long quest chain) → the NPC settles permanently
- A settled wanderer offers the full 13-card manual unlock path
- **Design intent:** Visas explain why foreign NPCs are present. Citizenship quests are how the player unlocks complete foreign manuals.

### Phase 3 — Second Nation / Sect Manual

The player can accumulate additional manuals:
- **Foreign nation manuals** via wandering cultivators (one per nation)
- **Trigram sect manuals** via friction encounters (one per trigram, 8 total)

Only ONE manual can be active at a time. Player can switch between any partially or fully unlocked manual from the Collection.

### Phase 4 — 52 Unique Collected

When total unique cards across ALL manuals reaches 52 → Custom Deck Builder unlocks.

### Phase 5 — True Deck Building

Player can mix cards from any manual they own into a custom deck:
- Max deck size: 52
- Min deck size: 13
- No duplicate cards (each card is unique)

---

## Home Nation Assignment (Design Proposals)

The player's starting nation determines their first manual. Three possible methods:

| Method | How It Works | Pros | Cons |
|--------|-------------|------|------|
| **Trigram Quiz** | At character creation, answer 3-4 philosophical questions aligned with the trigram manifestos. Result determines nation. | Feels diegetic, introduces trigrams immediately | Player might not get the nation they wanted visually |
| **Free Choice** | Pick any of the 5 nations from a menu. Brief description of each. | Maximum player agency | No lore introduction at start |
| **Tutorial Default** | All players start in Argyra (balanced, Lake trigram). Nation choice unlocks later via wandering cultivator. | Simplest onboarding | Reduces replay value |

**Proposal:** Trigram Quiz for first playthrough, Free Choice on New Game+.

---

## Wandering Cultivator Pipeline (Design Proposals)

### When They Appear

| Milestone | Event |
|-----------|-------|
| Complete home nation manual (13/13) | First wandering cultivator appears at edge of home garden |
| Each subsequent manual completed | Another wanderer appears — from a nation you haven't visited yet |
| Border sect unlocked (Mountain or Thunder) | Wanderers from rival nations appear in neutral zone |

### The 5th Nation Problem

The player starts in 1 of 5 nations. They meet 3 more through wandering cultivators. The 5th nation has no natural wanderer source — unless:

| Solution | How It Works | Lore Fit |
|----------|-------------|----------|
| **Heaven Sect as Hub** | Floating Heaven trigram has no territory. Wanderers from ALL nations pass through it. 5th nation rep met here. | Strong — Heaven is canonically "no fixed ground" |
| **Border Sect Exchange** | Mountain sect (Argyra↔Meridia) and Thunder sect (Pyrakanth↔Virelune). Completing both reveals hidden passage to the remaining nation. | Strong — makes border sects meaningful |
| **Dual-Wanderer Nation** | One nation produces 2 wanderers. The 5th nation is never met directly until custom decks unlock. | Weaker — feels arbitrary |

**Proposal:** Heaven Sect as primary path + Border Sect Exchange as alternate.

---

### Wandering Cultivator Backstories (Design Template)

Every wandering cultivator NPC has:

1. **Home nation** (where they came from)
2. **Host nation** (where the player meets them)
3. **Why they left** (exile, pilgrimage, diplomacy, escape, curiosity)
4. **How they got their deck** (inherited, self-taught, stolen, gifted by a master, discovered in ruins)
5. **What they want** (visa renewal, citizenship, a specific card, knowledge, peace)

**Examples:**

| NPC | Home | Host | Left Because | How They Got Their Deck | Wants |
|-----|------|------|-------------|------------------------|-------|
| Kaelen | Pyrakanth | Argyra | Exile (political dissenter) | Stole one page from Pyrakanth Flame archive, reconstructed rest from memory | Asylum, then citizenship |
| Mira | Virelune | Meridia | Pilgrimage (seeking the Still Point) | Village elder entrusted the Virelune Roots manual before she left | Permission to visit Mountain border sect |
| Senn | Lamenth | Virelune | Escape (grief too heavy) | Found Lamenth Depths in a flood ruin; previous owner's skeleton still held it | Someone to share the weight |
| Taren | Argyra | Pyrakanth | Diplomacy (envoy from Lake sect) | Formal training at Lake sect academy, graduated with full Argyran Gate | Trade agreement, safe passage home |

---

## How Players Get Cards (Refined for Manuals)

### Source 1: Key Fragments from Harvesting

```
Journal → Seed → Plant → Water → Harvest → Key Fragment → Manual Card
```

| Harvest Quality | Key Fragments | Note |
|----------------|---------------|------|
| 1–20 (Common) | 1 | |
| 21–40 (Uncommon) | 2 | |
| 41–60 (Rare) | 3 | |
| 61–80 (Epic) | 4 | |
| 81–100 (Legendary) | 5 | |

The card unlocked is determined by the **player's progress through their current manual** — not by the emotion type. The emotion type determines the card's **element and effect** once slotted.

### Source 2: Story Reward Cards

Key story beats grant a full card for the current manual, skipping key fragments:

| Milestone | Card | Manual |
|-----------|------|--------|
| First journal entry | "The Witness" (♠) | Nation |
| First harvest | "The Gardener's Patience" (♣) | Nation |
| First daemon defeat | "Shadow Integrated" (♥) | Nation |
| Nation complete | "Gate of [Nation]" (♠) | Nation |
| Sect initiation | "[Sect] First Breath" (variable) | Sect |

### Source 3: Trigram NPC Gifts

Each trigram NPC, when first met and aided, gives one card from their own trigram's manual:

| NPC | Card | Manual |
|-----|------|--------|
| Heaven — Bold Heart | "First Stroke" | Heaven Manual |
| Earth — Devoted Guardian | "Held Space" | Earth Manual |
| Fire — Truth Seer | "Clear Burn" | Fire Manual |
| Water — Danger Walker | "Deep Current" | Water Manual |
| Wind — Subtle Influence | "Shaping Wind" | Wind Manual |
| Thunder — Decisive Storm | "Breaking Point" | Thunder Manual |
| Mountain — Still Point | "Unmoved" | Mountain Manual |
| Lake — Joyful Connector | "Shared Light" | Lake Manual |

### Source 4: Friction Encounter Rewards

When the player mediates a trigram friction encounter and chooses a side, they unlock that trigram's **full manual** (13 cards) as a collectible manual.

This is the primary way to acquire non-nation manuals before the custom deck unlock.

### Source 5: Real-World Show Up → ♦ Diamonds

When the player journals about a real-world action (walked, meditated, called a friend, completed a task), they earn a **Show Up Fragment**.

- Each real journal entry with an action = 1 Show Up Fragment
- 3 Fragments = craft any ♦ card of the player's choice into their current manual
- Fragments are tracked per-player, not per-manual — they persist across manual switches

**Why this exists:** Every manual has exactly 3 ♦ cards, but the player might not be in the right nation or sect to unlock them through gameplay alone. The Fragment system ensures that an active player (who journals daily) can always fill their ♦ slots regardless of manual progression.

**Design intent:** This is the one suit where real-life consistency directly translates to in-game progress. You cannot grind ♦ fragments — you can only earn them by journaling about things you actually did.

**Balance guard:** Maximum 1 Fragment per 4-hour window. Prevents "I journaled 50 times in 5 minutes" gaming. A player who journals once per day will fill their ♦ suit in any manual within ~2 weeks of active play, alongside natural manual progression.

---

## Where Cards Live (4 Locations)

### Location 1: The Collection (All Manuals)

```
Collection
├── Nation Manual (13 cards) — always present once earned
├── Heaven Manual (13 cards) — unlocked via friction choice
├── Earth Manual (13 cards) — unlocked via friction choice
├── Fire Manual (13 cards) — unlocked via friction choice
├── ... (8 trigram manuals total)
├── Sect Manuals (Thunder, Mountain + floating sects)
└── Total unique count: 0 / 52
```

- Every card the player has **ever unlocked** stays in their collection
- Collection is unbounded — manuals can be incomplete
- "52 unique cards" is counted across ALL manuals, not just the active one

### Location 2: The Active Manual (Deck)

```
Active Deck (1 manual = 13 cards)
├── Card 1: [Card Name] (♠)
├── Card 2: [Card Name] (♥)
├── ...
└── Card 13: [Card Name] (♦)
```

- Exactly 1 manual active at a time
- All 13 cards are used in encounters
- Empty slots (manual not fully unlocked) = starter filler cards

### Location 3: The Hand (Encounter Draw)

```
Hand (7 cards drawn from active deck)
├── Drawn from the 13-card active manual
├── Reshuffle when depleted
└── Discard pile tracked per encounter
```

### Location 4: Card Graveyard (Leveling Fuel)

Cards consumed for leveling go to the Graveyard. They leave the Collection permanently. Used for the "sacrifice to improve" mechanic.

---

## The 52-Card Milestone

When the player's **total unique cards across all manuals** reaches 52:

- Narratively: The player has mastered all known techniques
- Unlocks: Custom Deck Builder
- Unlocks: Heaven cultivation band
- Context: Not the end — the beginning of true deck building

### Guaranteed Reachability

Because every manual has exactly 3♠ 3♥ 4♣ 3♦:

| Manuals Collected | Min per Suit | Milestone Progress |
|------------------|-------------|-------------------|
| 1 (starter nation) | 3 ♠, 3 ♥, 4 ♣, 3 ♦ | 13 / 52 |
| 2 (first sect) | 6 ♠, 6 ♥, 8 ♣, 6 ♦ | 26 / 52 |
| 3 (second sect) | 9 ♠, 9 ♥, 12 ♣, 9 ♦ | 39 / 52 |
| 4 (third sect or trigram) | 12 ♠, 12 ♥, 16 ♣, 12 ♦ | 52+ ✓ |

**4 complete manuals = guaranteed milestone.** Any combination of 4 manuals works — nation, sect, trigram, doesn't matter. The 5th+ manual provides variety and power, not necessity.

**With Show Up Fragments:** A player who journals actively can reach 52 in 3 manuals by crafting their own ♦ cards. This rewards real-world consistency without creating a bottleneck for players who collect fewer manuals.

### Starter Card Fallback

Until 52 unique cards are collected, any gaps are filled with basic "Meditation" starter cards:
- Effect: "Rest 2 Qi"
- Cost: 0
- These cannot be removed from decks until replaced

---

## Card Leveling

### How It Works
1. Select a card in your Collection
2. Pay cultivation exp + consume 1 card from the Graveyard (burn a card)
3. Card levels up (max level per rarity: Common=3, Uncommon=5, Rare=7, Epic=9, Legendary=10)
4. Each level increases power slightly (+1 per level)

### What Can Be Burned
- Any unlocked card from any manual
- The card is gone permanently (Graveyard)
- Stronger cards give more leveling EXP value

---

## Edge Cases

| Case | Resolution |
|------|-----------|
| Player has 0 cards | All 13 slots filled with starter Meditation cards. Game is playable. |
| Manual switch mid-encounter | Not allowed — switch only in the garden / safe zone |
| Player burns ALL cards of one suit | That suit becomes starters again until more are unlocked |
| Player wants to switch manuals often | Free action in garden. Intent: encourages trying different playstyles |
| Player hasn't unlocked any manual | Nation manual auto-unlocks after first harvest (tutorial guarantee) |
| 52 unique includes duplicates? | No — unique card titles only. "Reflective Surface" × 2 doesn't count twice |
| What if all 8 trigram + 2 sect + 5 nation manuals exceed 52? | That's the point — Custom Deck building allows choice. You pick your favorite 52. |

---

## Key Numbers Summary

| Number | Value | Notes |
|--------|-------|-------|
| Cards per manual | 13 | Exactly 1 suit's worth per manual |
| Suits per manual | 4 | Weighted by trigram ratio |
| Deck size (active) | 13 | 1 manual at a time |
| Hand size | 7 | Drawn from active manual |
| Max deck size (custom) | 52 | After milestone unlock |
| Milestone | 52 unique | Across all collected manuals |
| Starter fillers | 0 cost, "Rest 2 Qi" | Placeholders for empty slots |
| Max card level | 3/5/7/9/10 | By rarity |
| Key fragments per harvest | 1–5 | By quality (1 for Common, 5 for Legendary) |
| Max manuals | 13+ | 5 nations + 8 trigrams + floating sects |
