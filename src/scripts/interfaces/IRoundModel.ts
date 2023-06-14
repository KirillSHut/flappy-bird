import { TEGameOutcome } from "../types"
import { IRound } from "./IRound"

export interface IRoundModel {
    gameOutcome: TEGameOutcome
    obstaclesQuantity: number
    getRound: () => IRound
}