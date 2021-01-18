import { GET_ISON, IsOnActionTypes, IIsOnState } from "../_type";

export function isOnReducer(
    state = {
        isOn : 0
    },
    action: IsOnActionTypes
): IIsOnState {    
    switch (action.type) {        
        case GET_ISON:
            return {
                isOn: action.payload.isOn
            }
        default:
            return state
    }

}