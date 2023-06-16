import { IJumpAnimation } from "./IJumpAnimation";

export interface IBirdModel {
    x: number;
    y: number;
    texture: string;
    velocityY: number;
    jumpAnimation: IJumpAnimation;
} 