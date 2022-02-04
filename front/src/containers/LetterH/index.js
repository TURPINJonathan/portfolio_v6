import { connect } from 'react-redux';

import LetterH from '../../Components/LetterH';
import { contact } from '../../actions/contact';

const mapStateToProps = state => ({
    lastName: state.contact.lastName,
    firstName: state.contact.firstName,
    mail: state.contact.mail,
    phone: state.contact.phone,
    object: state.contact.object,
    message: state.contact.message,
});

const mapDispatchToProps = dispatch => ({
    contact: (newValue, identifier) => dispatch(contact(newValue, identifier)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LetterH);