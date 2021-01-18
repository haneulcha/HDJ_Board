import { all, call, fork, put, StrictEffect, takeEvery } from 'redux-saga/effects';
import * as actions from '../_type/board'
import { createBoardLS, BoardLS, getBoardListLS, deleteBoardLS } from '../../utils'

function* getBoardList() {
    const boardListLS: Array<BoardLS> = yield call(getBoardListLS)
    const boardListRD: Array<actions.Board> = boardListLS.map(
        (board:actions.Board) => ({ 
            index: board.index,
            name: board.name,
            timestamp: board.timestamp
        }))
    yield put({
            type: actions.GET_BOARDLIST,
            payload: boardListRD
    })
    
}
function* createBoard(){
    const boardLS: BoardLS = yield call(createBoardLS)
    const boardRD: actions.Board = {
        index: boardLS.index,
        name: boardLS.name,
        timestamp: boardLS.timestamp
    }
    yield put({
        type: actions.CREATE_BOARD,
        payload: boardRD
    })
}

function* deleteBoard(action: actions.ReqDeleteBoardAction){    
    const deleteLS: boolean = yield call(deleteBoardLS, action.meta.timestamp)    
    if(deleteLS){
        yield put({
            type: actions.DELETE_BOARD,                
            meta: {
                timestamp: action.meta.timestamp
            }
        })
    }
}


function* watchBoard() {
    yield takeEvery(actions.REQUEST_BOARD, createBoard);
    yield takeEvery(actions.REQ_DELETE_BOARD, deleteBoard)
}

function* watchBoardList() {
    yield takeEvery(actions.REQUEST_BOARDLIST, getBoardList)
}


export default function* boardSaga(): Generator<StrictEffect, void, unknown> {
    yield all([
        fork(watchBoard), fork(watchBoardList)
    ])
  }
