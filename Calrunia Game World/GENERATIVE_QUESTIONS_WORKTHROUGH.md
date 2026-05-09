# Generative questions — workthrough (canon + design decisions)

Source prompts: [GENERATIVE_QUESTIONS.md](../GENERATIVE_QUESTIONS.md).  
Nation canon: [NATIONS_CANON.md](NATIONS_CANON.md).

**Legend:** **Canon** = locked in vault/repo architecture; **Open** = not specified — pick later; **Proposal** = suggested default for implementation.

---

## The nations & world

### 1. What is the fifth nation?

- **Canon:** **Virelune**. EA channel **Wood/Joy**; national sect trigram **Wind**; secondary cultivation trigram **Thunder**; Thunder border with **Pyrakanth**.  
- **Pantheon:** Each nation has **three aspects** (Satisfaction / Dissatisfaction / Neutral). Virelune’s three **named First Cultivators** are not all written in this repo yet — see [NATIONS_CANON.md](NATIONS_CANON.md) pantheon section.  
- **Emotional aspect:** Joy / growth / reaching / exuberance (Wood), with Thunder’s initiative in motion.

### 2. How does travel between nations work in gameplay?

- **Canon (Socratic lock, 2026-05-09):** Lore still implies borders, political tension, and distinct regions; the following is **design canon** for Inner Garden unless explicitly revised.

**World shape**

- Player **starts in a home nation** (one tile set / region); they can eventually reach others.
- The world **opens over time**, gated by **story + character development** (not raw grind).
- **Character creation** is required up front.
- **At least five distinct home-nation starting footprints** (five home spawn patterns or regions).

**Leaving home (spine — do not simplify away without explicit consent)**

- A **border guard NPC** explains what is required to **leave the home nation**.
- Two **passes / clearances**, both earned through **story** (not a harvest-count shortcut):
  1. **Sect leader** authorization  
  2. **Nation head of state** authorization  
- **Player-chosen order** of those two passes → **different story branches** depending which clearance is pursued first (no fixed global order).

**What travel gives (systems meaning)**

- **More moves** — emotional alchemy framed **from that nation’s perspective**.
- **NPC social layer** — treatment when **foreign**, modulated by **nation ↔ nation** and **sect ↔ sect** relations.

**Fast travel and return home**

- Fast travel exists but is **economically punishing** without **patronage** (nation or sect).
- **Story-unlocked fast travel home** is intentional so players can keep **watering / tending BAR seeds** at the **home** garden (emotional anchor + mechanical need).
- **Temple / ritual transit:** paid in **story, Qi, and emotional cost**, not mainly coin; **patronage + economy** still govern **non-temple** fast travel.

**Walking vs other presentation**

- **Walking is not identity load-bearing** for “Calrunia”; **nation lens, moves, and NPC stance** are. Travel may be presented in ways other than literal walking.

**Cross-border on foot (foreign ↔ foreign, not “go home”)**

- **Mixed symmetry:** some borders may be **one-way** or **re-locked after story events**; not every frontier is a symmetric two-way crossing once passes exist. Fast travel home mitigates **stranding** without forcing every border to be two-way.

**Remote planting (non-home plots)**

- Remote planting exists; **climate / seed fit** and **travel cost** (including lots of walking when seeking right biomes) are the pressure — **no** dedicated hard **cap** or **decay** on remote plots for now.

**Border guards as NPC set**

- **Five border guards**, **same archetype**, **different national flavor** (one template, five voices).

**Implementation note (non-canon stub direction)**

- A **first_harvest → same-map warp** style prototype is **misaligned** with this spine; any future vertical slice should orbit **border guard + dual pass + character creation + five homes**, not harvest count alone.

- **Open:** **bars-engine ↔ readiness** — whether petitioning for each pass uses **BAR / journal evidence** (soft hint vs hard gate vs pure narrative flags) remains **TBD** until story is tied to engine data.

### 3. Does each nation have its own garden?

- **Canon (Socratic lock, 2026-05-09):**

**Hub count vs vertical slice**

- **Not** canonically locked to a **single garden scene for the life of the project**. **Multiple garden scenes or instanced tillable plots may ship early** when cost is reasonable — this is **not** a mandate for **five full nation maps at MVP**, but it **rejects** “only one hub until late game” as a hard rule.

**Nation-tagged soil and where you till**

