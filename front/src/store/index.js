import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import reducer from '../reducers';

import projectsMiddleware from '../middlewares/projectsMiddlewares';
import usersMiddlewares from '../middlewares/usersMiddleware';
import skillsMiddleware from '../middlewares/skillsMiddleware';

const enhancer = composeWithDevTools(
    applyMiddleware(
        projectsMiddleware,
        usersMiddlewares,
        skillsMiddleware,
    ),
);

const store = createStore(reducer, enhancer);

export default store;