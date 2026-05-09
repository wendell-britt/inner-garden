# Inner Garden — Game Design Spec

> A game about transforming real emotions into virtual power.
> Two types of content: **Game Content** (narrative, world, mechanics) and **User Generated Content** (journal entries, emotional data, harvested cards).

**Calrunia canon for tools/agents:** [Calrunia Game World/NATIONS_CANON.md](Calrunia%20Game%20World/NATIONS_CANON.md) — five nations (including **Virelune**), EA channels, sects. Generative Q&A pass: [Calrunia Game World/GENERATIVE_QUESTIONS_WORKTHROUGH.md](Calrunia%20Game%20World/GENERATIVE_QUESTIONS_WORKTHROUGH.md).

**bars-engine bridge (inventory + low-hanging fruit):** [BARS_ENGINE_INNER_GARDEN_GAP.md](BARS_ENGINE_INNER_GARDEN_GAP.md).

---

## 1. The Four Pillars (Core Game Loop)

### WAKE UP
Discover new skills, cards, lore, and real-life intentions.
- **Prologue cutscene:** A wounded wandering cultivator gives the player their first card. Farmer → cultivator.
- **Tutorial:** Learn farming, meditation, basic cards on the starting farm (Argyra, Lake trigram).
- **Character creation:** After tutorial, pick nation, trigram alignment, appearance. The open world begins.
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

## 2. Travel between nations (design canon)

Canonical detail and rationale live in [Calrunia Game World/GENERATIVE_QUESTIONS_WORKTHROUGH.md](Calrunia%20Game%20World/GENERATIVE_QUESTIONS_WORKTHROUGH.md) §Q2 (locked 2026-05-09). Summary for implementation alignment:

- **Home nation** start; **five** distinct home footprints; **character creation** up front; world **opens** on **story + character**, not grind.
- **Border guard** teaches requirements to **leave home**; two **story** passes — **sect leader** and **nation head** — **order is player-chosen** (branching).
- **Travel payoff:** nation-lensed **moves** / alchemy; **foreign** treatment modulated by **nation and sect** relations.
- **Fast travel:** expensive without **patronage**; **story-unlocked fast travel home** supports **home BAR / seed tending**. **Temple** routes cost **story / Qi / emotion**, not mainly coin; **non-temple** fast travel stays **economic + patronage**.
- **Foreign borders on foot:** **mixed** symmetry (one-way or re-locked borders allowed). **Remote plots:** climate and travel friction; **no** dedicated remote-plot cap/decay for now.
- **Five border guard NPCs:** same **role archetype**, different **national flavor**.
- **Deferred:** how **bars-engine** / journal state gates **readiness to petition** for each pass (soft vs hard vs flags-only).

---

## 3. Nation gardens and soil (design canon)

Full notes: [Calrunia Game World/GENERATIVE_QUESTIONS_WORKTHROUGH.md](Calrunia%20Game%20World/GENERATIVE_QUESTIONS_WORKTHROUGH.md) §Q3 (locked 2026-05-09). Summary:

