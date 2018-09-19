import React from 'react';
import PropTypes from 'prop-types';
import styles from '../sidebar.css';

const StatusHours = ({ hours, isOpen }) => (
  <tr>
    <td className={styles.statusIconRow}>
      {isOpen
        ? <img src="images/openClock.png" className={styles.statusClock} alt="#" />
        : <img src="images/closeClock.png" className={styles.statusClock} alt="#" />}
    </td>
    <td className={styles.statusHours} id="status-hours">
      Today&nbsp;&nbsp;
      {isOpen
        ? (
          <b>
            {hours.split(', ')[0]}
            &nbsp;&nbsp;
          </b>
        )
        : (
          <b>
            {hours.split(', ')[0]}
            <br />
          </b>
        )}
      {isOpen && hours.split(', ')[1] && (
        <b>
          <br />
          {hours.split(', ')[1]}
          &nbsp;&nbsp;
        </b>
      )}
      {!isOpen && hours.split(', ')[1] && (
        <b>
          {hours.split(', ')[1]}
          &nbsp;&nbsp;
        </b>
      )}
      {isOpen
        ? <span className={styles.open}>Open now</span>
        : <span className={styles.close}>Closed now</span>}
    </td>
    <td className={styles.emptyRow} />
  </tr>
);

export default StatusHours;

StatusHours.propTypes = {
  hours: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
