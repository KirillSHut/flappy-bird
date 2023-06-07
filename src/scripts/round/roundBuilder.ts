import TType from "../types/TType";

export default class RoundBuilder {
    type: TType;
    obstaclesQuantity: number;

    constructor(type, obstaclesQuantity) {
        this.type = type;
        this.obstaclesQuantity = obstaclesQuantity;
    }
}