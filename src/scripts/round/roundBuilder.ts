import { TEGameOutcome } from "../types";

export class RoundBuilder {
    gameOutcome: TEGameOutcome;
    obstaclesQuantity: number;

    constructor(gameOutcome, obstaclesQuantity) {
        this.gameOutcome = gameOutcome;
        this.obstaclesQuantity = obstaclesQuantity;
    }
}