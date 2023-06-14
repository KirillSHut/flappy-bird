import { IRoundBuilder } from "../interfaces";
import { TEGameOutcome } from "../types";

export class RoundBuilder implements IRoundBuilder {
    gameOutcome: TEGameOutcome;
    obstaclesQuantity: number;

    constructor(gameOutcome, obstaclesQuantity) {
        this.gameOutcome = gameOutcome;
        this.obstaclesQuantity = obstaclesQuantity;
    }
}