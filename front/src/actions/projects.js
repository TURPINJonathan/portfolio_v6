export const FETCH_PROJECTS = 'FETCH_PROJECTS';
export const SAVE_PROJECTS = 'SAVE_PROJECTS';

export const fetchProjects = () => ({
    type: FETCH_PROJECTS,
});

export const saveProjects = (newValue) => ({
    type: SAVE_PROJECTS,
    newValue: newValue,
})