import { connect } from 'react-redux';

import Portfolio from '../../Components/Portfolio';
import { showFlash } from '../../actions/contact';

const mapStateToProps = state => ({
    flash: state.contact.flash,
});

const mapDispatchToProps = dispatch => ({
    showFlash: (newValue) => dispatch(showFlash(newValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);