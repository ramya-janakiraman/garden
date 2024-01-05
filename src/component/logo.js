import './logo.css';
import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import { API_URL } from '../Common/Variables';
import { Link } from '@mui/material';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, updateUsername] = useState('');
  const [password, updatePassword] = useState('');
  const [error, updateError] = useState('');

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [flag, setFlag] = React.useState(true);
  const handlelogin = () => {
    setFlag(!flag);
    if (username && password) {
      axios.get(API_URL + "users?username=" + username + "&password=" + password)
        .then(res => {
          var data = res.data
          if (data.length) {
            
            window.location.pathname = '/category';
            localStorage.setItem("user", JSON.stringify(data[0]));
          } else {
            updateError("Invalid Username or Password")
          }
        })
        .catch(error => {
          console.log(error)
          updateError("Something went wrong")
        });
    } else {
      updateError("Please enter Username and Password")
    }
  };

  const handleusernamechange = (e) => {
    var value = e.target.value;
    updateUsername(value);
    updateError("");
  };

  const handlepasswordchange = (e) => {
    var value = e.target.value;
    updatePassword(value);
    updateError("");
  };

  // const goToregister = () => {
  //   window.location.pathname = '/register';
  // }
  return (
    <body>
    <div class="bg-img">
      <div class="content">
        <header>Login Form</header>
        <form action="#">
          <TextField
            id="filled-basic"
            label="UserName"
            variant="filled"
            sx={{
              position: 'relative',
              height: '45px',
              width: '100%',
              display: 'flex',
              background: 'rgba(255,255,255,0.94)',
              color: '#222',
              width: '40px',
              lineheight: '45px',
              height: '100%',
              width: '100%',
              background:'white',
              border:'none',
              outline:'none',
              color: '#222',
              fontsize: '16px',
              fontFamily:'Poppins,sans-serif',
           }}
            value={username}
            onChange={handleusernamechange}
          />
          <br></br>
          <FormControl sx={{ width: '100%', height: '100%', background: 'white' }} variant="filled">
            <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
            <FilledInput
              id="filled-adornment-password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handlepasswordchange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <br></br>
          {error ? <div className='input-field-item' style={{ color: "red" }}>{error}</div> : null}
          <br></br>
          <Button
           variant="contained"
           color={flag ? "primary" : "secondary"}sx={{
            height: '50px',
            width: '100%',
            fontSize:'20px',
            fontFamily:'serif',
            backgroundColor:'#E1306C',
         }}
            onClick={handlelogin}
          >Login</Button>
         <Link href="#" underline="hover" sx={{
           fontWeight:'200%',
           color:'darkred',
          textdecoration: 'none',
          fontfamily: 'Poppins,sans-serif',
          fontSize:'19px',
          marginRight:'160px'
         }}>
  {'Forgot Password'}
</Link>
        </form>
      </div>
      <div className="login-right-portion">
      </div>
    </div>
  </body>
  );
}
