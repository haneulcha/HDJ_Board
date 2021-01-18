import { REQ_GET_ISON, IsOnActionTypes } from "../_type";

export function reqGetBoard(): IsOnActionTypes {
    return {
        type: REQ_GET_ISON
    }
}