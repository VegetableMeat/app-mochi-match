import { CREATE_ROOM } from "../actions";

const initialState = {
    room: 0
}

const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ROOM:
            state++;
            return state;
        default:
            return state.room;
    }
}

export default testReducer;