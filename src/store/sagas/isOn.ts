import {
    all,
    call,
    put,
    fork,
    StrictEffect,
    takeEvery,
} from "redux-saga/effects";
import * as actions from "../_type";
import { getIsOnLS, updateIsOnLS } from "../../utils";

function* updateIsOn(action: actions.IReqUpdateIsOnAction) {
    yield call(updateIsOnLS, action.payload.board, action.payload.boardId);
    yield put({
        type: actions.GET_ISON,
        payload: action.payload,
    });
}

function* getIsOn() {
    const isOn: actions.IIsOnState = yield call(getIsOnLS);
    yield put({
        type: actions.GET_ISON,
        payload: isOn,
    });
}
function* watchIsOn() {
    yield takeEvery(actions.REQ_UPDATE_ISON, updateIsOn);
    yield takeEvery(actions.REQ_GET_ISON, getIsOn);
}

export default function* isOnSaga(): Generator<StrictEffect, void, unknown> {
    yield all([fork(watchIsOn)]);
}
