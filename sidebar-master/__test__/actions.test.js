import {
  changeHasReservation, changeSelectedDate, changeTimeslots, changeHoursOfOperation,
} from '../client/action/reservation';
import {
  changeCalendarDate, changeCalendarWeeks, changeDisplayCalendar,
} from '../client/action/calendar';
import {
  changeTodaysHours, changePriceRange, changeHealthScore, changeIsOpen,
} from '../client/action/status';

describe('Actions', () => {
  describe('changeHasReservation', () => {
    test('should be a function', () => {
      expect(typeof changeHasReservation).toBe('function');
    });
    test('should return an object', () => {
      expect(typeof changeHasReservation(true)).toBe('object');
    });
    test('should return object with "type" key to equal "CHANGE_HAS_RESERVATION"', () => {
      expect(changeHasReservation(true).type).toBe('CHANGE_HAS_RESERVATION');
    });
    test('should return object with "changeHasReservation" key to equal true', () => {
      expect(changeHasReservation(true).hasReservation).toBe(true);
    });
  });

  describe('changeSelectedDate', () => {
    test('should be a function', () => {
      expect(typeof changeSelectedDate).toBe('function');
    });
    test('should return an object', () => {
      expect(typeof changeSelectedDate('September 10, 2018')).toBe('object');
    });
    test('should return object with "type" key to equal "CHANGE_SELECTED_DATE"', () => {
      expect(changeSelectedDate('September 10, 2018').type).toBe('CHANGE_SELECTED_DATE');
    });
    test('should return object with "changeSelectedDate" key to equal true', () => {
      expect(changeSelectedDate('September 10, 2018').selectedDate).toBe('September 10, 2018');
    });
  });

  describe('changeTimeslots', () => {
    test('should be a function', () => {
      expect(typeof changeTimeslots).toBe('function');
    });
    test('should return an object', () => {
      expect(typeof changeTimeslots(['7:00 pm', '7:30 pm'])).toBe('object');
    });
    test('should return object with "type" key to equal "CHANGE_TIMESLOTS"', () => {
      expect(changeTimeslots(['7:00 pm', '7:30 pm']).type).toBe('CHANGE_TIMESLOTS');
    });
    test('should return object with "changeTimeslots" key to equal true', () => {
      expect(changeTimeslots(['7:00 pm', '7:30 pm']).timeslots).toEqual(['7:00 pm', '7:30 pm']);
    });
  });

  describe('changeHoursOfOperation', () => {
    test('should be a function', () => {
      expect(typeof changeHoursOfOperation).toBe('function');
    });
    test('should return an object', () => {
      expect(typeof changeHoursOfOperation(['7:00 pm - 7:30 pm'])).toBe('object');
    });
    test('should return object with "type" key to equal "CHANGE_HOURS_OF_OPERATION"', () => {
      expect(changeHoursOfOperation(['7:00 pm - 7:30 pm']).type).toBe('CHANGE_HOURS_OF_OPERATION');
    });
    test('should return object with "changeHoursOfOperation" key to equal true', () => {
      expect(changeHoursOfOperation(['7:00 pm - 7:30 pm']).hoursOfOperation).toEqual(['7:00 pm - 7:30 pm']);
    });
  });

  describe('calendar', () => {
    describe('changeCalendarDate', () => {
      test('should be a function', () => {
        expect(typeof changeCalendarDate).toBe('function');
      });
      test('should return an object', () => {
        expect(typeof changeCalendarDate()).toBe('object');
      });
      test('should return object with "type" key to equal "CHANGE_CALENDAR_DATE"', () => {
        expect(changeCalendarDate().type).toBe('CHANGE_CALENDAR_DATE');
      });
      test('should return object with "changeCalendarDate" key to equal true', () => {
        const date = new Date();
        expect(changeCalendarDate(date).calendarDate).toEqual(date);
      });
    });

    describe('changeCalendarWeeks', () => {
      test('should be a function', () => {
        expect(typeof changeCalendarWeeks).toBe('function');
      });
      test('should return an object', () => {
        expect(typeof changeCalendarWeeks()).toBe('object');
      });
      test('should return object with "type" key to equal "CHANGE_CALENDAR_WEEKS"', () => {
        expect(changeCalendarWeeks().type).toBe('CHANGE_CALENDAR_WEEKS');
      });
      test('should return object with "changeCalendarWeeks" key to equal true', () => {
        const date = new Date();
        expect(changeCalendarWeeks(date).calendarWeeks).toEqual(date);
      });
    });

    describe('changeDisplayCalendar', () => {
      test('should be a function', () => {
        expect(typeof changeDisplayCalendar).toBe('function');
      });
      test('should return an object', () => {
        expect(typeof changeDisplayCalendar()).toBe('object');
      });
      test('should return object with "type" key to equal "CHANGE_DISPLAY_CALENDAR"', () => {
        expect(changeDisplayCalendar().type).toBe('CHANGE_DISPLAY_CALENDAR');
      });
      test('should return object with "changeDisplayCalendar" key to equal true', () => {
        expect(changeDisplayCalendar(true).displayCalendar).toEqual(true);
      });
    });
  });

  describe('status window', () => {
    describe('changeTodaysHours', () => {
      test('should be a function', () => {
        expect(typeof changeTodaysHours).toBe('function');
      });
      test('should return an object', () => {
        expect(typeof changeTodaysHours()).toBe('object');
      });
      test('should return object with "type" key to equal "CHANGE_TODAYS_HOURS"', () => {
        expect(changeTodaysHours().type).toBe('CHANGE_TODAYS_HOURS');
      });
      test('should return object with "changeTodaysHours" key to equal 1:00 pm - 3:00 pm', () => {
        expect(changeTodaysHours('1:00 pm - 3:00 pm').hours).toEqual('1:00 pm - 3:00 pm');
      });
    });

    describe('changeIsOpen', () => {
      test('should be a function', () => {
        expect(typeof changeIsOpen).toBe('function');
      });
      test('should return an object', () => {
        expect(typeof changeIsOpen()).toBe('object');
      });
      test('should return object with "type" key to equal "CHANGE_IS_OPEN"', () => {
        expect(changeIsOpen().type).toBe('CHANGE_IS_OPEN');
      });
      test('should return object with "changeIsOpen" key to equal true', () => {
        expect(changeIsOpen(true).isOpen).toEqual(true);
      });
    });

    describe('changePriceRange', () => {
      test('should be a function', () => {
        expect(typeof changePriceRange).toBe('function');
      });
      test('should return an object', () => {
        expect(typeof changePriceRange()).toBe('object');
      });
      test('should return object with "type" key to equal "CHANGE_PRICE_RANGE"', () => {
        expect(changePriceRange().type).toBe('CHANGE_PRICE_RANGE');
      });
      test('should return object with "changePriceRange" key to equal 1', () => {
        expect(changePriceRange(1).priceRange).toEqual(1);
      });
    });

    describe('changeHealthScore', () => {
      test('should be a function', () => {
        expect(typeof changeHealthScore).toBe('function');
      });
      test('should return an object', () => {
        expect(typeof changeHealthScore()).toBe('object');
      });
      test('should return object with "type" key to equal "CHANGE_HEALTH_SCORE"', () => {
        expect(changeHealthScore().type).toBe('CHANGE_HEALTH_SCORE');
      });
      test('should return object with "changeHealthScore" key to equal 99', () => {
        expect(changeHealthScore(99).healthScore).toEqual(99);
      });
    });
  });
});
