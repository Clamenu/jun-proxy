import { connect } from 'react-redux';
import DateSelect from '../component/DateSelect.jsx';
import updateDisplayCalendar from '../action/displayCalendar.js';

const mapStateToProps = state => ({
  selectedDate: state.selectedDate,
  displayCalendar: state.displayCalendar
});

const mapDispatchToProps = dispatch => ({
  handleDateClick: (bool, date) => dispatch(updateDisplayCalendar(!bool, date))
});

export default connect(mapStateToProps, mapDispatchToProps)(DateSelect);