import React from "react";
import { useHistory, Link } from "react-router-dom";

const Sidebar = () => {


  return (
    // <div className="sidebarContainer">
    //   <div className="optionsContainer">
    //     <p className="options">Dashboard</p >
    //   </div>
    // </div>
    <div>

      <div>
        <div className='dashboardDiv'
          onClick={() => {
            history.push('/dashboard')
            setModalOpen(false)
          }}
        >
          <img
            className='dashboardSvg'
            src="src/assets/images/profile.svg"
            alt="image not found"
          />
          <span className='dashboardText'>Dashboard</span>
        </div>
      </div>
    </div >
  );
}

export default Sidebar;