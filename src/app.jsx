import './scss/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from "react-router-dom";
import Routesd from "../src/Routes/Routes";
import RootContext from "./components/ContextAPI/RootContext/index";
const renderApplication = () => {
  ReactDOM.render(
    <RootContext>
      <BrowserRouter>
        <Routesd />
      </BrowserRouter>
    </RootContext>,
    document.querySelector("#root")
  );
};

renderApplication(Routesd);

if (module.hot) {
  module.hot.accept("../src/Routes/Routes", () => {
    renderApplication();
  });
}
