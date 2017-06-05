import React from 'react';
import { Provider } from 'react-redux';
import App from 'containers/App';
import HomePage from 'containers/HomePage';
import configureStore from 'store';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <App>
      <HomePage />
    </App>
  </Provider>
);

export default Root;
