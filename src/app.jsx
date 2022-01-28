import './scss/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from "react-router-dom";
import Routesd from "../src/Routes/Routes";
const renderApplication = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Routesd />
    </BrowserRouter>,
    document.querySelector("#root")
  );
};

renderApplication(Routesd);

if (module.hot) {
  module.hot.accept("../src/Routes/Routes", () => {
    renderApplication();
  });
}
