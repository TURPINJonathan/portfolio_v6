import axios from 'axios';
import { FETCH_PROJECTS } from '../actions/projects';

import url from '../data';

const projectsMiddlewares = (store) => (next) => (action) => {
    switch (action.type) {
        case FETCH_PROJECTS:
            axios.get(`${url}/api/projects`)
                .then((response) => {
                    console.log(response.data);
                    store.dispatch({
                        type: FETCH_PROJECTS,
                    });
                });
            break;
        default:
            break;
    }
    return next(action);
}

export default projectsMiddlewares;