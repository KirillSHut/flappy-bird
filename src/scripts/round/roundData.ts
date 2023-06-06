import { EType } from "./types"
import RoundBuilder from "./roundBuilder"


const ROUNDS_MOCK = [
    new RoundBuilder(EType.LOSE, 14),
    new RoundBuilder(EType.LOSE, 6),
    new RoundBuilder(EType.LOSE, 4),
    new RoundBuilder(EType.LOSE, 3),
    new RoundBuilder(EType.LOSE, 2),
];

export default function getRoundData() {
    const index = Math.floor(Math.random() * ROUNDS_MOCK.length);
    return ROUNDS_MOCK[index];
}