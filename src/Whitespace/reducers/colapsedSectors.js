import { SWITCH_SECTOR } from "../actions/colapsedSectors";

export default function todos(state = [], action) {
    switch (action.type) {
        case SWITCH_SECTOR:
            if (!state.length || !state.includes(action.id)) {
                return state.concat([action.id])
            } else {
                return state.filter((sector) => sector !== action.id)
            }

        // case REMOVE_SECTOR:
        //     return state.filter((sector) => sector !== action.id)
        default:
            return state
    }
}