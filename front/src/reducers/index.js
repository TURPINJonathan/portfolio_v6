import { combineReducers } from 'redux';

import projectsReducer from './projectsReducer';
import usersReducer from './usersReducer';
import skillsReducer from './skillsReducer';
import contactReducer from './contactReducer';

const rootReducer = combineReducers({
    projects: projectsReducer,
    users: usersReducer,
    skills: skillsReducer,
    contact: contactReducer,
});

export default rootReducer;