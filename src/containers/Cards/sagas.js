import { delay } from 'redux-saga';
import { take, race, select, call, put, takeEvery } from 'redux-saga/effects';
import { TRIGGER_CARD_ASYNC, VALIDATE_CARDS } from './constants';
import { triggerCard } from './actions';
import { selectOpenedNotGuessedCards } from './selectors';

export function* validateCardsAsync() {
  yield call(delay, 1000);
  yield put({ type: VALIDATE_CARDS });
}

export function* triggerCardAsync(action) {
  const openedCards = yield select(selectOpenedNotGuessedCards);
  if (openedCards.length === 0) {
    yield put(triggerCard(action.payload.id));
  }
  if (openedCards.length === 1) {
    yield put(triggerCard(action.payload.id));
    yield race({
      task: call(validateCardsAsync),
      cancel: take(TRIGGER_CARD_ASYNC),
    });
  }
  if (openedCards.length > 1) {
    yield put({ type: VALIDATE_CARDS });
    yield put(triggerCard(action.payload.id));
  }
}

export default function* watchTriggerCardAsync() {
  yield takeEvery(TRIGGER_CARD_ASYNC, triggerCardAsync);
}
