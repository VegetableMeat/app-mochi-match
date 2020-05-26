import { createStore, applyMiddleware, Store, AnyAction } from 'redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './store/Reducers';
import rootSaga from './store/Sagas';

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);

  return store
}

const store = configureStore();

export default store;