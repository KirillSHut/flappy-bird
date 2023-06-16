import { EColors, EColorsHexadecimal } from "../enums";
import { IResultsBarModel } from "../interfaces/IResultsBarModel";
import { ITextStyle } from "../interfaces/ITextStyle";
import { ResultsBarPositionUtil } from "../utils/ResultsBarPositionUtil";

export class ResultsBarModel implements IResultsBarModel {
    color: number;
    opacity: number;
    x: number;
    y: number;
    width: number;
    height: number;
    textPositionX: number;
    textTitlePositionY: number;
    textScorePositionY: number;
    textStyle: ITextStyle

    constructor() {
        this.color = EColorsHexadecimal.BLACK;
        this.opacity = 0.5;
        this.width = 600;
        this.height = 600;
        this.x = ResultsBarPositionUtil.getX(this.width);
        this.y = ResultsBarPositionUtil.getY(this.height);
        this.textPositionX = ResultsBarPositionUtil.getTextPositionX();
        this.textTitlePositionY = 450;
        this.textScorePositionY = 550;
        this.textStyle = {
            font: '50px CurseCasual',
            color: EColors.WHITE
        };
    }
}