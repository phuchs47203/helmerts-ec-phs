import React from 'react'
import { Link } from 'react-router-dom'
import './MainProduct.css'
import { images } from '../../Constants';
import OneProduct from '../OneProduct/OneProduct';
const products = {
  id: "124",
  name: 'modular best',
  price: '2400000',
  image: images.testone,
  description: 'this is description of product'
};
const MainProduct = () => {
  return (
    <div className='helmert-app-home-mainproduct'>
      <div className='helmert-app-home-mainproduct-hot'>
        <div className='helmert-app-home-mainproduct-heading'>
          <div className='helmert-app-home-mainproduct-heading-title'>
            <h1>BEST SELLER</h1>
            <p>
              <Link to="/" className='helmert-app-home-mainproduct-heading-title-link'>Discover</Link>
            </p>
          </div>
          <div className='helmert-app-home-mainproduct-heading-line' />
        </div>
        <div className='helmert-app-home-mainproduct-content'>
          <OneProduct product={products} key={products.id} />
          <OneProduct product={products} key={products.id} />
          <OneProduct product={products} key={products.id} />
          <OneProduct product={products} key={products.id} />
          <OneProduct product={products} key={products.id} />
          <OneProduct product={products} key={products.id} />
          <OneProduct product={products} key={products.id} />
          <OneProduct product={products} key={products.id} />
        </div>
      </div>
      <div className='helmert-app-home-mainproduct-flashsale'>
        <div className='helmert-app-home-mainproduct-heading'>
          <div className='helmert-app-home-mainproduct-heading-title'>
            <h1>FLASH SALE</h1>
            <p>
              <Link to="/" className='helmert-app-home-mainproduct-heading-title-link'>Discover</Link>
            </p>
          </div>
          <div className='helmert-app-home-mainproduct-heading-line' />
        </div>
        <div className='helmert-app-home-mainproduct-content'>

          <OneProduct product={products} key={products.id} />
          <OneProduct product={products} key={products.id} />
          <OneProduct product={products} key={products.id} />
          <OneProduct product={products} key={products.id} />
          <OneProduct product={products} key={products.id} />
          <OneProduct product={products} key={products.id} />
          <OneProduct product={products} key={products.id} />
          <OneProduct product={products} key={products.id} />
        </div>
      </div>
    </div>
  )
}

export default MainProduct