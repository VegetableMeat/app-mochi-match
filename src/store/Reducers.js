import { combineReducers } from 'redux';
import roomState from './room/Reducer';
import favoriteGameState from './game/favorite/Reducer';

const rootReducers = combineReducers({
  roomState,
  favoriteGameState,
})

export default rootReducers;