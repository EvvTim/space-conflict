import {Scene} from 'phaser'

export const BACKGROUND = 'background'
export const PLAYER = 'player'
export const ENEMY = 'enemy'
export const BULLET = 'bullet'
export const START_BUTTON = 'start-button'
export const HEALTH_BAR_GREEN = 'health-bar'
export const HEALTH_BAR_RED = 'health-bar-red'

export const DEAD_SCENE = 'dead-scene'
export const SPACE_SCENE = 'space-scene'
export const MAIN_MENU_SCENE = 'main-menu-scene'
export const MAIN_SCENE = 'main-scene'
export const LOADING_SCENE = 'loading-scene'

class LoadingScene extends Scene {
    constructor() {
        super(LOADING_SCENE);
    }

    preload() {
        this.load.image(BACKGROUND, 'assets/Background/space-background.png');
        this.load.image(PLAYER, 'assets/Player/Player.png')
        this.load.image(BULLET, 'assets/Bullet/bullet.png')
        this.load.image(ENEMY, 'assets/Enemies/enemy.png')
        this.load.image(START_BUTTON, 'assets/Button/button.png');
        this.load.image(HEALTH_BAR_GREEN,'assets/HealthBar/health-bar-green.png')
        this.load.image(HEALTH_BAR_RED,'assets/HealthBar/health-bar-red.png')
    }

    create() {
        this.scene.start(MAIN_MENU_SCENE);
    }
}

export default LoadingScene;