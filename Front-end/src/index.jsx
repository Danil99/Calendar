import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

import _ from './styles.sass';

import AppContainer from './containers/AppContainer';
import reducer from './reducer';
import { getPosts } from './action';

const store = createStore(reducer, applyMiddleware(promise, thunk));

store.dispatch(getPosts());

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>, document.getElementById('root'));
