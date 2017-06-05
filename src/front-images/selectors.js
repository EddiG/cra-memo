import toArray from 'lodash/toArray';

export const selectImagesSources = state =>
  toArray(state.byId).map(image => image.src);

export default selectImagesSources;
