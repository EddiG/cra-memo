import * as constants from './constants';

export const generateCards = () => ({
  type: constants.GENERATE_CARDS,
  payload: {},
});

export const refreshCards = () => ({
  type: constants.REFRESH_CARDS,
  payload: {},
});
