import { DISTANCE, MAX_GAP, MIN_GAP } from "../constants";
import { EObstaclePosition } from "../enums";
import { IGameScene, IObstacle, IObstacleParams } from "../interfaces";
import { Obstacles } from "./Obstacles";



export class Obstacle extends Phaser.GameObjects.Sprite implements IObstacle {
    position: EObstaclePosition;
    body: Phaser.Physics.Arcade.Body

    constructor(scene: IGameScene, params: IObstacleParams) {
        super(scene, params.x, params.y, 'column');
        this.position = params.position;
        this.init();
    }

    init() {
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.setOrigin(0);
    }


    static generate(scene: IGameScene, lastObstacle): Obstacle {

        if (!lastObstacle) {
            const obstacleParams: IObstacleParams = {
                x: 800,
                y: Obstacles.getRandomBottomPos(scene),
                position: EObstaclePosition.BOTTOM
            }
            return new Obstacle(scene, obstacleParams);
        }

        if (lastObstacle.position === EObstaclePosition.BOTTOM) {
            const obstacleParams: IObstacleParams = {
                x: lastObstacle.x,
                y: Obstacles.getRandomTopPos(lastObstacle, MIN_GAP, MAX_GAP),
                position: EObstaclePosition.TOP
            }
            return new Obstacle(scene, obstacleParams);
        }

        if (lastObstacle.position === EObstaclePosition.TOP) {
            const obstacleParams: IObstacleParams = {
                x: lastObstacle.x + lastObstacle.width + DISTANCE,
                y: Obstacles.getRandomBottomPos(scene),
                position: EObstaclePosition.BOTTOM
            }
            return new Obstacle(scene, obstacleParams);
        }

        throw new Error('Unreach value');
    }

}