import { Bird, Obstacles } from "../components";
import { IBird, IGameModel, IGameResults, IGameScene, IObstacles, IRound, IRoute } from "../interfaces";
import { TEGameOutcome } from "../types";
import { Route } from "../classes";
import { GameScoreUtil } from "../utils";
import { GameModel } from "../models";

export class GameScene extends Phaser.Scene implements IGameScene {
	gameOutcome: TEGameOutcome;
	obstaclesQuantity: number;
	loseObstacle: number;
	gameModel: IGameModel;
	bird: IBird;
	obstacles: IObstacles;
	route: IRoute;

	constructor() {
		super({ key: 'GameScene' })
	}

	init({ gameOutcome, obstaclesQuantity, loseObstacle }: IRound) {
		this.gameOutcome = gameOutcome;
		this.obstaclesQuantity = obstaclesQuantity;
		this.loseObstacle = loseObstacle;
		this.gameModel = new GameModel(this);
	}

	create() {
		this.add.sprite(0, 0, 'bg').setOrigin(0);
		this.bird = new Bird(this.gameModel.birdModel);
		this.obstacles = new Obstacles(this.gameModel.obstaclesModel);
		this.obstacles.createObstacles();
		this.route = new Route(this, this.obstacles);
		this.physics.add.overlap(this.bird, this.obstacles, this.onOverlap, undefined, this);
	}

	onOverlap() {
		if (!this.gameOutcome) {
			this.onEnd();
		}
	}

	onEnd() {
		const gameResults: IGameResults = GameScoreUtil.getGameResults(this.gameOutcome, this.route.crossedObstacle, this.obstaclesQuantity);
		this.scene.start('StartScene', gameResults);
	}

	update() {
		this.route.update();
	}
}
