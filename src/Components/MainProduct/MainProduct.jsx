import React from 'react'
import { Link } from 'react-router-dom'
import './MainProduct.css'
import { images } from '../../Constants';
import OneProduct from '../OneProduct/OneProduct';
const products = {
  id: 1,
  name: "Children's helmet BW729 Yellow 2023",
  brand: "Helmerts",
  imgurl: "https://res.cloudinary.com/dh6wuvc5j/image/upload/v1699609292/lnahlt5hggzroccqybfg.jpg",
  description: "Children's helmet BW729 Yellow 2023",
  origional_price: 4800000,
  sale_price: 2400000,
  discount: 0.50,
  available: 111,
  sold: 222,
  cat_id: 3,
  create_by: 1,
  update_by: 1,
  created_at: "2023-11-06T09:02:23.000000Z",
  updated_at: "2023-11-10T09:41:33.000000Z"
};
const MainProduct = () => {
  return (
    <div className='helmert-app-home-mainproduct'>
      <div className='helmert-app-home-mainproduct-hot'>
        <div className='helmert-app-home-mainproduct-heading'>
          <div className='helmert-app-home-mainproduct-heading-title'>
            <h1 className='text-title-h1'>BEST SELLER</h1>
            <p className='btn-transition'>
              <Link to="/" className='helmert-app-home-mainproduct-heading-title-link btn-transition'>Discover</Link>
            </p>
          </div>
          <div className='helmert-app-home-mainproduct-heading-line' />
        </div>
        <div className='helmert-app-home-mainproduct-content'>
          <OneProduct product={products} key={1} />
          <OneProduct product={products} key={3} />
          <OneProduct product={products} key={2} />
          <OneProduct product={products} key={4} />
          <OneProduct product={products} key={5} />
          <OneProduct product={products} key={6} />
        </div>
      </div>
      <div className='helmert-app-home-mainproduct-flashsale'>
        <div className='helmert-app-home-mainproduct-heading'>
          <div className='helmert-app-home-mainproduct-heading-title'>
            <h1 className='text-title-h1'>FLASH SALE</h1>
            <p className='btn-transition'>
              <Link to="/" className='helmert-app-home-mainproduct-heading-title-link btn-transition'>Discover</Link>
            </p>
          </div>
          <div className='helmert-app-home-mainproduct-heading-line' />
        </div>
        <div className='helmert-app-home-mainproduct-content'>
          <OneProduct product={products} key={1} />
          <OneProduct product={products} key={3} />
          <OneProduct product={products} key={2} />
          <OneProduct product={products} key={4} />
          <OneProduct product={products} key={5} />
          <OneProduct product={products} key={6} />
        </div>
      </div>
    </div>
  )
}

export default MainProduct