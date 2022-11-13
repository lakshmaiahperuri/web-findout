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
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import {requestOtpAPI} from '../apis/login';
import {verifyOtpAPI} from '../apis/verifyOtp';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';


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
    <Card variant="outlined" sx={{width:"70ch", height:"30ch" , position:"center", marginLeft:"60ch",borderRadius:"2ch"}}>
    <CardContent sx={{backgroundColor:'##12354'}} variant="outlined" align="center">
       <Typography component="h1" variant="h4" align="center">
        Login
        </Typography>
      <Box component="form" >
      <FormControl variant="standard">
        <InputLabel htmlFor="component-helper">One Time Password</InputLabel>
        <Input sx={{ width: '75ch' }}
          id="component-helper"
          onChange={({target}) => setUserDetails({
            ...userDetails,
            mobile: target.value,
          })}
          aria-describedby="component-helper-text"
        />
        <FormHelperText id="component-helper-text">
          Please enter your OTP
        </FormHelperText>
      </FormControl>
        <Box>
          <Button
            variant="contained"
            onClick={() => { requestOtp() }}
            sx={{ mt: 6, ml: 4, width: '30ch'}}
          >
            Submit OTP
          </Button>
        </Box>
        </Box>
     </CardContent>
     </Card>
     </Paper>
  );
};

export default OtpForm;
