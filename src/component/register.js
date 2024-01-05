import { Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { API_URL } from '../Common/Variables';
//import "./.css"

export default function Register(props) {
  const [name, updateName] = useState('');
  const [username, updateUsername] = useState('');
  const [password, updatePassword] = useState('');
  const [confirmPassword, updateConfirmPassword] = useState('');
  const [error, updateError] = useState("");
  const [success, updateSuccess] = useState("");

  const resetValues = () => {
    updateUsername("");
    updateName("");
    updatePassword("");
    updateConfirmPassword("");
  }

  const resetWarningMsg = () => {
    updateError("");
    updateSuccess("");
  }
  const [flag, setFlag] = React.useState(true);
  const handleregister = (e) => {
    setFlag(!flag);
    resetWarningMsg();
    if (name && username && password && confirmPassword) {
      if (password == confirmPassword) {
        axios.post(API_URL + "users", { name: name, username: username, password: password, id: username })
          .then(res => {
            resetValues();
            updateSuccess("Account created successfully");
            window.location.pathname = '/login';
          })
          .catch(error => {
            var msg = error.response.data;
            resetValues();
            if (msg.includes("duplicate")) {
              updateError("Already username registered")
            } else {
              updateError("Something went wrong. Unable to create account")
            }
          })
      } else {
        updateError("Password and Confirm Password should match")
      }
    } else {
      updateError("Please enter all the fields")
    }
  };

  const handleusernamechange = (e) => {
    var value = e.target.value;
    updateUsername(value);
    resetWarningMsg();
  };
  const handlenamechange = (e) => {
    var value = e.target.value;
    updateName(value);
    resetWarningMsg();
  };
  const handlepasswordchange = (e) => {
    var value = e.target.value;
    updatePassword(value);
    resetWarningMsg();
  };
  const handleconfirmpasswordchange = (e) => {
    var value = e.target.value;
    updateConfirmPassword(value);
    resetWarningMsg();
  };

  const goTologin = () => {
    window.location.pathname = '/login';
  }

  return (
   <div className="bg-img">
      <div className="content">
        <header>Register Form</header>
        <form action="#">
          <TextField
            id="filled-basic"
            label="Email"
            variant="filled"
            sx={{
               height: '45px',
               width: '100%',
               display: 'flex',
               color: '#222',
               width: '40px',
               lineheight: '45px',
               height: '100%',
               width: '100%',
               background:'white',
               fontsize: '16px',
               fontFamily:'Poppins,sans-serif',
            }}
            onChange={handlenamechange}
          />
          <br></br>
          <TextField
            id="filled-basic"
            label="UserName"
            variant="filled"
            sx={{
               height: '45px',
               width: '100%',
               display: 'flex',
               color: '#222',
               width: '40px',
               lineheight: '45px',
               height: '100%',
               width: '100%',
               background:'white',
               fontsize: '16px',
               fontFamily:'Poppins,sans-serif',
            }}
            onChange={handleusernamechange}
          />
          <br></br>
          <TextField
            id="filled-basic"
            label="New Password"
            variant="filled"
            sx={{
               height: '45px',
               width: '100%',
               display: 'flex',
               color: '#222',
               width: '40px',
               lineheight: '45px',
               height: '100%',
               width: '100%',
               background:'white',
               fontsize: '16px',
               fontFamily:'Poppins,sans-serif',
            }}
            value={password}
            onChange={handlepasswordchange}
          />
          <br></br>
          <TextField
            id="filled-basic"
            label="Confirm Password"
            variant="filled"
            sx={{
             height: '45px',
                     width: '100%',
                     display: 'flex',
                     color: '#222',
                     width: '40px',
                     lineheight: '45px',
                     height: '100%',
                     width: '100%',
                     background:'white',
                     fontsize: '16px',
                     fontFamily:'Poppins,sans-serif',
            }}
            value={confirmPassword}
            onChange={handleconfirmpasswordchange}
          />
          {error ? <div className='input-field-item' style={{ color: "red" }}>{error}</div> : null}
          {success ? <div className='input-field-item' style={{ color: "green" }}>{success}</div> : null}
          <br></br>
           <Button
             variant="contained" color={flag ? "primary" : "secondary"} sx={{
              height:'50px',
              width:'100%',
              fontSize:'20px',
              fontFamily:'serif',
              backgroundColor:'#E1306C',
              color:'white',
            }}
            onClick={handleregister}
          >
            REGISTER
          </Button> 
        </form>
      </div>
      <div className="signup-right-portion">
      </div>
    </div>
  );
}