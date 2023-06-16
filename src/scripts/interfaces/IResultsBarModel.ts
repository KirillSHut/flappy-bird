import { ITextStyle } from "./ITextStyle";

export interface IResultsBarModel {
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
}