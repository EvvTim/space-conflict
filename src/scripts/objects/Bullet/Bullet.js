import {Physics} from "phaser";
import enums from "../../../enums";
class Bullet extends Physics.Arcade.Sprite{
    constructor(scene) {
        super(scene, 0, 0, enums.BULLET);
        scene.add.existing(this)
        scene.physics.add.existing(this)

        this.bulletConfig()
    }

    fire(x, y) {
        const rotation = -90
        const angle = Phaser.Math.DegToRad(rotation)

        this.setAngle(rotation).setPosition(x,y)
        this.body.reset(x,y)
        this.body.setVelocity(this.speed * Math.cos(angle), this.speed * Math.sin(angle))
        this.body.setSize(1)
        this.scene.physics.velocityFromRotation(angle, this.speed, this.body.velocity)
    }

    update(t, dt) {
        this.lifespan -= dt

        if (this.lifespan < 0) {
            this.destroy()
        }
    }

    bulletConfig() {
        this.speed = 1000
        this.lifespan = 1000
    }
}

export default Bullet