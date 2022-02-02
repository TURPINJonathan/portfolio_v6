import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import reducer from '../reducers';

import projectsMiddleware from '../middlewares/projectsMiddlewares';
import usersMiddlewares from '../middlewares/usersMiddleware';

const enhancer = composeWithDevTools(
    applyMiddleware(
        projectsMiddleware,
        usersMiddlewares
    ),
);

const store = createStore(reducer, enhancer);

export default store;