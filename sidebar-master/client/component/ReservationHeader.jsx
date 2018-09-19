import React from 'react';
import styles from '../sidebar.css';

const ReservationHeader = () => (
  <div className={styles.headerContainer}>
    <h3 className={styles.header}>
      <img src="images/header.PNG" className={styles.headerIcon} alt="#" />
      <span
        className={styles.headerTitle}
        id="header-title"
      >
        Make a Reservation
      </span>
    </h3>
  </div>
);

export default ReservationHeader;
