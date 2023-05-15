import React from 'react';
import "./Login.scss";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
const Login=()=> {
    const navigate = useNavigate();
    const handleLogin = ()=>{
        navigate("/");
    };
    return (
        <div className='login' >
            <TextField
          required
          id="outlined-required"
          label="Ussername"
         
        />
       <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
          <div className='button'>
        <Button variant="outlined" onClick={handleLogin} >Login</Button>
        </div>
        </div>
    );
}

export default Login;