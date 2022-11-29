import React, { useState} from "react";
// import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
//import { withStyles } from '@material-ui/core/styles';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
// import CardTitle from '@mui/material/CardTitle';
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

import { registerUserAPI } from '../apis/userSignup';

function SignUpForm () {
  // States for registration
  const [userDetails, setUserDetails] = useState('');
  const navigate = useNavigate();
  // const classes = withStyles();
  const registerUser = async() => {
    const response = await registerUserAPI({
      ...userDetails
    })
    if (response) {
      console.log('aaaaaaaaaaaaa', response);
      alert('User Registered');
      navigate('/login');
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
      <Card variant="outlined" sx={{width:"70ch", height:"50ch" , margin:"auto", borderRadius:"2ch"}}>
        {/* <CardTitle>SAAAAAAA</CardTitle> */}
        <CardContent sx={{backgroundColor:'##12354'}} variant="outlined" align="center">
       <Typography component="h1" variant="h4" align="center">
          Registration
        </Typography>
      <Box variant="standard">
    <Grid item xs={100} sm={60}>
     <FormControl variant="standard">
        <InputLabel htmlFor="component-helper">Name</InputLabel>
        <Input sx={{ width: '75ch' }}
          id="component-helper"
          onChange={({target}) => setUserDetails({
            ...userDetails,
            name: target.value,
          })}
          aria-describedby="component-helper-text"
        />
        <FormHelperText id="component-helper-text">
          Name should be more than 4 characters
        </FormHelperText>
      </FormControl>
      </Grid>
      <Grid item xs={100} sm={60}>
     <FormControl variant="standard">
        <InputLabel htmlFor="component-helper">Email</InputLabel>
        <Input sx={{ width: '75ch' }}
          id="component-helper"
          onChange={({target}) => setUserDetails({
            ...userDetails,
            name: target.value,
          })}
          aria-describedby="component-helper-text"
        />
        <FormHelperText id="component-helper-text">
          Email should not be used before
        </FormHelperText>
      </FormControl>
      </Grid>
      <Grid item xs={100} sm={60}>
     <FormControl variant="standard">
        <InputLabel htmlFor="component-helper">Mobile Number</InputLabel>
        <Input sx={{ width: '75ch' }}
          id="component-helper"
          onChange={({target}) => setUserDetails({
            ...userDetails,
            name: target.value,
          })}
          aria-describedby="component-helper-text"
        />
        <FormHelperText id="component-helper-text">
          Mobile Number should be 10 digits
        </FormHelperText>
      </FormControl>
      </Grid>
      <Grid item xs={100} sm={60}>
     <FormControl variant="standard">
        <InputLabel htmlFor="component-helper">Pincode</InputLabel>
        <Input sx={{ width: '75ch' }}
          id="component-helper"
          onChange={({target}) => setUserDetails({
            ...userDetails,
            name: target.value,
          })}
          aria-describedby="component-helper-text"
        />
        <FormHelperText id="component-helper-text">
        Pincode should be 6 digits
        </FormHelperText>
      </FormControl>
      </Grid>
        <Box>
          <Button
            sx={{ mt: 6, ml: 4, width: '30ch'}}
            variant="contained"
            onClick={() => { registerUser() }}
          >
            SignUP
          </Button>
        </Box>
        </Box>
        </CardContent>
        </Card>
  );
};

export default SignUpForm;
