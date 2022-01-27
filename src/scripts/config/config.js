import LoadingScene from "../scenes/loading-scene";
import MainScene from "../scenes/MainScene/MainScene";
import MainManuScene from "../scenes/MainMenuScene/MainManuScene";

const DEFAULT_WIDTH = window.innerWidth
const DEFAULT_HEIGHT = window.innerHeight

export const config = {
    type: Phaser.AUTO,
    backgroundColor: '#ffffff',
    scale: {
        parent: 'phaser-game',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT
    },
    scene: [LoadingScene, MainScene, MainManuScene],
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: { y: 0 }
        }
    }
}