import React, { useState } from "react";
import TextField from "../atoms/TextField";

const App = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (value, label) => {
    if (label === 'email') {
      setEmail(value)
    }
    else if (label === 'password') {
      setPassword(value)
    }
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6'>
          <div className='justify-content-center'>
            <TextField
              type='email'
              label='email'
              className='user-email'
              value={email}
              variant='outlined'
              placeHolder='Please enter your email'
              onChangeFunction={(e) => {
                handleChange(e.target.value, 'email')
              }}
            />

            <TextField
              type='password'
              label='password'
              className='user-password'
              value={password}
              variant='outlined'
              placeHolder='Please enter your password'
              onChangeFunction={(e) => {
                handleChange(e.target.value, 'password')
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )

}

export default App