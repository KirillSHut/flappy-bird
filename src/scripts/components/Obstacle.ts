import { EObstaclePosition } from "../enums";
import { IGameScene, IObstacle, IObstacleParams } from "../interfaces";
import { TEObstaclePosition } from "../types";
import { ObstacleGeneratorUtil } from "../utils";

export class Obstacle extends Phaser.GameObjects.Sprite implements IObstacle {
    position: TEObstaclePosition;
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
            return ObstacleGeneratorUtil.generateFirstObstacle(scene);
        }

        if (lastObstacle.position === EObstaclePosition.BOTTOM) {
            return ObstacleGeneratorUtil.generateTopObstacle(scene, lastObstacle);
        }

        if (lastObstacle.position === EObstaclePosition.TOP) {
            return ObstacleGeneratorUtil.generateBottomObstacle(scene, lastObstacle);
        }

        throw new Error('Unreach value');
    }
}