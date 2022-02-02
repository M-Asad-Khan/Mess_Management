import React, { useState, useContext, useEffect } from "react";
import Buttonfield from "../Atoms/Buttons/CustomeButtons";
import Textfield from "../Atoms/TextField/CustomeTextField";
import { RootContext } from "../ContextAPI/RootContext";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";

const Signup = () => {
  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [username, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [isAdmin, setIsAdmin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [balance, setBalance] = useState();
  const [genderTypes, setGenderTypesNames] = useState(["Male", "Female"]);
  const [userType, setUserType] = useState(["true", "false"]);
  const [errorMessage, setErrormessage] = useState("");
  // const {usersData,setUsersData} = useContext(RootContext);
  const UserSignUp = () => {
    debugger;
    try {
      debugger;
      fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "*",
          mode: "no-cors",
        },
        body: JSON.stringify({
          Lname: lname,
          gender: gender,
          Fname: fname,
          isAdmin: isAdmin,
          password: password,
          username: username,
          Balance: balance,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);

          if (data.statusCode === 400) {
            setErrormessage(data.message);
          } else {
            navigate("/dashboard");
          }
        })
        .catch((error) => {
          debugger;
          console.error("Error:", error);
        });
    } catch (err) {
      debugger;
      console.log(error);
    }
  };
  return (
    <div className="mainAddMember">
        <Grid item xs={10}>
          <p className="errorText">{errorMessage ? errorMessage : " "}</p>
        </Grid>
        <Grid item xs={12} sm={12} md={8} className="signupContainer">
            <div className="signup-heading">Add new Member</div>
            <FormControl fullWidth>
            <label>First name</label>
            <Textfield
              id="outlined-basic"
              label="enter first name"
              onChangeFunction={(e) => setFirstName(e.target.value)}
              variant="standard"
              type="text"
              className="fieldDiv"
              fieldValue={fname}
            />
            </FormControl>
            <FormControl fullWidth>
            <label>Last name</label>
            <Textfield
              id="outlined-basic"
              label="enter last name"
              onChangeFunction={(e) => setLastName(e.target.value)}
              variant="standard"
              type="text"
              className="fieldDiv"
              fieldValue={lname}
            />
            </FormControl>
            <FormControl fullWidth>
            <label>Gender</label>
              <TextField
                id="questions"
                fullWidth
                size="small"
                label="select gender"
                variant="standard"
                className="fieldDiv"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                menuprops={{ variant: "menu" }}
                select
              >
                {genderTypes.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
            <FormControl fullWidth>
            <label>IsAdmin</label>
              <TextField
                id="questions"
                fullWidth
                size="small"
                label="select user type"
                variant="standard"
                className="fieldDiv"
                value={isAdmin}
                onChange={(e) => setIsAdmin(e.target.value)}
                menuprops={{ variant: "menu" }}
                select
              >
                {userType.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
            <FormControl fullWidth>
            <label>Email</label>
            <Textfield
              id="outlined-basic"
              label="enter email e.g(abcd@gmail.com)"
              onChangeFunction={(e) => setEmail(e.target.value)}
              variant="standard"
              type="text"
              className="fieldDiv"
              fieldValue={username}
            />
            </FormControl>
            <FormControl fullWidth>
            <label>Balance</label>
            <Textfield
              id="outlined-basic"
              label="enter initial balance"
              onChangeFunction={(e) => setBalance(e.target.value)}
              variant="standard"
              type="text"
              className="fieldDiv"
              fieldValue={balance}
            />
            </FormControl>
            <FormControl fullWidth>
            <label>Password</label>
            <Textfield
              id="outlined-basic"
              label="enter password"
              onChangeFunction={(e) => setPassword(e.target.value)}
              variant="standard"
              type="password"
              className="fieldDiv"
              fieldValue={password}
            />
            </FormControl>

            <div  onClick={UserSignUp}>
              <Buttonfield fieldValue="Add" id="signup" type="primary" className="actionsContainer" />
            </div>
       </Grid>
      </div>
  );
};

export default Signup;
