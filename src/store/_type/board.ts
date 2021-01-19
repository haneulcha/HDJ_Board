export const REQ_GET_BOARDLIST = 'REQ_GET_BOARDLIST'
export const GET_BOARDLIST = 'GET_BOARDLIST'

export const REQ_CREATE_BOARD = 'REQ_CREATE_BOARD'
export const CREATE_BOARD = 'CREATE_BOARD'

export const REQ_DELETE_BOARD = 'REQ_DELETE_BOARD'
export const DELETE_BOARD = 'DELETE_BOARD'

export interface IBoard {
    index: number
    name: string    
    timestamp: number
}

export interface IBoardsState {
    boards: IBoard[]
}

interface IReqCreateBoardAction {
    type: typeof REQ_CREATE_BOARD
}

interface ICreateBoardAction {
    type: typeof CREATE_BOARD
    payload: IBoard
}

export interface IReqDeleteBoardAction {
    type: typeof REQ_DELETE_BOARD
    meta: {
        timestamp: number
    }
}

interface IDeleteBoardAction {
    type: typeof DELETE_BOARD
    meta: {
        timestamp: number
    }
}


interface IReqGetBoardListAction {
    type: typeof REQ_GET_BOARDLIST
}

interface IGetBoardListAction {
    type: typeof GET_BOARDLIST
    payload: Array<IBoard>
}


export type BoardListActionTypes = IReqGetBoardListAction | IGetBoardListAction
export type BoardActionTypes = IReqCreateBoardAction | ICreateBoardAction | IDeleteBoardAction

