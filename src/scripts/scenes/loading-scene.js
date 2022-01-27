import {Scene} from 'phaser'

class LoadingScene extends Scene {
    constructor() {
        super('loading-scene');
    }

    preload() {
        this.load.image('background', 'assets/Background/space.png');
        this.load.image('player', 'assets/Player/Player.png')
        this.load.image('bullet', 'assets/Bullet/bullet.png')
        this.load.image('enemy', 'assets/Enemies/enemy.png')
        this.load.image('background', 'assets/Background/space.png');
        this.load.image('startButton', 'assets/Button/button.png');
    }

    create() {
        this.scene.start('main-menu-scene');
        this.scene.start('main-scene');
    }
}

export default LoadingScene;