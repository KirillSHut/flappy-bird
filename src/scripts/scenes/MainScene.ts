import Bird from "../objects/Bird";
import Obstacles from "../objects/Obstacles";
import Router from "../objects/Router";
import { IRound, TType } from "../round/types";
import { GameResults, IMainScene } from "../types/SceneTypes";


export default class MainScene extends Phaser.Scene implements IMainScene {
	type: TType
	obstaclesQuantity: number
	bird: Bird
	obstacles: Obstacles
	router: Router

	constructor() {
		super({ key: 'MainScene' })
	}

	init(roundData: IRound) {
		this.type = roundData.type;
		this.obstaclesQuantity = roundData.obstaclesQuantity * 2;
	}

	create() {
		this.add.sprite(0, 0, 'bg').setOrigin(0);
		this.bird = new Bird(this);
		this.obstacles = new Obstacles(this);
		this.obstacles.createObstacles();
		this.router = new Router(this, this.obstacles);
		this.physics.add.overlap(this.bird, this.obstacles, this.onOverlap, undefined, this);
	}

	onOverlap() {
		if (!this.type) {
			this.onEnd(this.type, this.router.currentObstacle, this.router.totalObstacles);
		}
	}

	onEnd(type: TType, crossedObstacle: number, totalObstacle: number) {
		const results: GameResults = {
			type,
			crossedObstacle,
			totalObstacle
		};
		this.scene.start('StartScene', results);
	}

	update() {
		this.router.update();
	}
}
