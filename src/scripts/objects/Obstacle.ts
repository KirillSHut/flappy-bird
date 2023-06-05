import { ObstacleType, TObstacle } from "../types/ObstacleTypes";
import Obstacles from "./Obstacles";

const MIN_GAP = 350;
const MAX_GAP = 600;
const DISTANCE = 100;

export default class Obstacle extends Phaser.GameObjects.Sprite {
    type: TObstacle

    constructor(scene, params) {
        super(scene, params.x, params.y, 'column');
        this.type = params.type;
        this.init();
    }

    init() {
        this.scene.add.existing(this);
        this.setOrigin(0);
    }


    static generate(scene, lastObstacle): Obstacle {
        if (lastObstacle === undefined) {
            const params = {
                x: 500,
                y: Obstacles.getRandomBottomPos(scene),
                type: ObstacleType.BOTTOM
            }
            return new Obstacle(scene, params);
        }

        if (lastObstacle.type === ObstacleType.BOTTOM) {
            const params = {
                x: lastObstacle.x,
                y: Obstacles.getRandomTopPos(lastObstacle, MIN_GAP, MAX_GAP),
                type: ObstacleType.TOP
            }
            return new Obstacle(scene, params);
        }

        if (lastObstacle.type === ObstacleType.TOP) {
            const params = {
                x: lastObstacle.x + lastObstacle.width + DISTANCE,
                y: Obstacles.getRandomBottomPos(scene),
                type: ObstacleType.BOTTOM
            }
            return new Obstacle(scene, params);
        }

        throw new Error('Недостижимое состояние');
    }

}