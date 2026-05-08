# Inner Garden — Game Design Spec

> A game about transforming real emotions into virtual power.
> Two types of content: **Game Content** (narrative, world, mechanics) and **User Generated Content** (journal entries, emotional data, harvested cards).

---

## 1. The Four Pillars (Core Game Loop)

### WAKE UP
Discover new skills, cards, lore, and real-life intentions.
- Tutorial sequences and narrative reveals
- Unlock new card types / encounter types
- Learn about the world through NPC conversations
- Set intentions: "I want to create a journaling practice" becomes the first seed

### CLEAN UP
Process what you've accumulated — emotionally and materially.
- Farm management: harvest, replant, compost
- Card inventory: organize, combine, upgrade
- Emotional alchemy: transform low-quality seeds into higher forms
- Save file management

### GROW UP
Permanent progression that carries forward.
- Cultivation levels and stat growth
- Card mastery and deck refinement
- Farming skill: higher tier seeds, faster growth, better yields
- Metabolize complexity: turn raw emotional data into refined strategies

### SHOW UP
The main gameplay loop — consistent engagement.
- Daily journaling → seeds → harvest → cards
- Battle world enemies for story progress
- Battle inner demons for character improvement
- Real life consistency is the core mechanic

---

## 2. Combat System

### Real-time with Time-Freeze Cards

- Player moves in real time on an encounter map
- Accessing the card hand **freezes time** (Slay the Spire-style menu)
- Play cards from hand, spend Qi, effects resolve
- Time resumes when hand is dismissed

### Enemy Types

| Enemy | Purpose | Uses |
|-------|---------|------|
| **World Enemies** | Story progress | Game-content cards primarily |
| **Inner Demons** | Character growth | User-content cards primarily |

### World Enemies
- Scripted encounters tied to narrative chapters
- Drop story rewards, game-content card seeds
- Example: "The Gate of Resentment" — a boss that tests your Sadness cards

### Inner Demons
- Procedurally generated from player's own emotional data
- If you've journaled a lot of Anger, you face Anger-themed inner demons
- Rewards: stat boosts, cultivation EXP, card upgrades
- Example: "Shadow of Unprocessed Rage" — scales with player's Anger seed count

### Card Play Flow
```
Encounter starts
  → Player and enemy on grid/arena
  → Real-time movement (dodge, position)
  → Player presses button to access hand → TIME FREEZES
  → Select cards, target, confirm
  → Cards resolve (animations)
  → TIME RESUMES, enemy acts
  → Repeat until victory/defeat
```

---

## 3. Card System

### Card Sources

| Source | Origin | How to Get |
|--------|--------|------------|
| **User Content** | Journal → seed → harvest | Any emotional journal entry |
| **Game Content** | Story rewards / NPC gifts | Quest completion, boss drops, lore discoveries |

Both types are **grown as seeds** and harvested — unified mechanic.

### Card Data Model

```js
{
  id: 'joy_20250308_a1b2c3',       // unique per card
  source: 'user' | 'game',          // origin
  element: 'wood',                  // joy=wood, anger=fire, sadness=water, fear=metal, neutral=earth
  name: 'Sunlit Heart',             // procedurally generated or narrative
  quality: 72,                      // 1-100 → determines power band
  
  // Play
  qiCost: 2,                        // 1-3 based on quality tier
  power: 8,                         // main effect value (quality / 10, rounded)
  
  // Effect
  effectType: 'damage' | 'heal' | 'shield' | 'draw' | 'buff' | 'debuff' | 'combo',
  target: 'enemy' | 'self' | 'ally' | 'all_enemies' | 'all_allies',
  
  // Emotion mapping
  primaryStat: 'strength',          // which cultivation stat this feeds
  emotionId: 'joy',                 // original emotion (user) or narrative theme (game)
  
  // User content
  description: 'I felt joy when my dog ran to me...',  // player's journal text
  
  // Game content
  storyScene: 'wu_gift',            // where this card came from narratively
  
  // Progression
  rarity: 'uncommon',               // common / uncommon / rare / legendary
  level: 1,                         // can be upgraded through use
  timesPlayed: 0,                   // tracks mastery
}
```

### Quality → Rarity Mapping

| Quality Range | Rarity | Qi Cost | Power |
|:---:|:---:|:---:|:---:|
| 1-20 | Common | 3 | 1-2 |
| 21-40 | Uncommon | 2 | 3-5 |
| 41-60 | Rare | 2 | 5-7 |
| 61-80 | Epic | 1 | 7-9 |
| 81-100 | Legendary | 1 | 9-10 |

### Elemental Correspondences

| Emotion | Element | Color | Card Effect Family |
|---------|---------|-------|-------------------|
| Anger | 🔥 Fire | `#ff4444` | Direct damage, double-edged buffs |
| Sadness | 💧 Water | `#4a8aff` | Heal, shield, sustain |
| Neutral (Calm) | 🪨 Earth | `#8a7a5a` | Defense, taunt, armor |
| Fear | ⚔️ Metal | `#c0c0c0` | Control, debuff, draw manipulation |
| Joy | 🌳 Wood | `#44cc44` | Combo, team buff, growth effects |

### Card Name Generation (User Content)

Pattern: `[EmotionAdjective] [Noun]` where:
- Joy → Bright, Warm, Radiant + Heart, Dawn, Blossom, Sunlight
- Anger → Burning, Fierce, Volcanic + Strike, Storm, Ember, Surge
- Sadness → Gentle, Quiet, Deep + Rain, Tide, Melody, Pool
- Fear → Sharp, Cold, Hollow + Edge, Whisper, Mirror, Echo
- Neutral → Steady, Ancient, Rooted + Stone, Gate, Ground, Core

