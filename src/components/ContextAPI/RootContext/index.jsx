import React, { useEffect, useState } from "react";

export const RootContext = React.createContext();

export default ({ children }) => {
  const [usersData, setUsersData] = useState("");
  const [ currentURl,setCurrentUrl] = useState('');
  /*****all root context variables and function ********************/
  const defaultContext = {
    usersData,
    setUsersData,
    currentURl,setCurrentUrl
  };
  /*******************************************************************/

  return (
    <RootContext.Provider value={defaultContext}>
      {children}
    </RootContext.Provider>
  );
};
