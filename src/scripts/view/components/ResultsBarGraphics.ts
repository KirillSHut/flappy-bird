import { IResultsBarGraphicsParams } from "../../interfaces";

export class ResultsBarGraphics extends Phaser.GameObjects.Graphics {
    constructor(scene: Phaser.Scene, { x, y, color, opacity, width, height }: IResultsBarGraphicsParams) {
        super(scene);
        this.fillStyle(color, opacity)
        this.fillRoundedRect(x, y, width, height);
    }
}