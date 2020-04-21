import { combineReducers } from 'redux';
import header from './Header';
import roomState from './CreateRoomButton';

const test =  combineReducers({
    header,
    roomState
})

export default test;