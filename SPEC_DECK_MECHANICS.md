# Deck Mechanics — The 52-Card Deck

> The deck is the character sheet. The deck is the progression system. The deck is the game.

**Status:** Design spec — no code yet  
**Related:** [DESIGN.md](DESIGN.md), [GENERATIVE_QUESTIONS_WORKTHROUGH.md](Calrunia%20Game%20World/GENERATIVE_QUESTIONS_WORKTHROUGH.md)

---

## Core Concept

The player's deck is a **52-card deck** with **4 suits** (13 cards each) mapping to the Four Pillars:

| Suit | Pillar | Symbol | Function |
|------|--------|--------|----------|
| ♠ Spades | **Wake Up** | ⬡ Awareness | Journaling, discovery, insight, lore, setting intentions |
| ♥ Hearts | **Clean Up** | ○ Processing | Inventory, emotional alchemy, daemon encounters, card management |
| ♣ Clubs | **Grow Up** | △ Growth | Leveling, cultivation, card upgrades, stat gains |
| ♦ Diamonds | **Show Up** | □ Action | Real-world commitments, daily practice, consistency rewards |

**First Major Milestone:** Collecting 52 unique cards to fill the deck. This is the "complete" state — not the end of the game, but the point where the player has a full toolkit.

---

## How Players Get Cards (5 Sources)

### 1. Harvested Emotions (User Content) → Any Suit

```
Journal entry → Seed → Plant → Water → Harvest → Fruit → Card
```

The **emotion type** determines which suit the card goes into:
- **Anger** (Fire) → ♠ Wake Up (sharp insight, cutting through illusion)
- **Sadness** (Water) → ♥ Clean Up (processing, release, depth)
- **Fear** (Metal) → ♣ Grow Up (edge, boundary, sharpening)
- **Joy** (Wood) → ♦ Show Up (wanting to share, take action)
- **Neutral** (Earth) → Wild card — can be assigned to any suit by player choice

**Quality determines rarity:** Common → Uncommon → Rare → Epic → Legendary  
**Higher quality = more powerful effect, not different suit.**

### 2. Story Rewards (Game Content) → Fixed Suit

| Source | Card Example | Suit |
|--------|-------------|------|
| Master Wu (tutorial) | "Wu's First Lesson" | ♠ Wake Up |
| First harvest gift | "The Gardener's Patience" | ♣ Grow Up |
| Daemon defeat | "Shadow Integrated" | ♥ Clean Up |
| Nation discovery | "Argyran Gate" | ♠ Wake Up |
| Trigram choice | "Bold Heart's Precision" | ♠ Wake Up |
| Trigram choice | "Guardian's Warmth" | ♥ Clean Up |

### 3. Trigram NPC Services → Suit by NPC

Each of the 8 trigram NPCs offers a unique card as a service reward:

| NPC | Card | Suit |
|-----|------|------|
| Heaven — Bold Heart | "First Stroke" | ♠ Wake Up |
| Earth — Devoted Guardian | "Held Space" | ♥ Clean Up |
| Fire — Truth Seer | "Clear Burn" | ♠ Wake Up |
| Water — Danger Walker | "Deep Current" | ♥ Clean Up |
| Wind — Subtle Influence | "Shaping Wind" | ♣ Grow Up |
| Thunder — Decisive Storm | "Breaking Point" | ♠ Wake Up |
| Mountain — Still Point | "Unmoved" | ♣ Grow Up |
| Lake — Joyful Connector | "Shared Light" | ♦ Show Up |

### 4. Friction Encounter Rewards → Player's Choice

When the player mediates a trigram friction encounter and chooses a side, they receive a card aligned with that trigram's suit. If they choose **Bold Heart over Guardian**, they get a ♠ Wake Up card. If they choose **Guardian over Bold Heart**, they get a ♥ Clean Up card.

This is the primary way the player **intentionally builds deck balance**. If their deck is heavy on ♥ from too much cleaning, they seek friction encounters that reward ♠ or ♣.

### 5. Real-World Show Up (Daily Practice) → ♦ Diamonds

