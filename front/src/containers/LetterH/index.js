import { connect } from 'react-redux';

import LetterH from '../../Components/LetterH';
import { contact, showFlash } from '../../actions/contact';

const mapStateToProps = state => ({
    lastName: state.contact.lastName,
    firstName: state.contact.firstName,
    mail: state.contact.mail,
    phone: state.contact.phone,
    object: state.contact.object,
    message: state.contact.message,
    flash: state.contact.flash,
});

const mapDispatchToProps = dispatch => ({
    contact: (newValue, identifier) => dispatch(contact(newValue, identifier)),
    showFlash: (newValue) => dispatch(showFlash(newValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LetterH);