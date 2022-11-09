import React, { useState} from "react";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

import {requestOtpAPI} from '../apis/login';
import {verifyOtpAPI} from '../apis/verifyOtp';


function OtpForm () {
  // States for registration
  const [userDetails, setUserDetails] = useState('');
  const navigate = useNavigate();
  const requestOtp = async() => {
    console.log('otp>>>>>>>>>>>>');
    const response = await verifyOtpAPI ({
      ...userDetails
    })
    if (response) {
      console.log('aaaaaaaaaaaaa', response);
      alert('LoggedIn SuucessFul');
      navigate('/');
      const notify = () => toast("Wow so easy!");
      return (
        <div>
          <button onClick={notify}>Notify!</button>
          <ToastContainer />
        </div>
      );
    }
  }
  return (
    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
       <Typography component="h1" variant="h4" align="center">
        Login
        </Typography>
      <Box component="form" >
        <Grid item xs={12} sm={6}>
        <TextField 
        margin="normal"
        label="One Time Password (OTP)"
        fullWidth
         className="input"
         type="text" 
         onChange={({target}) => setUserDetails({
          ...userDetails,
          otp: target.value,
        })}/>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'flex-center' }}>
          <Button
            variant="contained"
            onClick={() => { requestOtp() }}
            sx={{ mt: 3, ml: 1 }}
          >
            Submit OTP
          </Button>
        </Box>
        </Box>
     </Paper>
  );
};

export default OtpForm;
