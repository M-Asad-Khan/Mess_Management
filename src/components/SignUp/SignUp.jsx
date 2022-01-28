import React, { useState, useContext, useEffect } from "react";
import Buttonfield from "../Atoms/Buttons/CustomeButtons";
import Textfield from "../Atoms/TextField/CustomeTextField";
import { RootContext } from "../ContextAPI/RootContext";

const Signup = () => {
  const [name, setFullname] = useState("");
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const {usersData,setUsersData} = useContext(RootContext);
  return (
    <div className="display-flex">
          <div className="signupContainer">
            <h1 className="signup-heading">Sign Up</h1>

            <Textfield
              id="outlined-basic"
              label="Full Name"
              onChangeFunction={(e) => setFullname(e.target.value)}
              variant="standard"
              type="text"
              fieldValue={name}
            />
            <Textfield
              id="outlined-basic"
              label="Email"
              onChangeFunction={(e) => setEmail(e.target.value)}
              variant="standard"
              type="text"
              fieldValue={username}
            />
            <Textfield
              id="outlined-basic"
              label="Create Password"
              onChangeFunction={(e) => setPassword(e.target.value)}
              variant="standard"
              type="password"
              fieldValue={password}
            />
            <Textfield
              id="outlined-basic"
              label="Confirm Password"
              onChangeFunction={(e) => setConfirmPassword(e.target.value)}
              variant="standard"
              type="password"
              fieldValue={confirmPassword}
            />
            <div className="actionsContainer">
              <Buttonfield fieldValue="Sign Up" id="signup" type="primary" />
            </div>
            {usersData}
          </div>
    </div>
  );
};

export default Signup;
