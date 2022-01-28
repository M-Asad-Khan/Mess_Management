import React from "react";
import Login from "../components/Login/Login";
import Signup from "../components/SignUp/SignUp";
import Navbar from "../components/Navbar/Navbar";
import { RootContext } from "../components/ContextAPI/RootContext/index";

import { Route, Routes, Redirect, BrowserRouter } from "react-router-dom";

function Routesd() {
  return (
    // <RootContext>
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default Routesd;
