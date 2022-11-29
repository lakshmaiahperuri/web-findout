import { BrowserRouter, Routes , Route } from 'react-router-dom';
import logo from './logo.svg';
import SignUpForm  from './components/signup';
import LoginForm  from './components/login';
import OtpForm  from './components/verifyOtp';
import ProductList from './components/products/productList';
import details from './components/products/productDetails';
import ComplexGrid from './components/userComponent';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      </div>
      <Routes>
        <Route path= '/' element={<Layout/>}/>
        <Route path= '/det' element={<ComplexGrid/>}/>
        <Route path='/login' element= {< LoginForm/>} />
        <Route path='/verifyOtp' element= {< OtpForm/>} />
        <Route path='/signup' element= {< SignUpForm/>} />
        <Route path='/list' element={<ProductList/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
