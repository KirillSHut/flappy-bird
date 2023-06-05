import getRoundData from "../round/roundData";
import { IRound } from "../round/types";

export default class StartScene extends Phaser.Scene {
    startBtn

    constructor() {
        super({ key: 'StartScene' })
    }

    create() {
        this.add.sprite(0, 0, 'bg').setOrigin(0);

        this.startBtn = this.add.sprite(30, 50, 'startBtn').setOrigin(0).setScale(2);
        this.startBtn.setInteractive();
        this.startBtn.on('pointerdown', this.onStart, this);
    }

    onStart() {
        const roundData: IRound = getRoundData();
        this.scene.start('MainScene', roundData);
    }
}