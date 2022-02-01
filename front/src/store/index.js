import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import reducer from '../reducers';

import projectsMiddleware from '../middlewares/projectsMiddlewares';

const enhancer = composeWithDevTools(
    applyMiddleware(
        projectsMiddleware,
    ),
);

const store = createStore(reducer, enhancer);

export default store;