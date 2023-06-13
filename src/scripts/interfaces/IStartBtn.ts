import { IStartBtnModel } from "./IStartBtnModel";

export interface IStartBtn extends Phaser.GameObjects.Sprite {
    startBtnModel: IStartBtnModel
    init: () => void
}