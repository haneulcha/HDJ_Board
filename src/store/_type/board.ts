export const REQUEST_BOARDLIST = 'REQUEST_BOARDLIST'
export const GET_BOARDLIST = 'GET_BOARDLIST'

export const REQUEST_BOARD = 'REQUEST_BOARD'
export const CREATE_BOARD = 'CREATE_BOARD'

export const REQ_DELETE_BOARD = 'REQ_DELETE_BOARD'
export const DELETE_BOARD = 'DELETE_BOARD'

export const CREATE_POST = 'CREATE_POST'
export const DELETE_POST = 'DELETE_POST'

export interface Board {
    index: number
    name: string    
    timestamp: number
}

export interface BoardsState {
    boards: Board[]
}

interface RequestBoardAction {
    type: typeof REQUEST_BOARD
}

interface CreateBoardAction {
    type: typeof CREATE_BOARD
    payload: Board
}

export interface ReqDeleteBoardAction {
    type: typeof REQ_DELETE_BOARD
    meta: {
        timestamp: number
    }
}

interface DeleteBoardAction {
    type: typeof DELETE_BOARD
    meta: {
        timestamp: number
    }
}


interface RequestBoardListAction {
    type: typeof REQUEST_BOARDLIST
}

interface GetBoardListAction {
    type: typeof GET_BOARDLIST
    payload: Array<Board>
}


export type BoardListActionTypes = RequestBoardListAction | GetBoardListAction
export type BoardActionTypes = RequestBoardAction | CreateBoardAction | DeleteBoardAction

