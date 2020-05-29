import { combineReducers } from 'redux';
import roomState from './room/Reducer';
import favoriteGameState from './game/favorite/Reducer';
import popularGameState from './game/popular/Reducer';
const rootReducers = combineReducers({
  roomState,
  favoriteGameState,
  popularGameState
})

export default rootReducers;