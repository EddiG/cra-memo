import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';

const configureStore = preloadedState => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = applyMiddleware(sagaMiddleware);

  const store = createStore(reducers, preloadedState, middlewares);

  sagaMiddleware.run(sagas);

  return store;
};

export default configureStore;
