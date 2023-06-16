import { IStartBtnModel } from "../interfaces";

export class StartBtnModel implements IStartBtnModel {
    x: number;
    y: number;
    texture: string;
    scale: number;

    constructor() {
        this.x = 30;
        this.y = 50;
        this.texture = 'startBtn';
        this.scale = 2;
    }
}