When the player journals about something they actually did in real life (walked, meditated, called a friend, completed a task), the Show Up integration check triggers:

- Daily journal entry with real-world action → high Show Up alignment → ♦ card
- Consistent streaks → bonus ♦ cards
- This is the ONLY source of ♦ Diamonds

**Design intent:** Show Up cards can only be earned by showing up in real life. You cannot grind them in-game.

---

## Where Cards Live (3 Locations)

### Location 1: The Collection (Permanent Library)

```
Collection (unbounded)
├── ♠ Wake Up (13+ cards)
├── ♥ Clean Up (13+ cards)
├── ♣ Grow Up (13+ cards)
└── ♦ Show Up (13+ cards)
```

- All cards the player has ever earned
- Permanent — never destroyed
- Viewable in the menu under "Collection"
- Sorted by suit, then rarity, then level
- Shows total count: "34 / 52 collected" (progress toward first milestone)

### Location 2: The Active Deck (52 Slots)

```
Active Deck (exactly 52)
├── 13 ♠ Wake Up
├── 13 ♥ Clean Up
├── 13 ♣ Grow Up
└── 13 ♦ Show Up
```

- Exactly 13 of each suit. No more, no less.
- Player chooses which 13 cards from their Collection fill each suit slot
- This is the deck used in ALL encounters
- If the Collection doesn't have 13 of a suit yet, that suit has **empty slots** — those positions are filled with basic starter cards

**The 52nd card milestone:** When all 52 slots are filled with non-starter cards, the deck is "complete." This triggers:
- A narrative beat (Inner Voice: "Your deck is whole. But a deck is only as strong as the hand you draw.")
- Unlocks the Heaven cultivation band
- A special title or cosmetic

### Location 3: The Hand (Battle / Encounter)

```
Hand (7 cards drawn)
├── Random draw from Active Deck
├── No duplicates (unique cards only — you cannot have 2 copies of the same card)
└── Drawn at start of each encounter
```

- 7 cards drawn at encounter start
- Hand is refreshed after encounter
- No mid-encounter deck shuffling (simplification for first ship)

---

## How Cards Are Used (4 Actions)

### Action 1: Play in Combat (Tactical RPG)

```
Encounter starts → Draw 7 from Active Deck → Player takes turns
Each turn:
  1. Choose a card from hand
  2. Pay Qi cost (regenerates per turn)
  3. Target an enemy or ally (range + line-of-sight)
  4. Card resolves (damage, heal, buff, debuff, control)
  5. Card goes to "used" state (not discarded — returned to deck after encounter)
```

**Qi regeneration:** 3 Qi per turn base. Cards cost 1-3 Qi.

**Card effects by suit:**
- ♠ Wake Up: Reveal enemy weakness, draw extra cards, insight effects
- ♥ Clean Up: Remove debuffs, heal, shield, banish enemy buffs
- ♣ Grow Up: Self-buff, empower next card, cultivation synergy
- ♦ Show Up: Direct damage, finishing moves, breakthrough effects

### Action 2: Alignment Offering (Friction Encounters)

When a trigram friction encounter presents a choice, the player can **offer a card** from their hand to weight the outcome:

- ♠ card → supports Bold Heart / Truth Seer choices
- ♥ card → supports Guardian / Danger Walker choices
- ♣ card → supports Still Point / Subtle Influence choices
- ♦ card → supports Joyful Connector / Decisive Storm choices

The offered card is **not consumed** — it returns to the deck. This is a narrative weighting mechanic, not a resource burn.

### Action 3: Cultivation Fuel (Card Leveling)

Cards have levels (1-5). Leveling a card improves its power.

```
To level up a card:
  1. Select a card from Collection
  2. "Feed" it another card of the same suit (consumed)
  3. Card gains XP toward next level
  4. Higher rarity gives more XP when fed
```

- Consumed cards are **gone from Collection permanently**
- This is the ONLY way cards are ever removed
- Creates tension: "Do I keep this weak ♠ card to fill my 13, or consume it to level a better one?"

### Action 4: Show Up Integration (Real World)

