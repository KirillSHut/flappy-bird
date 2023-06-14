import { IBirdModel } from "./IBirdModel"
import { IObstaclesModel } from "./IObstaclesModel"

export interface IGameModel {
    birdModel: IBirdModel
    obstaclesModel: IObstaclesModel
}