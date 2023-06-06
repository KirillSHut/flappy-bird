const JUMP_HEIGHT = 150;
const BIRD_GRAVITY = 150;

export default class Bird extends Phaser.GameObjects.Sprite {
    body: Phaser.Physics.Arcade.Body

    constructor(scene) {
        super(scene, 200, scene.game.config.height / 2, 'bird');
        this.scene = scene;
        this.init();
    }

    init() {
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.body.velocity.y = BIRD_GRAVITY;
        this.setOrigin(0.1, 1);
    }

    jump() {
        this.scene.tweens.add({
            targets: this,
            y: this.y - JUMP_HEIGHT,
            easy: 'Linear',
            duration: 150,
        })
    }
}