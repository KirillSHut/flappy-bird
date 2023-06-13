import { IResultsBarModel } from "./IResultsBarModel";
import { IRoundModel } from "./IRoundModel";
import { IStartBtnModel } from "./IStartBtnModel";

export interface IStartSceneModel {
    roundModel: IRoundModel,
    startBtnModel: IStartBtnModel,
    resultsBarModel: IResultsBarModel
}