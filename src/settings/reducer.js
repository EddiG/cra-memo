// @flow
import createReducer from '../utils/reducers';

type Settings = {
  cardsQuantity: number,
};

const initialState: Settings = {
  cardsQuantity: 12,
};

const settingsReducer = createReducer(initialState, {});

export default settingsReducer;
