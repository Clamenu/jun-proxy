const calendarDateReducer = (state = '', action) => {
  if (action.type === 'CHANGE_CALENDAR_DATE') {
    return action.calendarDate;
  }
  return state;
};

const calendarWeeksReducer = (state = [], action) => {
  if (action.type === 'CHANGE_CALENDAR_WEEKS') {
    return action.calendarWeeks;
  }
  return state;
};

const displayCalendarReducer = (state = false, action) => {
  if (action.type === 'CHANGE_DISPLAY_CALENDAR') {
    return action.displayCalendar;
  }
  return state;
};

export {
  calendarDateReducer,
  calendarWeeksReducer,
  displayCalendarReducer
};