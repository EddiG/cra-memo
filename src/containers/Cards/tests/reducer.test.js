import reducer from '../reducer';
import * as actions from '../actions';

describe('cards reducer', () => {
  it('should handle UPDATE_CARDS', () => {
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
    const updateAction = actions.updateCards(cards);
    expect(reducer({}, updateAction)).toMatchSnapshot();
  });
  it('should handle CLOSE_CARDS', () => {
    const state = {
      byId: {
        card10: {
          id: 'card10',
          isOpened: true,
          isGuessed: false,
          frontImageId: 'frontImage1',
          backImageId: 'backImage1',
        },
        card20: {
          id: 'card20',
          isOpened: false,
          isGuessed: false,
          frontImageId: 'frontImage1',
          backImageId: 'backImage1',
        },
      },
      allIds: ['card10', 'card20'],
    };
    const closeCardsAction = actions.closeCards();
    expect(reducer(state, closeCardsAction)).toMatchSnapshot();
  });
  it('should handle TRIGGER_CARD', () => {
    const state = {
      byId: {
        card10: {
          id: 'card10',
          isOpened: false,
          isGuessed: false,
          frontImageId: 'frontImage1',
          backImageId: 'backImage1',
        },
        card20: {
          id: 'card20',
          isOpened: false,
          isGuessed: false,
          frontImageId: 'frontImage1',
          backImageId: 'backImage1',
        },
      },
      allIds: ['card10', 'card20'],
    };
    const triggerCard = actions.triggerCard('card10');
    expect(reducer(state, triggerCard)).toMatchSnapshot();
  });
  it('should handle VALIDATE_CARDS when the not paired cards was opened', () => {
    const state = {
      byId: {
        card10: {
          id: 'card10',
          pairCardId: 'card20',
          isOpened: true,
          isGuessed: false,
          frontImageId: 'frontImage1',
          backImageId: 'backImage1',
        },
        card20: {
          id: 'card20',
          pairCardId: 'card10',
          isOpened: false,
          isGuessed: false,
          frontImageId: 'frontImage1',
          backImageId: 'backImage1',
        },
        card30: {
          id: 'card30',
          pairCardId: 'card40',
          isOpened: true,
          isGuessed: false,
          frontImageId: 'frontImage11',
          backImageId: 'backImage1',
        },
        card40: {
          id: 'card40',
          pairCardId: 'card30',
          isOpened: false,
          isGuessed: false,
          frontImageId: 'frontImage11',
          backImageId: 'backImage1',
        },
        card50: {
          id: 'card50',
          pairCardId: 'card60',
          isOpened: true,
          isGuessed: false,
          frontImageId: 'frontImage21',
          backImageId: 'backImage1',
        },
        card60: {
          id: 'card60',
          pairCardId: 'card50',
          isOpened: false,
          isGuessed: false,
          frontImageId: 'frontImage21',
          backImageId: 'backImage1',
        },
      },
      allIds: ['card10', 'card20', 'card30', 'card40', 'card50', 'card60'],
    };
    const validateCards = actions.validateCards();
    expect(reducer(state, validateCards)).toMatchSnapshot();
  });
  it('should handle VALIDATE_CARDS when the paired cards was opened', () => {
    const state = {
      byId: {
        card10: {
          id: 'card10',
          pairCardId: 'card20',
          isOpened: true,
          isGuessed: false,
          frontImageId: 'frontImage1',
          backImageId: 'backImage1',
        },
        card20: {
          id: 'card20',
          pairCardId: 'card10',
          isOpened: true,
          isGuessed: false,
          frontImageId: 'frontImage1',
          backImageId: 'backImage1',
        },
        card30: {
          id: 'card30',
          pairCardId: 'card40',
          isOpened: false,
          isGuessed: false,
          frontImageId: 'frontImage11',
          backImageId: 'backImage1',
        },
        card40: {
          id: 'card40',
          pairCardId: 'card30',
          isOpened: false,
          isGuessed: false,
          frontImageId: 'frontImage11',
          backImageId: 'backImage1',
        },
      },
      allIds: ['card10', 'card20', 'card30', 'card40'],
    };
    const validateCards = actions.validateCards();
    expect(reducer(state, validateCards)).toMatchSnapshot();
  });
});
