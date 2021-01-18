import { all, fork } from 'redux-saga/effects';

import board from './board';
import isOn from './isOn'

export default function* rootSaga():Generator {
  yield all([
    fork(board), fork(isOn)
  ]);
}