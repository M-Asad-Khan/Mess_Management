import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Avatar,
  CardHeader,
  IconButton,
} from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import React from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(3),
      },
    },
  })
);

function App() {
  const classes = useStyles();
  return (
    <Box>
      <Card>
        <CardHeader
          title="Today Menu"
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
        />
        <CardContent>
          <Typography variant="h3">Sandwich, Coke and Fries</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default App;