import {createStore} from 'redux';
import reducer from './reducers';

const store = createStore(reducer);
store.subscribe(() => 
  console.log("|----------------|\n| src / store.js |\n|----------------|" , store.getState())
)

export default store;