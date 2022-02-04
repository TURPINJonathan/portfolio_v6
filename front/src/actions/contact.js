export const CONTACT_ME = 'CONTACT_ME';

export const contact = (newValue, identifier) => ({
    type: CONTACT_ME,
    newValue,
    identifier,
});