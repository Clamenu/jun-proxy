import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Sidebar from './component/Sidebar.jsx';

ReactDOM.render(
  <Provider store={store}>
    <Sidebar/>
  </Provider>,
  document.getElementById('sb-app')
);