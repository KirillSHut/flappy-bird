import { Bird, Obstacles } from "../components";
import { IBird, IGameModel, IGameResults, IGameScene, IObstacles, IRound, IBirdJumpController } from "../../interfaces";
import { TEGameOutcome } from "../../types";
import { BirdJumpController } from "../../controllers";
import { GameScoreUtil } from "../../utils";
import { GameModel } from "../../models";

export class GameScene extends Phaser.Scene implements IGameScene {
	gameOutcome: TEGameOutcome;
	obstaclesQuantity: number;
	loseObstacle: number;
	gameModel: IGameModel;
	bird: IBird;
	obstacles: IObstacles;
	birdJumpController: IBirdJumpController;

	constructor() {
		super({ key: 'GameScene' })
	}

	init({ gameOutcome, obstaclesQuantity, loseObstacle }: IRound) {
		this.gameOutcome = gameOutcome;
		this.obstaclesQuantity = obstaclesQuantity;
		this.loseObstacle = loseObstacle;
		this.gameModel = new GameModel();
	}

	create() {
		this.add.sprite(0, 0, 'bg').setOrigin(0);
		this.bird = new Bird(this, this.gameModel.birdModel);
		this.obstacles = new Obstacles(this, this.gameModel.obstaclesModel);
		this.obstacles.createObstacles();
		this.birdJumpController = new BirdJumpController(this, this.obstacles);
		this.physics.add.overlap(this.bird, this.obstacles, this.onOverlap, undefined, this);
	}

	onOverlap() {
		if (!this.gameOutcome) {
			this.finishRound();
		}
	}

	finishRound() {
		const gameResults: IGameResults = GameScoreUtil.getGameResults(this.gameOutcome, this.birdJumpController.crossedObstacle, this.obstaclesQuantity);
		this.scene.start('StartScene', gameResults);
	}

	update() {
		this.birdJumpController.update();
	}
}
