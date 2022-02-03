import { connect } from 'react-redux';

import LetterN from '../../Components/LetterN';
import { fetchSkills } from '../../actions/skills';

const mapStateToProps = (state) => ({
    skills: state.skills.skills,
});

const mapDispatchToProps = (dispatch) => ({
    loadSkills: () => dispatch(fetchSkills()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LetterN);