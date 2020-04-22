import {CREATE_ROOM} from "../actions";

const roomState = (state = [], action) => {
    switch (action.type) {
        case CREATE_ROOM:
            return [
                ...state,
                        {
                            id: action.id,
                            host: action.host,
                            game: action.game
                        }
                    ]
        default:
            return state;
    }
}

export default roomState;