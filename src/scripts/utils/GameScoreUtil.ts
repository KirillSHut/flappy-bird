import { IGameResults } from "../interfaces";
import { TEGameOutcome, TGameOutcomeResult } from "../types";

export class GameScoreUtil {
    static getGameResults(gameOutcome: TEGameOutcome, crossedObstacle: number, totalObstacle: number): IGameResults {
        return {
            gameOutcome: GameScoreUtil.renderOutcomeResult(gameOutcome),
            gameScore: GameScoreUtil.renderObstacleScore(crossedObstacle, totalObstacle),
        }
    }
    static renderOutcomeResult(gameOutcome: TEGameOutcome): TGameOutcomeResult {
        return gameOutcome ? 'You won!' : 'You lost!';
    }
    static renderObstacleScore(crossedObstacle: number, totalObstacle: number): string {
        return `Crossed obstacles: ${crossedObstacle / 2}/${totalObstacle / 2}`;
    }
}