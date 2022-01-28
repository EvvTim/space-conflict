import Player from "../Player/Player";
import EnemiesGroup from "../Enemy/EnemiesGroup";
import {BACKGROUND, DEAD_SCENE, SPACE_SCENE} from "../../scenes/loading-scene";

class Space extends Phaser.Scene {
    player
    enemy
    playerPositionY

    constructor(scene) {
        super('Space');
        this.scene = scene;

        this.initBackground()
        this.initEnemies()
        this.initPlayer()

        this.scene.physics.add.overlap(this.player, this.enemy, this.destroyPlayer, null, this)
        this.scene.physics.add.overlap(this.player.bullets, this.enemy, this.destroyEnemy, null, this)

        console.log(this.enemy)
    }

    update(t, dt) {
        this.player.update(t, dt)
        this.initEnemyHealthBarPosition()
        this.respawnEnemy()
    }

    initBackground() {
        this.background = this.scene.add.image(0, 0, BACKGROUND);
        this.background.setOrigin(0, 0);
        this.background.setDisplaySize(this.scene.game.config.width, this.scene.game.config.height);
    }

    initPlayer() {
        this.initPlayerPosition()
        this.player = new Player(this.scene, 0, this.playerPositionY, this.enemy)
    }

    initEnemies() {
        this.enemy = new EnemiesGroup(this.scene)
    }

    destroyPlayer() {
        this.player.health -= 0.5

        if (this.player.health <= 0) {
            this.scene.scene.start(DEAD_SCENE)
            this.scene.scene.stop(SPACE_SCENE)
        }
    }

    destroyEnemy(player, enemy) {
        enemy.healthBarGreen.setScale(enemy.health / enemy.maxHealth, 0.5)
        enemy.health -= 3

        if (enemy.health <= 0) {
            enemy.destroy()
            enemy.healthBarGreen.destroy()
            enemy.healthBarRed.destroy()
        }
    }

    initEnemyHealthBarPosition() {
        this.enemy.children.entries.map(e => e.healthBarGreen.update(e.x - 50, e.y - 50))
        this.enemy.children.entries.map(e => e.healthBarRed.update(e.x - 50, e.y -50))
    }

    respawnEnemy() {
        if (this.enemy.children.entries.length <= 0) {
            this.enemy.addEnemies()
            this.enemy.addPhysics()
        }
    }

    initPlayerPosition() {
        this.playerPositionY = this.scene.game.config.height - 100
    }
}

export default Space;