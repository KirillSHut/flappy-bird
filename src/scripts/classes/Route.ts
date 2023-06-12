import { IGameScene } from "../interfaces"

export class Route {
    scene: IGameScene;
    crossedObstacle: number;
    loseObstacle: number;
    obstacles

    constructor(scene: IGameScene, group: Phaser.Physics.Arcade.Group) {
        this.scene = scene;
        this.obstacles = group.getChildren();
        this.crossedObstacle = 0;
        this.loseObstacle = this.scene.loseObstacle;
    }


    update() {
        if (this.crossedObstacle >= this.obstacles.length) {
            this.scene.onEnd();
            return false;
        }

        if (this.obstacles[this.crossedObstacle].y - 15 <= this.scene.bird.y && this.crossedObstacle !== this.loseObstacle) {
            this.scene.bird.jump();
        }

        if (this.obstacles[this.crossedObstacle].x + this.obstacles[0].width <= this.scene.bird.x) {
            this.crossedObstacle += 2;
        }
    }
}