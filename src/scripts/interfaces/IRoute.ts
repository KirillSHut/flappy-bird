import { IGameScene } from "./IGameScene";

export interface IRoute {
    scene: IGameScene
    crossedObstacle: number
    loseObstacle: number
    obstacles: any
    update: () => void
}