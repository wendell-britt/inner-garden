/**
 * Save Manager
 * Handles persistent game state via localStorage.
 * Manages save/load cycles, auto-save triggers, and first-time detection.
 */
export class SaveManager {
    constructor() {
        this.SAVE_KEY = 'inner_garden_save';
        this.CONFIG_KEY = 'inner_garden_config';
        this.SAVE_VERSION = 1;
        this._autoSaveTimer = null;
        this._dirty = false;
    }

    /**
     * Check if this is the player's first time
     */
    isFirstTime() {
        const save = this._rawLoad();
        return save === null;
    }

    /**
     * Build a save object from the full game state
     */
    serialize(gameState) {
        const { player, cultivation, emotion, farming, story, quests } = gameState;
        const profile = cultivation.getProfile();

        return {
            version: this.SAVE_VERSION,
            timestamp: Date.now(),
            player: {
                x: player.x,
                y: player.y,
                direction: player.direction,
                facing: player.facing,
                stats: {
                    strength: profile.strength,
                    wisdom: profile.wisdom,
                    spirit: profile.spirit,
                    agility: profile.agility,
                    endurance: profile.endurance,
                    charisma: profile.charisma,
                    level: profile.level,
                    exp: profile.exp,
                    qi: profile.qi,
                    maxQi: profile.maxQi,
                    maxHealth: profile.maxHealth || 100,
                    currentHealth: profile.currentHealth || profile.maxHealth || 100
                }
            },
            tools: {
                wateringCan: {
                    owned: player.tools.wateringCan.owned,
                    water: player.tools.wateringCan.water,
                    maxWater: player.tools.wateringCan.maxWater
                }
            },
            farm: {
                plots: farming.plots.map(p => ({ ...p })),
                crops: farming.crops.map(c => ({ ...c })),
                harvestedFruits: farming.harvestedFruits.map(f => ({ ...f })),
                gardenLevel: farming.gardenLevel,
                maxPlots: farming.maxPlots,
                waterLevel: farming.waterLevel,
                maxWaterLevel: farming.maxWaterLevel,
                nurtureActions: farming.nurtureActions
            },
            emotion: {
                seedsInventory: emotion.seedsInventory.map(s => ({ ...s })),
                journalEntries: emotion.journalEntries.map(e => ({ ...e })),
                lastSeed: emotion.lastSeed ? { ...emotion.lastSeed } : null,
                totalMeditationTime: emotion.totalMeditationTime || 0
            },
            story: {
                flags: story.getFlags ? story.getAllFlags() : {},
                currentScene: story.currentScene || null,
                currentChapter: story.currentChapter || null
            },
            quests: {
                progress: {},
                completed: []
            }
        };
    }

    /**
     * Restore game state from a save object
     * Returns the save data or null
     */
    deserialize() {
        const raw = this._rawLoad();
        if (!raw) return null;
        if (raw.version !== this.SAVE_VERSION) {
            console.warn('Save version mismatch, attempting migration');
            return null;
        }
        return raw;
    }

    /**
     * Apply save data to the game systems
     * @param {object} data - The save object
     * @param {object} gameState - { player, cultivation, emotion, farming, story, quests }
     */
    applySave(data, gameState) {
        const { player, cultivation, emotion, farming, story, quests } = gameState;

        // Player position + stats
        if (data.player) {
            player.x = data.player.x;
            player.y = data.player.y;
            if (data.player.direction) player.direction = data.player.direction;
            if (data.player.facing) player.facing = data.player.facing;

            if (data.player.stats) {
                const profile = cultivation.getProfile();
                Object.assign(profile, data.player.stats);
                if (data.player.stats.maxQi) profile.maxQi = data.player.stats.maxQi;
                if (data.player.stats.qi) profile.qi = data.player.stats.qi;
            }
        }

        // Tools
        if (data.tools && data.tools.wateringCan) {
            Object.assign(player.tools.wateringCan, data.tools.wateringCan);
        }

        // Farm
        if (data.farm) {
            farming.plots = data.farm.plots || [];
            farming.crops = data.farm.crops || [];
            farming.harvestedFruits = data.farm.harvestedFruits || [];
            farming.gardenLevel = data.farm.gardenLevel || 1;
            farming.maxPlots = data.farm.maxPlots || 4;
            farming.waterLevel = data.farm.waterLevel || 100;
            farming.maxWaterLevel = data.farm.maxWaterLevel || 100;
            farming.nurtureActions = data.farm.nurtureActions || 0;
        }

        // Emotion system
        if (data.emotion) {
            emotion.seedsInventory = data.emotion.seedsInventory || [];
            emotion.journalEntries = data.emotion.journalEntries || [];
            emotion.lastSeed = data.emotion.lastSeed || null;
            emotion.totalMeditationTime = data.emotion.totalMeditationTime || 0;
        }

        // Story flags
        if (data.story && story.setFlag) {
            if (data.story.flags) {
                for (const [key, value] of Object.entries(data.story.flags)) {
                    story.setFlag(key, value);
                }
            }
            if (data.story.currentScene) story.currentScene = data.story.currentScene;
            if (data.story.currentChapter) story.currentChapter = data.story.currentChapter;
        }

        // Quest progress
        if (data.quests && quests.progress) {
            Object.assign(quests.progress, data.quests.progress);
            if (data.quests.completed) {
                quests.completed = data.quests.completed;
            }
        }
    }

    /**
     * Save the current game state
     */
    save(gameState) {
        try {
            const data = this.serialize(gameState);
            localStorage.setItem(this.SAVE_KEY, JSON.stringify(data));
            this._dirty = false;
            return true;
        } catch (e) {
            console.error('Save failed:', e);
            return false;
        }
    }

    /**
     * Load the game state
     */
    load(gameState) {
        const data = this.deserialize();
        if (!data) return false;
        this.applySave(data, gameState);
        return true;
    }

    /**
     * Delete save data
     */
    deleteSave() {
        localStorage.removeItem(this.SAVE_KEY);
    }

    /**
     * Mark save as dirty and schedule auto-save
     * @param {object} gameState - Current game state
     */
    markDirty(gameState) {
        this._dirty = true;
        if (this._autoSaveTimer) {
            clearTimeout(this._autoSaveTimer);
        }
        this._autoSaveTimer = setTimeout(() => {
            if (this._dirty) {
                this.save(gameState);
            }
        }, 5000); // 5 second debounce
    }

    /**
     * Force an immediate save
     */
    saveImmediate(gameState) {
        if (this._autoSaveTimer) {
            clearTimeout(this._autoSaveTimer);
            this._autoSaveTimer = null;
        }
        return this.save(gameState);
    }

    /**
     * Get save metadata (for menu display)
     */
    getSaveMeta() {
        const raw = this._rawLoad();
        if (!raw) return null;
        return {
            timestamp: raw.timestamp,
            date: new Date(raw.timestamp).toLocaleString(),
            level: raw.player?.stats?.level || 1,
            entries: raw.emotion?.journalEntries?.length || 0,
            seeds: raw.emotion?.seedsInventory?.length || 0,
            harvests: raw.farm?.harvestedFruits?.length || 0,
            gardenLevel: raw.farm?.gardenLevel || 1
        };
    }

    /**
     * Raw load from localStorage
     */
    _rawLoad() {
        try {
            const raw = localStorage.getItem(this.SAVE_KEY);
            if (!raw) return null;
            return JSON.parse(raw);
        } catch (e) {
            console.error('Load failed:', e);
            return null;
        }
    }
}
