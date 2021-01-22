import {
    all,
    call,
    fork,
    put,
    StrictEffect,
    takeEvery,
} from "redux-saga/effects";
import * as actions from "../_type";
import {
    createBoardLS,
    IBoardLS,
    getBoardListLS,
    deleteBoardLS,
    getIsOnLS,
    IIsOnLS,
    updateBoardLS,
} from "../../utils";

export const getIsOn = (state: actions.IrootState): actions.IIsOnState =>
    state.isOn;

function* getBoardList() {
    const boardListLS: Array<IBoardLS> = yield call(getBoardListLS);
    const boardListRD: Array<actions.IBoard> = boardListLS.map(
        (board: actions.IBoard) => ({
            index: board.index,
            name: board.name,
            timestamp: board.timestamp,
        })
    );
    yield put({
        type: actions.GET_BOARDLIST,
        payload: boardListRD,
    });
}

function* createBoard() {
    const boardLS: IBoardLS = yield call(createBoardLS);
    const boardRD: actions.IBoard = {
        index: boardLS.index,
        name: boardLS.name,
        timestamp: boardLS.timestamp,
    };
    yield put({
        type: actions.CREATE_BOARD,
        payload: boardRD,
    });

    const isOn: IIsOnLS = yield call(getIsOnLS);
    yield put({
        type: actions.GET_ISON,
        payload: isOn,
    });
}

function* updateBoard(action: actions.IReqUpdateBoardAction) {
    yield call(updateBoardLS, action.payload);
    yield call(getBoardList);
    yield put({
        type: actions.GET_ISON,
        payload: {
            board: action.payload.name,
            boardId: action.payload.timestamp,
        },
    });
}

function* deleteBoard(action: actions.IReqDeleteBoardAction) {
    const deleteLS: boolean = yield call(deleteBoardLS, action.meta.timestamp);
    if (deleteLS) {
        yield put({
            type: actions.DELETE_BOARD,
            meta: {
                timestamp: action.meta.timestamp,
            },
        });

        const newIsOn: IIsOnLS = yield call(getIsOnLS);
        yield put({
            type: actions.GET_ISON,
            payload: newIsOn,
        });
    }
}

function* watchBoard() {
    yield takeEvery(actions.REQ_CREATE_BOARD, createBoard);
    yield takeEvery(actions.REQ_DELETE_BOARD, deleteBoard);
    yield takeEvery(actions.REQ_UPDATE_BOARD, updateBoard);
}

function* watchBoardList() {
    yield takeEvery(actions.REQ_GET_BOARDLIST, getBoardList);
}

export default function* boardSaga(): Generator<StrictEffect, void, unknown> {
    yield all([fork(watchBoard), fork(watchBoardList)]);
}
