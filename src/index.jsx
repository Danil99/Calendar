import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import _ from './styles.sass';

import AppContainer from './containers/AppContainer';

import reducer from './reducer';
import initialState from './store';

const store = createStore(reducer, initialState);

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>, document.getElementById('root'));
