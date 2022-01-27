import {Physics} from "phaser";
import * as phaser from "phaser";


class Enemy extends Physics.Arcade.Sprite {
    constructor(scene) {
        super(scene, Phaser.Math.Between(0, 500), Phaser.Math.Between(0, 500), 'enemy');
        this.setScale(0.5);
             this.scene.physics.add.existing(this);
             this.scene.add.existing(this);
        // this.create()
    }

   // create() {
   //      this.scene.physics.add.existing(this);
   //      this.scene.add.existing(this);
   //      this.setVelocityX(Phaser.Math.Between(-200, 200));
   //      this.setVelocityY(Phaser.Math.Between(-200, 200));
   //      this.setBounce(1);
   //      this.setCollideWorldBounds(true);
   //      this.setGravityY(Phaser.Math.Between(-200, 200));
   //      this.setGravityX(Phaser.Math.Between(-200, 200));
   //  }

}

export default Enemy

// class EnemiesGroup extends Phaser.Physics.Arcade.Group {
//     constructor(scene) {
//         super(scene.physics.world, scene, {
//             classType: Enemy,
//             key: 'enemy',
//             repeat: 11,
//             maxSize: 10,
//             runChildUpdate: true
//         });
//         this.create();
//     }
//
//     create() {
//         this.key = 'enemy';
//         this.repeat = 11;
//         this.children.get('enemy', {
//             x: Phaser.Math.Between(0, 800),
//             y: Phaser.Math.Between(0, 600),
//             texture: 'enemy',
//             key: 'enemy',
//             repeat: 11,
//             frame: Phaser.Math.Between(0, 3)
//         });
//
//         this.children.iterate(function (child) {
//             child.setBounce(1);
//             child.setCollideWorldBounds(true);
//             child.setGravityY(Phaser.Math.Between(-200, 200));
//             child.setGravityX(Phaser.Math.Between(-200, 200));
//         });
//     }
// }
//
// export default EnemiesGroup
