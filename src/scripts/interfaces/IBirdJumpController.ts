import { IGameScene } from "./IGameScene";
import { IObstacle } from "./IObstacle";

export interface IBirdJumpController {
    scene: IGameScene
    crossedObstacle: number
    loseObstacle: number
    obstacles: IObstacle[]
    update: () => void
}