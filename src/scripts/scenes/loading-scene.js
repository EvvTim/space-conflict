import {Scene} from 'phaser'
import enums from "../../enums";

class LoadingScene extends Scene {
    constructor() {
        super(enums.LOADING_SCENE);
    }

    preload() {
        this.load.image(enums.BACKGROUND, 'assets/Background/space-background.png');
        this.load.image(enums.PLAYER, 'assets/Player/Player.png')
        this.load.image(enums.BULLET, 'assets/Bullet/bullet.png')
        this.load.image(enums.ENEMY, 'assets/Enemies/enemy.png')
        this.load.image(enums.START_BUTTON, 'assets/Button/button.png');
        this.load.image(enums.HEALTH_BAR_GREEN,'assets/HealthBar/health-bar-green.png')
        this.load.image(enums.HEALTH_BAR_RED,'assets/HealthBar/health-bar-red.png')
    }

    create() {
        this.scene.start(enums.MAIN_MENU_SCENE);
    }
}

export default LoadingScene;