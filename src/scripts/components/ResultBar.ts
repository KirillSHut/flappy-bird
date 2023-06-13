import { IResultsBarModel } from "../interfaces/IResultsBarModel";

export class ResultBar {
    static generate(resultsBarModel: IResultsBarModel, textTitle: string, textScore: string) {
        const { color, opacity, positionX, positionY, width, height, textPositionX, textTitlePositionY, textScorePositionY, textStyle } = resultsBarModel;
        resultsBarModel.scene.add.graphics()
            .fillStyle(color, opacity)
            .fillRoundedRect(positionX, positionY, width, height);

        resultsBarModel.scene.add.text(textPositionX, textTitlePositionY, textTitle, textStyle).setOrigin(0.5);
        resultsBarModel.scene.add.text(textPositionX, textScorePositionY, textScore, textStyle).setOrigin(0.5);
    }
}