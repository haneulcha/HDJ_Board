import {
    all,
    call,
    put,
    fork,
    StrictEffect,
    takeEvery,
} from "redux-saga/effects";
import * as actions from "../_type";
import { getPostsLS, IPostLS } from "../../utils";

function* getPosts(action: actions.IReqGetPostsAction) {
    const postsLS: Array<IPostLS> = yield call(
        getPostsLS,
        action.payload.timestamp
    );
    console.log(postsLS);
    yield put({
        type: actions.GET_POSTS,
        payload: postsLS,
    });
}

function* watchIsOn() {
    yield takeEvery(actions.REQ_GET_POSTS, getPosts); // 최초 접속시 불러오기
    yield takeEvery(actions.GET_ISON, getPosts); // isOn이 변경될 때마다 새로 포스트 불러오기
}

export default function* isOnSaga(): Generator<StrictEffect, void, unknown> {
    yield all([fork(watchIsOn)]);
}
