import React from 'react';
import { shallow } from 'enzyme';
import Calendar from '../client/component/Calendar';
import CalendarHeader from '../client/component/CalendarHeader';
import CalendarBody from '../client/component/CalendarBody';
import CalendarWeek from '../client/component/CalendarWeek';

describe('Calendar React Component Testing', () => {
  describe('Calendar', () => {
    test('should have 2 components in the calendar container field', () => {
      const wrapper = shallow(<Calendar />);
      const tree = wrapper.find('#calendar-container table').children();
      expect(tree).toHaveLength(2); // header, body
    });

    describe('Calendar Header', () => {
      test('should have title display :month, :year', () => {
        const wrapper = shallow(<CalendarHeader calendarDate={new Date('Wednesday, September 19, 2018')} />);
        const title = wrapper.find('#calendar-header-title').text();
        expect(title).toBe('September 2018');
      });
      test('should contain a foward and back button', () => {
        const wrapper = shallow(<CalendarHeader calendarDate={new Date('Wednesday, September 19, 2018')} />);
        const forward = wrapper.find('#forward').prop('value');
        expect(forward).toBe('>>');
        const back = wrapper.find('#back').prop('value');
        expect(back).toBe('<<');
      });
      test('should have a click listener to two buttons', () => {
        const mockClickHandler = jest.fn();
        const wrapper = shallow(
          <CalendarHeader
            calendarDate={new Date('Wednesday, September 19, 2018')}
            handleIncreaseMonthClick={mockClickHandler}
            handleDecreaseMonthClick={mockClickHandler}
          />,
        );
        wrapper.find('#forward').simulate('click');
        wrapper.find('#back').simulate('click');
        expect(mockClickHandler.mock.calls.length).toBe(2);
      });
      test('should contain 7 days of the week', () => {
        const wrapper = shallow(<CalendarHeader calendarDate={new Date('Wednesday, September 19, 2018')} />);
        const days = wrapper.find('#days').children();
        expect(days).toHaveLength(7);
      });
    });

    describe('Calendar Body', () => {
      test('should have 2 weeks when given 2 weeks', () => {
        const wrapper = shallow(
          <CalendarBody calendarWeeks={[[0, 0, 0, 1, 2, 3, 4], [5, 6, 7, 8, 9, 0, 0]]} />,
        );
        const body = wrapper.find('tbody').children();
        expect(body).toHaveLength(2);
      });
    });

    describe('Calendar Week', () => {
      test('should have 7 days in a week when given an array with length 7', () => {
        const wrapper = shallow(
          <CalendarWeek
            calendarWeek={[0, 0, 13, 14, 15, 16, 17]}
            calendarDate={new Date('September 15, 2018')}
            selectedDate="September 15, 2018"
          />,
        );
        const body = wrapper.find('tr').children();
        expect(body).toHaveLength(7);
      });
    });
  });
});
