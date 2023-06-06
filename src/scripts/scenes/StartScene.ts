import getRoundData from "../round/roundData";
import { IRound } from "../round/types";
import { GameResults } from "../types/SceneTypes";

export default class StartScene extends Phaser.Scene {
    startBtn
    results: GameResults

    constructor() {
        super({ key: 'StartScene' })
    }

    create(results: GameResults) {
        this.results = results;
        this.add.sprite(0, 0, 'bg').setOrigin(0);

        this.createStartBtn();
        console.log(this.results);
        if (this.results.type !== undefined) {
            console.log('here');
            this.createResultBar();
        }
    }

    createResultBar() {
        this.add.graphics()
            .fillStyle(0x000000, 0.5)
            .fillRoundedRect(+this.game.config.width / 2 - 300, +this.game.config.height / 2 - 300, 600, 600);

        const textTitle = this.results?.type ? 'You won!' : 'You lost!';
        const textScore = `Crossed obstacles: ${this.results?.crossedObstacle / 2}/${this.results?.totalObstacle / 2}`;

        const textStyle = {
            font: '50px CurseCasual',
            color: '#fff'
        };

        this.add.text(+this.game.config.width / 2, 450, textTitle, textStyle).setOrigin(0.5);
        this.add.text(+this.game.config.width / 2, 550, textScore, textStyle).setOrigin(0.5);
    }

    createStartBtn() {
        this.startBtn = this.add.sprite(30, 50, 'startBtn').setOrigin(0).setScale(2);
        this.startBtn.setInteractive();
        this.startBtn.on('pointerdown', this.onStart, this);
    }

    onStart() {
        const roundData: IRound = getRoundData();
        this.scene.start('MainScene', roundData);
    }
}