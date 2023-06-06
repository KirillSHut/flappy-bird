export enum ObstacleType {
    BOTTOM = 'Bottom',
    TOP = 'Top'
}

export interface ObstacleParams {
    x: number,
    y: number,
    type: ObstacleType
}

export interface IObstacle extends Phaser.GameObjects.Sprite {
    type: ObstacleType
    body: Phaser.Physics.Arcade.Body
    init: () => void
}