import { generateCards, refreshCards } from '../sagas';

const cards = [
  {
    id: 'card1',
    isOpened: false,
    isGuessed: false,
    frontImageId: 'frontImage1',
    backImageId: 'backImage1',
  },
  {
    id: 'card2',
    isOpened: false,
    isGuessed: false,
    frontImageId: 'frontImage2',
    backImageId: 'backImage1',
  },
];

describe('GameBoard saga', () => {
  describe('generateCards', () => {
    it('should dispatch the action UPDATE_CARDS with an array of cards', () => {
      const generator = generateCards();

      const selectCards = generator.next().value;
      expect(selectCards).toMatchSnapshot();

      const putCards = generator.next(cards).value;
      expect(putCards).toMatchSnapshot();
    });
  });
  describe('refreshCards', () => {
    const generator = refreshCards();
    it('should dispatch an action CLOSE_CARDS', () => {
      const putCloseCards = generator.next().value;
      expect(putCloseCards).toMatchSnapshot();
    });
    it('should wait until cards would be closed', () => {
      const callDelay = generator.next().value;
      expect(callDelay).toMatchSnapshot();
    });
    it('should call generateCards function', () => {
      const putGenerateCards = generator.next().value;
      expect(putGenerateCards).toMatchSnapshot();
    });
  });
});
