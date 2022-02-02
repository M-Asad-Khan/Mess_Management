import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import MessCalculation from "./messDetails";
import MonthlyMessDetails from './monthlyMessDetails';
import AddDeposit from './addDeposit'
function TabPanel(props) {
  const { children, value, index,} = props;
  return <div >{value === index && <Box p={3}>{children}</Box>}</div>;
}
export default function MainMess() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="messDetails">
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} variant="fullWidth">
          <Tab label="Mess Details" />
          <Tab label="Monthly Mess Sheet" />
          <Tab label="Add Deposit" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <MessCalculation />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MonthlyMessDetails />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AddDeposit/>
      </TabPanel>
    </div>
  );
}
