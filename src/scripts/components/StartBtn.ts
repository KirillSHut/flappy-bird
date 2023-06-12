import { STARTBTN_POSITION_X, STARTBTN_POSITION_Y } from "../constants";

export class StartBtn extends Phaser.GameObjects.Sprite {
    constructor(scene: Phaser.Scene) {
        super(scene, STARTBTN_POSITION_X, STARTBTN_POSITION_Y, 'startBtn');
        this.scene = scene;
        this.init();
    }

    init() {
        this.setOrigin(0).setScale(2);
        this.setInteractive();
        this.scene.add.existing(this);
    }

    static generate(scene: Phaser.Scene) {
        return new StartBtn(scene);
    }
}