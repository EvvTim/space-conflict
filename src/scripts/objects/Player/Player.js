import {Physics} from 'phaser'
import Bullet from "../Bullet/Bullet";
import HealthBarGreen from "../HealthBar/HealthBarGreen";
import HealthBarRed from "../HealthBar/HealthBarRed";
import enums from "../../../enums";

class Player extends Physics.Arcade.Sprite {
    constructor(scene, x, y, enemy) {
        super(scene, x, y, enums.PLAYER);
        this.enemy = enemy

        scene.add.existing(this)
        scene.physics.add.existing(this)

        this.playerConfig().initOverlap().initHealthBar()
    }

    update(t, dt) {
        this.controls(t, dt)
        this.healthBarGreen.setScale(this.health / this.maxHealth, 0.5)
        this.initHealthBarPosition()
    }

    controls(t) {
        this.x = this.scene.input.mousePointer.x
        if (this.scene.input.mousePointer.isDown && t > this.lastFited) {
            const bullet = new Bullet(this.scene)
            bullet.fire(this.x, this.y)
            this.bullets.push(bullet)
            this.lastFited = t + this.timeBetweenShots;
        }
    }

    healthBarXPosition() {
        return this.scene.input.mousePointer.x - 50
    }

    healthBarYPosition() {
        return this.scene.input.mousePointer.y + 50
    }

    initHealthBarPosition() {
        const x = this.healthBarXPosition()
        const y = this.scene.game.config.height - 50

        this.healthBarGreen.update(x, y)
        this.healthBarRed.update(x, y)
    }

    // destroyEnemy(player, enemy) {
    //     enemy.destroy()
    //     enemy.healthBarGreen.destroy()
    //     enemy.healthBarRed.destroy()
    //
    // }

    initOverlap() {
        // this.scene.physics.add.overlap(this.bullets, this.enemy, this.destroyEnemy, null, this)
        this.scene.physics.add.overlap(this, this.enemy, this.destroyPlayer, null, this)

        return this
    }

    playerConfig() {
        this.setScale(0.5)
        this.bullets = []
        this.lastFited = 0;
        this.timeBetweenShots = 400;
        this.health = 100 / 2;
        this.maxHealth = 100;

        return this
    }

    initHealthBar() {
        this.healthBarGreen = new HealthBarGreen(this.scene, this.healthBarXPosition(), this.healthBarYPosition())
        this.healthBarRed = new HealthBarRed(this.scene, this.healthBarXPosition(), this.healthBarYPosition())

        return this
    }
}

export default Player