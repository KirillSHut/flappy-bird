import { ResultBar, StartBtn } from "../components";
import { IGameResults, IRound } from "../interfaces";
import { GameModel } from "../models";


export class StartScene extends Phaser.Scene {
    startBtn: Phaser.GameObjects.Sprite;
    gameResults: IGameResults;
    gameModel: GameModel

    constructor() {
        super({ key: 'StartScene' })
        this.gameModel = new GameModel();
    }

    create(gameResults: IGameResults) {
        this.add.sprite(0, 0, 'bg').setOrigin(0);
        this.gameResults = gameResults;

        this.createStartBtn();
        if (this.gameResults.gameOutcome !== undefined) {
            this.createResultBar();
        }
    }

    createResultBar() {
        const textTitle = this.gameResults.gameOutcome;
        const textScore = this.gameResults.gameScore;

        ResultBar.generate(this, textTitle, textScore);
    }

    createStartBtn() {
        this.startBtn = StartBtn.generate(this);
        this.startBtn.on('pointerdown', this.onStart, this);
    }

    onStart() {
        const round: IRound = this.gameModel.getRound();
        this.scene.start('GameScene', round);
    }
}