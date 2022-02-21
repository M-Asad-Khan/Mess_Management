import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const ViewAllMembers = () => {
  const [errorMessage, setErrormessage] = useState("");
  const [header, setMemberName] = useState([
    "Name",
    "E-mail",
    "isAdmin",
    "Balance",
  ]);
  const [memberList, setMemberList] = useState();
  const MembersList = () => {
    debugger;
    try {
      debugger;
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
          console.log("Success:", data);

          if (data.statusCode === 400) {
            setErrormessage(data.message);
          } else {
            setMemberList(data.data);
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
    MembersList();
  }, []);
  console.log(memberList);
  return (
    <div className="viewMember">
      <Grid item xs={12} sm={12} md={10}>
        <div className="card">
          <div className="cardLeaves">
            <TableContainer component={Paper} className="table">
              <Table aria-label="simple table">
                <TableHead className="tableHeader">
                  <TableRow>
                    {header.map((header, id) => {
                      return (
                        <TableCell className="TableCell">{header}</TableCell>
                      );
                    })}
                    <TableCell className="TableCell" colSpan={3}>
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {memberList &&
                    memberList.map((member, id) => {
                      return (
                        <TableRow>
                          <TableCell className="subCells">
                            {member.Fname} {member.Lname}
                          </TableCell>
                          <TableCell className="subCells">
                            {member.username}
                          </TableCell>
                          <TableCell className="subCells">
                            {member.isAdmin}
                          </TableCell>
                          <TableCell className="subCells">
                            {member.Balance}
                          </TableCell>
                          <TableCell className="subCells">update</TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default ViewAllMembers;
