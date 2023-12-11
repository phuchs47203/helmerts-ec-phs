import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar, Footer, SlideIntro, CTA, ProductDetails, CheckOut } from './Components';
import { Account, Cart, Home, Information, Introduce, Product, Signin, Signout, Signup, Category, ClientService, ProductFilter, ChatBotOpenAI } from './Containers';

const App = () => {
  return (

    <BrowserRouter>
      <div className='helmerst-app'>
        <div className='helmerst-app-navbar'>
          <Navbar />
          <ChatBotOpenAI />
        </div>
        <Routes>
          <Route path='/' element={<SlideIntro />} />
          <Route path='/home' element={<SlideIntro />} />
        </Routes>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
        </Routes>
        <Routes>
          <Route path='/product/:id' element={<ProductDetails />} />

        </Routes>
        <div className='helmerst-app-boby padding_top'>
          <Routes>

            <Route path='/introduce' element={<Introduce />} />
            <Route path='/information' element={<Information />} />
            <Route path='/product' element={<Product />} />
            <Route path='/product-filter/:productString' element={<ProductFilter />} />

            {/* <Route path='/information#return-exchange' element={<Information />} /> */}
            <Route path='/account' element={<Account />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/account/signout' element={<Signout />} />
            <Route path='/product/category/:productType' element={<Category />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/client-service' element={<ClientService />} />
            <Route path='/check-out' element={<CheckOut />} />
          </Routes>
        </div>
        <div className='helmerst-app-cta section__padding'>
          <CTA />
        </div>
        <div className='helmerst-app-footer'>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;