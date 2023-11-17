import React from 'react'
import { IoIosClose } from "react-icons/io";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { images } from '../../Constants';
import './CartItem.css'
const CartItem = ({ product, size, quantity }) => {
    return (
        <div className='app-helmerts-cart-cart_item'>
            <div className='app-helmerts-cart-cart_item-box'>
                <div className='app-helmerts-cart-cart_item-left'>
                    <div className='app-helmerts-cart-cart_item-left-main'>
                        <div className='app-helmerts-cart-cart_item-left-main-img'>
                            <img src={images.modular} alt="" />
                        </div>
                        <div className='app-helmerts-cart-cart_item-left-main-content'>
                            <div className='app-helmerts-cart-cart_item-left-main-content-name'>
                                <h1>
                                    Full Face Helmet white FT985 2023 Paint Strongly
                                </h1>
                            </div>
                            <div className='app-helmerts-cart-cart_item-left-main-content-description'>
                                <div className='app-helmerts-cart-cart_item-left-main-content-description-text'>
                                    <p>Color: beige glaise</p>
                                    <p>Size: {size}</p>
                                </div>
                                <div className='app-helmerts-cart-cart_item-left-main-content-description-quantity'>
                                    <div className='app-helmerts-cart-cart_item-left-main-content-description-quantity-box'>
                                        <AiOutlineMinus />
                                        <p>{quantity}</p>
                                        <AiOutlinePlus />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className='app-helmerts-cart-cart_item-right'>
                    <IoIosClose />
                    <p>đ 12,450,000</p>
                </div>
            </div>
        </div>
    )
}

export default CartItem