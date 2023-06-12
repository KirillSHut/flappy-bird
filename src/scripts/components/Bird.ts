import { BIRD_GRAVITY, DEFAULT_HEIGHT, JUMP_HEIGHT } from "../constants";
import { IGameScene } from "../interfaces";

export class Bird extends Phaser.GameObjects.Sprite {
    body: Phaser.Physics.Arcade.Body

    constructor(scene: IGameScene) {
        super(scene, 200, DEFAULT_HEIGHT / 2, 'bird');
        this.scene = scene;
        this.init();
    }

    init() {
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.body.velocity.y = BIRD_GRAVITY;
        this.setOrigin(0, 1);
    }

    jump() {
        this.rotation = -0.6;
        this.scene.tweens.add({
            targets: this,
            y: this.y - JUMP_HEIGHT,
            rotation: 0,
            easy: 'Linear',
            duration: 150,
        })
    }
}