import { IJumpAnimation } from "./IJumpAnimation";

export interface IBirdModel {
    scene: Phaser.Scene;
    positionX: number;
    positionY: number;
    texture: string;
    velocityY: number;
    jumpAnimation: IJumpAnimation;
} 