import * as actions from '../actions';

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
    backImageId: 'backImage2',
  },
];

describe('cards action', () => {
  describe('updateCards', () => {
    it('should return an action UPDATE_CARDS', () => {
      expect(actions.updateCards(cards)).toMatchSnapshot();
    });
  });

  describe('closeCards', () => {
    it('should dispatch an action CLOSE_CARDS', () => {
      expect(actions.closeCards()).toMatchSnapshot();
    });
  });

  describe('triggerCard', () => {
    it('should return an action TRIGGER_CARD', () => {
      expect(actions.triggerCard('card1')).toMatchSnapshot();
    });
  });

  describe('triggerCardAsync', () => {
    it('should return an action TRIGGER_CARD_ASYNC', () => {
      expect(actions.triggerCardAsync('card1')).toMatchSnapshot();
    });
  });
});
