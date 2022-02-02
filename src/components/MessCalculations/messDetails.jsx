import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const MessCalculation = () => {
  const [memberName, setMemberName] = useState([
    "Asad khan",
    "Ali",
    "Abbas",
    "Hamza",
    "Haris",
    "Adil",
    "Arslan",
    "Jawad",
  ]);
  const [dailAmount, setDailyAmount] = useState([
    "200",
    "200",
    "200",
    "200",
    "200",
    "200",
    "200",
    "200",
  ]);
  return (
    <div className="mainMess">
      <Grid item xs={12} sm={12} md={12}>
        <div className="card">
          <div className="cardLeaves">
            <TableContainer component={Paper} className="table">
              <Table aria-label="simple table">
                <TableHead className="tableHeader">
                  <TableRow>
                    <TableCell className="TableCell">Title</TableCell>
                    {memberName.map((user, id) => {
                      return (
                        <TableCell className="TableCell">{user}</TableCell>
                      );
                    })}
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row" className="nameCells">
                      Carry Forward
                    </TableCell>
                    {memberName.map((row) => {
                      return <TableCell className="subCells">2000</TableCell>;
                    })}
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row" className="nameCells">
                      Individual Deposit
                    </TableCell>
                    {memberName.map((row) => {
                      return <TableCell className="subCells">2000</TableCell>;
                    })}
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row" className="nameCells">
                      Devbox Deposit
                    </TableCell>
                    {memberName.map((row) => {
                      return <TableCell className="subCells">1000</TableCell>;
                    })}
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row" className="nameCells">
                      Total Deposite
                    </TableCell>
                    {memberName.map((row) => {
                      return <TableCell className="subCells">5000</TableCell>;
                    })}
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row" className="nameCells">
                      Expense (Rs)
                    </TableCell>
                    {memberName.map((row) => {
                      return <TableCell className="subCells">1000</TableCell>;
                    })}
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row" className="nameCells">
                      Balance
                    </TableCell>
                    {memberName.map((row) => {
                      return <TableCell className="subCells">4000</TableCell>;
                    })}
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row" className="nameCells">
                      Cash in Hand
                    </TableCell>
                    <TableCell className="subCells" colSpan={8}>
                      14000
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default MessCalculation;
