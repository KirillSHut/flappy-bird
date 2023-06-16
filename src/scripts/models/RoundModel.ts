import { IRound, IRoundModel } from "../interfaces";
import { TEGameOutcome } from "../types";
import { RoundUtil } from "../utils/RoundUtil";

export class RoundModel implements IRoundModel {
    gameOutcome: TEGameOutcome
    obstaclesQuantity: number

    getRound(): IRound {
        return RoundUtil.getRoundProperties();
    }
}
