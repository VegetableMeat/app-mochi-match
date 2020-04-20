import {CREATE_ROOM} from "../actions";

const initialState = {
    room: 0
}

const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ROOM:
            state.room++;
            console.log(state.room);
            return state;

        default:
            return state;
    }
}

export default testReducer;