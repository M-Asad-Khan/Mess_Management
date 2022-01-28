import React, { useState } from "react";
import Textfield from "../Atoms/TextField/CustomeTextField";
// import Buttonfield from "../Atoms/Buttons/CustomeButtons";

const login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="display-flex">
      <div className="loginContainer">
          <div className="display-flex">
              <h4 className="login-heading">Mess Management System</h4>
            </div>
        <div className="mainDiv">
          <p className="login-text"> Username </p>
          <Textfield
            className="login-fields-Width"
            fieldValue={userName}
            onChangeFunction={(e) => setUserName(e.target.value)}
            label="username"
            type="email"
            id="login-username"
            variant="standard"
          />
          <p className="login-text"> Password </p>
          <Textfield
            className="login-fields-Width"
            fieldValue={password}
            onChangeFunction={(e) => setPassword(e.target.value)}
            label="password"
            type="password"
            id="login-password"
            variant="standard"
          />
          <br />
          <br />
          {/* <Buttonfield fieldValue="Login" id="Login_button" type="primary" /> */}
        </div>
      </div>
    </div>
  );
};

export default login;
