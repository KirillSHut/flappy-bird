import { IObstaclesModel } from "./IObstaclesModel"

export interface IObstacles extends Phaser.Physics.Arcade.Group {
    obstaclesModel: IObstaclesModel
    obstaclesCreated: number
    obstaclesQuantity: number
    init: () => void
    createObstacles: () => void
}