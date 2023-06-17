import { IGameScene, IObstacle, IObstacles, IObstaclesModel } from "../../interfaces";
import { Obstacle } from "./Obstacle";


export class Obstacles extends Phaser.Physics.Arcade.Group implements IObstacles {
    scene: IGameScene;
    velocityX: number;
    obstaclesCreated: number;
    obstaclesQuantity: number;

    constructor(scene: IGameScene, { velocityX }: IObstaclesModel) {
        super(scene.physics.world, scene);
        this.scene = scene;
        this.velocityX = velocityX;
        this.obstaclesQuantity = scene.obstaclesQuantity;
        this.init();
    }

    init() {
        this.obstaclesCreated = 0;
    }

    createObstacles() {
        if (this.areAllObstaclesCreated) {
            this.setVelocityX(this.velocityX);
            return false;
        }

        let lastObstacle = this.lastObstacleInGroup;
        let newObstacle: IObstacle = Obstacle.generate(this.scene, lastObstacle);

        this.add(newObstacle);
        ++this.obstaclesCreated;

        this.createObstacles();
    }

    get areAllObstaclesCreated() {
        return this.obstaclesCreated >= this.obstaclesQuantity
    }

    get lastObstacleInGroup() {
        return this.getChildren()[this.getChildren().length - 1]
    }
}