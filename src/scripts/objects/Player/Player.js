import {Physics} from 'phaser'
import Bullet from "../Bullet/Bullet";
class Player extends Physics.Arcade.Sprite {
    x
    y
    bullets
    lastFited
    timeBetweenShots
    enemy
    constructor(scene, enemy) {
        super(scene, 200, 400, 'player');

        this.enemy = enemy
        console.log(this.enemy)

        scene.add.existing(this)
        scene.physics.add.existing(this)

        this.setScale(0.5)

        this.bullets = []
        this.lastFited = 0;
        this.timeBetweenShots = 400;

        this.scene.physics.add.overlap(this.bullets, this.enemy, this.destroyEnemy, null, this)
    }

    update(t,dt) {
        this.controls(t,dt)
        this.bullets.map(bullet => bullet.update(t,dt))
    }

    controls(t) {

        this.x = this.scene.input.mousePointer.x
        this.y = this.scene.input.mousePointer.y

        if (this.scene.input.mousePointer.isDown && t > this.lastFited) {
            const bullet = new Bullet(this.scene)
            bullet.fire(this.x,this.y)
            this.bullets.push(bullet)
            this.lastFited = t + this.timeBetweenShots;
        }
    }

    destroyEnemy(player, enemy) {
        console.log('destroy')
        enemy.destroy()
    }
}

export default Player