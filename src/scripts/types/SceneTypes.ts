import { TType } from "../round/types";
import Bird from "../objects/Bird";
import Obstacles from "../objects/Obstacles";
import Router from "../objects/Router";
import { IRound } from "../round/types";

export interface GameResults {
    type: TType,
    crossedObstacle: number,
    totalObstacle: number
}

export interface IMainScene extends Phaser.Scene {
    type: TType
    obstaclesQuantity: number
    bird: Bird
    obstacles: Obstacles
    router: Router
    init: (roundData: IRound) => void
    onOverlap: () => void
    onEnd: (type: TType, crossedObstacle: number, totalObstacle: number) => void
}