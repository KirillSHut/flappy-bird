import { EColors, EColorsHexadecimal } from "../enums";
import { IResultsBarGraphicsParams, IResultsBarTextParams } from "../interfaces";
import { IResultsBarModel } from "../interfaces";
import { IResultsBarTextStyle } from "../interfaces";
import { ResultsBarPositionUtil } from "../utils";

export class ResultsBarModel implements IResultsBarModel {
    x: number;
    y: number;
    width: number;
    height: number;
    textPositionX: number;
    textStyle: IResultsBarTextStyle;
    graphicsParams: IResultsBarGraphicsParams;
    textTitleParams: IResultsBarTextParams;
    textScoreParams: IResultsBarTextParams;

    constructor() {
        this.width = 600;
        this.height = 600;
        this.x = ResultsBarPositionUtil.getX(this.width);
        this.y = ResultsBarPositionUtil.getY(this.height);
        this.textPositionX = ResultsBarPositionUtil.getTextPositionX(this.width);
        this.textStyle = {
            font: '50px CurseCasual',
            color: EColors.WHITE
        };
        this.graphicsParams = {
            x: 0,
            y: 0,
            width: this.width,
            height: this.height,
            color: EColorsHexadecimal.BLACK,
            opacity: 0.5
        }
        this.textTitleParams = {
            x: this.textPositionX,
            y: ResultsBarPositionUtil.getTitlePositionY(this.height),
            textStyle: this.textStyle
        }
        this.textScoreParams = {
            x: this.textPositionX,
            y: ResultsBarPositionUtil.getScorePositionY(this.height),
            textStyle: this.textStyle
        }
    }
}