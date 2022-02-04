import { SAVE_USERS } from "../actions/users";

const initialState = {
    users: [],
};

function usersReducer(state = initialState, action = {}) {
    switch (action.type) {
        case SAVE_USERS:
            return {
                ...state,
                users: action.newValue,
            };
        default:
            return state;
    }
}

export default usersReducer;
