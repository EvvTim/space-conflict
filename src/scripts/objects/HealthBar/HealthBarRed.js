import HealthBar from "./HealthBar";
import {HEALTH_BAR_RED} from "../../scenes/loading-scene";

class HealthBarRed extends HealthBar {
    constructor(scene, x,y) {
        super(scene,x,y, HEALTH_BAR_RED);
        this.setDepth(0)
    }
}

export default HealthBarRed;