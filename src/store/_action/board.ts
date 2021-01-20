import {
    REQ_CREATE_BOARD,
    REQ_GET_BOARDLIST,
    REQ_DELETE_BOARD,
    BoardActionTypes,
    BoardListActionTypes,
    IReqDeleteBoardAction,
} from "../_type";

export function reqCreateBoard(): BoardActionTypes {
    return {
        type: REQ_CREATE_BOARD,
    };
}

export function reqGetBoardList(): BoardListActionTypes {
    return {
        type: REQ_GET_BOARDLIST,
    };
}

export function reqDeleteBoard(): IReqDeleteBoardAction {
    return {
        type: REQ_DELETE_BOARD,
    };
}
