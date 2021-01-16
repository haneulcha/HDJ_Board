import { Board, BoardActionTypes, CREATE_BOARD, DELETE_BOARD} from './types'

export function createBoard(newBoard: Board): BoardActionTypes {
    return {
        type: CREATE_BOARD,
        payload: newBoard
    }
}

export function deleteBoard(timestamp: number): BoardActionTypes {
    return {
        type: DELETE_BOARD,
        meta: {
            timestamp
        }
    }
}