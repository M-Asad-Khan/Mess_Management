import React, { useState } from "react";
import Layout from "../Layout";
import MenuCard from "./cards/dashboard-card";
import Grid from "@material-ui/core/Grid";
import MenuList from "./cards/dashboard-card/menuList";
export default function Dashboard() {
  return (
    <Layout>
      <div className="mainDashboard">
        <Grid item xs={12}>
          <Grid container spacing={3} className="gridSubItems">
            <MenuCard
              title="Tomorrow Menu"
              menuDetails="Sandwich, Coke and Fries"
              isTrue="true"
            />
            <MenuCard title="Today Menu" menuDetails="Chicken" isTrue="false" />
            <MenuList/>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}
