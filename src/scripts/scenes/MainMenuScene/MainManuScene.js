import {Scene} from "phaser";
import {BACKGROUND, MAIN_MENU_SCENE, MAIN_SCENE, START_BUTTON} from "../loading-scene";

class MainManuScene extends Scene {
    constructor() {
        super(MAIN_MENU_SCENE);
    }

    create() {
        this.initBackground(this);
        this.initGameName()
        this.initButtons()
    }

    initBackground() {
        this.background = this.add.image(0, 0, BACKGROUND);
        this.background.setOrigin(0, 0);
        this.background.setDisplaySize(this.game.config.width, this.game.config.height);
    }

    initButtons() {
        const { width, height } = this.scale
        this.startButton = this.add.image(width * 0.5, height * 0.5, START_BUTTON).setInteractive();
        this.startButton.on('pointerdown', () => {
            this.scene.start(MAIN_SCENE);
        });

        this.textPlay = this.add.text(this.startButton.x, this.startButton.y, 'Play')
        this.textPlay.setOrigin(0.5, 0.5)
        this.textPlay.setFontSize(32)
        this.textPlay.setFontFamily('"Press Start 2P"')
        this.textPlay.setColor('black')
    }

    initGameName () {
        this.gameNameText = this.add.text(this.game.config.width * 0.5, this.game.config.height * 0.1, 'SPACE CONFLICT');
        this.gameNameText.setOrigin(0.5, 0.5)
        this.gameNameText.setFontSize(90)
        this.gameNameText.setColor('red')
        this.gameNameText.setFontFamily('"Press Start 2P"')
    }
}

export default MainManuScene;