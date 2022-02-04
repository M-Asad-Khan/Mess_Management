import React, { useState, useEffect } from "react";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import Buttonfield from "../Atoms/Buttons/CustomeButtons";
import { useNavigate } from "react-router";

const AddDeposit = () => {
  const userList = [
    "Asad khan",
    "Ali",
    "Abbas",
    "Hamza",
    "Haris",
    "Adil",
    "Arslan",
    "Jawad",
  ];
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [date, setDate] = useState("");
  const [balance, setBalance] = useState();
  const [memberList, setMemberList] = useState();
  const [errorMessage, setErrormessage] = useState("");
  let navigate = useNavigate();
  const url = `http://localhost:8080/users/${userId}/deposit`;
  const MembersList = () => {
    try {
      fetch("http://localhost:8080/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "*",
          mode: "no-cors",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.statusCode === 400) {
            setErrormessage(data.message);
          } else {
            setMemberList(data.data);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } catch (err) {
      console.log(error);
    }
  };
  const addDeposit = () => {
    debugger;
    try {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "*",
          mode: "no-cors",
        },
        body: JSON.stringify({
          Balance: balance,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          if (data.statusCode === 404) {
            debugger;
            alert(`please select user ${data.error}`);
          } else if (data.statusCode === 400) {
            debugger;
            setErrormessage(data.message);
          } else {
            alert(`Deposite add SuccessFully`);
            // navigate("/mess-details");
            setBalance("");
            setUserName("");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } catch (err) {
      console.log(error);
    }
  };
  useEffect(() => {
    MembersList();
  }, []);
  return (
    <Grid item xs={12} sm={12} md={8} className="mainAddDeposite">
      <Grid item xs={10}>
        <span className="errorText">
          {errorMessage.length > 1 ? errorMessage : " "}
        </span>
      </Grid>
      <div className="cardHeaderText">Add Deposit</div>
      <FormControl fullWidth>
        <label> Select member </label>
        <TextField
          id="questions"
          className="fieldDiv"
          fullWidth
          size="small"
          variant="standard"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          menuprops={{ variant: "menu" }}
          select
        >
          {memberList &&
            memberList.map((option) => (
              <MenuItem
                key={option}
                value={option}
                onClick={() => {
                  setUserId(option.id);
                }}
              >
                {option.Fname} {option.Lname}
              </MenuItem>
            ))}
        </TextField>
      </FormControl>

      {/* <FormControl fullWidth>
        <label>Select Date</label>
        <TextField
          className="fieldDiv"
          id="date"
          type="date"
          variant="outlined"
          defaultValue="2021-07-29"
          size="small"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </FormControl> */}
      <FormControl fullWidth>
        <label>Add Balance</label>
        <TextField
          className="fieldDiv"
          id="date"
          type="text"
          variant="outlined"
          size="small"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
        />
      </FormControl>
      <Buttonfield
        fieldValue="Add"
        id="menu-in"
        type="primary"
        className="menu-Action-button"
        onchangefunction={addDeposit}
      />
    </Grid>
  );
};

export default AddDeposit;