- **Scenes / plots:** **Not** limited forever to a **single** garden map; **multiple scenes or instanced tillable plots** may ship **early** if cost is low (still not a requirement for **five** full nation-sized gardens at MVP).
- **Sites:** **Home** anchor plus **remote / regional** tillable tiles as the world and [§2 travel](#2-travel-between-nations-design-canon) grow; **climate and travel** stay the main remote friction (per Q2).
- **Nation soil:** **Mechanical** modifiers — growth, yield bands, mutations, **mismatch penalties or bonuses**; teach at **advanced** tutorial depth.
- **Cross-planting:** **Allowed**; mismatch is **systemic cost**, not a default ban.
- **Deferred:** whether **“Inner Garden”** names the whole product, the **home** plot, or both in different contexts — **TBD**.

---

## 4. World map, bars forest, and trigram faces (design canon)

Details: [Calrunia Game World/GENERATIVE_QUESTIONS_WORKTHROUGH.md](Calrunia%20Game%20World/GENERATIVE_QUESTIONS_WORKTHROUGH.md) §Q4–Q8 (2026-05-10). Summary:

- **Nation ↔ element (Wu Xing shorthand):** **Argyra — Metal; Pyrakanth — Fire; Virelune — Wood; Meridia — Earth; Lamenth — Water** — same as [NATIONS_CANON.md](Calrunia%20Game%20World/NATIONS_CANON.md) EA channel column.
- **Map model:** **Hybrid** — **fixed** authored map for **story** continuity; **procedural forest** (or equivalent exploratory space) driven by **bars-engine** / **emergent player need** (BAR-linked — implementation TBD in gap doc).
- **Trigram friction (Q6):** **Open** until **surfaces** (where pair-friction lives) and **trigram ↔ bars-engine archetype** mapping are specified.
- **Who “is” the trigram (Q7):** **Templates**; **sect heads** are the primary **faces**; sect **members share archetype**, not necessarily **nation**.
- **Changing minds (Q8):** **No** dedicated **flip-NPC-decision** mechanics yet; **story / template** hooks allowed once **opinion → narrative** surfaces exist.

---

## 5. NPC services, sect standing, and pantheon (design canon)

Details: [Calrunia Game World/GENERATIVE_QUESTIONS_WORKTHROUGH.md](Calrunia%20Game%20World/GENERATIVE_QUESTIONS_WORKTHROUGH.md) §Q9–Q13 (2026-05-10). Summary:

- **NPC services (Q9):** **Any** NPC can **quest / sell / teach** when the game supports it. **Quests and abilities are cards** (same broad card model). **Sect / trigram–aligned** NPCs give **sect-flavored** quests.  
- **“Alignment” (Q10):** No separate trigram tally — use **sect contribution / standing** in the player’s **sect** as the primary **alignment** analogue.  
- **First Cultivators (Q11):** Discovery through **lore** plus **milestone NPC** beats.  
- **S / D / N (Q12):** **Emotional-alchemy elements**; **energy** from each stance’s levels **applies differently** across systems (pipelines TBD).  
- **Pantheon (Q13):** Each nation’s **S/D/N = its three First Cultivators**; **15** total — **many names still WIP** in repo text ([NATIONS_CANON.md](Calrunia%20Game%20World/NATIONS_CANON.md)).

---

## 6. Genre, journal politics, pacing, and empty-deck rule (design canon)

Details: [Calrunia Game World/GENERATIVE_QUESTIONS_WORKTHROUGH.md](Calrunia%20Game%20World/GENERATIVE_QUESTIONS_WORKTHROUGH.md) §Q14–Q20. Summary:

- **Q14 “achieving heaven”:** **Cultivation level / tier bands** are the mechanical spine; **lore** (Kerath, Verathane, etc.) **dresses** those beats. Reward tables per band **Open**.  
- **Q15:** **Gardening and card battles equally** co-primary for pitch and long-term design (vertical slice order may still favor garden first).  
- **Q16:** Journal **biases** nation **flavor** on seeds/cards (no forced nationality); **mid-game** **political ripples** (reputation / branches).  
- **Q17:** Same as [§3](#3-nation-gardens-and-soil-design-canon) / workthrough **Q3** (nation soil modifiers, cross-planting).  
- **Q18:** **Empty deck** → **retreat / exit** and earn cards through **journal + harvest** (or acquisition); **no** silent auto-filler deck for combat.  
- **Q19:** Voice/register — **proposal only** in workthrough (deferred).  
- **Q20:** **Nation and sect arcs parallel** (not globally hour-gated); **~20h design budget per arc** after you commit to that thread.

---

## 7. Combat System

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

## 8. Card System

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

## 9. Five Nations of Calrunia (World Design)

Canon source: [NATIONS_CANON.md](Calrunia%20Game%20World/NATIONS_CANON.md) — full Q&A: [GENERATIVE_QUESTIONS_WORKTHROUGH.md](Calrunia%20Game%20World/GENERATIVE_QUESTIONS_WORKTHROUGH.md).

| Nation | EA Channel (Emotion) | National Trigram | Secondary Trigram | Border |
|--------|---------------------|------------------|-------------------|--------|
| **Argyra** | Metal / Fear | Lake | Mountain | Argyra ↔ Meridia |
| **Pyrakanth** | Fire / Anger | Fire | Thunder | Pyrakanth ↔ Virelune |
| **Virelune** | Wood / Joy | Wind | Thunder | (rival tension with Pyrakanth) |
| **Meridia** | Earth / Neutrality | Earth | Mountain | (shared stillness with Argyra) |
| **Lamenth** | Water / Sadness | Water | Wind | grief that moves through |

**8 Sects:** 5 national + 2 border (Mountain, Thunder) + 1 floating (Heaven).

**Genre:** Tactical RPG (gridless). Encounters use gridless tactical compass (card-range, line-of-sight, positioning). Not a Slay-the-Spire lane system.

### Regional Gardening
- Each nation has distinct soil identities — mechanical modifiers on growth rate, yield bands, mutation tables.
- Cross-planting (Virelune seed in Argyran soil) has penalties or bonuses based on elemental compatibility.
- Remote tillable sites beyond the home garden exist but are not required for first ship.

### Travel Between Nations
- Travel is gated by cultivation tier and story milestones (discovery, not combat).
- Each region opens up one-way until the player reaches a key milestone that allows return.
- "Journey Begins" map-state: the player's home garden is their starting nation.

---

## 10. Pantheon (15 Aspected Gods)

Canon source: [GENERATIVE_QUESTIONS_WORKTHROUGH.md](Calrunia%20Game%20World/GENERATIVE_QUESTIONS_WORKTHROUGH.md) §12–13.

**Structure:** 5 nations × 3 aspects = 15 First Cultivators.

| Aspect | Function | Related Trigram |
|--------|----------|----------------|
| **Satisfaction** | Promotes Transcend moves | Lake, Heaven, Fire |
| **Dissatisfaction** | Promotes Descend + Control moves | Thunder, Water, Wind |
| **Neutral** | Accesses both (underpowered, sustainable) | Mountain, Earth |

**Documented in-repo:** Argyran triad (Verathane-Satisfaction, Kerath-Dissatisfaction, Caelath-Neutral), Pyrakanth Dissatisfaction (Cindrel). Remaining 11 aspect-names are canon in vault but not yet promoted to this repo.

**Discovery:** Via trigram advocates — each advocate's alignment (S/D/N) determines which aspect they represent. Player alignment is the weighted average of choices made during trigram friction encounters.

---

## 11. Cultivation Heaven Bands

Canon stub: [CULTIVATION_HEAVEN_BANDS.md](Calrunia%20Game%20World/CULTIVATION_HEAVEN_BANDS.md).

| Band | Name | Range | Gates |
|------|------|-------|-------|
| `band_0` | Mortal / Tutorial | — | Prologue, base garden, combat tutorial |
| `band_1` | TBD | e.g. 1–3 | First nation unlock |
| `band_2` | TBD | e.g. 4–6 | Second nation + border region |
| `band_3` | TBD | e.g. 7–9 | Third nation, pantheon discovery |
| `band_heaven` | Heaven Prestige | top | Ascension-flavored cards, optional endgame |

**Rule:** Bands gate systems; main story does not require top band. Wire via `HEAVEN_BANDS` config in `CultivationSystem.js`.

---

## 12. Trigram NPCs (8 Design Advocates)

Each trigram is an NPC with a named design philosophy, a friction enemy, and a service to the player.

| Trigram | NPC Name | Philosophy | Friction With | Service |
|---------|----------|------------|---------------|---------|
| Heaven | The Bold Heart | First precision, decisive action | Earth | Unlocks first nation travel |
| Earth | The Devoted Guardian | Warmth, care, iteration | Heaven | TBD |
| Fire | The Truth Seer | Clarity, illumination | Mountain | Reveals card metadata |
| Water | The Danger Walker | Depth, navigation of complexity | Lake | Inner demon location |
| Wind | The Subtle Influence | Gradual change, shaping | Thunder | Cross-planting unlocks |
| Thunder | The Decisive Storm | Breakthrough, disruption | Wind | Battle system unlock |
| Mountain | The Still Point | Boundaries, restraint | Fire | Meditation upgrades |
| Lake | The Joyful Connector | Shared delight, beauty | Water | Card sharing / trade |

**Friction Encounters:** Paired trigrams that disagree (e.g. Heaven vs Earth). Player witnesses their debate and chooses a path — this choice affects alignment (Satisfaction/Dissatisfaction/Neutral) and unlocks different rewards.

---

## 13. Save File

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

## 10. Battle Card Layout (Mock)

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

## 11. Implementation Plan (Ordered)

### Phase 1: Save System ✅ (Done)
- `js/systems/SaveManager.js` — Read/write to localStorage
- Save/load player state, deck, farm, story flags, story flags
- Auto-save hooks in Game.js

### Phase 2: Card Data Model
- `js/data/Cards.js` — Card template definitions, name generators
- `js/systems/CardSystem.js` — Deck management, card creation from harvest
- Card rendering in HUD

### Phase 3: Card Inventory UI
- View deck in menu (I key)
- Sort by element, rarity, level
- Select cards for battle loadout

### Phase 4: Prologue & Tutorial
- Opening cutscene (wounded wanderer gives "The Wanderer's Gift" wild card)
- Tutorial farm map (Argyra, Lake trigram, "Argyran Gate" manual)
- Key fragment → card unlock progression for 13-card manual
- "Years later..." character creation: nation, trigram alignment, appearance

### Phase 5: Trigram NPCs (8 Advocates)
- 8 trigram NPCs with manifestos and friction pairs
- Friction encounters (philosophical debates with alignment choices)
- Each NPC grants a unique service unlock
- Alignment tracking (Satisfaction/Dissatisfaction/Neutral)

### Phase 6: Battle System (Tactical RPG, Gridless)
- `js/systems/BattleSystem.js` — Turn structure, Qi management
- `js/entities/Enemy.js` — World enemy and inner demon
- Real-time movement + time-freeze hand
- Card range, line-of-sight, positioning
- Card resolution and damage calculation

### Phase 7: Five Nations World
- 5 nations with distinct soil mechanics, climate, seed modifiers
- Travel gated by cultivation tier + story milestones
- Home garden in starting nation; remote tillable sites per nation

### Phase 8: Full Encounter Pipeline
- World map / encounter nodes
- Inner demon generation from journal data
- Rewards pipeline (story flags, card seeds, exp)
- Pantheon alignment tracking

### Phase 9: Cultivation Heaven Bands
- Tiered unlocks (band_0 through band_heaven)
- Each band gates systems, not story
- `HEAVEN_BANDS` config in CultivationSystem.js

### Phase 10: Cutscenes & Story
- Camera movement, timed dialog reveals
- Chapter transitions
- Friction encounter cutscenes

### Phase 11: Polish
- Card animations (play, draw, discard)
- Enemy attack patterns
- Elemental advantage system (Wu Xing generation cycle)
- Defeat → forced meditation → retry

---

## 12. Folder Structure (Updated)

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
│   ├── Nations.js         ← NEW (five nations + soil data)
│   ├── Trigrams.js        ← NEW (8 trigram NPC data)
│   ├── Pantheon.js        ← NEW (15 aspected gods)
│   └── StoryScript.js
├── ui/
│   ├── HUD.js
│   ├── Menu.js
│   └── BattleUI.js        ← NEW
    ├── DialogBox.js
    ├── CardView.js         ← NEW
    └── BattleUI.js         ← NEW
```

---

## 13. Elemental Advantage — Wu Xing Generation Cycle

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

## 14. Player Progression (Start State)

The player starts with nothing. No deck, no seeds, no tools.
- The entire tutorial (prologue + first journal + first plant + watering can from Wu) must be completed before the player has anything resembling a working deck
- The first harvest gives the first card
- Cards accumulate over sessions — persistence is essential

## 15. Open Questions (Deferred)

- Should Inner Demons use the EXACT text from journal entries? (e.g. "Shadow of 'I felt angry at my boss'")
- Elemental advantage: flat multiplier or rock-paper-scissors?
- Should cards have a "memory" — showing how many times they've been played / what battles they've won?
- Multi-card combos: do certain emotion pairs create combo effects when played together?
- What happens when the player hasn't journaled in a while? Does the deck shrink? Do basic Meditation cards fill in?
