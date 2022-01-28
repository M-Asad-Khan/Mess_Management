import React, { useEffect, useState } from "react";

export const RootContext = React.createContext();

export default ({ children }) => {
  const [usersData, setUsersData] = useState("hello world");
  /*****all root context variables and function ********************/
  const defaultContext = {
    usersData,
    setUsersData,
  };
  /*******************************************************************/

  return (
    <RootContext.Provider value={defaultContext}>
      {children}
    </RootContext.Provider>
  );
};
