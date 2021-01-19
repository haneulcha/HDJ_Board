import { all, fork } from "redux-saga/effects";

import board from "./board";
import isOn from "./isOn";
import post from "./post";

export default function* rootSaga(): Generator {
    yield all([fork(board), fork(isOn), fork(post)]);
}
