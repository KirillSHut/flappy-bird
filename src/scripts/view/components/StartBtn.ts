import { IStartBtn, IStartBtnModel } from "../../interfaces";

export class StartBtn extends Phaser.GameObjects.Sprite implements IStartBtn {
    scene: Phaser.Scene;
    scale: number

    constructor(scene: Phaser.Scene, { x, y, texture, scale }: IStartBtnModel) {
        super(scene, x, y, texture);
        this.scene = scene;
        this.scale = scale;
        this.init();
    }

    init() {
        this.setOrigin(0).setScale(this.scale);
        this.setInteractive();
        this.scene.add.existing(this);
    }

    static generate(scene: Phaser.Scene, startBtnModel: IStartBtnModel) {
        return new StartBtn(scene, startBtnModel);
    }
}