import {Physics} from "phaser";
import {ENEMY} from "../../scenes/loading-scene";
import HealthBarGreen from "../HealthBar/HealthBarGreen";
import HealthBarRed from "../HealthBar/HealthBarRed";

class EnemySprite extends Physics.Arcade.Sprite {
    constructor(scene) {
        super(scene, 0, 0, ENEMY);
        this.initEnemyPosition()

        this.health = 100 / 2;
        this.maxHealth = 100;
    }

    update(x, y) {
        this.x = x
        this.y = y

    }

    initXPosition() {
        this.x = Phaser.Math.Between(0, this.scene.game.config.width);
    }

    initYPosition() {
        this.y = Phaser.Math.Between(0, this.scene.game.config.height / 2);
    }

    initEnemyPosition() {
        this.initXPosition();
        this.initYPosition();
    }

    initHealthBar() {
        this.healthBarGreen = new HealthBarGreen(this.scene, this.x, this.y)
        this.healthBarRed = new HealthBarRed(this.scene, this.x, this.y)
        // this.healthBarRed.setOrigin(0.5, 6)
    }

}

export default EnemySprite;