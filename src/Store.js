import { createStore, applyMiddleware, Store, AnyAction } from 'redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './store/Reducers';
import rootSaga from './store/Sagas';
import socketMiddleware from './middleware/socketMiddleware'

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const store = createStore(reducer, applyMiddleware(socketMiddleware, sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
};

const store = configureStore();

export default store;
