import { IBirdModel } from "./IBirdModel"

export interface IBird extends Phaser.GameObjects.Sprite {
    birdModel: IBirdModel
    body: Phaser.Physics.Arcade.Body
    init: () => void
    jump: () => void
}