import { OBSTACLE_VELOCITY } from "../constants";
import { IGameScene } from "../interfaces";
import { Obstacle } from "./Obstacle";


export class Obstacles extends Phaser.Physics.Arcade.Group {
    scene: IGameScene
    obstaclesCreated: number
    obstaclesQuantity: number

    constructor(scene: IGameScene) {
        super(scene.physics.world, scene);
        this.scene = scene;
        this.obstaclesQuantity = scene.obstaclesQuantity;
        this.init();
    }

    init() {
        this.obstaclesCreated = 0;
    }

    createObstacles() {
        if (this.obstaclesCreated >= this.obstaclesQuantity) {
            this.setVelocityX(OBSTACLE_VELOCITY);
            return false;
        }

        let lastObstacle = this.getChildren()[this.getChildren().length - 1];
        let newObstacle: Obstacle = Obstacle.generate(this.scene, lastObstacle);

        this.add(newObstacle);
        ++this.obstaclesCreated;

        this.createObstacles();
    }
}