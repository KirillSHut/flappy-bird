import { IResultsBarGraphicsParams } from "./IResultsBarGraphicsParams";
import { IResultsBarTextParams } from "./IResultsBarTextParams";
import { IResultsBarTextStyle } from "./IResultsBarTextStyle";

export interface IResultsBarModel {
    x: number;
    y: number;
    width: number;
    height: number;
    textPositionX: number;
    textStyle: IResultsBarTextStyle;
    graphicsParams: IResultsBarGraphicsParams;
    textTitleParams: IResultsBarTextParams;
    textScoreParams: IResultsBarTextParams;
}