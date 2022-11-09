import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import sampleImage from '../../assets/sampleImg';
import { experimentalStyled as styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const products = [{
        name:'watch',
        price:1334
      },
      {
        name:'car',
        price:1332
      },
      {
        name:'car',
        price:1332
      },
      {
        name:'car',
        price:1332
      },
      {
        name:'car',
        price:1332
      }
];
const addProductToCart = (product) => {
console.log('product', product);
}

const ProductRow = () => {
      return (
        <Paper >
          <Card>
            <Box sx={{ flexGrow: 1 , marginTop:'10ch'}}>
              <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {products.map((product, index) => (
                <Grid item xs={3} sm={4} md={4} key={index}>
                  <Item sx={{ flexGrow: 1 }}>
                    <div>
                  {/* <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="Girl in a jacket" width = "300" height = "300"/> */}
                  <Typography gutterBottom variant="subtitle1" component="div">
                      Name: {product.name}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      Price: {product.price}
                    </Typography>
                    <Button  onClick={() => { addProductToCart(product) }}>Move to Wishlist</Button>
                    </div>
                    </Item>
                </Grid>
              ))}
            </Grid>
          </Box>
            </Card>
        </Paper>
        );
      }

export default ProductRow;