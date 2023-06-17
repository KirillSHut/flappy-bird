import { IGameScene, IObstacle, IObstacleParams } from "../../interfaces";
import { TEObstaclePosition } from "../../types";
import { ObstacleGeneratorUtil } from "../../utils";

export class Obstacle extends Phaser.GameObjects.Sprite implements IObstacle {
    scene: Phaser.Scene;
    position: TEObstaclePosition;
    body: Phaser.Physics.Arcade.Body;

    constructor(scene: Phaser.Scene, { x, y, position }: IObstacleParams) {
        super(scene, x, y, 'column');
        this.scene = scene;
        this.position = position;
        this.init();
    }

    init() {
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.setOrigin(0);
    }


    static generate(scene: IGameScene, lastObstacle): Obstacle {

        if (ObstacleGeneratorUtil.isFirstObstacle(lastObstacle)) {
            return ObstacleGeneratorUtil.generateFirstObstacle(scene);
        }

        if (ObstacleGeneratorUtil.isObstaclePositionBottom(lastObstacle)) {
            return ObstacleGeneratorUtil.generateTopObstacle(scene, lastObstacle);
        }

        if (ObstacleGeneratorUtil.isObstaclePositionTop(lastObstacle)) {
            return ObstacleGeneratorUtil.generateBottomObstacle(scene, lastObstacle);
        }

        throw new Error('Unreach value');
    }
}