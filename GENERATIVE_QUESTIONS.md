# Generative Questions for Calrunia's Game Design

> 20 questions to develop the game in alignment with your lore.
> Answer any subset — each answer unlocks concrete implementation paths.

---

## The Nations & World

**1. What is the fifth nation?** Your concept art names four: Argyra, Pyrakanth, Meridia, Lamenth. The fifth appears in the "5 nations group shot.png" but has no standalone file. What is its name, its trigram, its Pantheon deity, and what emotional aspect does it represent?

**2. How does travel between nations work in gameplay?** Walk across a border? Portal at the temple? Unlock via quest completion at cultivation thresholds? Is travel one-way until you prove yourself, or free once discovered?

**3. Does each nation have its own garden?** If so, do seeds planted in Argyra soil grow differently than seeds in Pyrakanth soil? Different growth rates, different stat bonuses, different visual mutations? Or is there one "Inner Garden" that all nations share access to?

**4. What emotion/element does each nation correspond to?** If Argyra is Neutral/Control (Mountain Caelath), and Pyrakanth is Dissatisfaction (Water Cindrel), what do Meridia, Lamenth, and the fifth nation embody? Is it a clean 5-element mapping (Wood/Fire/Earth/Metal/Water) or a different distribution?

**5. Is the world map fixed or generated?** Your current code has a 1200×900 pixel grid with hardcoded tile positions. Should nations be hand-placed regions on a larger map, or procedurally assembled from tilesets? Does each playthrough have the same world layout or a different one?

---

## The Trigram NPCs & Friction System

**6. When the player encounters a trigram friction pair (e.g. Heaven vs Earth), what actually happens?** Do you:
- (a) Listen to both arguments, then choose who to side with → deterministic outcome
- (b) Complete a challenge for each, then receive both rewards → diplomatic resolution
- (c) Fight one of them in card combat → the friction is a battle
- (d) Something else entirely?

**7. Do the 8 trigram NPCs have fixed positions in the world, or do they move?** Is each one anchored to their nation of origin? Do they travel? Does the player seek them out, or do they appear at specific story moments?

**8. Can the player change a trigram NPC's mind?** If you side with Heaven over Earth in one encounter, does Earth remember? Can you later earn Earth's trust back? Or are the frictions permanent — choosing one path closes the other?

**9. Do the trigram NPCs give quests, sell cards, teach abilities, or all three?** Each NPC currently exists only for dialog. What gameplay service does each trigram provide? Does Heaven teach you "Bold Strike" cards? Does Earth teach you "Steadfast Shield" cards?

**10. Is there a "Trigram Alignment" stat on the player?** If the player consistently sides with certain trigrams, does that affect their card pool, their appearance, their relationship with other NPCs, or the ending they get?

---

## The Pantheon & Cultivation Path

**11. How does the player discover the First Cultivators?** Are they:
- (a) Lore you find in books/tablets hidden in the world
- (b) Boss encounters you fight and learn from
- (c) NPCs you meet at cultivation milestones (level 5, 10, 20)
- (d) Abstract forces that manifest through specific card combinations

**12. The Argyran triad is Satisfaction / Dissatisfaction / Neutral. Is this a three-way alignment axis?** Does the player have a "Satisfaction score" that moves up and down based on journal entries, harvest outcomes, and friction choices? What happens when you max out one aspect?

**13. Cindrel (Pyrakanth Dissatisfaction) is the only non-Argyran deity documented. What are the other nations' pantheons?** Does each nation have its own Satisfaction/Dissatisfaction/Neutral triad? Or is the Argyran triad the universal pantheon and the other nations worship aspects of it differently?

**14. What does "achieving heaven" mean in gameplay terms?** Kerath "first to achieve heaven." Verathane "sat with death and came back changed." Are these cultivation levels, narrative milestones, or permanent card upgrades? What does the player get when they "achieve heaven"?

---

## Game Systems & Mechanics

**15. Is the game primarily about gardening, card battles, or both equally?** Your current implementation is 90% gardening simulation with cards as a planned addition. But the lore reads like a philosophical action-RPG. Which genre is the game at its core: farming sim with deckbuilder elements, or deckbuilder that uses farming as a resource system?

**16. How does the "journaling real emotions" mechanic interact with the 5 nations and pantheon?** If I journal about anger today, does that push me toward Pyrakanth? If I journal about satisfaction, toward Argyra? Does journaling become a political/alignment act as well as a resource-generation act?

**17. Should farm plots be nation-specific?** If I plant a Pyrakanth-aligned seed (Anger/Fire) in Argyra soil (Neutral/Control), does it grow differently? Slower? Mutate? Or is soil just terrain and emotion determines everything?

**18. What happens when the deck is empty during a card encounter?** The player's card pool comes from harvested emotions. If they haven't journaled or harvested enough, can they still fight? Do they get basic "Meditation" filler cards? Do they have to retreat and garden more?

---

## Tone & Presentation

**19. The trigram manifestos are written in a specific voice — philosophical, declarative, poetic. Should the game's UI text, NPC dialogs, and card descriptions match this voice?** Currently NPCs speak plainly ("Hello senior!"). Should everything shift to the trigram's register: Heaven speaking in sharp imperatives, Earth in warm invitations, Fire in clear revelations?

**20. How much of the lore should the player encounter on their first playthrough vs discover over multiple sessions?** Should a new player see "Argyra" on the map immediately, or discover it through dialog? Should the pantheon be endgame content or part of the introduction? What is the "first hour" experience vs the "tenth hour" experience vs the "hundredth hour" experience?
