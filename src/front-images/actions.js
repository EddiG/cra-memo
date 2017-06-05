import * as constants from './constants';

export const preloadImagesRequire = () => ({
  type: constants.PRELOAD_FRONT_IMAGES_REQUIRE,
  payload: {},
});

export const preloadImagesComplete = () => ({
  type: constants.PRELOAD_FRONT_IMAGES_COMPLETE,
  payload: {},
});
