import { IStartBtnModel, IStartSceneModel } from "../interfaces";
import { IResultsBarModel } from "../interfaces/IResultsBarModel";
import { ResultsBarModel } from "./ResultsBarModel";
import { RoundModel } from "./RoundModel";
import { StartBtnModel } from "./StartBtnModel";

export class StartSceneModel implements IStartSceneModel {
    roundModel: RoundModel
    startBtnModel: IStartBtnModel
    resultsBarModel: IResultsBarModel

    constructor(scene: Phaser.Scene) {
        this.roundModel = new RoundModel();
        this.startBtnModel = new StartBtnModel(scene);
        this.resultsBarModel = new ResultsBarModel(scene);
    }
}