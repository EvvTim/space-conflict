import Player from "../Player/Player";
import EnemiesGroup from "../Enemy/EnemiesGroup";

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
    if (this.enemy.children.entries.length <= 0) {
      this.enemy.children.entries.forEach(element => {
        element.destroy()
      });
      this.enemy.children.entries = []
      this.enemy.addEnemies()
      this.enemy.addPhysics()
    }
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


    this.enemy = new EnemiesGroup(this.scene)
    console.log(this.enemy.children.entries)

    console.log(this.enemy)
  }
}

export default Space;