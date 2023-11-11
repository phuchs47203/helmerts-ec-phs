import React, { useState } from 'react'
import './OneProduct.css';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
const OneProduct = ({ product }) => {
    const [productDetails, setproductDetails] = useState(false);
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/product/${product.id}`);
    }
    return (
        <div className='hermerts-app-one_product'>
            <div className='hermerts-app-oneproduct' onClick={() => handleClick()}>
                <div className='hermerts-app-oneproduct-head'>
                    <div className='hermerts-app-oneproduct-head_image'>
                        <img src={product.imgurl} alt="image" />
                    </div>
                </div>
                <div className='hermerts-app-oneproduct-description'>
                    <h3>{product.name}</h3>
                    <div className='hermerts-app-oneproduct-description-price' >
                        <p>₫ {product.sale_price}</p>
                        <p>-30%</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OneProduct