### Cards Per Harvest

1 card per harvest currently. Future expansion:
- Higher quality → chance of bonus card
- Certain seed types → multi-card yield
- Special seasonal conditions

---

## 4. Save File

### What Persists

```
- Player stats (cultivation, level, exp)
- Deck (all owned cards with metadata)
- Seeds inventory
- Farm state (plots, crops, growth progress)
- Story flags (completed chapters, NPC relationships)
- Journal entries (permanent record)
- Time played, total meditations, total harvests
```

### Storage Strategy

```
localStorage key: 'inner_garden_save'
Format: JSON
Auto-save on:
  - Journal entry submission
  - Harvest
  - Battle completion
  - Game close (beforeunload)
Manual save: Menu option
```

---

## 5. Battle Card Layout (Mock)

```
 ┌──────────────────────┐
 │  💛  Sunlit Heart    │  ← Element symbol + Name
 │  ────────────────    │
 │  Qi ●●               │  ← Cost dots (filled = cost)
 │  Power  8            │  ← Numeric effect value
 │  ────────────────    │
 │  "My dog ran to      │  ← Journal excerpt (user)  
 │   me when I came     │     or narrative text (game)
 │   home..."           │
 │  ────────────────    │
 │  🌳 Wood · Epic      │  ← Element + Rarity
 │  Cultivator lv.3     │  ← Card level
 └──────────────────────┘
```

---

## 6. Implementation Plan (Ordered)

### Phase 1: Save System
- `js/systems/SaveManager.js` — Read/write to localStorage
- Save/load player state, deck, farm, story flags
- Auto-save hooks in Game.js

### Phase 2: Card Data Model
- `js/data/Cards.js` — Card template definitions, name generators
- `js/systems/CardSystem.js` — Deck management, card creation from harvest
- Card rendering in HUD

### Phase 3: Card Inventory UI
- View deck in menu (I key)
- Sort by element, rarity, level
- Select cards for battle loadout

### Phase 4: Basic Battle System
- `js/systems/BattleSystem.js` — Turn structure, Qi management
- `js/entities/Enemy.js` — World enemy and inner demon
- Real-time movement + time-freeze hand
- Card resolution and damage calculation

### Phase 5: Full Encounter Pipeline
- World map / encounter nodes
- Inner demon generation from journal data
- Rewards pipeline (story flags, card seeds, exp)

### Phase 6: Polish
- Card animations (play, draw, discard)
- Enemy attack patterns
- Elemental advantage system (Fire beats Wood, Wood beats Water, etc.)
- Defeat → forced meditation → retry

---

## 7. Folder Structure (Updated)

```
js/
├── main.js
├── core/
│   ├── Game.js           ← Orchestrator
│   ├── Input.js
│   ├── Camera.js
│   └── AssetGenerator.js
├── entities/
│   ├── Player.js
│   └── Enemy.js           ← NEW
├── systems/
│   ├── CultivationSystem.js
│   ├── EmotionSystem.js
│   ├── FarmingSystem.js
│   ├── QuestSystem.js
│   ├── TimeSystem.js
│   ├── SaveManager.js     ← NEW
│   ├── CardSystem.js      ← NEW
│   ├── BattleSystem.js    ← NEW
│   └── SceneManager.js    ← NEW
├── data/
│   ├── Emotions.js
│   ├── Quests.js
│   ├── Seeds.js
│   ├── Cards.js           ← NEW
│   └── StoryScript.js     ← NEW
└── ui/
    ├── HUD.js
    ├── Menu.js
    ├── DialogBox.js
    ├── CardView.js         ← NEW
    └── BattleUI.js         ← NEW
```

---

## 8. Elemental Advantage — Wu Xing Generation Cycle

Adopted from the Five Elements (Wu Xing) theory:

```
Wood feeds Fire → Fire creates Earth → Earth bears Metal → Metal carries Water → Water nourishes Wood
```

| Demon Element | Strong Against (+50%) | Weak Against (-25%) | Generates Qi Bonus When Paired With |
|:---:|:---:|:---:|:---:|
| 🔥 Fire | 🪨 Earth | 💧 Water | Generation from Wood |
| 💧 Water | 🔥 Fire | ⚔️ Metal | Generation from Metal |
| 🪨 Earth | ⚔️ Metal | 🌳 Wood | Generation from Fire |
| ⚔️ Metal | 🌳 Wood | 🔥 Fire | Generation from Earth |
| 🌳 Wood | 💧 Water | 🪨 Earth | Generation from Water |

Playing a card whose element is the *generating element* for the current situation grants +1 Qi.

Example: Playing a 🌳 Wood card during a 💧 Water demon encounter generates +1 Qi because Wood feeds Fire, and the cycle passes through... actually, the bonus applies when the player plays the element that FEEDS the element they're fighting. Full rule:

> If your card's element generates the demon's element in the cycle, gain +1 Qi.
> (e.g. Wood → Fire: playing Wood while fighting a Fire demon generates Qi)

## 9. Player Progression (Start State)

The player starts with nothing. No deck, no seeds, no tools.
- The entire tutorial (prologue + first journal + first plant + watering can from Wu) must be completed before the player has anything resembling a working deck
- The first harvest gives the first card
- Cards accumulate over sessions — persistence is essential

## 10. Open Questions (Deferred)

- Should Inner Demons use the EXACT text from journal entries? (e.g. "Shadow of 'I felt angry at my boss'")
- Elemental advantage: flat multiplier or rock-paper-scissors?
- Should cards have a "memory" — showing how many times they've been played / what battles they've won?
- Multi-card combos: do certain emotion pairs create combo effects when played together?
- What happens when the player hasn't journaled in a while? Does the deck shrink? Do basic Meditation cards fill in?
