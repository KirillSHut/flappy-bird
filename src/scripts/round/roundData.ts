import EType from "../enums/EType";
import RoundBuilder from "./roundBuilder"


const ROUNDS_MOCK = [
    new RoundBuilder(EType.WIN, 14),
    new RoundBuilder(EType.WIN, 6),
    new RoundBuilder(EType.WIN, 4),
    new RoundBuilder(EType.WIN, 3),
    new RoundBuilder(EType.WIN, 2),
];


export default ROUNDS_MOCK
