import { IGameScene } from "./IGameScene"

export interface IObstacles extends Phaser.Physics.Arcade.Group {
    scene: IGameScene
    velocityX: number
    obstaclesCreated: number
    obstaclesQuantity: number
    init: () => void
    createObstacles: () => void
}