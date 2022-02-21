import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import moment from "moment";

const MenuList = () => {
  const daysName = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const [menu, setMenu] = useState();
  const MenuList = () => {
    debugger;
    try {
      debugger;
      fetch("http://localhost:8080/messes/menuList", {
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "*",
          mode: "no-cors",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);

          if (data.statusCode === 400) {
            setErrormessage(data.message);
          } else {
            setMenu(data.data);
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
  useEffect(() => {
    MenuList();
  }, []);
  console.log("Success:", menu);
  return (
    <Grid item xs={12} sm={12} md={4}>
      <div className="card">
        <div className="cardLeaves">
          <div className="cardHeaderText">Weekly Menu List</div>

          <TableContainer component={Paper} className="table">
            <Table aria-label="simple table">
              <TableHead className="tableHeader">
                <TableRow>
                  <TableCell className="TableCell">Day</TableCell>
                  <TableCell className="TableCell">Menu</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {menu &&
                  menu.map((row, id) => (
                    <TableRow>
                      <TableCell
                        component="th"
                        scope="row"
                        className="nameCells"
                      >
                        {moment.utc(row.date).format("dddd")}
                      </TableCell>
                      <TableCell className="subCells">{row.menuName}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </Grid>
  );
};

export default MenuList;
