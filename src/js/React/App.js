import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './Reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import RouterApp from './Router';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <RouterApp />
  </Provider>, document.getElementById('app'));