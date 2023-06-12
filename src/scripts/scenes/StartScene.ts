import { StartBtn } from "../components";
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
        this.add.graphics()
            .fillStyle(0x000000, 0.5)
            .fillRoundedRect(+this.game.config.width / 2 - 300, +this.game.config.height / 2 - 300, 600, 600);

        const textTitle = this.gameResults.gameOutcome;
        const textScore = this.gameResults.gameScore;

        const textStyle = {
            font: '50px CurseCasual',
            color: '#fff'
        };

        this.add.text(+this.game.config.width / 2, 450, textTitle, textStyle).setOrigin(0.5);
        this.add.text(+this.game.config.width / 2, 550, textScore, textStyle).setOrigin(0.5);
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