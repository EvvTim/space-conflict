import {Scene} from "phaser";
import Space from "../../objects/Space/Space";
class MainScene extends Scene {
    space;

    constructor() {
        super('main-scene');
    }

    create() {
        this.space = new Space(this);
        console.log(this.space.player)
    }

    update(t,td) {
        this.space.update(t,td)
    }
}

export default MainScene;