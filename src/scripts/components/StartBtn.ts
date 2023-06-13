import { IStartBtn, IStartBtnModel } from "../interfaces";

export class StartBtn extends Phaser.GameObjects.Sprite implements IStartBtn {
    startBtnModel: IStartBtnModel

    constructor(startBtnModel: IStartBtnModel) {
        super(startBtnModel.scene, startBtnModel.positionX, startBtnModel.positionY, startBtnModel.texture);
        this.startBtnModel = startBtnModel;
        this.init();
    }

    init() {
        this.setOrigin(0).setScale(this.startBtnModel.scale);
        this.setInteractive();
        this.startBtnModel.scene.add.existing(this);
    }

    static generate(startBtnModel: IStartBtnModel) {
        return new StartBtn(startBtnModel);
    }
}