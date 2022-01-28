import React from 'react';
import Login from "./Login/Login";
import SignUp from './SignUp/SignUp';
import NavBar from './Navbar/Navbar';
import RootContext from './ContextAPI/RootContext';
//import Routes from '../Routes/Routes';

const App = () => (
  <div>
        <NavBar />
    <RootContext>
        <SignUp />
    </RootContext>
  </div>
);


export default App;