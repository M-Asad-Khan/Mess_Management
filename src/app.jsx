import './scss/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const renderApplication = () => {
  ReactDOM.render(
    <App /> ,
    document.querySelector('#root')
  );
}

renderApplication(App);

if (module.hot) {
  module.hot.accept("./components/App", () => {
    renderApplication();
  });
}
