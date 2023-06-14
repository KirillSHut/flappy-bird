export class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: 'PreloadScene' })
    }

    preload() {
        this.load.image('game', 'assets/game.png');
        this.load.image('bg', 'assets/background.png');
        this.load.image('column', 'assets/column.png');
        this.load.image('bird', 'assets/bird.png');
        this.load.image('startBtn', 'assets/startbtn.png');
    }

    create() {
        this.scene.start('StartScene');
    }
}
