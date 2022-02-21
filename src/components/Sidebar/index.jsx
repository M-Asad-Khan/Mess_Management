import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { RootContext } from "../ContextAPI/RootContext";

const Sidebar = () => {
  let navigate = useNavigate();
  const { setCurrentUrl } = useContext(RootContext);
  return (
    <div>
      <div className="sideBarMAinDiv">
        <div
          className="dashboardDiv"
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          <span className="dashboardText">Dashboard</span>
        </div>
        <div
          className="dashboardDiv"
          onClick={() => {
            navigate("/add-member");
          }}
        >
          <span className="dashboardText">Add Member</span>
        </div>
        <div
          className="dashboardDiv"
          onClick={() => {
            setCurrentUrl(window.location.href);
            navigate("/members_list");
          }}
        >
          <span className="dashboardText">View Member</span>
        </div>
        <div
          className="dashboardDiv"
          onClick={() => {
            navigate("/mess-details");
          }}
        >
          <span className="dashboardText">Mess Calculations</span>
        </div>

        <div
          className="dashboardDiv"
          onClick={() => {
            setCurrentUrl(window.location.href);
            navigate("/login");
          }}
        >
          <span className="dashboardText">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
