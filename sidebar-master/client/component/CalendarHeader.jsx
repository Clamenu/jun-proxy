import React from 'react';
import PropTypes from 'prop-types';
import styles from '../sidebar.css';

const months = [
  'January',
  'Febuary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const CalendarHeader = ({
  calendarDate,
  handleIncreaseMonthClick,
  handleDecreaseMonthClick,
}) => (
  <thead>
    <tr>
      <th className={styles.scaleX}>
        <input
          type="button"
          value="<<"
          className={styles.back}
          onClick={() => handleDecreaseMonthClick(calendarDate)}
          id="back"
        />
      </th>
      <th
        className={styles.calendarHeaderTitle}
        id="calendar-header-title"
        colSpan="5"
      >
        {`${months[calendarDate.getMonth()]} ${calendarDate.getFullYear()}`}
      </th>
      <th className={styles.scaleX}>
        <input
          type="button"
          value=">>"
          className={styles.forward}
          onClick={() => handleIncreaseMonthClick(calendarDate)}
          id="forward"
        />
      </th>
    </tr>
    <tr id={styles.days}>
      {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, idx) => (
        <th
          className={styles.daysOfWeek}
          key={idx}
        >
          {day}
        </th>
      ))}
    </tr>
  </thead>
);

export default CalendarHeader;

CalendarHeader.propTypes = {
  calendarDate: PropTypes.string.isRequired,
  handleIncreaseMonthClick: PropTypes.func.isRequired,
  handleDecreaseMonthClick: PropTypes.func.isRequired,
};
