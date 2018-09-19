import { changeDisplayCalendar, changeCalendarDate } from './calendar';

const updateDisplayCalendar = (bool, date) => (dispatch) => {
  const documentClickHandler = (event) => {
    if (!document.getElementById('date-container').contains(event.target)) {
      document.removeEventListener('click', documentClickHandler);
      dispatch(changeDisplayCalendar(false));
    }
  };
  if (bool) { document.addEventListener('click', documentClickHandler); }
  dispatch(changeCalendarDate(new Date(date)));
  return dispatch(changeDisplayCalendar(bool));
};

export default updateDisplayCalendar;
