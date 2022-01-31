import {ENEMY} from "../../scenes/loading-scene";
import EnemySprite from "./EnemySprite";

class EnemiesGroup extends Phaser.Physics.Arcade.Group {
    constructor(scene, numberOfEnemies) {
        super(scene.physics.world, scene);
        this.numberOfEnemies = numberOfEnemies
        this.maxSize = 40
        this.classType = EnemySprite
        this.addEnemies(this.numberOfEnemies)
        this.addPhysics()
    }
    create(x, y, key, frame, visible, active) {
        return super.create(x, y, key, frame, visible, active);
    }

    addEnemies(numberOfEnemies) {
        for (let i = 0; i < numberOfEnemies; i++) {
            this.enemies = this.create(i * Phaser.Math.Between(0, 200), Phaser.Math.Between(0, 200), ENEMY);
        }
    }

    addPhysics() {
        this.children.iterate(function (el) {
            el.setBounce(Phaser.Math.FloatBetween(0.4, 0.8))
            el.setVelocityX(Phaser.Math.Between(-200, 200));
            el.setVelocityY(Phaser.Math.Between(-200, 200));
            el.setBounce(1);
            el.setCollideWorldBounds(true);
            el.setGravityY(Phaser.Math.Between(-200, 200));
            el.setGravityX(Phaser.Math.Between(-200, 200));
            el.setScale(0.5)
            el.initHealthBar()
        });
    }
}

export default EnemiesGroup;