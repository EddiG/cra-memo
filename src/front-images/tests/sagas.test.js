import { preloadImages } from '../sagas';

describe('preloadImages saga', () => {
  const generator = preloadImages();
  const images = [{ src: '' }, { src: '' }];

  it('should select images for preload', () => {
    const selectImagesDesc = generator.next().value;
    expect(selectImagesDesc).toMatchSnapshot();
  });

  it('should call images preloader', () => {
    const callImagePreloaderDesc = generator.next(images).value;
    expect(callImagePreloaderDesc).toMatchSnapshot();
  });

  it('should dispatch PRELOAD_FRONT_IMAGES_COMPLETE', () => {
    const putPreloadComleteDesc = generator.next().value;
    expect(putPreloadComleteDesc).toMatchSnapshot();
  });
});
