import { IStartBtnModel } from "./IStartBtnModel";

export interface IStartBtn extends Phaser.GameObjects.Sprite {
    scene: Phaser.Scene
    scale: number
    init: () => void
}