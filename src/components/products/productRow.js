import React, {useContext} from 'react';
// import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
// import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
// import sampleImage from '../../assets/sampleImg';
import { experimentalStyled as styled } from '@mui/material/styles';
import PurchaseModal from '../modal';
// import ComplexGrid from '../userComponent';
import MyContext from './myContext';

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
      },
      {
        name:'car',
        price:1332
      },
    
];

const CardDesign = (item) => {
  const [modalValue, setModalValue] = React.useState(false);
  const productBuy = (product) => {
    console.log('product', product, modalValue);
    setModalValue(true);
    return(
      <>
      <PurchaseModal modalValue={modalValue}/>
      </>
    )
    }
  return (
  <div class="row" style={{padding: 20}}>
   <div class="card" style={{ width: 300, textAlign: 'center', backgroundColor:'#f1f1f1',borderRadius: 4}}>
   <div class="content">
    <h4><b>{item.item.name}</b></h4> 
    <img src="https://i.pinimg.com/originals/49/23/b1/4923b198113def952197dff492516d77.jpg" alt="Girl in a jacket" width="200" height="200"></img>
    <div style={{padding: 10, marginRight: 5}}>
    <button type="button" class="btn btn-primary" style={{marginRight: 6}}>Add To Cart</button>
    <button type="button" class="btn btn-secondary" onClick={() => productBuy(item)}>Buy Now</button>
    </div>
</div>
</div>
</div>
  )
};

function ProductRow() {
  const navigate = useNavigate();
  const contextValue = useContext(MyContext);
  console.log('conetctttttttttt', contextValue);
  // const [query, setQuery] = useState('');
  const openProductDetailPage = (product) => {
    navigate('/det', { state:{query:product}});
  }
      return (
        <div className='container'>
        <div className="list-group" style={{marginTop: 100, display:'flex',flexDirection: 'row',flexWrap: 'wrap'}}>
          {/* {products.map(listitem => (
            // <CardDesign key={listitem} item={listitem}/>
            <div key={listitem} item={listitem}>
              <p>{listitem.name}</p>
            </div>
          ))} */}
          {
            products.map(item => (
              <div key={item} item={item}>
                <p>{item.name}</p>
                </div>
          ))}
        </div>
        </div>
      )
}

export default ProductRow;