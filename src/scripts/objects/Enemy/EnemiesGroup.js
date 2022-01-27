class EnemiesGroup extends Phaser.Physics.Arcade.Group {
    enemies

    constructor(scene,) {
        super(scene.physics.world, scene);

        this.addEnemies()
        this.addPhysics()
    }

    create(x, y, key, frame, visible, active) {
        return super.create(x, y, key, frame, visible, active);
    }

    addEnemies() {
        for (let i = 0; i < 10; i++) {
            this.enemies = this.create(i * Phaser.Math.Between(0, 1000), Phaser.Math.Between(0, 1000), 'enemy');
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
        });
    }

}

export default EnemiesGroup;