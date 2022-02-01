import { connect } from 'react-redux';

import LetterO from '../../Components/LetterO';
import { fetchProjects } from '../../actions/projects';

const mapStateToProps = (state) => ({
    projects: state.projects.projects,
});

const mapDispatchToProps = (dispatch) => ({
    loadProjects: () => dispatch(fetchProjects()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LetterO);