import React, { useState} from "react";
// import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from "react-router-dom";
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import {requestOtpAPI} from '../apis/login';
// import {verifyOtpAPI} from '../apis/verifyOtp';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';


function LoginForm () {
  // States for registration
  const [userDetails, setUserDetails] = useState('');
  // const navigate = useNavigate();
  const requestOtp = async() => {
    console.log('otp>>>>>>>>>>>>');
    const response = await requestOtpAPI ({
      ...userDetails
    })
    if (response) {
      console.log('aaaaaaaaaaaaa', response);
      alert('OTP sent to your mobile number');
      navigate('/verifyOtp');
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
    <Card variant="outlined" sx={{width:"70ch", height:"26ch" , margin:"auto", borderRadius:"4ch"}}>
    {/* <CardTitle>SAAAAAAA</CardTitle> */}
    <CardContent sx={{backgroundColor:'##12354'}} variant="outlined" align="center">
   <Typography component="h1" variant="h4" align="center">
      Login
    </Typography>
  <Box variant="standard">
  <Grid item xs={100} sm={60}>
 <FormControl variant="standard">
    <InputLabel htmlFor="component-helper">Enter Your Phone Number</InputLabel>
    <Input sx={{ width: '75ch' }}
      id="component-helper"
      onChange={({target}) => setUserDetails({
        ...userDetails,
        name: target.value,
      })}
      aria-describedby="component-helper-text"
    />
    <FormHelperText id="component-helper-text">
    Phone Number
    </FormHelperText>
  </FormControl>
  </Grid>
    <Box>
      <Button
        sx={{ mt: 6, ml: 4, width: '30ch'}}
        variant="contained"
        onClick={() => { requestOtp() }}
        
      >
        Get OTP
      </Button>
    </Box>
    </Box>
    </CardContent>
    </Card>
  );
};

export default LoginForm;
