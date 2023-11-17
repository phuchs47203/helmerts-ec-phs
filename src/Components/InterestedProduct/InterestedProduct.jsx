import './InterestedProduct.css';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import OneProduct from '../OneProduct/OneProduct';
const InterestedProduct = ({ catId }) => {
    const URL_PRODUCT_INTERESTED = "http://localhost:8000/api/products/interested/" + catId;

    const [products, setproducts] = useState([]);
    useEffect(() => {
        const fetchData = () => {
            const response = axios
                .get(URL_PRODUCT_INTERESTED)
                .then((response) => {
                    setproducts(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        };
        fetchData();
    }, []);

    return (
        <div className='app-helmerts-interested_product'>
            {products.map((product) => (
                <OneProduct product={product} key={product.id} />
            ))}
        </div>
    )
}

export default InterestedProduct