
import React, { useState, useContext, useEffect } from "react";
import Sidebar from '../Sidebar'
import Grid from '@material-ui/core/Grid';

export default function Layout(props) {

  return (
    <div>
      <div>
        <div className="d-flex">
          <Grid container>
            <Grid item xs={1} sm={1} md={3}>
              <Sidebar />
            </Grid>
            <Grid item xs={12} sm={12} md={9}>
              <div className="layoutContainer">
                {props.children}
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

