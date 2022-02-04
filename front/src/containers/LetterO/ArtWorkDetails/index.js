import { connect } from 'react-redux';

import ArtWorkDetails from '../../../Components/LetterO/ArtWorkDetails';

const mapStateToProps = (state) => ({
    oneProject: state.projects.projects,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtWorkDetails);