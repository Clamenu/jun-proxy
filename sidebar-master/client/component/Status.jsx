import React from 'react';
import StatusHoursContainer from '../container/StatusHoursContainer.jsx';
import StatusPriceRangeContainer from '../container/StatusPriceRangeContainer.jsx';
import StatusHealthContainer from '../container/StatusHealthContainer.jsx';
import styles from '../sidebar.css';

const Status = () => (
  <div className={styles.statusContainer}>
    <table>
      <tbody>
        <StatusHoursContainer />
        <StatusPriceRangeContainer />
        <StatusHealthContainer />
      </tbody>
    </table>
  </div>
);

export default Status;
