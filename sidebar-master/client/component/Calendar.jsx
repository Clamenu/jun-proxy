import React from 'react';
import CalendarHeaderContainer from '../container/CalendarHeaderContainer.jsx';
import CalendarBodyContainer from '../container/CalendarBodyContainer.jsx';
import styles from '../sidebar.css';

const Calendar = () => (
  <div className={styles.calendarContainer} id="calendar-container">
    <table>
      <CalendarHeaderContainer />
      <CalendarBodyContainer />
    </table>
  </div>
);

export default Calendar;
