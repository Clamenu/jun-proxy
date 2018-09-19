import { connect } from 'react-redux';
import CalendarBody from '../component/CalendarBody.jsx';
import changeDisplayCalendar from '../action/displayCalendar.js';
import { updateSelectedDate } from '../action/updateDate.js';
import { changeTimeslots } from '../action/reservation.js';
import getTimeslots from '../action/timeslots.js';

const mapStateToProps = state => ({
  calendarWeeks: state.calendarWeeks,
  selectedDate: state.selectedDate,
  calendarDate: state.calendarDate,
  hoursOfOperation: state.hoursOfOperation
});

const mapDispatchToProps = dispatch => ({
  handleDateClick: (day, calendar, hoursOfOperation) => {
    const date = new Date(calendar);
    date.setDate(day);
    dispatch(changeTimeslots(getTimeslots(hoursOfOperation, date)));
    dispatch(updateSelectedDate(date)); 
    return dispatch(changeDisplayCalendar(false)); 
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarBody);