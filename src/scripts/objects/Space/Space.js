import Player from "../Player/Player";
import Enemy from "../Enemy/Enemy";

class Space extends Phaser.GameObjects.Container {
  player
  enemy

  constructor(scene) {
    super(scene, 0, 0);
    this.scene = scene;
    this.create();
  }

  create() {
    this.initBackground()
    this.initEnemies()
    this.initPlayer()
  }

  update(t,dt) {
    this.player.update(t, dt)
  }

  initBackground() {
    this.background = this.scene.add.image(0, 0, 'background');
    this.background.setOrigin(0, 0);
    this.background.setDisplaySize(this.scene.game.config.width, this.scene.game.config.height);
  }

  initPlayer () {
    this.player = new Player(this.scene, this.enemy)
  }


  initEnemies () {
    this.enemy = this.scene.physics.add.group({
      classType: Enemy,
      key: 'enemy',
      repeat: 11,
      setXY: {
        x:12,
        y: 0,
        stepX: 70
      }
    })

    this.enemy.children.iterate(el => {
      el.setBounce(Phaser.Math.FloatBetween(0.4, 0.8))
      el.setVelocityX(Phaser.Math.Between(-200, 200));
      el.setVelocityY(Phaser.Math.Between(-200, 200));
      el.setBounce(1);
      el.setCollideWorldBounds(true);
      el.setGravityY(Phaser.Math.Between(-200, 200));
      el.setGravityX(Phaser.Math.Between(-200, 200));
      el.setScale(0.5)
    })

    console.log(this.enemy)
  }
}

export default Space;