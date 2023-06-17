import { TEObstaclePosition } from "../types"

export interface IObstacle extends Phaser.GameObjects.Sprite {
    scene: Phaser.Scene
    position: TEObstaclePosition
    body: Phaser.Physics.Arcade.Body
    init: () => void
}
