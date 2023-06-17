import { DEFAULT_HEIGHT } from "../constants";

export class RndPositionGeneratorUtil {

    static getRandomBottomPosition(): number {
        const height: number = DEFAULT_HEIGHT;
        return Phaser.Math.Between(height / 2, height - 100)
    }

    static getRandomTopPosition(prevObstacle, minGap: number, maxGap: number): number {
        const gap = Phaser.Math.Between(minGap, maxGap);
        const positionY = +prevObstacle.y - gap - prevObstacle.height;
        return positionY
    }
}