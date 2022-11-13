import React , {useState} from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ComplexGrid() {
  const { state } = useLocation();
  const [qty, setQty] = useState();
  console.log('state>>>>', state);
  const productName = state.query.name
  const buyProduct = async(product) => {
    console.log('qty>>>>>>>>>>>>>', qty.val);
    product.quantity = qty.val;
   console.log('buy product', typeof(product.quantity));
  }
  return (
    <Paper
      sx={{
        p: 10,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 200, height: 190 }}>
          <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="Girl in a jacket" width = "200" height = "200"/>
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={3}>
            <Grid item xs>
              <Typography >
               {state.query.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1030114
              </Typography>
            </Grid>
        <Grid item>
         <FormControl variant="standard">
             <InputLabel htmlFor="component-helper">Mobile Number</InputLabel>
              <Input sx={{ width: '30ch' }}
                  id="component-helper"
                  type="Number"
                 onChange={({target}) => setQty({
                       val: target.value,
                     })}
                      aria-describedby="component-helper-text"
                  />
                      <FormHelperText id="component-helper-text">
                    Please enter your mobile number
                     </FormHelperText>
         </FormControl>
            </Grid>
            <Grid item>
              <Button variant="contained" sx={{backgroundColor:'#2f3833', marginRight:'5px'}}>
               Add to Cart
              </Button>
              <Button variant="contained" sx={{backgroundColor:'#2f3833', marginRight:'5px'}} onClick={() => { buyProduct(state.query) }}>
                Buy Now
              </Button>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $19.00
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

