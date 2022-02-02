import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const MonthlyMessDetails = () => {
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
  const [dailyAmount, setDailyAmount] = useState([
    "200",
    "185",
    "300",
    "100",
    "250",
    "145",
    "185",
    "210",
    "200",
    "185",
    "300",
    "100",
    "250",
    "145",
    "185",
    "210",
    "200",
    "185",
    "300",
    "100",
    "250",
    "145",
    "185",
    "210",
  ]);
  const monthDays = [
    "Mon, Jan 3, 22",
    "Tue, Jan 4, 22",
    "Tue, Jan 4, 22",
    "Wed, Jan 5, 22",
    "Thu, Jan 6, 22",
    "Fri, Jan 7, 22",
    "Mon, Jan 10, 22",
    "Tue, Jan 11, 22",
    "Wed, Jan 12, 22",
    "Thu, Jan 13, 22",
    "Fri, Jan 14, 22",
    "Mon, Jan 17, 22",
    "Tue, Jan 18, 22",
    "Wed, Jan 19, 22",
    "Thu, Jan 20, 22",
    "Fri, Jan 21, 22",
    "Mon, Jan 24, 22",
    "Tue, Jan 25, 22",
    "Wed, Jan 26, 22",
    "Thu, Jan 27, 22",
    "Fri, Jan 28, 22",
    "Mon, Jan 31, 22",
  ];
  return (
    <div className="mainMess">
      <Grid item xs={12} sm={12} md={12}>
        <div className="card">
          <div className="cardLeaves">
            <TableContainer component={Paper} className="table">
              <Table aria-label="simple table">
                <TableHead className="tableHeader">
                  <TableRow>
                    <TableCell className="TableCell">Day and Date</TableCell>
                    {memberName.map((user, id) => {
                      return (
                        <TableCell className="TableCell">{user}</TableCell>
                      );
                    })}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {monthDays.map((row, id) => {
                    return (
                      <TableRow>
                        <TableCell
                          component="th"
                          scope="row"
                          className="nameCells"
                        >
                          {row}
                        </TableCell>
                        {memberName.map((member) => {
                          return (
                            <TableCell className="subCells">
                              {dailyAmount[id]}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
                  {/* <TableRow>
                    <TableCell component="th" scope="row" className="nameCells">
                      feb,tuesday 2022
                    </TableCell>
                    {memberName.map((row) => {
                      return <TableCell className="subCells">180</TableCell>;
                    })}
                  </TableRow> */}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default MonthlyMessDetails;
