import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {login} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
// we don't put the store directly on the window because
// it can be confusing when debugging, sometimes giving you access to state
  // when you shouldn't
  window.login = login;
  window.getState = store.getState;
  window.dispatch = store.dispatch; // just for testing!
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
