import { takeLatest, select, call, put } from 'redux-saga/effects';
import { selectImagesSources } from './selectors';
import preload from '../utils/preloader';
import { PRELOAD_FRONT_IMAGES_REQUIRE } from './constants';
import * as actions from './actions';

export function* preloadImages() {
  const images = yield select(selectImagesSources);
  yield call(preload, images);
  yield put(actions.preloadImagesComplete());
}

export default function* watchPreloadImages() {
  yield takeLatest(PRELOAD_FRONT_IMAGES_REQUIRE, preloadImages);
}
