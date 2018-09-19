import { connect } from 'react-redux';
import Reservation from '../component/Reservation.jsx';

const mapStateToProps = state => ({
  hasReservation: state.hasReservation
});

export default connect(mapStateToProps)(Reservation);