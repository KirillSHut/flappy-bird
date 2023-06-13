import { STARTBTN_POSITION_X, STARTBTN_POSITION_Y } from "../constants";
import { IStartBtnModel } from "../interfaces";

export class StartBtnModel implements IStartBtnModel {
    scene: Phaser.Scene;
    positionX: number;
    positionY: number;
    texture: string;
    scale: number;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
        this.positionX = STARTBTN_POSITION_X;
        this.positionY = STARTBTN_POSITION_Y;
        this.texture = 'startBtn';
        this.scale = 2;
    }
}