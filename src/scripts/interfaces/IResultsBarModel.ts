import { ITextStyle } from "./ITextStyle";

export interface IResultsBarModel {
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
}