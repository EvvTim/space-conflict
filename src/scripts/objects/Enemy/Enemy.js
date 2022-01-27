class Enemy extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'enemy');
        this.setScale(0.5);
        this.create()
    }

   create() {
        this.scene.physics.add.existing(this);
        this.scene.add.existing(this);
        this.setVelocityX(Phaser.Math.Between(-200, 200));
        this.setVelocityY(Phaser.Math.Between(-200, 200));
        this.setBounce(1);
        this.setCollideWorldBounds(true);
        this.setGravityY(Phaser.Math.Between(-200, 200));
        this.setGravityX(Phaser.Math.Between(-200, 200));
    }

}

export default Enemy
