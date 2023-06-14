import { ResultBar, StartBtn } from "../components";
import { IGameResults, IRound, IStartSceneModel } from "../interfaces";
import { StartSceneModel } from "../models";


export class StartScene extends Phaser.Scene {
    startSceneModel: IStartSceneModel

    constructor() {
        super({ key: 'StartScene' })
        this.startSceneModel = new StartSceneModel(this);
    }

    create(gameResults: IGameResults) {
        this.add.sprite(0, 0, 'bg').setOrigin(0);

        this.createStartBtn();
        if (gameResults.gameOutcome !== undefined) {
            this.createResultBar(gameResults);
        }
    }

    createResultBar(gameResults: IGameResults) {
        const textTitle = gameResults.gameOutcome;
        const textScore = gameResults.gameScore;

        ResultBar.generate(this.startSceneModel.resultsBarModel, textTitle, textScore);
    }

    createStartBtn() {
        StartBtn.generate(this.startSceneModel.startBtnModel).on('pointerdown', this.onStart, this);
    }

    onStart() {
        const round: IRound = this.startSceneModel.roundModel.getRound();
        this.scene.start('GameScene', round);
    }
}