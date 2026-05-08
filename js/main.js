/**
 * Inner Garden — Main Entry Point
 * Bootstraps the game and manages loading sequence.
 */

import { Game } from './core/Game.js';

class Boot {
    constructor() {
        this.canvas = document.getElementById('game-canvas');
        this.loadingBar = document.getElementById('loading-bar');
        this.loadingScreen = document.getElementById('loading-screen');
        this.game = null;
        
        this.init();
    }

    async init() {
        console.log('⟡ Inner Garden — Loading...');
        
        // Simulate loading steps with progress updates
        await this._loadStep(20, 'Cultivating world...');
        await this._loadStep(40, 'Planting seeds...');
        await this._loadStep(60, 'Gathering qi...');
        await this._loadStep(80, 'Awakening inner garden...');
        
        // Create and start the game
        this.game = new Game(this.canvas);
        
        await this._loadStep(100, 'Entering cultivation...');
        
        // Hide loading screen
        setTimeout(() => {
            this.loadingScreen.classList.add('hidden');
            this.game.start();
        }, 500);
    }

    /**
     * Simulate a loading step with progress bar update
     */
    _loadStep(progress, message) {
        return new Promise(resolve => {
            setTimeout(() => {
                this.loadingBar.style.width = progress + '%';
                // Also show message if we had a text element
                resolve();
            }, 200 + Math.random() * 200);
        });
    }
}

// Wait for DOM to be ready, then boot
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new Boot());
} else {
    new Boot();
}
