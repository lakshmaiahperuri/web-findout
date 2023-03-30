import { BrowserRouter, Routes , Route } from 'react-router-dom';
// import logo from './logo.svg';
import SignUpForm  from './components/signup';
import LoginForm  from './components/login';
import Layout from './components/layout';
import OtpForm  from './components/verifyOtp';
import ProductList from './components/products/productList';
import ListingPageContainer from './components/products/listContainer';
// import details from './components/products/productDetails';
import ComplexGrid from './components/userComponent';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path= '/' element={<Layout/>}/>
          <Route path= '/det' element={<ComplexGrid/>}/>
          <Route path='/login' element= {< LoginForm/>} />
          <Route path='/verifyOtp' element= {< OtpForm/>} />
          <Route path='/signup' element= {< SignUpForm/>} />
          <Route path='/list' element={<ProductList/>}/>
          <Route path='/scroll' element={<ListingPageContainer/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
