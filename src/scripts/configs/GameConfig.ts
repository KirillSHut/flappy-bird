import { DEFAULT_HEIGHT, DEFAULT_WIDTH } from "../constants";
import { EColors } from "../enums";
import { GameScene, PreloadScene, StartScene } from "../view/scenes";

export const gameConfig: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    backgroundColor: EColors.WHITE,
    scale: {
        parent: 'phaser-game',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT
    },
    scene: [PreloadScene, StartScene, GameScene],
    physics: {
        default: 'arcade',
        arcade: {}
    }
}