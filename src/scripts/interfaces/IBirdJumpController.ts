import { IGameScene } from "./IGameScene";

export interface IBirdJumpController {
    scene: IGameScene
    crossedObstacle: number
    loseObstacle: number
    obstacles: any
    update: () => void
}