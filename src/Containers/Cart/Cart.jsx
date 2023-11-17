import React, { useEffect, useState } from 'react'
import './Cart.css'
import { images } from '../../Constants';
const Cart = () => {
  const [cartLocal, setcartLocal] = useState([]);
  useEffect(() => {
    const saveCart = JSON.parse(localStorage.getItem('cart')) || [];
    setcartLocal(saveCart);
  }, []);
  useEffect(() => {
    console.log(cartLocal);
  }, [cartLocal]);
  return (
    <div id='cart' className='app-helmerts-cart'>
      <div className='app-helmerts-cart-heading'>
        cart
      </div>
      <div className='app-helmerts-cart-content'>
        <div className='app-helmerts-cart-content-left'>

        </div>
        <div className='app-helmerts-cart-content-right'>
          <div className='app-helmerts-cart-content-right-box'>
            <div className='app-helmerts-cart-content-right-box-title'>
              <h1>
                THE ORANGE BOX
              </h1>
            </div>
            <div className='line' />
            <div className='app-helmerts-cart-content-right-box-content'>
              <div className='app-helmerts-cart-content-right-box-content-img'>
                <img src={images.orange_box} alt="" />
              </div>
              <div className='app-helmerts-cart-content-right-box-content-p'>
                <p>
                  All orders are delivered in an orange box tied with a Bolduc ribbon, with the exception of certain items
                </p>
              </div>
            </div>
          </div>
          <div className='app-helmerts-cart-content-right-service'>
            <div className='app-helmerts-cart-content-right-service-title'>
              <h1>
                CUSTOMER SERVICE
              </h1>
            </div>
            <div className='app-helmerts-cart-content-right-service-contact'>

            </div>
            <div className='app-helmerts-cart-content-right-service-deliver'>

            </div>
            <div className='app-helmerts-cart-content-right-service-payment'>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart