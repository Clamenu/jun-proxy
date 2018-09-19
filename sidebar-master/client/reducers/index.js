import { combineReducers } from 'redux';
import { hasReservationReducer, selectedDateReducer, timeslotsReducer, hoursOfOperationReducer } from './reservation.js';
import { calendarDateReducer, calendarWeeksReducer, displayCalendarReducer } from './calendar.js';
import { todaysHoursReducer, priceRangeReducer, healthScoreReducer, isOpenReducer } from './status.js';

const rootRuducer = combineReducers({
  selectedDate: selectedDateReducer,
  calendarDate: calendarDateReducer,
  calendarWeeks: calendarWeeksReducer,
  timeslots: timeslotsReducer,
  hasReservation: hasReservationReducer,
  displayCalendar: displayCalendarReducer,
  hours: todaysHoursReducer,
  priceRange: priceRangeReducer,
  healthScore: healthScoreReducer,
  hoursOfOperation: hoursOfOperationReducer,
  isOpen: isOpenReducer
});

export default rootRuducer;