export const CREATE_BOARD = 'CREATE_BOARD'
export const DELETE_BOARD = 'DELETE_BOARD'
export const CREATE_POST = 'CREATE_POST'
export const DELETE_POST = 'DELETE_POST'

export interface Board {
    id: string
    index: number
    name: string    
    timestamp: number
}

export interface BoardsState {
    boards: Board[]
}

interface CreateBoardAction {
    type: typeof CREATE_BOARD
    payload: Board
}

interface DeleteBoardAction {
    type: typeof DELETE_BOARD
    meta: {
        timestamp: number
    }
}

export type BoardActionTypes = CreateBoardAction | DeleteBoardAction


