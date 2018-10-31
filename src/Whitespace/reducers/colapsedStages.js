import { SWITCH_STAGE } from "../actions/colapsedStages";

export default function todos(state = [], action) {
    switch (action.type) {
        case SWITCH_STAGE:
            if (!state.length || !state.includes(action.id)) {
                return state.concat([action.id])
            } else {
                return state.filter((sector) => sector !== action.id)
            }

        default:
            return state
    }
}