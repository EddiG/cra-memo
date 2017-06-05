// @flow
import { combineReducers } from 'redux';
import createReducer from '../utils/reducers';
import yellowImage from './yellow-bg.jpg';

type Image = {
  id: string,
  src: string,
};

type Images = {
  [string]: Image,
};

const initialStateById: Images = {
  backImage1: {
    id: 'backImage1',
    // src: 'https://dummyimage.com/200x200/957fae/fff.png&text=+',
    src: yellowImage,
  },
};

const initialStateAllIds: Array<string> = ['backImage1'];

const byId = createReducer(initialStateById, {});

const allIds = createReducer(initialStateAllIds, {});

const backImagesReducer = combineReducers({
  byId,
  allIds,
});

export default backImagesReducer;
