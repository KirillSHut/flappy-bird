import { IBirdJumpController, IGameScene } from "../interfaces"
import { BirdJumpControllerUtil } from "../utils";

export class BirdJumpController implements IBirdJumpController {
    scene: IGameScene;
    crossedObstacle: number;
    loseObstacle: number;
    obstacles: any

    constructor(scene: IGameScene, obstaclesGroup: Phaser.Physics.Arcade.Group) {
        this.scene = scene;
        this.obstacles = obstaclesGroup.getChildren();
        this.loseObstacle = this.scene.loseObstacle;
        this.crossedObstacle = 0;
    }


    update() {
        if (BirdJumpControllerUtil.areAllObstaclesCrossed(this.crossedObstacle, this.obstacles.length)) {
            this.scene.finishRound();
            return false;
        }

        if (BirdJumpControllerUtil.isTimeToJump(this)) {
            this.scene.bird.jump();
        }

        if (BirdJumpControllerUtil.didBirdCrossObstacle(this)) {
            this.setNextObstacle();
        }
    }

    setNextObstacle() {
        this.crossedObstacle += 2;
    }
}