import axios from 'axios';
import { FETCH_PROJECTS, saveProjects } from '../actions/projects';

import url from '../data';

const projectsMiddlewares = (store) => (next) => (action) => {
    switch (action.type) {
        case FETCH_PROJECTS:
            axios.get(`${url}api/projects`)
                .then((response) => {
                    store.dispatch(saveProjects(response.data));
                });
            break;
        default:
            break;
    }
    return next(action);
}

export default projectsMiddlewares;