import { DEFAULT_WIDTH, RESULTBAR_HEIGHT, RESULTBAR_POSITION_X, RESULTBAR_POSITION_Y, RESULTBAR_WIDTH } from "../constants";
import { IResultsBarModel } from "../interfaces/IResultsBarModel";
import { ITextStyle } from "../interfaces/ITextStyle";
import { textStyle } from "../styles";

export class ResultsBarModel implements IResultsBarModel {
    scene: Phaser.Scene;
    color: number;
    opacity: number;
    positionX: number;
    positionY: number;
    width: number;
    height: number;
    textPositionX: number;
    textTitlePositionY: number;
    textScorePositionY: number;
    textStyle: ITextStyle

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
        this.color = 0x000000;
        this.opacity = 0.5
        this.positionX = RESULTBAR_POSITION_X;
        this.positionY = RESULTBAR_POSITION_Y;
        this.width = RESULTBAR_WIDTH;
        this.height = RESULTBAR_HEIGHT;
        this.textPositionX = DEFAULT_WIDTH / 2;
        this.textTitlePositionY = 450;
        this.textScorePositionY = 550;
        this.textStyle = textStyle;
    }
}