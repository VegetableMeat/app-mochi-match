import { combineReducers } from 'redux';
import roomState from './room/Reducer';

const rootReducers = combineReducers({
  roomState
})

export default rootReducers;