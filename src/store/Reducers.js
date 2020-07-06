import { combineReducers } from 'redux';
import roomListState from './room/list/Reducer';
import favoriteGameState from './game/favorite/Reducer';
import popularGameState from './game/popular/Reducer';
import modalState from './common/modal/Reducer';
import headerMenuState from './common/header-menu/Reducer';
import loginState from './common/login/Reducer';
import adminState from './common/admin/Reducer';
import roomCreationState from './room/creation/Reducer';

const rootReducers = combineReducers({
  roomListState,
  favoriteGameState,
  popularGameState,
  modalState,
  headerMenuState,
  loginState,
  adminState,
  roomCreationState,
});

export default rootReducers;
