import { changeSelectedDate } from './reservation';
import { changeCalendarDate, changeCalendarWeeks } from './calendar';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const updateSelectedDate = (date = new Date()) => {
  const formattedDate = `${days[date.getDay()]}, ${months[date.getMonth()]} `
                      + `${date.getDate()}, ${date.getFullYear()}`;
  return dispatch => dispatch(changeSelectedDate(formattedDate));
};

const updateCalendarDate = (date = new Date()) => dispatch => dispatch(changeCalendarDate(date));

const updateCalendarWeeks = (date = new Date()) => {
  const month = date.getMonth();
  const year = date.getFullYear();
  const lastDay = new Date(year, month + 1, 0).getDate();
  const weeks = [];
  let week = [0, 0, 0, 0, 0, 0, 0];
  for (let day = 1; day <= lastDay; day += 1) {
    date.setDate(day);
    if (!date.getDay()) { week = [0, 0, 0, 0, 0, 0, 0]; }
    week[date.getDay()] = day;
    if (date.getDay() === 6 || day === lastDay) {
      weeks.push(week);
    }
  }
  return dispatch => dispatch(changeCalendarWeeks(weeks));
};

export {
  updateSelectedDate,
  updateCalendarDate,
  updateCalendarWeeks,
};
