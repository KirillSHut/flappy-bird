import EObstacleType from '../enums/EObstacleType';

interface IObstacle extends Phaser.GameObjects.Sprite {
    type: EObstacleType
    body: Phaser.Physics.Arcade.Body
    init: () => void
}

export default IObstacle