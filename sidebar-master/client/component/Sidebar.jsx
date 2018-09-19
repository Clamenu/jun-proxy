import React from 'react';
import path from 'path';
import store from '../store';
import { updateSelectedDate, updateCalendarDate, updateCalendarWeeks } from '../action/updateDate.js';
import fetch from '../action/fetch.js';
import ReservationContainer from '../container/ReservationContainer.jsx';
import Status from './Status.jsx';

class Sidebar extends React.Component {
  componentDidMount() {
    store.dispatch(updateSelectedDate());
    store.dispatch(updateCalendarDate());
    store.dispatch(updateCalendarWeeks());
    store.dispatch(fetch(`/restaurants/${path.basename(window.location.pathname)}`));
  }

  render() {
    return (
      <div>
        <ReservationContainer />
        <Status />
      </div>
    );
  }
}

export default Sidebar;
