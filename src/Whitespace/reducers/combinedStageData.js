import { RECEIVE_DATA } from "../actions/shared";

export default function combinedStageData(state = [], action) {
    switch (action.type) {
        case RECEIVE_DATA:
            return action.combinedStageData
        default:
            return state
    }
}