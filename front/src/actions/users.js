export const FETCH_USERS = 'FETCH_USERS';
export const SAVE_USERS = 'SAVE_USERS';

export const fetchUsers = () => ({
    type: FETCH_USERS,
});

export const saveUsers = (newValue) => ({
    type: SAVE_USERS,
    newValue: newValue,
});