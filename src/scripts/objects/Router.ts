import { IMainScene } from "../types/SceneTypes"

export default class Router {
    scene: IMainScene
    obstacles
    currentObstacle: number
    loseObstacle: number
    totalObstacles: number

    constructor(scene: IMainScene, group: Phaser.Physics.Arcade.Group) {
        this.scene = scene;
        this.obstacles = group.getChildren();
        this.currentObstacle = 0;
        this.totalObstacles = this.obstacles.length;
        this.loseObstacle = this.getRandomLose();
    }


    getRandomLose() {
        let numbers: number[] = []
        for (let i = 1; i < this.obstacles.length - 1; i++) {
            if (i % 2 == 0) {
                numbers.push(i);
            }
        }
        const index = Math.floor(Math.random() * numbers.length);
        return this.scene.type ? -1 : numbers[index];
    }

    update() {
        if (this.currentObstacle >= this.obstacles.length) {
            this.scene.onEnd(this.scene.type, this.currentObstacle, this.totalObstacles);
            return false;
        }

        if (this.obstacles[this.currentObstacle].y - 15 <= this.scene.bird.y && this.currentObstacle !== this.loseObstacle) {
            this.scene.bird.jump();
        }

        if (this.obstacles[this.currentObstacle].x + this.obstacles[0].width <= this.scene.bird.x) {
            this.currentObstacle += 2;
        }
    }
}