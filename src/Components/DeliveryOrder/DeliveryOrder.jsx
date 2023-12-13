import React, { useEffect, useState } from 'react'
import './DeliveryOrder.css'
import Order from '../Order/Order'
import axios from 'axios';
import { AiOutlineDown, AiOutlineUp, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';

const DeliveryOrder = ({ localToken }) => {
    const URL_REQUEST_ORDER_UDER = "http://localhost:8000/api/orders-belong-to-shipper/" + localToken.user.id;
    const [valueOrders, setvalueOrders] = useState([]);
    useEffect(() => {
        console.log("user id", localToken.user.id);
        const fetchData = async () => {
            try {
                const response = await axios.get(URL_REQUEST_ORDER_UDER, {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${localToken.token}`
                    }
                });
                setvalueOrders(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    const [valueOrderFilter, setvalueOrderFilter] = useState([]);
    const setvalueFilterFunction = (value) => {
        valueOrderFilter.splice(0, valueOrderFilter.length);
        if (value === "All") {
            setisFilter(false);
            return;
        }
        const filteredOrders = valueOrders.filter(element => element.status === value);

        setvalueOrderFilter(filteredOrders);
        setisFilter(true);
    }
    const [isFilter, setisFilter] = useState(false);
    return (
        <div className='app-helmerts-delivery_order'>
            <div className='app-helmerts-delivery_order-filter'>
                <div className='app-helmerts-delivery_order-filter-item'>
                    <button
                        onClick={() => setvalueFilterFunction("All")}
                    >All</button>
                </div>
                <div className='app-helmerts-delivery_order-filter-item'>
                    <button
                        onClick={() => setvalueFilterFunction("Shipped")}
                    >Shipping</button>
                </div>
                <div className='app-helmerts-delivery_order-filter-item'>
                    <button
                        onClick={() => setvalueFilterFunction("Completed")}
                    >Completed</button>
                </div>
            </div>
            <div className='app-helmerts-delivery_order-content'>
                {!isFilter &&
                    <div className='app-helmerts-delivery_order-content-item'>
                        {valueOrders.map((item, index) => (
                            <Order OrderInfor={item} localToken={localToken} key={item.id} />
                        ))
                        }
                    </div>
                }
                {isFilter &&
                    <div className='app-helmerts-delivery_order-content-item'>
                        {valueOrderFilter.map((item, index) => (
                            <Order OrderInfor={item} localToken={localToken} key={item.id} />
                        ))
                        }
                    </div>
                }
            </div>

        </div>
    )
}

export default DeliveryOrder