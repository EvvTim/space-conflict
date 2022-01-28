import HealthBar from "./HealthBar";
import {HEALTH_BAR_GREEN} from "../../scenes/loading-scene";

class HealthBarGreen extends HealthBar {
    constructor(scene, x,y, health, maxHealth) {
        super(scene,x,y, HEALTH_BAR_GREEN);
        this.health = health;
        this.maxHealth = maxHealth;
    }
}

export default HealthBarGreen