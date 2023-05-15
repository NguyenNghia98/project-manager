import React from 'react';
import TextField from '@mui/material/TextField';
import "./Register.scss";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
const Register=()=> {
  const navigate = useNavigate();
  const handleRegister = ()=>{
    navigate("/login");
  };
    return (
        <div className='Register'>
             <TextField
          required
          id="outlined-required"
          label="Ussername"
         
        />
          <TextField
          required
          id="outlined-required"
          label="Email"
        
        />
         <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
         <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <div className='button'>
        <Button variant="outlined" onClick={handleRegister} >Register</Button>
        </div>
         </div>
      
    );
}

export default Register;