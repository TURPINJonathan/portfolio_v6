import axios from 'axios';
import { FETCH_SKILLS, saveSkills } from '../actions/skills';

import url from '../data';

const skillsMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case FETCH_SKILLS:
            axios.get(`${url}api/skills`)
                .then((response) => {
                    store.dispatch(saveSkills(response.data));
                });
            break;
        default:
            break;
    }
    return next(action);
}

export default skillsMiddleware;