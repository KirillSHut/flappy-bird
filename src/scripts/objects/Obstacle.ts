import Obstacles from "./Obstacles";
import { MIN_GAP } from "../constants/constants";
import { MAX_GAP } from "../constants/constants";
import { DISTANCE } from "../constants/constants";
import IObstacleParams from "../interfaces/IObstacleParams";
import EObstacleType from "../enums/EObstacleType";
import IObstacle from "../interfaces/IObstacle";
import IMainScene from "../interfaces/IMainScene";


export default class Obstacle extends Phaser.GameObjects.Sprite implements IObstacle {
    type: EObstacleType
    body: Phaser.Physics.Arcade.Body

    constructor(scene: IMainScene, params: IObstacleParams) {
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
            const params: IObstacleParams = {
                x: 800,
                y: Obstacles.getRandomBottomPos(scene),
                type: EObstacleType.BOTTOM
            }
            return new Obstacle(scene, params);
        }

        if (lastObstacle.type === EObstacleType.BOTTOM) {
            const params: IObstacleParams = {
                x: lastObstacle.x,
                y: Obstacles.getRandomTopPos(lastObstacle, MIN_GAP, MAX_GAP),
                type: EObstacleType.TOP
            }
            return new Obstacle(scene, params);
        }

        if (lastObstacle.type === EObstacleType.TOP) {
            const params: IObstacleParams = {
                x: lastObstacle.x + lastObstacle.width + DISTANCE,
                y: Obstacles.getRandomBottomPos(scene),
                type: EObstacleType.BOTTOM
            }
            return new Obstacle(scene, params);
        }

        throw new Error('Недостижимое состояние');
    }

}