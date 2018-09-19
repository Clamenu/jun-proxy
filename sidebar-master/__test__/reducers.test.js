import {
  hasReservationReducer, selectedDateReducer, timeslotsReducer, hoursOfOperationReducer,
} from '../client/reducers/reservation';
import { calendarDateReducer, calendarWeeksReducer, displayCalendarReducer } from '../client/reducers/calendar';
import {
  todaysHoursReducer, priceRangeReducer, healthScoreReducer, isOpenReducer,
} from '../client/reducers/status';
import rootReducer from '../client/reducers';
import {
  changeHasReservation, changeSelectedDate, changeTimeslots, changeHoursOfOperation,
} from '../client/action/reservation';
import { changeCalendarDate, changeCalendarWeeks, changeDisplayCalendar } from '../client/action/calendar';
import {
  changeTodaysHours, changePriceRange, changeHealthScore, changeIsOpen,
} from '../client/action/status';

describe('Reducers', () => {
  describe('rootReducer', () => {
    test('should be a function and accept an action', () => {
      expect(typeof rootReducer).toBe('function');
      expect(rootReducer(undefined, {})).toBeDefined();
    });
    test('should have a default state of an object', () => {
      expect(typeof rootReducer(undefined, {})).toBe('object');
    });
    test('should have a state for each reducer', () => {
      expect(rootReducer(undefined, {}).selectedDate).toBeDefined();
      expect(rootReducer(undefined, {}).calendarDate).toBeDefined();
      expect(rootReducer(undefined, {}).calendarWeeks).toBeDefined();
      expect(rootReducer(undefined, {}).timeslots).toBeDefined();
      expect(rootReducer(undefined, {}).hoursOfOperation).toBeDefined();
      expect(rootReducer(undefined, {}).hasReservation).toBeDefined();
      expect(rootReducer(undefined, {}).displayCalendar).toBeDefined();
      expect(rootReducer(undefined, {}).hours).toBeDefined();
      expect(rootReducer(undefined, {}).priceRange).toBeDefined();
      expect(rootReducer(undefined, {}).healthScore).toBeDefined();
      expect(rootReducer(undefined, {}).isOpen).toBeDefined();
    });
  });

  describe('selectedDate', () => {
    test('should have a default state of empty string', () => {
      expect(selectedDateReducer(undefined, { type: null })).toBe('');
    });
    test('should change state when given "CHANGE_CURRENT_DATE" action', () => {
      expect(selectedDateReducer(undefined, changeSelectedDate('September 20, 2018'))).toBe('September 20, 2018');
    });
  });

  describe('hasReservation', () => {
    test('should have a default state of false', () => {
      expect(hasReservationReducer(undefined, { type: null })).toEqual(false);
    });
    test('should change state when given "CHANGE_HAS_RESERVATION', () => {
      expect(hasReservationReducer(undefined, changeHasReservation(true))).toBe(true);
    });
  });

  describe('timeSlots', () => {
    test('should have a default state of empty array', () => {
      expect(timeslotsReducer(undefined, { type: null })).toEqual([]);
    });
    test('should change state when given "CHANGE_TIMESLOTS" action', () => {
      expect(timeslotsReducer(undefined, changeTimeslots(['8:00 pm']))).toEqual(['8:00 pm']);
    });
  });

  describe('hoursOfOperation', () => {
    test('should have a default state of empty array', () => {
      expect(hoursOfOperationReducer(undefined, { type: null })).toEqual([]);
    });
    test('should change state when given "CHANGE_HOURS_OF_OPERATION" action', () => {
      expect(hoursOfOperationReducer(undefined, changeHoursOfOperation(['8:00 pm - 9:00 pm']))).toEqual(['8:00 pm - 9:00 pm']);
    });
  });

  describe('calendar', () => {
    describe('calendarDate', () => {
      test('should have a default state of empty string', () => {
        expect(calendarDateReducer(undefined, { type: null })).toBe('');
      });
      test('should change state when given "CHANGE_CALENDAR_DATE" action', () => {
        expect(calendarDateReducer(undefined, changeCalendarDate('September 20, 2018'))).toBe('September 20, 2018');
      });
    });

    describe('calendarWeeks', () => {
      test('should have a default state of empty array', () => {
        expect(calendarWeeksReducer(undefined, { type: null })).toEqual([]);
      });
      test('should change state when given "CHANGE_CALENDAR_WEEKS" action', () => {
        expect(calendarWeeksReducer(undefined, changeCalendarWeeks([1, 2, 3, 4, 5, 6, 7]))).toEqual([1, 2, 3, 4, 5, 6, 7]);
      });
    });

    describe('displayCalendar', () => {
      test('should have a default state of false', () => {
        expect(displayCalendarReducer(undefined, { type: null })).toEqual(false);
      });
      test('should change state when given "CHANGE_DISPLAY_CALENDAR" action', () => {
        expect(displayCalendarReducer(undefined, changeDisplayCalendar(true))).toBe(true);
      });
    });
  });

  describe('status', () => {
    describe('todaysHours', () => {
      test('should have a default state of empty string', () => {
        expect(todaysHoursReducer(undefined, { type: null })).toBe('');
      });
      test('should change state when given "CHANGE_TODAYS_HOURS" action', () => {
        expect(todaysHoursReducer(undefined, changeTodaysHours('1:00 pm - 2:00 pm'))).toBe('1:00 pm - 2:00 pm');
      });
    });

    describe('price range', () => {
      test('should have a default state of null', () => {
        expect(priceRangeReducer(undefined, { type: null })).toBe(null);
      });
      test('should change state when given "CHANGE_CALENDAR_WEEKS" action', () => {
        expect(priceRangeReducer(undefined, changePriceRange(1))).toEqual(1);
      });
    });

    describe('healthScore', () => {
      test('should have a default state of null', () => {
        expect(healthScoreReducer(undefined, { type: null })).toEqual(null);
      });
      test('should change state when given "CHANGE_DISPLAY_CALENDAR" action', () => {
        expect(healthScoreReducer(undefined, changeHealthScore(99))).toBe(99);
      });
    });

    describe('isOpen', () => {
      test('should have a default state of null', () => {
        expect(isOpenReducer(undefined, { type: null })).toEqual(false);
      });
      test('should change state when given "CHANGE_IS_OPEN" action', () => {
        expect(isOpenReducer(undefined, changeIsOpen(true))).toBe(true);
      });
    });
  });
});
