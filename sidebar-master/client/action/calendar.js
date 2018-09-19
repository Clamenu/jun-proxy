const changeCalendarDate = calendarDate => ({
  type: 'CHANGE_CALENDAR_DATE',
  calendarDate,
});

const changeCalendarWeeks = calendarWeeks => ({
  type: 'CHANGE_CALENDAR_WEEKS',
  calendarWeeks,
});

const changeDisplayCalendar = bool => ({
  type: 'CHANGE_DISPLAY_CALENDAR',
  displayCalendar: bool,
});

export {
  changeCalendarDate,
  changeCalendarWeeks,
  changeDisplayCalendar,
};
