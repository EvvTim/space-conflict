import {Scene} from "phaser";
import enums from "../../../enums";

class MainManuScene extends Scene {
    constructor() {
        super(enums.MAIN_MENU_SCENE);
    }

    create() {
        this.initBackground(this).initGameName().initButtons()
    }

    initBackground() {
        this.background = this.add.image(0, 0, enums.BACKGROUND);
        this.background.setOrigin(0, 0).setDisplaySize(this.game.config.width, this.game.config.height);

        return this
    }

    initButtons() {
        const { width, height } = this.scale
        const x = width * 0.5
        const y = height * 0.5
        this.startButton = this.add.image(x, y, enums.START_BUTTON).setInteractive();
        this.startButton.on('pointerdown', () => {
            this.scene.start(enums.MAIN_SCENE);
        });

        this.textPlay = this.add.text(this.startButton.x, this.startButton.y, 'Play')
        this.textPlay.setOrigin(0.5, 0.5).setFontSize(32).setFontFamily('"Press Start 2P"').setColor('black')

        return this
    }

    initGameName () {
        this.gameNameText = this.add.text(this.game.config.width * 0.5, this.game.config.height * 0.1, 'SPACE CONFLICT');
        this.gameNameText.setOrigin(0.5, 0.5).setFontSize(90).setColor('red').setFontFamily('"Press Start 2P"');

        return this
    }
}

export default MainManuScene;