import React from 'react';
import ReactDom from 'react-dom';

import './assets/css/core.css';
import './assets/css/home.css';
import './assets/css/icon.css';

import App from './layouts/App'

import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux';
// ./是指当前，后面本来是由index的，但是默认会找index，所以可以省略
import store from './store';

let  local = JSON.parse(localStorage.getItem('rc_user'));
local && store.dispatch({type:'UPDATE_USER',payload:local})

ReactDom.render(
  <Provider store={store}>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  </Provider>
  ,
  document.querySelector('#root')
);