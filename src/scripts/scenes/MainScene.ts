import Bird from "../objects/Bird";
import Obstacles from "../objects/Obstacles";
import Router from "../objects/Router";
import { IRound, TType } from "../round/types";


export default class MainScene extends Phaser.Scene {
	obstaclesQuantity: number
	type: TType
	bird: Bird
	obstacles: Obstacles
	router: Router

	constructor() {
		super({ key: 'MainScene' })
	}

	init(roundData: IRound) {
		this.type = roundData.type;
		this.obstaclesQuantity = 23;
		// this.obstaclesQuantity = roundData.obstaclesQuantity;
	}

	create() {
		this.add.sprite(0, 0, 'bg').setOrigin(0);
		this.bird = new Bird(this);
		this.obstacles = new Obstacles(this);
		this.obstacles.createObstacles();
		this.router = new Router(this, this.obstacles);
	}



	update() {
		this.router.update();
	}
}
