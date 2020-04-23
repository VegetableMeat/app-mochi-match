import { combineReducers } from 'redux';
import header from './header';
import createRoomButton from './createRoomButton';

const test =  combineReducers({
    header,
    createRoomButton
})

export default test;