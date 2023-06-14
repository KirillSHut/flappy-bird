import { IObstacle, IObstacles, IObstaclesModel } from "../interfaces";
import { Obstacle } from "./Obstacle";


export class Obstacles extends Phaser.Physics.Arcade.Group implements IObstacles {
    obstaclesModel: IObstaclesModel
    obstaclesCreated: number
    obstaclesQuantity: number

    constructor(obstaclesModel: IObstaclesModel) {
        super(obstaclesModel.scene.physics.world, obstaclesModel.scene);
        this.obstaclesModel = obstaclesModel;
        this.obstaclesQuantity = obstaclesModel.scene.obstaclesQuantity;
        this.init();
    }

    init() {
        this.obstaclesCreated = 0;
    }

    createObstacles() {
        if (this.obstaclesCreated >= this.obstaclesQuantity) {
            this.setVelocityX(this.obstaclesModel.velocityX);
            return false;
        }

        let lastObstacle = this.getChildren()[this.getChildren().length - 1];
        let newObstacle: IObstacle = Obstacle.generate(this.obstaclesModel.scene, lastObstacle);

        this.add(newObstacle);
        ++this.obstaclesCreated;

        this.createObstacles();
    }
}