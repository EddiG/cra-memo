import { selectCards, selectOpenedNotGuessedCards } from '../selectors';

const state = {
  cards: {
    byId: {
      card1: {
        id: 'card1',
        isOpened: true,
        isGuessed: false,
        frontImageId: 'frontImage1',
        backImageId: 'backImage1',
      },
      card2: {
        id: 'card2',
        isOpened: true,
        isGuessed: true,
        frontImageId: 'frontImage2',
        backImageId: 'backImage2',
      },
    },
    allIds: ['card1', 'card2'],
  },
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
describe('Cards selector', () => {
  describe('selectCards', () => {
    it('should return the array of cards from the state', () => {
      expect(selectCards(state)).toMatchSnapshot();
    });
  });
  describe('selectOpenedNotGuessedCards', () => {
    it('should return the array of opened cards, except guessed', () => {
      expect(selectOpenedNotGuessedCards(state)).toMatchSnapshot();
    });
  });
});
