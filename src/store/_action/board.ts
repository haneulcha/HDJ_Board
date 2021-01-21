import {
    REQ_CREATE_BOARD,
    REQ_GET_BOARDLIST,
    REQ_DELETE_BOARD,
    BoardActionTypes,
    BoardListActionTypes,
    IReqDeleteBoardAction,
    IReqUpdateBoardAction,
    REQ_UPDATE_BOARD,
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

export function reqUpdateBoard(data: {
    name: string;
    timestamp: number;
}): IReqUpdateBoardAction {
    return {
        type: REQ_UPDATE_BOARD,
        payload: {
            name: data.name,
            timestamp: data.timestamp,
        },
    };
}

export function reqDeleteBoard(timestamp: number): IReqDeleteBoardAction {
    return {
        type: REQ_DELETE_BOARD,
        meta: {
            timestamp,
        },
    };
}
