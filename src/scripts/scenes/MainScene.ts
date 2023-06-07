import Bird from "../components/Bird";
import Obstacles from "../components/Obstacles";
import Router from "../utils/Router";
import IRound from "../interfaces/IRound";
import TType from "../types/TType";
import IGameResults from "../interfaces/IGameResults";
import IMainScene from "../interfaces/IMainScene";

export default class MainScene extends Phaser.Scene implements IMainScene {
	type: TType
	obstaclesQuantity: number
	loseObstacle: number
	bird: Bird
	obstacles: Obstacles
	router: Router

	constructor() {
		super({ key: 'MainScene' })
	}

	init(roundData: IRound) {
		this.type = roundData.type;
		this.obstaclesQuantity = roundData.obstaclesQuantity;
		this.loseObstacle = roundData.loseObstacle;
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
			this.onEnd();
		}
	}

	onEnd() {
		const results: IGameResults = {
			type: this.type,
			crossedObstacle: this.router.currentObstacle,
			totalObstacle: this.obstaclesQuantity
		};
		this.scene.start('StartScene', results);
	}

	update() {
		this.router.update();
	}
}
