import { GET_ISON, IsOnActionTypes, IsOnState } from "../_type";

export function isOnReducer(
    state = {
        isOn : 0
    },
    action: IsOnActionTypes
): IsOnState {
    console.log('inreducer', action)
    switch (action.type) {        
        case GET_ISON:
            return {
                isOn: action.payload.isOn
            }
        default:
            return state
    }

}