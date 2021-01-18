import { REQUEST_BOARD, REQUEST_BOARDLIST, REQ_DELETE_BOARD, BoardActionTypes, BoardListActionTypes, IReqDeleteBoardAction  } from '../_type'

export function requestBoard(): BoardActionTypes {
    return {
        type: REQUEST_BOARD
    }
}

export function requestBoardList(): BoardListActionTypes {
    return {
        type: REQUEST_BOARDLIST
    }
}

export function reqDeleteBoard(timestamp: number): IReqDeleteBoardAction {
    return {
        type: REQ_DELETE_BOARD,
        meta: {
            timestamp
        }
    }
}