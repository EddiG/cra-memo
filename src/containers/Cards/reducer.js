// @flow
import { combineReducers } from 'redux';
import assign from 'lodash/assign';
import filter from 'lodash/filter';
import reduce from 'lodash/reduce';
import createReducer from '../../utils/reducers';
import * as constants from './constants';
import type { Card } from './types';

type Cards = {
  [string]: Card,
};

type Ids = Array<string>;

const updateCardsById = (state: Cards, action): Cards => {
  const { cards } = action.payload;
  return cards.reduce((acc, card) => ({ ...acc, ...{ [card.id]: card } }), {});
};

const updateCardsAllIds = (state: Ids, action): Ids => {
  const { cards } = action.payload;
  return cards.map(card => card.id);
};

const validateCards = (state: Cards): Cards => {
  const openedCards = filter(state, card => !card.isGuessed && card.isOpened);

  const validatedCards = openedCards.map(card => {
    const pairCard = openedCards.filter(c => c.pairCardId === card.id);
    if (pairCard.length) {
      return { ...card, isGuessed: true };
    }
    return { ...card, isOpened: false };
  });

  return assign(
    {},
    state,
    validatedCards.reduce((acc, card) => ({ ...acc, [card.id]: card }), {}),
  );
};

const closeCards = (state: Cards): Cards =>
  reduce(
    state,
    (acc, card) => ({
      ...acc,
      [card.id]: { ...card, isOpened: false, isGuessed: false },
    }),
    {},
  );

const triggerCard = (state: Cards, action): Cards => {
  const { id } = action.payload;
  const card = state[id];
  return assign({}, state, {
    [card.id]: { ...card, isOpened: card.isGuessed ? true : !card.isOpened },
  });
};

const byId = createReducer(({}: Cards), {
  [constants.UPDATE_CARDS]: updateCardsById,
  [constants.CLOSE_CARDS]: closeCards,
  [constants.TRIGGER_CARD]: triggerCard,
  [constants.VALIDATE_CARDS]: validateCards,
});

const allIds = createReducer(([]: Ids), {
  [constants.UPDATE_CARDS]: updateCardsAllIds,
});

export default combineReducers({
  byId,
  allIds,
});
