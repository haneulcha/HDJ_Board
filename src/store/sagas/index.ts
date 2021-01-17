import { all, fork } from 'redux-saga/effects';

import board from './board';

export default function* rootSaga():Generator {
  yield all([
    fork(board),
  ]);
}