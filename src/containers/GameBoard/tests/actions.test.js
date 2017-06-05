import * as actions from '../actions';

describe('GameBoard action', () => {
  describe('generateCards', () => {
    it('should dispatch an action GENERATE_CARDS', () => {
      expect(actions.generateCards()).toMatchSnapshot();
    });
  });
  describe('refreshCards', () => {
    it('should dispatch an action REFRESH_CARDS', () => {
      expect(actions.refreshCards()).toMatchSnapshot();
    });
  });
});
