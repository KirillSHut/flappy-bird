import { IResultsBarTextParams } from "../../interfaces";

export class ResultsBarText extends Phaser.GameObjects.Text {
    constructor(scene: Phaser.Scene, { x, y, textStyle }: IResultsBarTextParams, textValue) {
        super(scene, x, y, textValue, textStyle);
        this.init();
    }

    init() {
        this.setOrigin(0.5);
    }
}