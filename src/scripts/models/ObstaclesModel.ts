import { OBSTACLE_VELOCITY } from "../constants";
import { IGameScene } from "../interfaces";

export class ObstaclesModel {
    scene: IGameScene;
    velocityX: number;

    constructor(scene: IGameScene) {
        this.scene = scene;
        this.velocityX = OBSTACLE_VELOCITY
    }
}