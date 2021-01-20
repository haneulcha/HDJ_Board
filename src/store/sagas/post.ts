import {
    all,
    call,
    put,
    fork,
    select,
    StrictEffect,
    takeEvery,
} from "redux-saga/effects";
import * as actions from "../_type";
import { createPostLS, getPostsLS, IPostLS, updatePostLS } from "../../utils";

export const getIsOn = (state: actions.IrootState): actions.IIsOnState =>
    state.isOn;

function* getPosts() {
    const isOn = yield select(getIsOn);
    const postsLS: Array<IPostLS> = yield call(getPostsLS, isOn.boardId);
    yield put({
        type: actions.GET_POSTS,
        payload: postsLS,
    });
}

function* createPost(action: actions.CreatePostActionTypes) {
    yield createPostLS(action.payload);
    yield put({
        type: actions.CREATE_POST,
        payload: action.payload,
    });
}

function* updatePost(action: actions.IReqUpdatePostAction) {
    yield updatePostLS(action.payload);
    yield put({
        type: actions.UPDATE_POST,
        payload: action.payload,
    });
}

function* watchGetPost() {
    // yield takeEvery(actions.REQ_GET_POSTS, getPosts); // 최초 접속시 불러오기
    yield takeEvery(actions.GET_ISON, getPosts); // isOn이 변경될 때마다 새로 포스트 불러오기
    // yield takeEvery(actions._ISON, getPosts);
}

function* watchCreatePost() {
    yield takeEvery(actions.REQ_CREATE_POST, createPost);
}

function* watchUpdatePost() {
    yield takeEvery(actions.REQ_UPDATE_POST, updatePost);
}

export default function* PostSaga(): Generator<StrictEffect, void, unknown> {
    yield all([
        fork(watchGetPost),
        fork(watchCreatePost),
        fork(watchUpdatePost),
    ]);
}
