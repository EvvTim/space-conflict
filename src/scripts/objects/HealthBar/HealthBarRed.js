import HealthBar from "./HealthBar";
import enums from "../../../enums";

class HealthBarRed extends HealthBar {
    constructor(scene, x,y) {
        super(scene,x,y, enums.HEALTH_BAR_RED);
        this.setDepth(0)
    }
}

export default HealthBarRed;