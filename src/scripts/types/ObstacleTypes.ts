export enum ObstacleType {
    BOTTOM = 'Bottom',
    TOP = 'Top'
}

export type TObstacle = ObstacleType;

export interface ObstacleParams {
    x: number,
    y: number,
    type: TObstacle
}