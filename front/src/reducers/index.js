import { combineReducers } from 'redux';

import projectsReducer from './projectsReducer';
import usersReducer from './usersReducer';
import skillsReducer from './skillsReducer';

const rootReducer = combineReducers({
    projects: projectsReducer,
    users: usersReducer,
    skills: skillsReducer,
});

export default rootReducer;