- **Nation regions and travel** ([Q2](#2-how-does-travel-between-nations-work-in-gameplay)) can include **additional tillable sites** beyond the player’s **home** practice space. **Remote planting** stays framed by **climate, seed fit, and travel cost** from Q2; remote tiles are **not** required to be “a second full Inner Garden map per nation” at first ship.

**Mechanics**

- Where soil carries **nation / biome identity**, use **mechanical modifiers** — e.g. **growth rate**, **yield bands**, **mutation tables**, **penalties or bonuses for seed–soil mismatch** (nation channel vs plot tag). Rules should become **player-readable** at an **advanced tutorial** tier.

**Cross-planting**

- **Cross-planting stays allowed** — mismatch is **cost and table-driven flavor**, not a default **hard ban** (story-specific lockouts remain possible later).

- **Open:** Capital-**I** **“Inner Garden”** as product/lore name — whether it means the **whole game**, the **home-anchored plot**, or **both in different contexts** — **TBD** (structure and mechanics above are locked; naming deferred).

### 4. What emotion/element does each nation correspond to?

- **Canon (EA channels, not classical wuxing only):**  
  - Argyra — **Metal / Fear** (national **Lake**; secondary **Mountain**)  
  - Pyrakanth — **Fire / Anger** (**Fire** + **Thunder**)  
  - Virelune — **Wood / Joy** (**Wind** + **Thunder**)  
  - Meridia — **Earth / Neutrality** (**Earth** + **Mountain**)  
  - Lamenth — **Water / Sadness** (**Water** + **Wind**)  
- **Plain shorthand (Wu Xing–style element per nation, 2026):** **Argyra — Metal; Pyrakanth — Fire; Virelune — Wood; Meridia — Earth; Lamenth — Water.** Same facts as the table in [NATIONS_CANON.md](NATIONS_CANON.md) — repeated here so generative Q4 and tools do not re-infer from filenames or legacy prompts alone.
- **Note:** Generative doc’s “Argyra = Neutral/Control (Mountain Caelath)” mixes **pantheon NPC naming** with **EA channel** — **Neutral anchor** in triad language is often **Meridia** at nation scale; Argyra is **fear/precision** + **Lake/Mountain** stances. Use table above for systems.

### 5. Is the world map fixed or generated?

- **Canon (2026):** **Hybrid.**  
  - **Story layer:** a **fixed** world map (hand-authored regions / continuity for narrative — supersedes the older “Open + proposal-only” note).  
  - **Emergent layer:** **bars-engine** integration supplies a **forest** (or forest-like exploratory space) that is **procedurally generated** as a **function of emergent player need** (BAR / journal-driven need — exact generation contract TBD with bars-engine specs).  
- **Open:** Technical split (instancing, seeding from BAR state, persistence rules) — specify when bridging [BARS_ENGINE_INNER_GARDEN_GAP.md](../BARS_ENGINE_INNER_GARDEN_GAP.md) implementation.

---

## Trigram NPCs & friction

### 6. Trigram friction encounter — what happens?

- **Open — prerequisite design:** Before choosing (a)/(b)/(c)/hybrid combat, define **which game surfaces** host **trigram-pair friction** (dialogue-only, exploration nodes, card encounters, cultivation checks, etc.).  
- **Open — engine alignment:** **Map each trigram to bars-engine-style archetypes** (and national/border sect templates) so friction writes to **one** character system, not a parallel ad-hoc trigram sim.  
- **Proposal (non-blocking):** Prior **(b)-leaning hybrid** — mini-challenges or dialogue stakes, then **card bout** only when stakes are high — remains a **candidate** once surfaces + archetype bridge exist.

### 7. Fixed positions vs moving NPCs?

- **Canon (2026):** The eight **trigram “NPCs” in design docs are templates**, not eight unique wandering demigods.  
- **Face character:** the **sect head** (leader) of each trigram-aligned **sect** carries the voice for that archetype in story.  
- **Membership:** **All members of that sect share the same archetype** (trigram stance / playbooks); they are **not** all the same **nation** — sect identity can cross national lines per sect architecture.  
- **Open:** Literal **map placement** (fixed nodes vs seasonal Heaven vs border tiles) layers on top of this template model — revisit when world map vertical slice is scoped.

### 8. Can the player change a trigram NPC’s mind?

- **Canon (2026):** **No dedicated mechanics yet** for NPCs making **branching decisions** the player must **flip** mid-game; **not rejected** as a **story beat** or **story-beat template** once **surfaces** exist where **NPC opinion shapes the narrative** (reputation, sect stance, chapter flags).  
- **Open:** Trust / forgiveness / memory systems from older proposals — **revive when** opinion → story **surfaces** and **decision-shaped** NPC behavior are in scope.  
- **Proposal (parked):** **Memory + forgiveness curve** — trust meters; extreme picks gate lines without soft-locking entire trigram — **candidate** after surface design.

### 9. Quests, cards, abilities?

- **Canon (2026):** **Any NPC** can **give quests**, **sell cards**, and **teach abilities** when narrative and economy support it — not exclusive to trigram faces.  
- **Canon — unified card model:** **Quests are cards**; **abilities are cards** (same data / play surface family — exact schema TBD in implementation).  
- **Canon — sect flavor:** **Trigram / archetype–aligned NPCs** (sect heads and sect-tied cast) issue **quests whose content is tied to their sect’s** concerns and stance.  
- **Open:** Progression cadence (early vs mid vs late) for which NPC types gate which services — tune per vertical slice.

### 10. Trigram alignment stat?

- **Canon (2026):** There is **no separate “trigram alignment” stat** as originally phrased. The **closest in-world measure** is **sect contribution / standing** in the player’s **sect** (and related reputation) — **one’s standing in one’s sect is the alignment** for archetype loyalty and social consequences.  
- **Open:** How **sect contribution** feeds **deck weights**, **NPC stance**, **endings** — wire when sect systems ship (replaces older generic “hidden trigram meter” proposal unless revived as a UI alias for sect standing).

---

## Pantheon & cultivation

### 11. How does the player discover First Cultivators?

- **Canon (2026):** **Lore** (tablets, books, world text) **plus milestone NPC encounters** — layered discovery, not bosses-only or abstract-only. *(Maps to prior (a)+(c) blend, now locked.)*

### 12. Argyran triad as three-way axis?

- **Canon:** Triad structure exists per nation (three aspects / First Cultivators per nation — see §13).  
- **Canon (2026 — systems meaning):** **Satisfaction, Dissatisfaction, and Neutral** are **elements of emotional alchemy** — **energy** (or “charge”) **derived from each stance’s intensity** can be **applied differently** in crafting, combat modifiers, garden outcomes, or story gates (specific pipelines **Open** per system).  
- **Proposal (non-blocking):** Player-facing **tension meters** per nation, **Argyra first** in UI; **maxing** one aspect → aspect-specific cards + soft-contradiction locks until rebalance ritual — **candidate** once alchemy UX is scoped.

### 13. Other nations’ pantheons?

- **Canon:** **Each nation has its own Satisfaction / Dissatisfaction / Neutral triad** embodied as its **three First Cultivators** (15 named aspect-gods total across Calrunia). Argyran + Cindrel are the most **written in-repo**; the rest are **authoring WIP** — not a cosmology gap, a **documentation** gap.  
- **Not canon:** “Only Argyran triad exists globally” or “other nations worship Argyra’s triad under different names” as the default — reject unless a deliberate heresy plot says otherwise.

### 14. “Achieving heaven” in gameplay?

- **Canon (2026-05-10):** **Achieving heaven** is expressed in systems as **cultivation progression** — **explicit level (or tier) bands** gate when the player is treated as having crossed that threshold. Kerath / Verathane–style **lore** and **story beats** attach to those bands (visions, rituals, chapter unlocks) rather than replacing them.  
- **Open:** Exact numeric thresholds per chapter; which **rewards** unlock at “heaven” bands (cards, passives, cosmetic, optional prestige) — tune in implementation.  
- **Proposal (non-blocking):** **Ascension-flavored** unlocks at top bands; **not** required for **main story completion** unless a branch deliberately demands it.

---

## Game systems & mechanics

### 15. Gardening vs cards — core genre?

- **Canon (2026-05-10):** **Both equally load-bearing** in pitch and core loop — **gardening / emotional farming** and **card encounters** are co-primary, not “body vs soul” hierarchy. Narrative remains **philosophical RPG**; genre labels can still use *emotional farming deck RPG* style copy but **must not** imply one pillar is optional long-term.  
- **Note:** Supersedes prior **“farming sim body, deckbuilder soul”** one-liner for **positioning**; implementation order may still front-load garden in early vertical slices.

### 16. Journaling ↔ nations / pantheon?

- **Canon (2026-05-10):** **Tagged / inferred emotions** from journaling **bias seed and card affinity** toward **nation channels and flavor** — **without** assigning a forced **nationality** to the player. **Mid-game onward**, journaling and harvest choices can create **political ripples** — **faction / sect / nation reputation** shifts that change dialog, prices, or story branches (scope per vertical slice).  
- **bars-engine:** Where BAR mirrors journal state, **prefer one pipeline** into nation-facing systems so flavor bias and reputation stay consistent ([BARS_ENGINE_INNER_GARDEN_GAP.md](../BARS_ENGINE_INNER_GARDEN_GAP.md) — contract **Open**).

### 17. Nation-specific farm plots?

- **Canon:** Same spine as [Q3](#3-does-each-nation-have-its-own-garden) (locked 2026-05-09): **cross-planting allowed**; nation-tagged **soil vs seed mismatch** drives **mechanical** outcomes (penalties, bonuses, mutations) — **advanced tutorial** readability.  
- **Reaffirmed (2026-05-10):** Generative list **Q17** defers entirely to **Q3** — no separate soil rules.

### 18. Empty deck in card encounter?

- **Canon (2026-05-10):** **No auto “Meditation stitch” filler deck** to brute-force combat with an empty pool. If the player has **no playable deck** for the encounter, they **retreat** (or equivalent exit) and **return after journaling / harvest** (or other card acquisition). **Avoid unwinnable traps** with clear UI copy — not by silently padding the deck.  
- **Supersedes** prior “retreat **or** stitch” **proposal**.

---

## Tone & presentation

### 19. Manifesto voice everywhere?

- **Proposal (not locked — 2026-05-10):** **Tiered register** — trigram **manifestos** + **card titles** poetic; **shop/tutorial** plain; NPCs **blend** by character (Heaven NPC more imperative, etc.). User **deferred** locking; revisit when VO/writing pass is scoped.

### 20. Lore pacing — first / tenth / hundredth hour?

- **Canon (2026-05-10):** **Nation paths** and **sect paths** are **parallel** — not **globally time-gated** against each other (no mandatory “you must hit hour X before nation Y”). Player **chooses** which threads to pursue; content **unlocks** by **story / progression in that thread**, not a single global clock.  
- **Arc depth target:** Each major nation or sect **arc**, once entered, aims for roughly **~20 hours** of play **before that arc’s completion** — a **design budget** per thread, not a hard timer.  
- **Proposal (non-blocking / tutorial slice):** Early onboarding can still target **emotion → seed → harvest → one fight** with **light** pantheon exposure; tune independently of parallel arc structure.

---

## Next actions

**Done (artifacts — 2026-05-10):**

- [x] **Meridia Earth vs Lake** — [CALRUNIA-Pantheon-Cosmology.md](../../../../06%20Specs/CALRUNIA-Pantheon-Cosmology.md) Layer 5: Meridia = **Earth + Mountain** (was wrongly Lake + Mountain).  
- [x] **Tool prompts + NATIONS_CANON** — [TOOL_PROMPTS_ATTACHMENT.md](TOOL_PROMPTS_ATTACHMENT.md) (attach list + regenerate note).  
- [x] **Q5 / Q6 / Q12 stubs** — [BARS_ENGINE_INNER_GARDEN_GAP.md](../BARS_ENGINE_INNER_GARDEN_GAP.md) §10.  
- [x] **Q14 band scaffold** — [CULTIVATION_HEAVEN_BANDS.md](CULTIVATION_HEAVEN_BANDS.md) (fill numbers when balancing).  
- [x] **Q13 slot grid** — [PANTHEON_AUTHORING_CHECKLIST.md](PANTHEON_AUTHORING_CHECKLIST.md).

**Still authoring / design:**

- [ ] **Virelune’s three aspects** — name + `Pantheon/*.md` files (see checklist row).  
- [ ] **Remaining First Cultivators** — 11 unnamed slots in [PANTHEON_AUTHORING_CHECKLIST.md](PANTHEON_AUTHORING_CHECKLIST.md).  
- [ ] **Cultivation numbers** — edit [CULTIVATION_HEAVEN_BANDS.md](CULTIVATION_HEAVEN_BANDS.md) + `CultivationSystem.js` when tuned.  
- [ ] **Q19** — lock **tiered register** (or alternative) when VO/writing pass is scoped; until then §19 **proposal** stands.  
- [ ] **Proc forest** — flesh §10.1 into `PROC_FOREST_REQUEST.md` + example JSON (after BAR schema).  
- [ ] **S/D/N table** — fill [BARS_ENGINE_INNER_GARDEN_GAP.md](../BARS_ENGINE_INNER_GARDEN_GAP.md) §10.3 after alchemy vertical slice.  
- [ ] **Trigram ↔ bars slug table** — implement in `world-contract.json` ([BARS_ENGINE_INNER_GARDEN_GAP.md](../BARS_ENGINE_INNER_GARDEN_GAP.md) §6 L1).

---

*Sessions: 2026-05-08 (initial pass); 2026-05-09 (Q2 travel + Q3 gardens/soil); 2026-05-10 (Q4–Q20 generative pass; next-actions checklist chased — cosmology Meridia fix, BARS §10, pantheon/cultivation/tool stubs).*
