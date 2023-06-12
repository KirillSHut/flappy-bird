import { Bird, Obstacles } from "../components"
import { TEGameOutcome } from "../types"
import { Route } from "../classes"
import { IRound } from "./IRound"


export interface IGameScene extends Phaser.Scene {
    gameOutcome: TEGameOutcome
    obstaclesQuantity: number
    loseObstacle: number
    bird: Bird
    obstacles: Obstacles
    route: Route
    init: (roundData: IRound) => void
    onOverlap: () => void
    onEnd: () => void
}
