/**
 * Asset Generator Script
 * Generates all game sprites as PNG files in assets/sprites/
 * Uses the same procedural generation logic from AssetGenerator.js
 * via the node-canvas package.
 * 
 * Run: node scripts/generate-assets.mjs
 */

import { createCanvas, loadImage } from 'canvas';
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SPRITES_DIR = resolve(__dirname, '../assets/sprites');

// Ensure output directory exists
if (!existsSync(SPRITES_DIR)) {
    mkdirSync(SPRITES_DIR, { recursive: true });
}

// Patch global document for AssetGenerator compatibility.
// node-canvas Canvas supports .width and .height setters, so AssetGenerator's
// _createCanvas() pattern (canvas = createElement; canvas.width = size; canvas.height = size)
// works natively — we just need to ensure createElement returns a Canvas.
globalThis.document = {
    createElement: (tag) => {
        if (tag === 'canvas') {
            // Start with a default size; _createCanvas will resize via .width/.height
            const canvas = createCanvas(32, 32);
            return canvas;
        }
        return { appendChild: () => {} };
    }
};

// Import the game's AssetGenerator
const { AssetGenerator } = await import('../js/core/AssetGenerator.js');

// Save a named sprite as PNG
function saveSprite(name, canvas) {
    const path = resolve(SPRITES_DIR, `${name}.png`);
    const buffer = canvas.toBuffer('image/png');
    writeFileSync(path, buffer);
    console.log(`  ✓ ${name}.png (${buffer.length} bytes)`);
}

// Save all sprite variants from the AssetGenerator
function generateAll(generator) {
    const sprites = {};

    // Player directions
    for (const dir of ['down', 'up', 'left', 'right']) {
        const name = `player_${dir}`;
        const canvas = generator._createPlayerSprite(dir);
        sprites[name] = canvas;
    }

    // Tiles
    sprites.tile_grass = generator._createTileGrass();
    sprites.tile_dirt = generator._createTileDirt();
    sprites.tile_water = generator._createTileWater();
    sprites.tile_path = generator._createTilePath();
    sprites.tile_soil = generator._createTileSoil();
    sprites.tile_fence = generator._createTileFence();

    // NPCs
    sprites.npc_sage = generator._createNPCSprite('sage');
    sprites.npc_merchant = generator._createNPCSprite('merchant');
    sprites.npc_disciple = generator._createNPCSprite('disciple');

    // Crops (by stage, using a default emotion)
    const emotions = ['anger', 'sadness', 'fear', 'joy', 'neutral'];
    for (const stage of ['seed', 'sprout', 'bud', 'flower', 'fruit']) {
        for (const emo of emotions) {
            const name = `crop_${stage}_${emo}`;
            sprites[name] = generator._createCropSprite(stage, emo);
        }
    }

    // Seed items
    for (const emo of emotions) {
        sprites[`seed_item_${emo}`] = generator._createSeedSprite(emo);
    }

    // World objects
    sprites.tree = generator._createTreeSprite();
    sprites.rock = generator._createRockSprite();
    sprites.building_temple = generator._createBuildingSprite('temple');
    sprites.building_house = generator._createBuildingSprite('house');

    // Tools
    sprites.watering_can = generator._createToolSprite('watering_can');

    // Effects
    sprites.meditation_glow = generator._createGlowSprite('#e8c88a');
    sprites.heart = generator._createHeartSprite();
    sprites.sparkle = generator._createSparkleSprite();
    sprites.highlight = generator._createHighlightSprite();

    // Emotion orbs
    for (const emo of emotions) {
        sprites[`emotion_orb_${emo}`] = generator._createEmotionOrb(emo);
    }

    // Fruits
    for (const emo of emotions) {
        sprites[`fruit_${emo}`] = generator._createFruitSprite(emo);
    }

    // Interaction icons
    for (const type of ['talk', 'water', 'plant', 'harvest']) {
        sprites[`interact_${type}`] = generator._createInteractIcon(type);
    }

    return sprites;
}

// Main
console.log('\n⟡ Inner Garden — Sprite Generator\n');
console.log(`Output: ${SPRITES_DIR}\n`);

const generator = new AssetGenerator();
const sprites = generateAll(generator);

let count = 0;
for (const [name, canvas] of Object.entries(sprites)) {
    // Create a properly sized canvas (32x32 for most sprites)
    const outCanvas = createCanvas(32, 32);
    const outCtx = outCanvas.getContext('2d');
    outCtx.imageSmoothingEnabled = false;
    outCtx.drawImage(canvas, 0, 0);
    saveSprite(name, outCanvas);
    count++;
}

console.log(`\n✓ ${count} sprites generated in assets/sprites/\n`);
