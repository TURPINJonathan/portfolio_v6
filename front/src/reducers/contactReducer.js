import { CONTACT_ME } from "../actions/contact";

const initialState = {
    lastName: "",
    firstName: "",
    mail: "",
    phone: "",
    object: "",
    message: "",
};

function contact(state = initialState, action) {
    switch (action.type) {
        case CONTACT_ME:
            switch (action.identifier) {
                case "lastName":
                    return {
                        ...state,
                        lastName: action.newValue,
                    };
                case "firstName":
                    return {
                        ...state,
                        firstName: action.newValue,
                    };
                case "mail":
                    return {
                        ...state,
                        mail: action.newValue,
                    };
                case "phone":
                    return {
                        ...state,
                        phone: action.newValue,
                    };
                case "object":
                    return {
                        ...state,
                        object: action.newValue,
                    };
                case "message":
                    return {
                        ...state,
                        message: action.newValue,
                    };
                default:
                    return state;
            }
        default:
            return state;
    }
}

export default contact;