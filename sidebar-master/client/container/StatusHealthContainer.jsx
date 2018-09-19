import { connect } from 'react-redux';
import StatusHealth from '../component/StatusHealth.jsx';

const mapStateToProps = state => ({
  healthScore: state.healthScore
});

export default connect(mapStateToProps)(StatusHealth);