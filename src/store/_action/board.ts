import { BoardActionTypes, BoardListActionTypes, ReqDeleteBoardAction } from '../_type/board'

export const REQUEST_BOARDLIST = 'REQUEST_BOARDLIST'
export const REQUEST_BOARD = 'REQUEST_BOARD'
export const CREATE_BOARD = 'CREATE_BOARD'
export const REQ_DELETE_BOARD = 'REQ_DELETE_BOARD'

export const CREATE_POST = 'CREATE_POST'
export const DELETE_POST = 'DELETE_POST'

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

export function reqDeleteBoard(timestamp: number): ReqDeleteBoardAction {
    return {
        type: REQ_DELETE_BOARD,
        meta: {
            timestamp
        }
    }
}