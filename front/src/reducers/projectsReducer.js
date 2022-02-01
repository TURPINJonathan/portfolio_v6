import { SAVE_PROJECTS } from "../actions/projects";

const initialState = {
    projects: [],
};

function projectsReducer(state = initialState, action = {}) {
    switch (action.type) {
        case SAVE_PROJECTS:
            return {
                ...state,
                projects: action.newValue,
            };
        default:
            return state;
    }
}

export default projectsReducer;