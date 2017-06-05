// @flow
import { combineReducers } from 'redux';
import createReducer from '../utils/reducers';
import pooh from './winnie/pooh.png';
import pigglet from './winnie/pigglet.png';
import tiger from './winnie/tiger.png';
import ia from './winnie/ia.png';
import owl from './winnie/owl.png';
import rabbit from './winnie/rabbit.png';
import kenga from './winnie/kenga.png';

type Image = {
  id: string,
  src: string,
};

type Images = {
  [string]: Image,
};

const initialStateById: Images = {
  frontImage1: {
    id: 'frontImage1',
    src: pooh,
  },
  frontImage2: {
    id: 'frontImage2',
    src: pigglet,
  },
  frontImage3: {
    id: 'frontImage3',
    src: tiger,
  },
  frontImage4: {
    id: 'frontImage4',
    src: ia,
  },
  frontImage5: {
    id: 'frontImage5',
    src: owl,
  },
  frontImage6: {
    id: 'frontImage6',
    src: kenga,
  },
  frontImage7: {
    id: 'frontImage7',
    src: rabbit,
  },
};

const initialStateAllIds: Array<string> = [
  'frontImage1',
  'frontImage2',
  'frontImage3',
  'frontImage4',
  'frontImage5',
  'frontImage6',
  'frontImage7',
];

const byId = createReducer(initialStateById, {});

const allIds = createReducer(initialStateAllIds, {});

const frontImagesReducer = combineReducers({
  byId,
  allIds,
});

export default frontImagesReducer;
