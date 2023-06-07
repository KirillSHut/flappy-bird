import IRound from "../interfaces/IRound";
import ROUNDS_MOCK from "../round/roundData";
import TType from "../types/TType";

class Model {
    type: TType
    obstaclesQuantity: number

    getData() {
        const index = Math.floor(Math.random() * ROUNDS_MOCK.length);

        this.type = ROUNDS_MOCK[index].type;
        this.obstaclesQuantity = ROUNDS_MOCK[index].obstaclesQuantity * 2;

        const data: IRound = {
            type: this.type,
            obstaclesQuantity: this.obstaclesQuantity,
            loseObstacle: this.getLoseObstacle()
        }

        return data
    }

    getLoseObstacle() {
        let numbers: number[] = []
        for (let i = 1; i < this.obstaclesQuantity - 1; i++) {
            if (i % 2 == 0) {
                numbers.push(i);
            }
        }
        const index = Math.floor(Math.random() * numbers.length);
        return this.type ? -1 : numbers[index];
    }
}


const MODEL = new Model();

export default MODEL