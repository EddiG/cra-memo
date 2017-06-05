import { delay } from 'redux-saga';
import { all, select, put, call, takeLatest } from 'redux-saga/effects';
import { updateCards, closeCards } from '../Cards/actions';
import { generateCards as generateNewCards } from './generators';
import { GENERATE_CARDS, REFRESH_CARDS } from './constants';

export function* generateCards() {
  const cards = yield select(generateNewCards);
  yield put(updateCards(cards));
}

export function* refreshCards() {
  yield put(closeCards());
  yield call(delay, 1000);
  yield call(generateCards);
}

export function* watchGenerateCards() {
  yield takeLatest(GENERATE_CARDS, generateCards);
}

export function* watchRefreshCards() {
  yield takeLatest(REFRESH_CARDS, refreshCards);
}

export default function* rootSaga() {
  yield all([watchGenerateCards(), watchRefreshCards()]);
}
