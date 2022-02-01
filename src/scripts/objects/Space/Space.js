import Player from "../Player/Player";
import EnemiesGroup from "../Enemy/EnemiesGroup";
import enums from "../../../enums";

class Space extends Phaser.Scene {
    constructor(scene) {
        super('Space');
        this.scene = scene;

        this.initBackground().initEnemies(17).initPlayer().addOverlap()

        console.log(this.enemy)
    }

    update(t, dt) {
        this.player.update(t, dt)
        this.initEnemyHealthBarPosition().respawnEnemy()
    }

    initBackground() {
        this.background = this.scene.add.image(0, 0, enums.BACKGROUND);
        this.background.setOrigin(0, 0).setDisplaySize(this.scene.game.config.width, this.scene.game.config.height);

        return this
    }

    initPlayer() {
        this.initPlayerPosition()
        this.player = new Player(this.scene, 0, this.playerPositionY, this.enemy)

        return this
    }

    initEnemies(numberOfEnemies) {
        this.enemy = new EnemiesGroup(this.scene, numberOfEnemies)

        return this
    }

    destroyPlayer() {
        this.player.health -= 0.5

        if (this.player.health <= 0) {
            this.scene.scene.start(enums.DEAD_SCENE)
            this.scene.scene.stop(enums.SPACE_SCENE)
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

        return this
    }

    respawnEnemy() {
        if (this.enemy.children.entries.length <= 0) {
            this.enemy.addEnemies().addPhysics()
        }

        return this
    }

    initPlayerPosition() {
        this.playerPositionY = this.scene.game.config.height - 100
    }

    addOverlap() {
        this.scene.physics.add.overlap(this.player, this.enemy, this.destroyPlayer, null, this)
        this.scene.physics.add.overlap(this.player.bullets, this.enemy, this.destroyEnemy, null, this)

        return this
    }
}

export default Space;