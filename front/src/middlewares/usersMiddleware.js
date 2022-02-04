import axios from 'axios';
import { FETCH_USERS, saveUsers } from '../actions/users';

import url from '../data';

const usersMiddlewares = (store) => (next) => (action) => {
    switch (action.type) {
        case FETCH_USERS:
            axios.get(`${url}api/users`)
                .then((response) => {
                    store.dispatch(saveUsers(response.data));
                });
            break;
        default:
            break;
    }
    return next(action);
}

export default usersMiddlewares;