import { TType } from "../round/types";

export interface GameResults {
    type: TType,
    crossedObstacle: number,
    totalObstacle: number
}