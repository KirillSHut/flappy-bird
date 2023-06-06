import { JUMP_HEIGHT } from "../constants/constants";
import { BIRD_GRAVITY } from "../constants/constants";
import { IMainScene } from "../types/SceneTypes";


export default class Bird extends Phaser.GameObjects.Sprite {
    body: Phaser.Physics.Arcade.Body

    constructor(scene: IMainScene) {
        super(scene, 200, +scene.game.config.height / 2, 'bird');
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