import {Physics} from "phaser";

class HealthBar extends Physics.Arcade.Sprite {
    constructor(scene,x, y, texture) {
        super(scene, x, y, texture);
        this.scene = scene;

        this.scene.add.existing(this);

        this.setOrigin(0, 1).setDisplaySize(100, 10).setDepth(1).setScale(0.5, 0.5);
    }

    update(x,y) {
        this.x = x;
        this.y = y;
    }
}

export default HealthBar;