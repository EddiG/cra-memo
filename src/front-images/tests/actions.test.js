import * as actions from '../actions';

describe('preloadImagesRequire', () => {
  it('should return an action PRELOAD_FRONT_IMAGES_REQUIRE', () => {
    expect(actions.preloadImagesRequire()).toMatchSnapshot();
  });
});

describe('preloadImagesComplete', () => {
  it('should return an action PRELOAD_FRONT_IMAGES_COMPLETE', () => {
    expect(actions.preloadImagesComplete()).toMatchSnapshot();
  });
});
