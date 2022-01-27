import './scss/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import Login from './components/login/login';

const renderApplication = () => {
  ReactDOM.render(
    <Login /> ,
    document.querySelector('#root')
  );
}

renderApplication(Login);

if (module.hot) {
  module.hot.accept("./components/login/login", () => {
    renderApplication();
  });
}
