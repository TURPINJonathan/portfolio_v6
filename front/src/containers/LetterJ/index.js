import { connect } from 'react-redux';

import LetterJ from '../../Components/LetterJ';
import { fetchUsers } from '../../actions/users';

const mapStateToProps = (state) => ({
    users: state.users.users,
});

const mapDispatchToProps = (dispatch) => ({
    loadUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LetterJ);