import {DEAD_SCENE} from "../loading-scene";

class DeadScene extends Phaser.Scene {
  constructor() {
    super(DEAD_SCENE);
  }

  create() {
    this.cameras.main.setBackgroundColor('#000000')
    this.addText()
  }

  addText() {
    this.add.text(this.game.config.width / 2, this.game.config.height / 2, 'YOU DEAD!!!', {
      fontFamily: '"Press Start 2P"',
      fontSize: '92px',
      color: 'red',
      align: 'center',
      wordWrap: {
        width: this.game.config.width - 100
      }
    }).setOrigin(0.5);
  }
}

export default DeadScene;