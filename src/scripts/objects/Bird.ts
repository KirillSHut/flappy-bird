export default class Bird extends Phaser.GameObjects.Sprite {
    constructor(scene) {
        super(scene, 30, scene.game.config.height / 2, 'bird');
        this.scene = scene;
        this.init();
    }

    init() {
        this.scene.add.existing(this);
        this.setOrigin(0);
    }
}