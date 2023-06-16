import { DEFAULT_HEIGHT, DEFAULT_WIDTH } from "../constants";

export class ResultsBarPositionUtil {
    static getX(width: number): number {
        return DEFAULT_WIDTH / 2 - width / 2;
    }

    static getY(height: number): number {
        return DEFAULT_HEIGHT / 2 - height / 2;
    }

    static getTextPositionX() {
        return DEFAULT_WIDTH / 2;
    }
}