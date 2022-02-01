import EnemySprite from "./EnemySprite";
import enums from "../../../enums";
class EnemiesGroup extends Phaser.Physics.Arcade.Group {
    constructor(scene, numberOfEnemies) {
        super(scene.physics.world, scene);
        this.numberOfEnemies = numberOfEnemies
        this.maxSize = 40
        this.classType = EnemySprite
        this.addEnemies(this.numberOfEnemies).addPhysics()
    }

    create(x, y, key, frame, visible, active) {
        return super.create(x, y, key, frame, visible, active);
    }

    addEnemies(numberOfEnemies) {
        for (let i = 0; i < numberOfEnemies; i++) {
            this.enemies = this.create(i * Phaser.Math.Between(0, 200), Phaser.Math.Between(0, 200), enums.ENEMY);
        }

        return this
    }

    addPhysics() {
        this.children.iterate(function (el) {
            el
                .setBounce(Phaser.Math.FloatBetween(0.4, 0.8))
                .setVelocityX(Phaser.Math.Between(-200, 200))
                .setVelocityY(Phaser.Math.Between(-200, 200))
                .setBounce(1).setCollideWorldBounds(true)
                .setGravityY(Phaser.Math.Between(-200, 200))
                .setGravityX(Phaser.Math.Between(-200, 200))
                .setScale(0.5)
                .initHealthBar()
        });

        return this
    }
}

export default EnemiesGroup;