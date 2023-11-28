import React, { useEffect, useState } from 'react'
import { IoIosClose } from "react-icons/io";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { images } from '../../Constants';
import './CartItem.css';


const CartItem = ({ product, size, quantity, price, updateCartLocal }) => {

    const [error, seterror] = useState('');
    const [quantityChange, setquantityChange] = useState(quantity);
    const updateQuantity = (value) => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existsProductIndex = cart.findIndex(item => (item.product_details
            && item.product_details.id === product.id
            && item.size === size));
        cart[existsProductIndex].quantity = value;
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    const deleteItemCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existsProductIndex = cart.findIndex(item => (item.product_details
            && item.product_details.id === product.id
            && item.size === size));
        if (existsProductIndex !== -1) {
            cart.splice(existsProductIndex, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
        }
        updateCartLocal(cart);
    }
    const handleIncrease = () => {
        if (quantityChange >= 5) {
            seterror("You reach the maximun number of products, contact us to buy more")
            return;
        }
        setquantityChange(quantityChange + 1);
    };
    const handleDescrease = () => {
        if (quantityChange === 1) {
            return;
        }
        setquantityChange(quantityChange - 1);
    };
    useEffect(() => {
        updateQuantity(quantityChange);
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        updateCartLocal(cart);
    }, [quantityChange]);
    return (
        <div className='app-helmerts-cart-cart_item'>
            <div className='app-helmerts-cart-cart_item-box'>
                <div className='app-helmerts-cart-cart_item-left'>
                    <div className='app-helmerts-cart-cart_item-left-main'>
                        <div className='app-helmerts-cart-cart_item-left-main-img'>
                            <img src={product.imgurl} alt="" />
                        </div>
                        <div className='app-helmerts-cart-cart_item-left-main-content'>
                            <div className='app-helmerts-cart-cart_item-left-main-content-name'>
                                <h1>
                                    {product.name}
                                </h1>
                            </div>
                            <div className='app-helmerts-cart-cart_item-left-main-content-description'>
                                <div className='app-helmerts-cart-cart_item-left-main-content-description-text'>
                                    <p>Color: beige glaise</p>
                                    <p>Size: {size}</p>
                                </div>
                                <div className='app-helmerts-cart-cart_item-left-main-content-description-quantity'>
                                    <div className='app-helmerts-cart-cart_item-left-main-content-description-quantity-box'>
                                        <AiOutlineMinus onClick={() => handleDescrease()} />
                                        <p>{quantityChange}</p>
                                        <AiOutlinePlus onClick={() => handleIncrease()} />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className='app-helmerts-cart-cart_item-right'>
                    <IoIosClose onClick={deleteItemCart} />
                    <p>₫ {(price * quantityChange).toLocaleString()}</p>
                </div>
            </div>
            {

            }
        </div>
    )
}

export default CartItem