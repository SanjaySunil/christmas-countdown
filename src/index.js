/**
 * @file index.js
 * @author Sanjay Sunil
 * @license GPL-3.0
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App.jsx';
import { Countdown } from './Components';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

Countdown();

