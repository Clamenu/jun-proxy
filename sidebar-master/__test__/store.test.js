import store from '../client/store';

describe('Store', () => {
  test('should have a state with a currentDate field', () => {
    expect(store.getState().selectedDate).toBeDefined();
  });
  test('should have a state with a timeslots field', () => {
    expect(store.getState().timeslots).toBeDefined();
  });
  test('should have a state with a hasReservation field', () => {
    expect(store.getState().hasReservation).toBeDefined();
  });
  test('should have a state with a calendarDate field', () => {
    expect(store.getState().calendarDate).toBeDefined();
  });
  test('should have a state with a calendarWeeks field', () => {
    expect(store.getState().calendarWeeks).toBeDefined();
  });
  test('should have a state with a hoursOfOperation field', () => {
    expect(store.getState().hoursOfOperation).toBeDefined();
  });
  test('should have a state with a hoursOfOperation field', () => {
    expect(store.getState().hoursOfOperation).toBeDefined();
  });
  test('should have a state with a hours field', () => {
    expect(store.getState().hours).toBeDefined();
  });
  test('should have a state with a priceRange field', () => {
    expect(store.getState().priceRange).toBeDefined();
  });
  test('should have a state with a healthScore field', () => {
    expect(store.getState().healthScore).toBeDefined();
  });
  test('should have a state with a isOpen field', () => {
    expect(store.getState().isOpen).toBeDefined();
  });
});
