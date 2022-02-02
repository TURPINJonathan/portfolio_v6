import { SAVE_SKILLS } from "../actions/skills";

const initialState = {
    skills: [],
};

function skillsReducer(state = initialState, action = {}) {
    switch (action.type) {
        case SAVE_SKILLS:
            return {
                ...state,
                skills: action.newValue,
            };
        default:
            return state;
    }
}

export default skillsReducer;