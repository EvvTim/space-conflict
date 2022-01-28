import Player from "../Player/Player";
import EnemiesGroup from "../Enemy/EnemiesGroup";
import HealthBar from "../HealthBar/HealthBar";
import {BACKGROUND, DEAD_SCENE, SPACE_SCENE} from "../../scenes/loading-scene";

class Space extends Phaser.Scene {
  player
  enemy
  healthBar
  playerPositionY
  constructor(scene) {
    super('Space');
    this.scene = scene;

    this.initBackground()
    this.initEnemies()
    this.initPlayer()

    this.scene.physics.add.overlap(this.player, this.enemy, this.destroyPlayer, null, this)

  }

  update(t,dt) {
    this.player.update(t, dt)
    this.respawnEnemy()
  }

  initBackground() {
    this.background = this.scene.add.image(0, 0, BACKGROUND);
    this.background.setOrigin(0, 0);
    this.background.setDisplaySize(this.scene.game.config.width, this.scene.game.config.height);
  }

  initPlayer () {
    this.initPlayerPosition()
    this.player = new Player(this.scene,0, this.playerPositionY , this.enemy)
  }

  initEnemies () {
    this.enemy = new EnemiesGroup(this.scene)
    this.healthBar = new HealthBar(this.scene)
  }

  destroyPlayer () {
    this.player.health -= 0.5

    if (this.player.health <= 0) {
      this.scene.scene.start(DEAD_SCENE)
      this.scene.scene.stop(SPACE_SCENE)
    }
  }

  getEnemyXPosition () {
     this.enemy.children.entries.map(el => console.log(el.x))
  }

  respawnEnemy () {
    if (this.enemy.children.entries.length <= 0) {
      this.enemy.addEnemies()
      this.enemy.addPhysics()
    }
  }

  initPlayerPosition () {
     this.playerPositionY = this.scene.game.config.height - 100
  }
}

export default Space;