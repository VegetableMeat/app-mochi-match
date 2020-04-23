import React from 'react';
import ReactDOM from 'react-dom';
import Top from './components/top';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Top />
  </Provider>,
  document.getElementById('root')
);
