import { generateCards } from '../generators';

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
    },
    allIds: ['backImage1'],
  },
  settings: {
    cardsQuantity: 4,
  },
};

describe('GameBoard generator', () => {
  describe('generateCards', () => {
    it('should return the array of cards', () => {
      const cards = generateCards(state, false);
      expect(cards).toMatchSnapshot();
    });
  });
});
