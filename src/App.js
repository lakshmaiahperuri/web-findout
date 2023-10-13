import { BrowserRouter, Routes , Route } from 'react-router-dom';
import React, { createContext } from 'react';
// import logo from './logo.svg';
import SignUpForm  from './components/signup';
import LoginForm  from './components/login';
import Layout from './components/layout';
import OtpForm  from './components/verifyOtp';
import ProductList from './components/products/productList';
import TeamSelect from './components/products/blank';
// import details from './components/products/productDetails';
import ComplexGrid from './components/userComponent';
import './App.css';
const MyContext = createContext();
const sharedData = "Hello, I'm shared!";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyContext.Provider value={sharedData}>
        <Routes>
          <Route path= '/' element={<TeamSelect/>}/>
          <Route path= '/det' element={<ComplexGrid/>}/>
          <Route path='/login' element= {< LoginForm/>} />
          <Route path='/verifyOtp' element= {< OtpForm/>} />
          <Route path='/signup' element= {< SignUpForm/>} />
          <Route path='/list' element={<ProductList/>}/>
        </Routes>
          </MyContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
