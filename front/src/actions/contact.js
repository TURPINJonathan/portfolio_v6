export const CONTACT_ME = 'CONTACT_ME';
export const SHOW_FLASH = 'SHOW_FLASH';

export const contact = (newValue, identifier) => ({
    type: CONTACT_ME,
    newValue,
    identifier,
});

export const showFlash = (newValue) => ({
    type: SHOW_FLASH,
    newValue,
});