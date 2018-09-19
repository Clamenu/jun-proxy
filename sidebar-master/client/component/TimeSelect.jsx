import React from 'react';
import styles from '../sidebar.css';

const TimeSelect = ({ timeslots }) => (
  <span className={styles.timeContainer}>
    <img src='images/time.PNG' className={styles.icon}/>
    <select defaultValue='7:00 pm' className={styles.select}>
      {timeslots.map(timeSlot => {
        let render;
        timeSlot === '7:00 pm'
          ? render = (<option selected key={timeSlot} value={timeSlot}>{timeSlot}</option>)
          : render = (<option key={timeSlot} value={timeSlot}>{timeSlot}</option>);
        return render;
      })}
    </select>
    <img src='images/downarrow.PNG' className={styles.arrowIcon}/>
  </span>
);

export default TimeSelect;