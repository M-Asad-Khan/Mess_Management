import React, { useState } from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";

const MenuList = () => {
  const [menuList, setMenuList] = useState([
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ]);
  const [menu, setMenue] = useState([
    "Chicken",
    "Chicken sajji",
    "Biryani",
    "Mix Sabzi",
    "Mughlai Chicken",
  ]);
  return (
    <Grid item xs={12} sm={12} md={4}>
      <div className="card">
        <div className="cardLeaves">
          <div className="cardHeaderText">Weekly Menu List</div>

                <TableContainer component={Paper} className="table">
                <Table aria-label="simple table">
                  <TableHead className="tableHeader">
                    <TableRow>
                      <TableCell className="TableCell" >Day</TableCell>
                      <TableCell className="TableCell" >Menue</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {menuList.map((row,id) => (
                      <TableRow>
                        <TableCell component="th" scope="row" className="nameCells">
                          {row}
                        </TableCell>
                        <TableCell className="subCells">{menu[id]}</TableCell>
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
