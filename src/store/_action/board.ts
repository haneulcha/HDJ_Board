import { BoardActionTypes, BoardListActionTypes } from '../_type/board'

export const REQUEST_BOARDLIST = 'REQUEST_BOARDLIST'
export const REQUEST_BOARD = 'REQUEST_BOARD'
export const CREATE_BOARD = 'CREATE_BOARD'
export const DELETE_BOARD = 'DELETE_BOARD'
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

// export function createBoard(newBoard: Board): BoardActionTypes {
//     return {
//         type: CREATE_BOARD,
//         payload: newBoard
//     }
// }

export function deleteBoard(timestamp: number): BoardActionTypes {
    return {
        type: DELETE_BOARD,
        meta: {
            timestamp
        }
    }
}