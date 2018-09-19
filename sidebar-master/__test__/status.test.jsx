import React from 'react';
import { shallow } from 'enzyme';
import Status from '../client/component/Status';
import StatusHours from '../client/component/StatusHours';
import StatusPriceRange from '../client/component/StatusPriceRange';
import StatusHealth from '../client/component/StatusHealth';

describe('Status Window', () => {
  test('should match snapshot for static component', () => {
    const wrapper = shallow(<Status />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('Status Hours', () => {
    test('should have 3 parts in 1 line for a continuous time and restaurant is open', () => {
      const wrapper = shallow(<StatusHours hours="7:00 am - 10:00 pm" isOpen />);
      const tree = wrapper.find('#status-hours').children();
      expect(tree).toHaveLength(3);
    });
    test('should have 4 parts in 2 line for a break mid-day and restaurant is closed', () => {
      const wrapper = shallow(
        <StatusHours hours="7:00 am - 10:00 am, 2:00 pm - 10:00 pm" isOpen={false} />,
      );
      const tree = wrapper.find('#status-hours').children();
      expect(tree).toHaveLength(4);
    });
    test('should say Open now when restaurant is open', () => {
      const wrapper = shallow(
        <StatusHours hours="7:00 am - 10:00 am, 2:00 pm - 10:00 pm" isOpen />,
      );
      const open = wrapper.find('span').text();
      expect(open).toBe('Open now');
    });
    test('should say Closed now when restaurant is closed', () => {
      const wrapper = shallow(<StatusHours hours="7:00 am - 10:00 pm" isOpen={false} />);
      const close = wrapper.find('span').text();
      expect(close).toBe('Closed now');
    });
  });

  describe('Status Price Range', () => {
    test('should have 3 parts in 1 line for a continuous time and restaurant is open', () => {
      const wrapper = shallow(<StatusPriceRange priceRange={2} />);
      const price = wrapper.find('#price-range').text();
      expect(price).toBe('$31-60');
    });
  });

  describe('Status Health', () => {
    test('should have expected health score when passed in', () => {
      const wrapper = shallow(<StatusHealth healthScore={92} />);
      const healthScore = wrapper.find('#health-score').text();
      expect(healthScore).toContain('92 out of 100');
    });
  });
});
