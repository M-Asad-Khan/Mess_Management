import React, { useState, useContext } from "react";
import Textfield from "../Atoms/TextField/CustomeTextField";
import Buttonfield from "../Atoms/Buttons/CustomeButtons";
import { useNavigate } from "react-router";
import Grid from "@material-ui/core/Grid";
import { RootContext } from "../ContextAPI/RootContext";

const login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { usersData, setUsersData,setCurrentUrl } = useContext(RootContext);
  const [errorMessage, setErrormessage] = useState("");
  let navigate = useNavigate();
  setCurrentUrl(window.location.href);

  const UserLogin = () => {
    try {
      fetch("http://localhost:8080/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "*",
          mode: "no-cors",
        },
        body: JSON.stringify({
          username: userName,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);

          if (data.statusCode === 404) {
            setErrormessage(data.message);
          } else {
            setUsersData(data);
            navigate("/dashboard");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } catch (err) {
      console.log(error);
    }
  };
  return (
    <div className="loginContainer">
      <div className="mainDiv">
        <Grid item xs={10}>
          <p className="errorText">
            {errorMessage.length > 1 ? errorMessage : " "}
          </p>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Textfield
            className="login-fields-Width"
            fieldValue={userName}
            onChangeFunction={(e) => setUserName(e.target.value)}
            label="username"
            type="email"
            id="login-username"
            variant="standard"
          />
          <Textfield
            className="login-fields-Width"
            fieldValue={password}
            onChangeFunction={(e) => setPassword(e.target.value)}
            label="password"
            type="password"
            id="login-password"
            variant="standard"
          />
          <div
            onClick={() => {
              UserLogin();
            }}
          >
            <Buttonfield
              fieldValue="Login"
              id="Login_button"
              type="primary"
              className="login-button"
            />
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default login;
