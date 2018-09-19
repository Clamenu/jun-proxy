import { connect } from 'react-redux';
import TimeSelect from '../component/TimeSelect.jsx';

const mapStateToProps = state => ({
  timeslots: state.timeslots,
});

export default connect(mapStateToProps)(TimeSelect);