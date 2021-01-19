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

// 보드를 클릭할 때
function* updateIsOn(action: actions.IReqUpdateIsOnAction) {
    yield call(updateIsOnLS, action.payload.isOn);
    yield put({
        type: actions.GET_ISON,
        payload: {
            isOn: action.payload.isOn,
        },
    });
}

// 보드를 생성하거나 삭제, LS에 가져올 때
function* getIsOn() {
    const isOn: actions.IIsOnState = yield call(getIsOnLS);
    yield put({
        type: actions.GET_ISON,
        payload: {
            isOn: isOn.isOn,
        },
    });
}
function* watchIsOn() {
    yield takeEvery(actions.REQ_UPDATE_ISON, updateIsOn);
    yield takeEvery(actions.REQ_GET_ISON, getIsOn);
}

export default function* isOnSaga(): Generator<StrictEffect, void, unknown> {
    yield all([fork(watchIsOn)]);
}
