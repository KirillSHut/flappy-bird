export default class Router {
    scene
    obstacles
    currentObstacle: number
    loseObstacle: number

    constructor(scene, group) {
        this.scene = scene;
        this.obstacles = group.getChildren();
        this.currentObstacle = 0;
        this.loseObstacle = this.getRandomLose();
        console.log(this.loseObstacle);
    }


    getRandomLose() {
        let numbers: number[] = []
        for (let i = 0; i < this.obstacles.length - 1; i++) {
            if (i % 2 == 0) {
                numbers.push(i);
            }
        }
        const index = Math.floor(Math.random() * numbers.length);

        return this.scene.type ? -1 : numbers[index];
    }

    update() {
        if (this.obstacles[this.currentObstacle].y - 15 <= this.scene.bird.y && this.currentObstacle !== this.loseObstacle) {
            this.scene.bird.jump();
        }

        if (this.obstacles[this.currentObstacle].x + this.obstacles[0].width <= this.scene.bird.x) {
            this.currentObstacle += 2;
        }
    }
}