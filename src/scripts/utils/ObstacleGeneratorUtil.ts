import { Obstacle } from "../components";
import { DISTANCE, FIRST_OBSTACLE_POSITION_X, MAX_GAP, MIN_GAP } from "../constants";
import { EObstaclePosition } from "../enums";
import { IGameScene, IObstacleParams } from "../interfaces";
import { RndPositionGeneratorUtil } from "./RndPositionGeneratorUtil";

export class ObstacleGeneratorUtil {
    static generateFirstObstacle(scene: IGameScene) {
        const obstacleParams: IObstacleParams = {
            x: FIRST_OBSTACLE_POSITION_X,
            y: RndPositionGeneratorUtil.getRandomBottomPosition(),
            position: EObstaclePosition.BOTTOM
        }
        return new Obstacle(scene, obstacleParams);
    }

    static generateTopObstacle(scene: IGameScene, lastObstacle) {
        const obstacleParams: IObstacleParams = {
            x: lastObstacle.x,
            y: RndPositionGeneratorUtil.getRandomTopPosition(lastObstacle, MIN_GAP, MAX_GAP),
            position: EObstaclePosition.TOP
        }
        return new Obstacle(scene, obstacleParams);
    }

    static generateBottomObstacle(scene: IGameScene, lastObstacle) {
        const obstacleParams: IObstacleParams = {
            x: lastObstacle.x + lastObstacle.width + DISTANCE,
            y: RndPositionGeneratorUtil.getRandomBottomPosition(),
            position: EObstaclePosition.BOTTOM
        }
        return new Obstacle(scene, obstacleParams);
    }
}