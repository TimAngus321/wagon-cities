// TODO: add and export your own actions
import React from 'react';
import ReactDOM from 'react-dom';
import ReactRedux from 'react-redux';

import '../assets/stylesheets/application.scss';

import App from './components/app';

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}
