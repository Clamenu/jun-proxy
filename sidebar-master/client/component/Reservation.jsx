import PropTypes from 'prop-types';
import React from 'react';
import styles from '../sidebar.css';
import ReservationHeader from './ReservationHeader.jsx';
import NumOfPeopleSelect from './NumOfPeopleSelect.jsx';
import FindTable from './FindTable.jsx';
import DateSelectContainer from '../container/DateSelectContainer.jsx';
import TimeSelectContainer from '../container/TimeSelectContainer.jsx';

const Reservation = ({ hasReservation }) => (
  <div>
    {hasReservation && (
      <div className={styles.reservationContainer} id="reservation-container">
        <ReservationHeader />
        <DateSelectContainer />
        <TimeSelectContainer />
        <NumOfPeopleSelect />
        <FindTable />
      </div>
    )}
  </div>
);

export default Reservation;

Reservation.propTypes = {
  hasReservation: PropTypes.bool.isRequired,
};
