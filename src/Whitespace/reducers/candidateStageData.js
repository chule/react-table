import { RECEIVE_DATA } from "../actions/shared";

export default function candidateStageData(state = [], action) {
    switch (action.type) {
        case RECEIVE_DATA:
            return action.candidateStageData
        default:
            return state
    }
}