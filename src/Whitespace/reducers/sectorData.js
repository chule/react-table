import { RECEIVE_DATA } from "../actions/shared";

export default function sectorData(state = [], action) {
    switch (action.type) {
        case RECEIVE_DATA:
            return action.sectorData
        default:
            return state
    }
}