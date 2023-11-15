import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './MainProduct.css'
import { images } from '../../Constants';
import OneProduct from '../OneProduct/OneProduct';
import queryString from 'query-string';
import axios from 'axios';

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
const hot = {
  cat_id: 0,
  sort: 0,
  all: 1,
  keyword: ''
};
const flashsale = {
  cat_id: 0,
  sort: 0,
  all: 2,
  keyword: ''
};
const stringifyProducttype1 = queryString.stringify(hot);

const stringifyProducttype2 = queryString.stringify(flashsale);


// const stringifyProducttype1 = encodeURIComponent(JSON.stringify(hot));
// // {/* <a href={`/product/${stringifyProduct}`} style={{ textDecoration: 'none' }}> */ }
// const stringifyProducttype2 = encodeURIComponent(JSON.stringify(flashsale));

const MainProduct = () => {



  const [loading, setloading] = useState(false);

  const [bestSeller, setbestSeller] = useState([]);
  const [flashSale, setflashSale] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/products/main-product/1`);
        console.log(response);
        setbestSeller(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setloading(true);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/products/main-product/2`);
        console.log(response);
        setflashSale(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setloading(true);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='helmert-app-home-mainproduct'>
      <div className='helmert-app-home-mainproduct-hot'>
        <div className='helmert-app-home-mainproduct-heading'>
          <div className='helmert-app-home-mainproduct-heading-title'>
            <h1 className='text-title-h1'>BEST SELLER</h1>
            <p className='btn-transition'>
              <a href={`/product-filter/${stringifyProducttype1}`} className='helmert-app-home-mainproduct-heading-title-link btn-transition'>Discover</a>
            </p>
          </div>
          <div className='helmert-app-home-mainproduct-heading-line' />
        </div>
        <div className='helmert-app-home-mainproduct-content'>
          {bestSeller.map((product) => (
            <OneProduct product={product} key={product.id} />
          )
          )
          }
        </div>
      </div>
      <div className='helmert-app-home-mainproduct-flashsale'>
        <div className='helmert-app-home-mainproduct-heading'>
          <div className='helmert-app-home-mainproduct-heading-title'>
            <h1 className='text-title-h1'>FLASH SALE</h1>
            <p className='btn-transition'>
              <a href={`/product-filter/${stringifyProducttype2}`} className='helmert-app-home-mainproduct-heading-title-link btn-transition'>Discover</a>
            </p>
          </div>
          <div className='helmert-app-home-mainproduct-heading-line' />
        </div>
        <div className='helmert-app-home-mainproduct-content'>
          {flashSale.map((product) => (
            <OneProduct product={product} key={product.id} />
          )
          )
          }
        </div>
      </div>
    </div>
  )
}

export default MainProduct