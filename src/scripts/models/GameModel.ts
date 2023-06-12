import { IRound } from "../interfaces";
import { TEGameOutcome } from "../types";
import { RoundUtil } from "../utils/RoundUtil";

export class GameModel {
    gameOutcome: TEGameOutcome
    obstaclesQuantity: number

    getRound() {
        const round: IRound = RoundUtil.getRoundProperties();
        return round
    }
}
