import { connect } from 'react-redux';
import CalendarHeader from '../component/CalendarHeader.jsx';
import { updateCalendarDate, updateCalendarWeeks } from '../action/updateDate.js';

const mapStateToProps = state => ({
  calendarDate: state.calendarDate,
});

const mapDispatchToProps = dispatch => ({
  handleDecreaseMonthClick: date => {
    const curr = new Date(date);
    const prev = curr.setMonth(curr.getMonth() - 1);
    dispatch(updateCalendarWeeks(new Date(prev)));
    return dispatch(updateCalendarDate(new Date(prev)));
  },
  handleIncreaseMonthClick: date => {
    const curr = new Date(date);
    const next = curr.setMonth(curr.getMonth() + 1);
    dispatch(updateCalendarWeeks(new Date(next)));
    return dispatch(updateCalendarDate(new Date(next)));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarHeader);