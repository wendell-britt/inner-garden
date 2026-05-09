# Gap analysis — bars-engine × Inner Garden (Calrunia)

**Purpose:** Compare what exists in **bars-engine** (full-stack narrative / BAR / campaign product) vs **inner-garden** (canvas cultivation prototype), spot duplication and holes, and prioritize **low-hanging integration fruit**.

**Repos:**  
- bars-engine: Next.js app + Prisma/Postgres + Python backend (strands, MCP, etc.) — typical clone `~/bars-engine`.  
- inner-garden: static HTML5 canvas game + lore markdown — this folder.

**Related:** [DESIGN.md](DESIGN.md), [Calrunia Game World/NATIONS_CANON.md](Calrunia%20Game%20World/NATIONS_CANON.md), [Calrunia Game World/TOOL_PROMPTS_ATTACHMENT.md](Calrunia%20Game%20World/TOOL_PROMPTS_ATTACHMENT.md). **Integration stubs:** §10 (proc forest, trigram surfaces, S/D/N consumers).

**Vault (Obsidian):** `The Library/02 Index/KEYTERM-INTEGRITY-PASS.md` defines **integrity passes** for doc clusters like this; Sorceress/bars bridge notes live under `04 Quests/Orientation Quests/How-Tos/Bridge Sorceress to Cursor and Zo.computer/`.

---

## 1. Architecture snapshot

| Dimension | bars-engine | inner-garden |
|-----------|----------------|--------------|
| **Runtime** | Next.js 16, React 19, Node | Vanilla JS, Canvas 2D |
| **Persistence** | PostgreSQL + Prisma, auth, uploads | `SaveManager` + localStorage |
| **Deployment** | Vercel, env switching, CI-heavy | Static hosting (GitHub Pages, Zo, etc.) |
| **Core loop** | BAR capture → quests / campaigns / CYOA / hand / moves | Emotion → seed → farm → harvest → cards (planned combat) |
| **World metaphor** | Lobby/world rooms, Pixi map surfaces, **bars/garden** routes | Single garden scene + NPC dialog |
| **Lore in-repo** | Wiki routes (`/wiki/nations`, emotional alchemy, 321…), DB-seeded content | `Calrunia Game World/`, `lore/`, `NATIONS_CANON.md` |
| **Nation model** | Prisma nations, avatar sprites `{nation}-{archetype}`, `nation-profiles` for narrative transformation | Five emotion elements in UI; **no nation zones** yet |
| **Trigrams / pantheon** | I Ching flows, archetypes, extensive lib tests | Markdown pantheon + trigram advocate docs; **not wired** to gameplay |

**Takeaway:** These are complementary stacks. Integration should assume **API + shared data contracts**, not “paste React into canvas” on day one.

---

## 2. Inventory — what bars-engine already has (high value for Calrunia)

*Derived from `package.json`, `src/lib/` layout, and `src/app` routes — non-exhaustive but decision-grade.*

| Capability | Where / notes | Reuse for Inner Garden |
|------------|----------------|-------------------------|
| **BAR lifecycle** | `/create-bar`, `/capture`, `/bars`, share tokens | Export emotional payload → seed JSON for IG |
| **321 / shadow** | `/shadow/321`, daemons, narrative transformation | Same “journal → structured moves” pipeline IG wants |
| **Emotional alchemy** | `src/lib/alchemy`, wiki `/wiki/emotional-alchemy` | Align IG crop stages / virtues with move types |
| **Nation profiles** | `narrative-transformation` nation profiles (Argyra=fear/metal, Pyrakanth, **Virelune**/joy/wood, Meridia, Lamenth) | **Single source** for nation-flavored prompts & IG biome modifiers |
| **Quest / CYOA** | Twine IR, campaign hub, adventure play | IG “chapters” could be thin CYOA exports or linked hubs |
| **Hand / cards / charges** | `/hand`, transformation encounters | IG card schema in DESIGN.md can map to charge/move vocabulary later |
| **Sprites / zones** | Scripts: `sprites:nation-placeholders`, `assets:zone-textures`, Pixi rooms | IG already uses PNG atlas; can align filenames with bars naming |
| **Strands / GM agents** | FastAPI backend, strand consult scripts | Lore-heavy passes stay in bars-engine; **ship summaries** into IG `StoryScript` |
| **Wiki nations** | `/wiki/nations`, `/nation/[id]` | Publish **same canon** as `NATIONS_CANON.md` (or embed iframe) |

---

## 3. Inventory — what inner-garden already has

| Capability | Files / notes | bars-engine overlap |
|------------|---------------|---------------------|
| **Farming loop** | `FarmingSystem.js`, crops, plots, time | None equivalent — unique IG surface |
| **Cultivation tiers** | `CultivationSystem.js` | Loosely parallels progression / charge mastery |
| **Emotion → seed → harvest** | `EmotionSystem.js`, `Seeds.js`, `Emotions.js` | BAR + metabolization is the **semantic** twin |
| **Quest scaffolding** | `QuestSystem.js`, `Quests.js`, `StoryScript.js` | Campaign quests are richer — IG needs thinner glue |
| **Save/load** | `SaveManager.js` | bars-engine: DB — bridge via export/import JSON |
| **Asset pipeline** | `AssetLoader.js`, `assets/sprites/*`, `palette.json`, `generate-assets.mjs` | Same asset discipline as bars-engine scripts |
| **Calrunia lore** | `Calrunia Game World/`, pantheon markdown | Vault + IG — bars-engine wiki may lag |

---

## 4. Explicit mismatches to fix early

| Issue | Detail | Action |
|-------|--------|--------|
| **Fear ↔ element** | IG `Emotions.js` assigns **Fear → water**; Calrunia canon **Fear → metal (Argyra)** ([NATIONS_CANON](Calrunia%20Game%20World/NATIONS_CANON.md)). | Pick **gameplay canon**: either change IG data or document “IG uses Taoist water=fear” **only** for Inner Garden metaphor — avoid silent drift. |
| **“Garden” word** | bars-engine has `/bars/garden` — may differ from IG’s farm loop | Name collision audit when linking UX |
| **Duplicate lore trees** | `Calrunia Game World/` vs `lore/Calrunia Game World/` | Delete or symlink one; CI/manifest one path |

---

## 5. Gap summary (big rocks)

1. **No shared package or JSON schema** linking BAR fields ↔ IG seed/card records.  
2. **No auth bridge** — IG is offline-first; bars-engine is account-centric.  
3. **Nation / pantheon / trigram systems** exist as **docs** in IG; bars-engine has **code + wiki** — not connected.  
4. **Combat / deck** in IG is mostly DESIGN — bars-engine has richer encounter/move infrastructure.  
5. **Calrunia vertical slice** undefined: one BAR-powered farming session vs full campaign.

---

## 6. Low-hanging fruit (recommended order)

|Tier| Effort | Impact | Concrete step |
|----|--------|--------|----------------|
| **L1** | Hours | High | **Canon lockfile:** add `Calrunia Game World/world-contract.json` (nations, EA channels, national trigram, emotion→element **explicit**) — copy fields from `NATIONS_CANON.md` + bars `nation-profiles` ids. IG reads it; bars-engine wiki links to GitHub raw or synced doc. |
| **L2** | Hours | High | **Emotion table reconcile:** one spreadsheet-style module `js/data/WorldContract.js` imported by `Emotions.js` / seeds — fix Fear/metal vs Fear/water deliberately. |
| **L3** | 0.5–1 d | High | **Manual BAR → seed:** define JSON schema `{ barText, emotionId, nationHint?, createdAt }`; bars-engine export script or “download payload” button spec; IG `SaveManager` import tab or dev console loader. |
| **L4** | 0.5–1 d | Medium | **Deep link:** `index.html?campaignRef=` opens IG with preset chapter — bars-engine campaign page links out to hosted IG build. |
| **L5** | 1–2 d | Medium | **Trigram dialog wiring:** load first manifesto snippet into `StoryScript` / `DialogBox` for one NPC — proves lore→runtime path without DB. |
| **L6** | 1–2 d | Medium | **Sprite naming:** align `assets/sprites` keys with `bars-engine` nation/archetype slug conventions where overlap matters (avatar docs in bars `avatar-utils`). |

---

## 7. Medium lift (after L1–L3)

- **Read-only API:** IG static site calls bars-engine `GET /api/...` with token for “my latest BAR” → auto-plant seed (CORS + auth design).  
- **Embed:** iframe IG inside `/campaign/.../inner-garden` for unified session.  
- **Shared npm workspace** — extract `@calrunia/world-contract` used by both repos (only when duplication hurts).

