import React from 'react';
import { shallow } from 'enzyme';
import Reservation from '../client/component/Reservation';
import ReservationHeader from '../client/component/ReservationHeader';
import FindTable from '../client/component/FindTable';
import NumOfPeopleSelect from '../client/component/NumOfPeopleSelect';
import DateSelect from '../client/component/DateSelect';
import TimeSelect from '../client/component/TimeSelect';

describe('Reservation Form React Component Testing', () => {
  describe('Reservation Header', () => {
    test('should contain text "Make a Reservation"', () => {
      const wrapper = shallow(<ReservationHeader />);
      const text = wrapper.find('span').text();
      expect(text).toBe('Make a Reservation');
    });
    test('should match Reservation header snapshot', () => {
      const wrapper = shallow(<ReservationHeader />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Find a Table Button', () => {
    test('should contain value "Find a Table"', () => {
      const wrapper = shallow(<FindTable />);
      const text = wrapper.find('a').text();
      expect(text).toBe('Find a Table');
    });
    test('should match Find A Table snapshot', () => {
      const wrapper = shallow(<FindTable />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Number of People select', () => {
    test('should have 5 options for number of people', () => {
      const wrapper = shallow(<NumOfPeopleSelect />);
      const options = wrapper.find('select').children();
      expect(options).toHaveLength(5);
    });
    test('should match Num of People snapshots', () => {
      const wrapper = shallow(<NumOfPeopleSelect />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Date select', () => {
    test('should match current date that was given as a prop', () => {
      const wrapper = shallow(<DateSelect selectedDate="September 20, 2018" />);
      const text = wrapper.find('input[type="text"]').prop('value');
      expect(text).toBe('September 20, 2018');
    });
    test('should not display calendar when displayCalendar is false', () => {
      const wrapper = shallow(<DateSelect displayCalendar={false} />);
      const calendar = wrapper.find('div').children();
      expect(calendar).toHaveLength(3);
    });
    test('should display calendar when displayCalendar is true', () => {
      const wrapper = shallow(<DateSelect displayCalendar />);
      const calendar = wrapper.find('div').children();
      expect(calendar).toHaveLength(4);
    });
    test('should simulate a click to the text area to toggle calendar display', () => {
      const mockHandler = jest.fn();
      const wrapper = shallow(<DateSelect handleDateClick={mockHandler} />);
      wrapper.find('input[type="text"]').simulate('click');
      expect(mockHandler.mock.calls.length).toBe(1);
    });
  });

  describe('Time select', () => {
    test('should have 3 options when given an array of 3 timeslots', () => {
      const wrapper = shallow(<TimeSelect timeslots={['7:00 pm', '7:30 pm', '8:00 pm']} />);
      const select = wrapper.find('select').children();
      expect(select).toHaveLength(3);
    });
  });

  describe('Resevation', () => {
    test('should have 5 components in the reservation container field', () => {
      const wrapper = shallow(<Reservation hasReservation />);
      const tree = wrapper.find('#reservation-container').children();
      expect(tree).toHaveLength(5);
    });
  });
});
