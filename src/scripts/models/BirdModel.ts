import { BIRD_GRAVITY, DEFAULT_HEIGHT, JUMP_HEIGHT } from "../constants";
import { IBirdModel, IJumpAnimation } from "../interfaces";

export class BirdModel implements IBirdModel {
    scene: Phaser.Scene;
    positionX: number;
    positionY: number;
    texture: string;
    velocityY: number;
    jumpAnimation: IJumpAnimation;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
        this.positionX = 200;
        this.positionY = DEFAULT_HEIGHT / 2;
        this.texture = 'bird';
        this.velocityY = BIRD_GRAVITY;
        this.jumpAnimation = {
            startRotation: -0.6,
            finalRotation: 0,
            jumpHeight: JUMP_HEIGHT,
            duration: 150,
            type: 'Linear'
        }
    }
}