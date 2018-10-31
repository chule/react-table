import { combineReducers } from "redux";
import colapsedSectors from "./colapsedSectors";
import colapsedStages from "./colapsedStages";
import candidateStageData from "./candidateStageData";
import sectorData from "./sectorData";
import combinedStageData from "./combinedStageData";
import usedSectors from "./usedSectors";

export default combineReducers({
    colapsedSectors,
    colapsedStages,
    candidateStageData,
    sectorData,
    combinedStageData,
    usedSectors
});