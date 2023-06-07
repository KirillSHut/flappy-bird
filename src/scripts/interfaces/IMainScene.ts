import TType from "../types/TType"
import Bird from "../components/Bird"
import Obstacles from "../components/Obstacles"
import Router from "../utils/Router"
import IRound from "./IRound"


interface IMainScene extends Phaser.Scene {
    type: TType
    obstaclesQuantity: number
    loseObstacle: number
    bird: Bird
    obstacles: Obstacles
    router: Router
    init: (roundData: IRound) => void
    onOverlap: () => void
    onEnd: () => void
}

export default IMainScene