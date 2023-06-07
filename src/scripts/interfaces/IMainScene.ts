import TType from "../types/TType"
import Bird from "../objects/Bird"
import Obstacles from "../objects/Obstacles"
import Router from "../objects/Router"
import IRound from "./IRound"


interface IMainScene extends Phaser.Scene {
    type: TType
    obstaclesQuantity: number
    bird: Bird
    obstacles: Obstacles
    router: Router
    init: (roundData: IRound) => void
    onOverlap: () => void
    onEnd: (type: TType, crossedObstacle: number, totalObstacle: number) => void
}

export default IMainScene