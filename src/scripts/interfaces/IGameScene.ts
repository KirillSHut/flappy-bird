import { TEGameOutcome } from "../types"
import { IRound } from "./IRound"
import { GameModel } from "../models"
import { IBird } from "./IBird"
import { IObstacles } from "./IObstacles"
import { IBirdJumpController } from "./IBirdJumpController"


export interface IGameScene extends Phaser.Scene {
    gameOutcome: TEGameOutcome
    obstaclesQuantity: number
    loseObstacle: number
    gameModel: GameModel
    bird: IBird
    obstacles: IObstacles
    birdJumpController: IBirdJumpController
    init: (roundData: IRound) => void
    onOverlap: () => void
    finishRound: () => void
}
