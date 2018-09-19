import React from 'react';
import PropTypes from 'prop-types';
import styles from '../sidebar.css';
import Calendar from './Calendar.jsx';

const DateSelect = ({ selectedDate, displayCalendar, handleDateClick }) => (
  <div className={styles.dateContainer} id="date-container">
    <img src="images/calendar.PNG" className={styles.dateIcon} alt="#" />
    <input
      type="text"
      value={selectedDate}
      readOnly
      className={styles.dateText}
      onClick={() => handleDateClick(displayCalendar, selectedDate)}
      id="date-text"
    />
    <img src="images/downarrow.PNG" className={styles.dateArrowIcon} alt="#" />
    {displayCalendar && <Calendar />}
  </div>
);

export default DateSelect;

DateSelect.propTypes = {
  selectedDate: PropTypes.string.isRequired,
  displayCalendar: PropTypes.bool.isRequired,
  handleDateClick: PropTypes.func.isRequired,
};
