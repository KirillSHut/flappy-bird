import { IBird, IBirdModel } from "../interfaces";

export class Bird extends Phaser.GameObjects.Sprite implements IBird {
    birdModel: IBirdModel
    body: Phaser.Physics.Arcade.Body

    constructor(birdModel: IBirdModel) {
        super(birdModel.scene, birdModel.positionX, birdModel.positionY, birdModel.texture);
        this.birdModel = birdModel;
        this.init();
    }

    init() {
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.setOrigin(0, 1);
        this.body.velocity.y = this.birdModel.velocityY;
    }

    jump() {
        this.rotation = this.birdModel.jumpAnimation.startRotation;
        this.scene.tweens.add({
            targets: this,
            y: this.y - this.birdModel.jumpAnimation.jumpHeight,
            rotation: this.birdModel.jumpAnimation.finalRotation,
            easy: this.birdModel.jumpAnimation.type,
            duration: this.birdModel.jumpAnimation.duration,
        })
    }
}