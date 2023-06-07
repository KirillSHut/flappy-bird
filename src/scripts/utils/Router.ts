import IMainScene from "../interfaces/IMainScene"

export default class Router {
    scene: IMainScene
    obstacles
    currentObstacle: number
    loseObstacle: number

    constructor(scene: IMainScene, group: Phaser.Physics.Arcade.Group) {
        this.scene = scene;
        this.obstacles = group.getChildren();
        this.currentObstacle = 0;
        this.loseObstacle = this.scene.loseObstacle;
    }


    update() {
        if (this.currentObstacle >= this.obstacles.length) {
            this.scene.onEnd();
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