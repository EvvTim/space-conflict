import {Physics} from "phaser";

class HealthBar extends Physics.Arcade.Sprite {
    y
    constructor(scene, texture) {
        super(scene, 800, 400, texture);
        this.scene = scene;

        this.scene.add.existing(this);

        this.setOrigin(0, 1);
        this.setDisplaySize(100, 10);
        this.setDepth(1);
        this.setScale(0.5, 0.5);
    }

    update(x,y) {
        this.x = x;
        this.y = y;
    }
}

export default HealthBar;