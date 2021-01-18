export const REQUEST_BOARDLIST = 'REQUEST_BOARDLIST'
export const GET_BOARDLIST = 'GET_BOARDLIST'

export const REQUEST_BOARD = 'REQUEST_BOARD'
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

interface IRequestBoardAction {
    type: typeof REQUEST_BOARD
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


interface IRequestBoardListAction {
    type: typeof REQUEST_BOARDLIST
}

interface IGetBoardListAction {
    type: typeof GET_BOARDLIST
    payload: Array<IBoard>
}


export type BoardListActionTypes = IRequestBoardListAction | IGetBoardListAction
export type BoardActionTypes = IRequestBoardAction | ICreateBoardAction | IDeleteBoardAction

