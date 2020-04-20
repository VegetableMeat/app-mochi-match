import { combineReducers } from 'redux';
import header from './Header';
import createRoomButton from './CreateRoomButton';

const test =  combineReducers({
    header,
    createRoomButton
})

export default test;