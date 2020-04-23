import { CREATE_ROOM } from "../actions";

const initialState = {
    id: 0,
    name: 'ルーム番号',
    room: []
}

const testReducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        case CREATE_ROOM:
            return {
                ...state,
                id: ++state.id,
                room: [
                    ...state.room,
                    state.name
                ]
            };
        default:
            return state;
    }
}

export default testReducer;