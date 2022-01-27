import {Scene} from "phaser";
import Space from "../../objects/Space/Space";

class MainScene extends Scene {
    background;

    constructor() {
        super('main-scene');
    }

    create() {
        this.background = new Space(this);
    }

    update(t,td) {
        this.background.update(t,td)
    }
}

export default MainScene;