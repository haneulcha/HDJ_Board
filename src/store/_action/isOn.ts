import { REQ_GET_ISON, IsOnActionTypes, REQ_UPDATE_ISON } from "../_type";

export function reqGetIsOn(): IsOnActionTypes {
    return {
        type: REQ_GET_ISON,
    };
}

export function reqUpdateIsOn(board: string, boardId: number): IsOnActionTypes {
    return {
        type: REQ_UPDATE_ISON,
        payload: {
            board,
            boardId,
        },
    };
}
