import { ObstacleParams, ObstacleType } from "../types/ObstacleTypes";
import { IObstacle } from "../types/ObstacleTypes";
import Obstacles from "./Obstacles";
import { MIN_GAP } from "../constants/constants";
import { MAX_GAP } from "../constants/constants";
import { DISTANCE } from "../constants/constants";
import { IMainScene } from "../types/SceneTypes";

export default class Obstacle extends Phaser.GameObjects.Sprite implements IObstacle {
    type: ObstacleType
    body: Phaser.Physics.Arcade.Body

    constructor(scene: IMainScene, params: ObstacleParams) {
        super(scene, params.x, params.y, 'column');
        this.type = params.type;
        this.init();
    }

    init() {
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.setOrigin(0);
    }


    static generate(scene: IMainScene, lastObstacle): Obstacle {

        if (lastObstacle === undefined) {
            const params: ObstacleParams = {
                x: 800,
                y: Obstacles.getRandomBottomPos(scene),
                type: ObstacleType.BOTTOM
            }
            return new Obstacle(scene, params);
        }

        if (lastObstacle.type === ObstacleType.BOTTOM) {
            const params: ObstacleParams = {
                x: lastObstacle.x,
                y: Obstacles.getRandomTopPos(lastObstacle, MIN_GAP, MAX_GAP),
                type: ObstacleType.TOP
            }
            return new Obstacle(scene, params);
        }

        if (lastObstacle.type === ObstacleType.TOP) {
            const params: ObstacleParams = {
                x: lastObstacle.x + lastObstacle.width + DISTANCE,
                y: Obstacles.getRandomBottomPos(scene),
                type: ObstacleType.BOTTOM
            }
            return new Obstacle(scene, params);
        }

        throw new Error('Недостижимое состояние');
    }

}