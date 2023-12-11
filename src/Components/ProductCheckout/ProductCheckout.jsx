import React, { useEffect, useState } from 'react'
import { IoIosClose } from "react-icons/io";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { images } from '../../Constants';
import { useNavigate } from 'react-router-dom';
import './ProductCheckout.css';
const ProductCheckout = ({ product, size, quantity, price }) => {
    const [error, seterror] = useState('');
    const [quantityChange, setquantityChange] = useState(quantity);

    const navigate = useNavigate();
    const handleClickProduct = () => {
        navigate('/product/' + product.id);
    }
    return (
        <div className='app-helmerts-product_checkout'>
            <div
                onClick={handleClickProduct}
                className='app-helmerts-product_checkout-box'>
                <div
                    className='app-helmerts-product_checkout-left'>
                    <div className='app-helmerts-product_checkout-left-main'>
                        <div className='app-helmerts-product_checkout-left-main-img'
                        >
                            <img src={product.imgurl} alt="" />
                        </div>
                        <div className='app-helmerts-product_checkout-left-main-content'>
                            <div className='app-helmerts-product_checkout-left-main-content-name'>
                                <h1>
                                    {product.name}
                                </h1>
                            </div>
                            <div className='app-helmerts-product_checkout-left-main-content-description'>
                                <div className='app-helmerts-product_checkout-left-main-content-description-text'>
                                    <p>Color: {product.color}</p>
                                    <p>Size: {size}</p>
                                </div>
                                <div className='app-helmerts-product_checkout-left-main-content-description-quantity'>
                                    <div className='app-helmerts-product_checkout-left-main-content-description-quantity-box'>
                                        <h4>Quantity: </h4>
                                        <p>{quantityChange}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='app-helmerts-product_checkout-right'>
                    <p>₫ {(price * quantityChange).toLocaleString()}</p>
                </div>
            </div>
            {

            }
        </div>
    )
}

export default ProductCheckout