import { IBird, IBirdModel, IJumpAnimation } from "../../interfaces";

export class Bird extends Phaser.GameObjects.Sprite implements IBird {
    scene: Phaser.Scene;
    birdModel: IBirdModel;
    velocityY: number;
    jumpAnimation: IJumpAnimation;
    body: Phaser.Physics.Arcade.Body;

    constructor(scene: Phaser.Scene, { x, y, texture, velocityY, jumpAnimation }: IBirdModel) {
        super(scene, x, y, texture);
        this.velocityY = velocityY;
        this.jumpAnimation = jumpAnimation;
        this.scene = scene;
        this.init();
    }

    init() {
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.setOrigin(0, 1);
        this.body.velocity.y = this.velocityY;
    }

    jump() {
        const { startRotation, finalRotation, type, duration } = this.jumpAnimation;
        this.rotation = startRotation;
        this.scene.tweens.add({
            targets: this,
            y: this.afterJumpPositionY,
            rotation: finalRotation,
            easy: type,
            duration: duration,
        })
    }

    get afterJumpPositionY() {
        return this.y - this.jumpAnimation.jumpHeight
    }
}