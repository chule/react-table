import { RECEIVE_DATA } from "../actions/shared";

export default function usedSectors(state = [], action) {
    switch (action.type) {
        case RECEIVE_DATA:
            return action.usedSectors
        default:
            return state
    }
}