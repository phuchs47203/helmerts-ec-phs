import axios from 'axios';
import React, { useEffect, useState } from 'react'
import OrderDetail from '../OrderDetail/OrderDetail';
import './Order.css'
const Order = ({ OrderInfor, localToken }) => {
  const URL_REQUEST_ORDER_DETAILS = "http://localhost:8000/api/order-details-of-order/" + OrderInfor.id;
  const [listOrderDetails, setlistOrderDetails] = useState([]);
  const [loadingData, setloadingData] = useState(false);
  useEffect(() => {
    axios.get(URL_REQUEST_ORDER_DETAILS, null, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${localToken.token}`
      }
    })
      .then(response => {
        console.log(response.data);
        setlistOrderDetails(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  // useEffect(() => {
  //   setloadingData(true);
  // }, [listOrderDetails]);
  const cancelOrder = () => {
      
  }
  const WritePreview = () => {
    
  }
  return (
    <div className='app-helmerts-order'>
      <div className='app-helmerts-order-heading'>
        <div className={`app-helmerts-order-heading-status ${OrderInfor.status === 'Pending'
          ? 'pending'
          : (OrderInfor.status === 'Shipped'
            ? 'shipped'
            : (OrderInfor.status === 'Completed'
              ? 'completed'
              : 'canceled'))}`}>
          <h1>{OrderInfor.status}</h1>
        </div>
        <div className={`app-helmerts-order-heading-payment_status ${OrderInfor.payment_status === 'Not Paid'
          ? 'not_paid'
          : (OrderInfor.payment_status === 'In Payment'
            ? 'in_payment'
            : 'paid')}`}>
          <h1>{OrderInfor.payment_status}</h1>
        </div>
      </div>
      <div className='app-helmerts-order-content'>
        {
          listOrderDetails.map((item, index) => (
            <OrderDetail orderDetails={item} key={item.id} />
          ))
        }
      </div>
      <div className='app-helmerts-order-payment_review'>
        <div className='app-helmerts-order-payment_review-total_payment'>
          <h1>Total Payment: ₫ {OrderInfor.total_payment.toLocaleString()}</h1>
        </div>
        <div className='app-helmerts-order-payment_review-review'>
          { OrderInfor.status === 'Completed' &&
            <button className='btn-transition button_default'>Write A Review</button>
          }
          { OrderInfor.status === 'Pending' &&
            <button className='btn-transition button_default'>Cancel Order</button>
          }
        </div>
      </div>
    </div>
  )
}

export default Order