---

## 8. Large / strategic

- **Unified progression:** cultivation tier ↔ player level ↔ charge unlocks — needs game design sign-off.  
- **Pixi vs Canvas:** optional port of IG farm to Pixi **inside** bars-engine world room (reuse map infra).  
- **Strand-generated quests:** backend generates quest JSON → IG `Quests.js` hotload — schema negotiation.

---

## 9. Suggested next artifact

1. **`world-contract.json`** + **`WorldContract.js`** (L1–L2).  
2. **`BAR_TO_SEED_SCHEMA.md`** with one example payload (L3).  
3. Ticket list in GitHub issues mapped to L4–L6.

---

*Drafted 2026-05-08 from filesystem survey (`~/bars-engine`, inner-garden clone under vault). Update when either repo gains Calrunia-specific routes or IG ships combat MVP.*

*Integrity pass 2026-05-08:* corrected **Related** pointers (removed misleading GitHub URL); `GAP_ANALYSIS.md` nations blurb aligned with **Virelune** + `NATIONS_CANON.md`. Open item: Fear→water vs Fear→metal still flagged in §4 until gameplay decision.*

---

## 10. Design contract stubs (generative checklist — 2026-05-10)

These sections turn **open design questions** into **integration-facing specs**. Numbers and names stay TBD until authoring; structure is stable for bars-engine ↔ Inner Garden negotiation.

### 10.1 Procedural forest (Q5) — BAR-driven exploratory space

| Field | Intent | TBD |
|-------|--------|-----|
| **Trigger** | Instance (or regenerate) when **emergent player need** crosses a threshold — e.g. quest flag, BAR metabolization event, sect arc entry | Exact signals from bars `strands` / IG `storyFlags` |
| **Input payload** | Snapshot of **BAR** or **journal-derived** structured fields (emotion tags, nation hint, cultivation tier) | JSON schema shared with `BAR_TO_SEED_SCHEMA` (§9) |
| **Output** | Tile graph or room list + encounter table weights | Pixi room vs IG canvas chunk format |
| **Persistence** | Session-only vs save-keyed | `SaveManager` key naming; DB row in bars if hosted |
| **Reroll rules** | When forest can regenerate vs frozen after boss | Design |

**Next step:** One **example** “forest request” JSON + acceptance criteria in `BAR_TO_SEED_SCHEMA.md` or sibling `PROC_FOREST_REQUEST.md`.

### 10.2 Trigram-pair friction surfaces (Q6)

Candidate **surfaces** where two trigram stances can **collide** (before picking combat vs dialogue resolution):

1. **Sect-head dialog** — petition / teaching beats (see generative Q7–Q9).  
2. **Border tiles** — Mountain / Thunder border sect encounters.  
3. **Card encounter modifiers** — stance tags on enemy or arena.  
4. **Cultivation exam / ritual** — non-combat gate with pair choice.  
5. **bars-engine CYOA node** — branch on archetype IDs; export flag to IG.

**Trigram → bars-engine archetype:** Map **national / floating / border** sect to existing bars `avatar` / `nation-profiles` archetype slugs (e.g. Lake → *Joyful Connector*). Inner-garden advocate filenames under `NPC_Design_Advocates/` are **lore**; runtime mapping table lives in **`world-contract.json`** (§6 L1) when created.

### 10.3 S / D / N alchemy energy consumers (Q12)

| Consumer | Satisfaction energy | Dissatisfaction energy | Neutral energy |
|----------|---------------------|------------------------|----------------|
| **Garden / harvest** | TBD modifier | TBD modifier | TBD stabilizer? |
| **Card craft / upgrade** | TBD | TBD | TBD |
| **Combat (Qi, stance)** | TBD | TBD | TBD |
| **Story gates** | TBD unlock | TBD unlock | TBD unlock |
| **Sect contribution** | TBD rep vector | TBD | TBD |

**Next step:** After IG `CultivationSystem` and bars `alchemy` wiki align, fill one **row** end-to-end as a vertical slice.

---

*§10 added 2026-05-10 to chase [GENERATIVE_QUESTIONS_WORKTHROUGH.md](Calrunia%20Game%20World/GENERATIVE_QUESTIONS_WORKTHROUGH.md) next-actions.*
