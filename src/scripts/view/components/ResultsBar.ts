import { IResultsBarModel } from "../../interfaces/IResultsBarModel";
import { ResultsBarGraphics } from "./ResultsBarGraphics";
import { ResultsBarText } from "./ResultsBarText";

export class ResultsBar extends Phaser.GameObjects.Container {

    constructor(scene: Phaser.Scene, { x, y, graphicsParams, textTitleParams, textScoreParams }: IResultsBarModel, textTitle: string, textScore: string) {
        super(scene, x, y)
        const graphics = new ResultsBarGraphics(scene, graphicsParams);
        const title = new ResultsBarText(scene, textTitleParams, textTitle);
        const score = new ResultsBarText(scene, textScoreParams, textScore);
        this.add([graphics, title, score]);
        scene.add.existing(this);
    }

    static generate(scene: Phaser.Scene, resultsBarModel: IResultsBarModel, textTitle: string, textScore: string) {
        return new ResultsBar(scene, resultsBarModel, textTitle, textScore)
    }
}