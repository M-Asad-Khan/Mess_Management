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


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
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
  const [modalOpen, setModalOpen] = useState(false)
  const [anchorEl, setMenu] = useState(null);
  let navigate = useNavigate();

  const handleClickOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };


  const handleClick = (event) => {
    setMenu(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setMenu(null);
  };

  return (
    <div>
      <div className='container'>
        <div>
          {/* <img
            className='logo'
            width="150px"
            src="../../../../Downloads/111.jpeg"
            alt="image not found"
            onClick={() => { navigate('/dashboard') }}
          /> */}
          <Avatar>M</Avatar>
        </div>
        <h2 className='mlAuto'> Mess Management System</h2>
        <div className='mlAuto'>
          <img
            className='logo'
            width="40px"
            src="src/assets/images/profile.svg"
            alt="image not found"
            onClick={handleClick}
          />
        </div>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
          className='menuPosition'
        >

          <MenuItem
            onClick={() => {
              handleCloseMenu()
              navigate('/change_password')
            }}
          >
            <span className='subMenuSpan'>Change Password</span>
          </MenuItem>

          <MenuItem
            onClick={() => {
              handleCloseMenu()
              localStorage.removeItem('username')
              localStorage.removeItem('isAdmin')
              navigate('/login')
            }}>
            <span className='subMenuSpan'>Logout</span>
          </MenuItem>

        </Menu>
      </div>

      <div>
        <Dialog fullScreen open={modalOpen} className='sidebar' onClose={handleClose} TransitionComponent={Transition}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
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