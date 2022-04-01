import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.css';
import './components/utils/css';
import Device from './components/device/';

ReactDOM.render(
  <React.StrictMode>
    <Device />
  </React.StrictMode>,
  document.getElementById('root')
);