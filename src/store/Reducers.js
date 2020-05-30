import { combineReducers } from 'redux';
import roomListState from './room/list/Reducer';
import favoriteGameState from './game/favorite/Reducer';
import popularGameState from './game/popular/Reducer';
const rootReducers = combineReducers({
  roomListState,
  favoriteGameState,
  popularGameState
})

export default rootReducers;