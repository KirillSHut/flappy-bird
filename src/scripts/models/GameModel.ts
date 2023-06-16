import { IBirdModel, IGameModel, IGameScene, IObstaclesModel } from "../interfaces";
import { BirdModel } from "./BirdModel";
import { ObstaclesModel } from "./ObstaclesModel";

export class GameModel implements IGameModel {
    birdModel: IBirdModel
    obstaclesModel: IObstaclesModel

    constructor() {
        this.birdModel = new BirdModel();
        this.obstaclesModel = new ObstaclesModel();
    }
}