import { DEFAULT_HEIGHT } from "../constants";
import { IBirdModel, IJumpAnimation } from "../interfaces";

export class BirdModel implements IBirdModel {
    x: number;
    y: number;
    texture: string;
    velocityY: number;
    jumpAnimation: IJumpAnimation;

    constructor() {
        this.x = 200;
        this.y = this.positionY;
        this.texture = 'bird';
        this.velocityY = 200;
        this.jumpAnimation = {
            startRotation: -0.6,
            finalRotation: 0,
            jumpHeight: 150,
            duration: 150,
            type: 'Linear'
        }
    }

    get positionY() {
        return DEFAULT_HEIGHT / 2
    }
}