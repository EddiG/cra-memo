import { selectImagesSources } from '../selectors';

describe('selectImagesSources', () => {
  it('should return an array of front images from state', () => {
    const state = {
      byId: {
        frontImage1: {
          id: 'frontImage1',
          src: 'source1',
        },
        frontImage2: {
          id: 'frontImage2',
          src: 'source2',
        },
      },
      allIds: ['frontImage1', 'frontImage2'],
    };
    expect(selectImagesSources(state)).toMatchSnapshot();
  });
});
