import React, { useState, useContext, useEffect } from "react";
import styles from "./Navbar.module.scss";
import Sidebar from "../Sidebar";
import {
  makeStyles,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  CloseIcon,
  Slide,
  Menu,
  MenuItem,
  Avatar
} from '@material-ui/core';
import { useNavigate } from "react-router-dom";
import { RootContext } from "../ContextAPI/RootContext";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Navbar() {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);
  const [anchorEl, setMenu] = useState(null);
  let navigate = useNavigate();
  const { usersData, setUsersData } = useContext(RootContext);
  const handleClickOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleClick = (event) => {
    debugger;
    setMenu(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setMenu(null);
  };

  return (
    <div>
      <div className="container">
        <h2 className="mlAuto"> Mess Management System</h2>
        <div className="mlAuto">
        </div>
      </div>

      <div>
        <Dialog
          fullScreen
          open={modalOpen}
          className="sidebar"
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Sidebar
              </Typography>
            </Toolbar>
          </AppBar>
          <Sidebar fromNavbar={true} setModalOpen={setModalOpen} />
        </Dialog>
      </div>
    </div>
  );
}