import { IBirdModel } from "./IBirdModel"
import { IJumpAnimation } from "./IJumpAnimation";

export interface IBird extends Phaser.GameObjects.Sprite {
    scene: Phaser.Scene
    birdModel: IBirdModel
    velocityY: number
    jumpAnimation: IJumpAnimation
    body: Phaser.Physics.Arcade.Body
    init: () => void
    jump: () => void
}