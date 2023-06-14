import { TEGameOutcome } from "../types"
import { IRound } from "./IRound"
import { GameModel } from "../models"
import { IBird } from "./IBird"
import { IObstacles } from "./IObstacles"
import { IRoute } from "./IRoute"


export interface IGameScene extends Phaser.Scene {
    gameOutcome: TEGameOutcome
    obstaclesQuantity: number
    loseObstacle: number
    gameModel: GameModel
    bird: IBird
    obstacles: IObstacles
    route: IRoute
    init: (roundData: IRound) => void
    onOverlap: () => void
    onEnd: () => void
}
