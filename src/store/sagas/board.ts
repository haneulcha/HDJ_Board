import { all, call, fork, put, StrictEffect, takeEvery } from 'redux-saga/effects';
import * as actions from '../_type/board'
import { createBoardLS, BoardLS } from '../../utils'

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

function* watchBoard() {
    yield takeEvery(actions.REQUEST_BOARD, createBoard);
}


export default function* boardSaga(): Generator<StrictEffect, void, unknown> {
    yield all([
        fork(watchBoard)
    ])
  }
