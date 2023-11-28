import React, { useEffect, useState } from 'react'
import './Cart.css'
import { images } from '../../Constants';
import { CartItem } from '../../Components';
import { MdOutlineLocalPhone } from "react-icons/md";
import { LiaTruckMovingSolid } from "react-icons/lia";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { BsFillBagCheckFill } from "react-icons/bs";

const Cart = () => {
  const [cartLocal, setcartLocal] = useState([]);
  const [loadingCart, setloadingCart] = useState(false);
  useEffect(() => {
    const saveCart = JSON.parse(localStorage.getItem('cart')) || [];
    setcartLocal(saveCart);
  }, []);


  useEffect(() => {
    if (cartLocal != null) {
      setloadingCart(true);
    }
    // console.log(loadingCart);
    console.log();

  }, [loadingCart]);
  // const productss = {
  //   name: 'FULL FACE HELMET WHITE FT985 2023 PAINT STRONGLY',
  //   id: 1,
  //   imgurl: images.modular
  // };

  // const product1 = {
  //   name: 'FULL FACE HELMET WHITE FT985 2023 PAINT STRONGLY',
  //   id: 1,
  //   imgurl: images.half
  // };
  // const product2 = {
  //   name: 'FULL FACE HELMET WHITE FT985 2023 PAINT STRONGLY',
  //   id: 1,
  //   imgurl: images.children
  // };
  // const product3 = {
  //   name: 'FULL FACE HELMET WHITE FT985 2023 PAINT STRONGLY',
  //   id: 1,
  //   imgurl: images.fullface
  // };
  // const product4 = {
  //   name: 'FULL FACE HELMET WHITE FT985 2023 PAINT STRONGLY',
  //   id: 1,
  //   imgurl: images.openface
  // };
  const [total_price, settotal_price] = useState(0);
  const [sub_total_price, setsub_total_price] = useState(0);
  const [shipping_fee, setshipping_fee] = useState(0);
  let SubtotlaPrice = 0;
  let TotalPrice = 0;
  let ShipphingFee = 0
  const updateCartLocal = (cart) => {
    setcartLocal(cart);
  };
  useEffect(() => {
    let quantity_ship = 0;
    if (cartLocal === null) {
      SubtotlaPrice = 0;
      TotalPrice = 0;
      console.log("cart is null");
    }
    else {
      cartLocal.forEach(element => {
        SubtotlaPrice += element.product_details.sale_price * element.quantity;
        TotalPrice += element.product_details.sale_price * element.quantity;
        ShipphingFee += element.quantity * 30000;
        quantity_ship += element.quantity;
      });
    }
    setsub_total_price(SubtotlaPrice);
    setshipping_fee(ShipphingFee);
    if (quantity_ship > 10 || SubtotlaPrice > 10000000) {
      setshipping_fee(0);
    }
    console.log("quantity: ", quantity_ship);

    // console.log('ShppingFEEE', ShipphingFee);
    // console.log("shipping fee", shipping_fee);
  }, [cartLocal]);
  useEffect(() => {
    settotal_price(sub_total_price + shipping_fee);
  }, [shipping_fee]);

  const dataProducts = [
    {
      name: 'FULL FACE HELMET WHITE FT985 2023 PAINT STRONGLY',
      id: 1,
      imgurl: images.modular,
      size: 'XL',
      quantity: 2


    },
    {
      name: 'FULL FACE HELMET WHITE FT985 2023 PAINT STRONGLY',
      id: 2,
      imgurl: images.children,
      size: 'XXL',
      quantity: 1


    },
    {
      name: 'FULL FACE HELMET WHITE FT985 2023 PAINT STRONGLY',
      id: 1,
      imgurl: images.half,
      size: 'XL',
      quantity: 2

    },
    {
      name: 'FULL FACE HELMET WHITE FT985 2023 PAINT STRONGLY',
      id: 1,
      imgurl: images.fullface,
      size: 'S',
      quantity: 4

    },
    {
      name: 'FULL FACE HELMET WHITE FT985 2023 PAINT STRONGLY',
      id: 1,
      imgurl: images.openface,
      size: 'L',
      quantity: 5

    }
  ];
  return (
    <div id='cart' className='app-helmerts-cart'>
      <div className='app-helmerts-cart-box'>
        <div className='app-helmerts-cart-heading'>
          cart
        </div>
        <div className='app-helmerts-cart-content'>
          <div className='app-helmerts-cart-content-left'>

            {loadingCart &&
              <div className='app-helmerts-cart-content-left-box'>
                {
                  cartLocal.map((item, index) => (
                    <CartItem product={item.product_details}
                      size={item.size}
                      quantity={item.quantity}
                      price={item.product_details.sale_price}
                      updateCartLocal={updateCartLocal}
                      key={item.product_details.id + item.size} />
                  ))
                }
              </div>
            }

            {/* {
              <div className='app-helmerts-cart-content-left-box'>
                {
                  dataProducts.map((item, index) => (
                    <CartItem product={item} size={item.size} quantity={item.quantity} key={2} />
                  ))
                }
              </div>
            } */}
            {/* <CartItem product={productss} size='XL' quantity={1} key={3} />
            <CartItem product={product1} size='XXXL' quantity={3} key={4} />
            <CartItem product={product2} size='S' quantity={1} key={1} />
            <CartItem product={product3} size='L' quantity={1} key={2} />
            <CartItem product={product4} size='SX' quantity={2} key={5} /> */}

            {/* {loadingCart &&
              <div className='app-helmerts-cart-content-left-box'>
                {
                  cartLocal.map((item, index) => (
                    <CartItem product={item.product_details} size={item.size} quantity={item.quantity} key={item.product_details.id} />
                  ))
                }
              </div>
            } */}
            <div className='app-helmerts-cart-content-left-total_price'>
              <div className='app-helmerts-cart-content-left-total_price-subtotal'>
                <h1>SUBTOTAL</h1>
                <p> ₫ {sub_total_price.toLocaleString()}</p>
              </div>
              <div className='app-helmerts-cart-content-left-total_price-subtotal'>
                <h1>Shipping Fee</h1>
                <p> ₫ {shipping_fee.toLocaleString()}</p>
              </div>
              <div className='app-helmerts-cart-content-left-total_price-total'>
                <h1>TOTAL</h1>
                <p> ₫ {total_price.toLocaleString()}</p>
              </div>
            </div>
            <div className='app-helmerts-cart-content-left-check_out'>
              <button className='btn-transition'>Check Out</button>
            </div>
          </div>
          <div className='app-helmerts-cart-content-right'>
            <div className='app-helmerts-cart-content-right-box-title'>
              <h1>
                THE ORANGE BOX
              </h1>
            </div>
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
            <div className='app-helmerts-cart-content-right-service'>
              <div className='app-helmerts-cart-content-right-service-title'>
                <h1>
                  CUSTOMER SERVICE
                </h1>
              </div>
              <div className='app-helmerts-cart-content-right-service-contact'>
                <div className='app-helmerts-cart-content-right-service-contact-svg'>
                  <MdOutlineLocalPhone />
                </div>
                <div className='app-helmerts-cart-content-right-service-contact-phone'>
                  <a href="tel:800-441-4488">800-441-4488</a>
                  <p>Monday to Friday: 9am - 9pm EST</p>
                  <p>Saturday: 10am - 9pm EST</p>
                </div>
              </div>
              <div className='app-helmerts-cart-content-right-service-deliver'>
                <div className='app-helmerts-cart-content-right-service-deliver-item'>
                  <div className='app-helmerts-cart-content-right-service-deliver-item-svg'>
                    <LiaTruckMovingSolid />
                  </div>
                  <div className='app-helmerts-cart-content-right-service-deliver-item-p'>
                    <p>Free standard delivery</p>
                  </div>
                </div>
                <div className='app-helmerts-cart-content-right-service-deliver-item'>
                  <div className='app-helmerts-cart-content-right-service-deliver-item-svg'>
                    <LiaExchangeAltSolid />
                  </div>
                  <div className='app-helmerts-cart-content-right-service-deliver-item-p'>
                    <p>Returns & exchanges</p>
                  </div>
                </div>
                <div className='app-helmerts-cart-content-right-service-deliver-item'>
                  <div className='app-helmerts-cart-content-right-service-deliver-item-svg'>
                    <BsFillBagCheckFill />
                  </div>
                  <div className='app-helmerts-cart-content-right-service-deliver-item-p'>
                    <p>Shop securely</p>
                  </div>
                </div>
              </div>
              <div className='app-helmerts-cart-content-right-service-payment'>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart