import { fork, put } from 'redux-saga/effects';
import gameBoardSagas from './containers/GameBoard/sagas';
import cardsSagas from './containers/Cards/sagas';
import preloadFrontImages from './front-images/sagas';
import { preloadImagesRequire } from './front-images/actions';
import { generateCards } from './containers/GameBoard/actions';

export default function* rootSaga() {
  yield fork(gameBoardSagas);
  yield fork(cardsSagas);
  yield fork(preloadFrontImages);
  yield put(generateCards());
  yield put(preloadImagesRequire());
}
