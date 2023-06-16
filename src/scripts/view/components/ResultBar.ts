import { IResultsBarModel } from "../../interfaces/IResultsBarModel";

export class ResultBar {
    static generate(scene: Phaser.Scene, resultsBarModel: IResultsBarModel, textTitle: string, textScore: string) {
        const { color, opacity, x, y, width, height, textPositionX, textTitlePositionY, textScorePositionY, textStyle } = resultsBarModel;
        scene.add.graphics()
            .fillStyle(color, opacity)
            .fillRoundedRect(x, y, width, height);

        scene.add.text(textPositionX, textTitlePositionY, textTitle, textStyle).setOrigin(0.5);
        scene.add.text(textPositionX, textScorePositionY, textScore, textStyle).setOrigin(0.5);
    }
}