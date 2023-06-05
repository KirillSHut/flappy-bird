export enum EType {
    LOSE,
    WIN,
}

export type TType = EType;

export interface IRound {
    type: EType,
    obstaclesQuantity: number
}