import HealthBar from "./HealthBar";
import enums from "../../../enums";

class HealthBarGreen extends HealthBar {
    constructor(scene, x,y, health, maxHealth) {
        super(scene,x,y, enums.HEALTH_BAR_GREEN);
        this.health = health;
        this.maxHealth = maxHealth;
    }
}

export default HealthBarGreen