import React, { useEffect, useContext } from "react";
import Login from "../components/Login/Login";
import Signup from "../components/SignUp/SignUp";
import Navbar from "../components/Navbar/Navbar";
import Layout from "../components/Layout";
import { RootContext } from "../components/ContextAPI/RootContext";
import MessCalculation from "../components/MessCalculations";
import ViewAllMembers from "../components/Member/View All Members/index";

import { Route, Routes, Redirect, BrowserRouter } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";

function Routesd() {
  const { currentURl, setCurrentUrl } = useContext(RootContext);
  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  return (
    // <RootContext>

    <div>
      {currentURl === "http://localhost:3000/" ||
      currentURl === "http://localhost:3000/login" ? (
        ""
      ) : (
        <Navbar />
      )}

      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/dashboard" element={<Dashboard />}></Route>
        <Route
          exact
          path="/mess-details"
          element={
            <Layout>
              <MessCalculation />
            </Layout>
          }
        ></Route>
        <Route
          exact
          path="/add-member"
          element={
            <Layout>
              <Signup />
            </Layout>
          }
        ></Route>
        <Route
          exact
          path="/members_list"
          element={
            <Layout>
              <ViewAllMembers />
            </Layout>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default Routesd;
