import { combineReducers } from 'redux';

import projectsReducer from './projectsReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
    projects: projectsReducer,
    users: usersReducer,
});

export default rootReducer;