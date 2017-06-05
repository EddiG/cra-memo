import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import HomePage from '../containers/HomePage';
import App from '../containers/App';
import configureStore from '../store';

describe('Root component', () => {
  it('should render without errors', () => {
    const div = document.createElement('div');
    const store = configureStore();
    ReactDOM.render(
      <Provider store={store}>
        <App>
          <HomePage />
        </App>
      </Provider>,
      div
    );
  });
});
