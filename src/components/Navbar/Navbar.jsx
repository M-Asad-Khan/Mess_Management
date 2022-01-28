import React from "react";

export default function Navbar() {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Mess Management System</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Mess</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Expenses</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Meal</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Calculations</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Login</a>
                </li>
              </ul>
            </div>
          </nav>
    </div>
  );
}
