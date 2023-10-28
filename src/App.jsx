import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar, Footer } from './Components';
import { Account, Cart, Home, Information, Introduce, Product, Signin, Signout, Signup } from './Containers';

const App = () => {
  return (

    <BrowserRouter>
      <div className='helmerst-app'>
        <div className='helmerst-app-navbar'>
          <Navbar />
        </div>
        <div className='helmerst-app-boby'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/product' element={<Product />} />
            <Route path='/introduce' element={<Introduce />} />
            <Route path='/information' element={<Information />} />
            <Route path='/account' element={<Account />} />
            <Route path='/account/signin' element={<Signin />} />
            <Route path='/account/signup' element={<Signup />} />
            <Route path='/account/signout' element={<Signout />} />

          </Routes>
        </div>
        <div className='helmerst-app-footer'>
          {/* <Footer /> */}
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;