After journaling a real-world action, the game checks the player's Active Deck:

```
If ♦ Show Up suit has 13 unique cards:
  → "Your deck is full. You honored your commitment today."
  → Small cultivation EXP bonus
  → Streak counter increments

If ♦ Show Up suit has < 13 cards:
  → "Your deck has space. The world is waiting for your presence."
  → No penalty — the emptiness is the message
```

---

## Starter Deck (Tutorial Complete)

After completing the prologue + first plant + watering can from Wu:

```
Active Deck (52 slots, mostly empty)
├── ♠ 3 cards: "Wu's First Lesson", "Open Eyes", "The Seed of Attention"
├── ♥ 1 card: "Clearing the Ground"
├── ♣ 1 card: "First Water"
└── ♦ 0 cards → 13 empty slots (filled with blank placeholder cards)
```

The player then fills the deck by journaling, harvesting, meeting trigram NPCs, and showing up in real life. Each new card is a concrete reward for engagement.

---

## Visualizing the 52-Card Deck (Menu View)

```
┌──────────────────────────────────────────────────┐
│              THE INNER DECK — 34/52              │
├──────────────────────────────────────────────────┤
│ ♠ WAKE UP         ♥ CLEAN UP     ♣ GROW UP    ♦ SHOW UP  │
│ ┌──┬──┬──┬──┐  ┌──┬──┬──┬──┐  ┌──┬──┬──┬──┐  ┌──┬──┬──┬──┐│
│ │☰ │☷ │☲ │☵ │  │  │  │  │  │  │  │  │  │  │  │┌─┐│  │  │  ││
│ │ 9 │11 │ 8 │ 7 │  │ 5 │ 3 │ 4 │  │ 8 │ 6 │ 2 │  │0 │ 0 │ 0 │ 0 ││
│ │/13│/13│/13│/13│  │/13│/13│/13│/13│  │/13│/13│/13│/13│  │/13│/13│/13│/13││
│ └──┴──┴──┴──┘  └──┴──┴──┴──┘  └──┴──┴──┴──┘  └──┴──┴──┴──┘│
│                                                              │
│ Recently Unlocked: "Shared Light" (♦) — Trigram: Lake        │
│ Next milestone: 52/52 → Heaven Band unlocks                  │
└──────────────────────────────────────────────────────────────┘
```

---

## Edge Cases

| Situation | Resolution |
|-----------|------------|
| Player has 0 journal entries | Starter deck only (5 cards). First harvest gives their first real card. |
| Player has >13 of a suit in Collection | They choose which 13 go in the Active Deck. Extra cards stay in Collection. |
| Player levels a card to 5 | Max level. Consuming more cards does nothing. Can be "prestiged" (future expansion). |
| Player fills all 52 slots | Milestone triggers. Narrative beat. Heaven band unlocks. No mechanical cap beyond this. |
| Player feeds their last ♠ card | That suit slot becomes empty → starter replacement card fills it. The game cannot break. |
| Player gets duplicate emotions | Each harvest produces a unique card (different journal text, different name). No true duplicates. |
| Daily streak resets | No penalty. Streak counter visible in menu. Resets to 0 on missed day. |
| ♦ suit never filled | The player can still play. ♦ cards are strong but not required for story completion. |

---

## Summary: The 52 Facts

| Fact | Detail |
|------|--------|
| Deck size | 52 cards exactly — 13 per suit |
| Suits | ♠ Wake Up, ♥ Clean Up, ♣ Grow Up, ♦ Show Up |
| Unique constraint | No duplicate cards in the deck |
| Card sources | 5: harvest, story, trigram NPCs, friction encounters, real-world |
| Cards are destroyed | Only by feeding them for XP |
| Empty slots | Filled with basic starter cards |
| Milestone | 52 unique cards → Heaven band |
| Primary use | Tactical RPG combat (draw 7, play with Qi) |
| Secondary use | Alignment weighting in friction encounters |
| Tertiary use | Show Up integration check |
| First-time player | Starts with 5 cards after tutorial |
| Max cards owned | No cap on Collection size |
