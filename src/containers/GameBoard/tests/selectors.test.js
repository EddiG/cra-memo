import {
  selectCardsQuantity,
  selectFrontImages,
  selectBackImages,
} from '../selectors';

const state = {
  frontImages: {
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
  },
  backImages: {
    byId: {
      backImage1: {
        id: 'backImage1',
        src: 'source1',
      },
      backImage2: {
        id: 'backImage2',
        src: 'source2',
      },
    },
    allIds: ['backImage1', 'backImage2'],
  },
  settings: {
    cardsQuantity: 4,
  },
};

describe('GameBoard selector', () => {
  describe('selectCardsQuantity', () => {
    it('should return cards quantity from the store', () => {
      expect(selectCardsQuantity(state)).toEqual(4);
    });
  });
  describe('selectFrontImages', () => {
    it('should return front images from the store', () => {
      expect(selectFrontImages(state)).toMatchSnapshot();
    });
  });
  describe('selectBackImages', () => {
    it('should return back images from the store', () => {
      expect(selectBackImages(state)).toMatchSnapshot();
    });
  });
});
