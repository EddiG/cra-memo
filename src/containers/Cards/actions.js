// @flow
import * as constants from './constants';
import type { Card } from './types';

export const updateCards = (cards: Array<Card>) => ({
  type: constants.UPDATE_CARDS,
  payload: {
    cards,
  },
});

export const closeCards = () => ({
  type: constants.CLOSE_CARDS,
  payload: {},
});

export const triggerCard = (cardId: String) => ({
  type: constants.TRIGGER_CARD,
  payload: {
    id: cardId,
  },
});

export const triggerCardAsync = (cardId: String) => ({
  type: constants.TRIGGER_CARD_ASYNC,
  payload: {
    id: cardId,
  },
});

export const validateCards = () => ({
  type: constants.VALIDATE_CARDS,
  payload: {},
});
