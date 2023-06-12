import { IRound } from "../interfaces";
import { ROUNDS_MOCK } from "../round/roundData";

export class RoundUtil {
    static getRoundProperties() {
        const index = Math.floor(Math.random() * ROUNDS_MOCK.length);
        let gameOutcome = ROUNDS_MOCK[index].gameOutcome;
        let obstaclesQuantity = ROUNDS_MOCK[index].obstaclesQuantity * 2;
        const round: IRound = {
            gameOutcome,
            obstaclesQuantity,
            loseObstacle: RoundUtil.getLoseObstacle(gameOutcome, obstaclesQuantity)
        }
        return round
    }

    static getLoseObstacle(gameOutcome: number, obstaclesQuantity: number) {
        if (gameOutcome) {
            return -1
        }
        let numbers: number[] = []
        for (let i = 1; i < obstaclesQuantity - 1; i++) {
            if (i % 2 == 0) {
                numbers.push(i);
            }
        }
        const index = Math.floor(Math.random() * numbers.length);
        return numbers[index];
    }
}