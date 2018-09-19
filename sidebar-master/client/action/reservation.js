const changeHasReservation = bool => ({
  type: 'CHANGE_HAS_RESERVATION',
  hasReservation: bool,
});

const changeSelectedDate = selectedDate => ({
  type: 'CHANGE_SELECTED_DATE',
  selectedDate,
});

const changeTimeslots = timeslots => ({
  type: 'CHANGE_TIMESLOTS',
  timeslots,
});

const changeHoursOfOperation = hoursOfOperation => ({
  type: 'CHANGE_HOURS_OF_OPERATION',
  hoursOfOperation,
});

export {
  changeHasReservation,
  changeSelectedDate,
  changeTimeslots,
  changeHoursOfOperation,
};
