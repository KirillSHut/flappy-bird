export default class Router {
    scene
    obstacles
    currentObstacle: number

    constructor(scene, group) {
        this.scene = scene;
        this.obstacles = group.getChildren();
        this.currentObstacle = 0;
    }


    update() {
        if (this.obstacles[this.currentObstacle].y - 15 <= this.scene.bird.y) {
            this.scene.bird.jump();
        }

        if (this.obstacles[this.currentObstacle].x + this.obstacles[0].width <= this.scene.bird.x) {
            this.currentObstacle += 2;
        }
    }
}