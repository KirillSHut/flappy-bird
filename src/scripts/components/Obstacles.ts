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

    static getRandomBottomPos(scene: Phaser.Scene) {
        const height: number = +scene.game.config.height;
        return Phaser.Math.Between(height / 2, height - 100)
    }

    static getRandomTopPos(prevObstacle, minGap: number, maxGap: number) {
        const gap = Phaser.Math.Between(minGap, maxGap);
        const positionY = +prevObstacle.y - gap - prevObstacle.height;
        return positionY
    }
}