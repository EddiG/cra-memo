import { combineReducers } from 'redux';
import cards from './containers/Cards/reducer';
import frontImages from './front-images/reducer';
import backImages from './back-images/reducer';
import settings from './settings/reducer';

export default combineReducers({
  cards,
  frontImages,
  backImages,
  settings,
});
