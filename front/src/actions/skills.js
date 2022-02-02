export const FETCH_SKILLS = 'FETCH_SKILLS';
export const SAVE_SKILLS = 'SAVE_SKILLS';

export const fetchSkills = () => ({
    type: FETCH_SKILLS,
});

export const saveSkills = (newValue) => ({
    type: SAVE_SKILLS,
    newValue: newValue,
});