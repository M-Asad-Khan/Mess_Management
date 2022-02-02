import React, { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import Buttonfield from "../Atoms/Buttons/CustomeButtons";

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
  const [date, setDate] = useState("");
  const [balance, setBalance] = useState();
  return (
    <Grid item xs={12} sm={12} md={8} className="mainAddDeposite">
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
          {userList.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </FormControl>

      <FormControl fullWidth>
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
      </FormControl>
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
      />
    </Grid>
  );
};

export default AddDeposit;
