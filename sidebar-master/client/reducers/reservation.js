const hasReservationReducer = (state = false, action) => {
  if (action.type === 'CHANGE_HAS_RESERVATION') {
    return action.hasReservation;
  }
  return state;
};

const selectedDateReducer = (state = '', action) => {
  if (action.type === 'CHANGE_SELECTED_DATE') {
    return action.selectedDate;
  }
  return state;
};

const timeslotsReducer = (state = [], action) => {
  if (action.type === 'CHANGE_TIMESLOTS') {
    return action.timeslots;
  }
  return state;
};

const hoursOfOperationReducer = (state = [], action) => {
  if (action.type === 'CHANGE_HOURS_OF_OPERATION') {
    return action.hoursOfOperation;
  }
  return state;
};

export {
  hasReservationReducer,
  selectedDateReducer,
  timeslotsReducer,
  hoursOfOperationReducer
};