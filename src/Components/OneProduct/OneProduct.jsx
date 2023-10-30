import React, { useState } from 'react'
import './OneProduct.css';
const OneProduct = ({ product }) => {
    const [productDetails, setproductDetails] = useState(false);
    return (
        <div className='hermerts-app-oneproduct'>
            <div className='hermerts-app-oneproduct-head'>
                <div className='hermerts-app-oneproduct-head_image'>
                    <img src={product.image} alt="image" />
                </div>
            </div>
            <div className='hermerts-app-oneproduct-description'>
                <h3>{product.name}</h3>
                <div className='hermerts-app-oneproduct-description-price' >
                    <p>đ{product.price}</p>
                    <p>-30%</p>
                </div>
            </div>
        </div>
    )
}

export default OneProduct