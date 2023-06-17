import { IBirdJumpController } from "../interfaces";

export class BirdJumpControllerUtil {
    static areAllObstaclesCrossed(crossedObstacle: number, totalObstacles: number): boolean {
        return crossedObstacle >= totalObstacles
    }

    static isTimeToJump({ obstacles, crossedObstacle, scene, loseObstacle }: IBirdJumpController): boolean {
        const birdPositionYRequiresToJump = obstacles[crossedObstacle].y - 15 <= scene.bird.y;
        const currentObstacleNotEquelsLose = crossedObstacle !== loseObstacle;
        return birdPositionYRequiresToJump && currentObstacleNotEquelsLose
    }

    static didBirdCrossObstacle({ obstacles, crossedObstacle, scene }: IBirdJumpController): boolean {
        const obstacleCoords = obstacles[crossedObstacle].x + obstacles[0].width;
        return obstacleCoords <= scene.bird.x
    }
}