import { DEFAULT_WIDTH, RESULTBAR_HEIGHT, RESULTBAR_POSITION_X, RESULTBAR_POSITION_Y, RESULTBAR_WIDTH } from "../constants";
import { textStyle } from "../styles";

export class ResultBar {
    static generate(scene: Phaser.Scene, textTitle: string, textScore: string) {
        scene.add.graphics()
            .fillStyle(0x000000, 0.5)
            .fillRoundedRect(RESULTBAR_POSITION_X, RESULTBAR_POSITION_Y, RESULTBAR_WIDTH, RESULTBAR_HEIGHT);

        scene.add.text(DEFAULT_WIDTH / 2, 450, textTitle, textStyle).setOrigin(0.5);
        scene.add.text(DEFAULT_WIDTH / 2, 550, textScore, textStyle).setOrigin(0.5);
    }
}