import { combineReducers } from "redux";
import authState from "./auth/Reducer";
import roomListState from "./room/list/Reducer";
import favoriteGameState from "./game/favorite/Reducer";
import popularGameState from "./game/popular/Reducer";
import modalState from "./common/modal/Reducer";
import roomState from "./room/room/Reducer";
import headerMenuState from "./common/header-menu/Reducer";
import loginState from "./common/login/Reducer";
import adminState from "./common/admin/Reducer";
import roomCreationState from "./room/creation/Reducer";
import userState from "./user/Reducer";
import socketState from "./socket/Reducer";
import historyState from "./history/Reducer";
import profileState from "./profile/Reducer";
import searchState from "./search/Reducer";

const rootReducers = combineReducers({
  authState,
  roomListState,
  favoriteGameState,
  popularGameState,
  modalState,
  roomState,
  headerMenuState,
  loginState,
  adminState,
  roomCreationState,
  userState,
  socketState,
  historyState,
  profileState,
  searchState,
});

export default rootReducers;
