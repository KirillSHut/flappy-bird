import { IObstaclesModel } from "../interfaces";

export class ObstaclesModel implements IObstaclesModel {
    velocityX: number;

    constructor() {
        this.velocityX = -100;
    }
}