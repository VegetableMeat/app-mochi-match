import {CREATE_ROOM} from "../actions";

const roomState = (state = [], action) => {
    switch (action.type) {
        case CREATE_ROOM:
            return [
                ...state,
                        {
                            id: 1,
                            host: 1,
                            game: 1
                        }
                    ]
        default:
            return state;
    }
}

export default roomState;