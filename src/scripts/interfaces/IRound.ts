import { TEGameOutcome } from "../types";


export interface IRound {
    gameOutcome: TEGameOutcome,
    obstaclesQuantity: number,
    loseObstacle: number
}
