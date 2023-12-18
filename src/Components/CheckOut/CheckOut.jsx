import './CheckOut.css'
import React, { useEffect, useState } from 'react'
import { Link, json, useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';
import ProductCheckout from '../ProductCheckout/ProductCheckout';
import { Signin } from '../../Containers';
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const CheckOut = () => {
    const navigate = useNavigate()
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


    const defaultPropsCountry = {
        options: top76City,
        getOptionLabel: (option) => option.cityName,
    };

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

    }, [cartLocal]);
    useEffect(() => {
        settotal_price(sub_total_price + shipping_fee);
    }, [shipping_fee]);
    const [permitUser, setPermitUser] = useState(false);
    const [accessToken, setaccessToken] = useState(null);
    const [expire_at, setexpire_at] = useState(null);
    const [userInfor, setuserInfor] = useState([]);
    const isTokenValid = () => {
        const storedAccessToken = localStorage.getItem('accessToken');
        if (storedAccessToken) {
            const parsedAccessToken = JSON.parse(storedAccessToken);
            const expirationTime = new Date(parsedAccessToken.expiration_time);
            setaccessToken(parsedAccessToken.token);
            setuserInfor(parsedAccessToken.user);
            return Date.now() < expirationTime;
        }
        return false;

    }
    useEffect(() => {
        const isLoggedIn = isTokenValid();
        if (isLoggedIn) {
            setPermitUser(true);
        }
        else {
            setPermitUser(false);
        }


    }, []);
    useEffect(() => {
        setvalueDistrict(userInfor.district);
        setaddress_details(userInfor.address_details);
    }, [userInfor]);

    const [country, setcountry] = useState('Viet Nam');
    const [valueDistrict, setvalueDistrict] = useState('');
    const [city, setcity] = useState(null);
    const [address_details, setaddress_details] = useState('');
    const [orderNote, setorderNote] = useState('None');
    const [phoneNumber, setphoneNumber] = useState(null);
    const handleChangeDistrict = (event) => {
        setvalueDistrict(event.target.value);
    }
    const handleChangeAddress = (event) => {
        setaddress_details(event.target.value);
    }
    const handleChangeNote = (event) => {
        setorderNote(event.target.value);
    }
    const [cartEmpty, setcartEmpty] = useState('');
    const [newOrder, setnewOrder] = useState([]);
    const saveOrder = () => {
        if (cartLocal.length === 0) {
            setcartEmpty('Cart is empty! Please add product to cart at');
            return;
        }

        const URL_REQUEST_ORDER = "http://localhost:8000/api/orders/";
        const URL_REQUEST_ORDER_DETAILS = "http://localhost:8000/api/order-details";

        const formData = new FormData();
        formData.append('total_payment', total_price);
        formData.append('total_product_cost', sub_total_price);
        formData.append('cus_id', userInfor.id);
        formData.append('shipping_fee', shipping_fee);
        formData.append('note', orderNote);
        formData.append('phone_number', phoneNumber);
        if (phoneNumber !== null) {
            formData.append('phone_number', phoneNumber);
        }
        else {
            formData.append('phone_number', userInfor.phone_number);
            setphoneNumber(userInfor.phone_number);
        }
        formData.append('country', country);
        formData.append('city', city.cityName);
        formData.append('district', valueDistrict);
        formData.append('address_details', address_details);
        // formData.forEach((value, key) => {
        //     console.log(key, value);
        // });
        axios.post(URL_REQUEST_ORDER, formData, {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${accessToken}`
            }
        })
            .then(response => {
                const { order } = response.data;
                cartLocal.forEach(element => {
                    const formDataOrderDetails = new FormData();
                    formDataOrderDetails.append('order_id', order.id);
                    formDataOrderDetails.append('product_id', element.product_details.id);
                    formDataOrderDetails.append('note', 'none');
                    formDataOrderDetails.append('amount', element.quantity);
                    formDataOrderDetails.append('sale_price', element.product_details.sale_price);
                    formDataOrderDetails.append('size_name', element.size);
                    formDataOrderDetails.append('size_id', element.size_id);
                    axios.post(URL_REQUEST_ORDER_DETAILS, formDataOrderDetails, {
                        headers: {
                            Accept: "application/json",
                            Authorization: `Bearer ${accessToken}`
                        }
                    })
                        .then(respone2 => {
                            console.log("OK");
                            localStorage.removeItem('cart');
                            setTimeout(() => {
                                navigate('/account');
                            }, 500);
                        })
                        .catch(err => {
                            console.log(err);
                        })

                });
            })
            .catch(error => {
                console.log("order: ", error);
            });

    }
    return (
        <div className='app-hlemerts-check-out-box-parent'>
            {!permitUser &&
                <div className='app-helmerts-account-denied'>
                    <h1 className='app-helmerts-account-denied-title'>You do not have permission to access this page</h1>
                    <div className='app-helmerts-account-denied-signin'>
                        <Signin />
                    </div>
                </div>

            }
            {permitUser &&
                <div className='app-hlemerts-check-out' id='check-out'>
                    {loadingCart &&
                        <div className='app-hlemerts-check-out-box'>
                            {
                                cartLocal.map((item, index) => (
                                    <ProductCheckout product={item.product_details}
                                        size={item.size}
                                        quantity={item.quantity}
                                        price={item.product_details.sale_price}
                                        key={item.product_details.id + item.size} />
                                ))
                            }
                        </div>
                    }
                    {cartEmpty &&
                        <div className='app-hlemerts-check-out-box-error_cart'>
                            <p>{cartEmpty}&nbsp;<a href="/product">Products List</a></p>
                            
                        </div>

                    }
                    <div className='app-hlemerts-check-out-form'>
                        <TextField
                            required
                            id="country"
                            label="Country"
                            variant="outlined"
                            value={country}
                            type='text'
                            // autoComplete="current-name"
                            autoComplete="on"
                            style={commonTextFieldStyle}
                            InputLabelProps={{
                                classes: commonInputLabelStyle,
                            }}
                            InputProps={{
                                style: commonInputPropsStyle,
                                classes: commonInputClasses,
                            }}
                            disabled
                        />
                        <Autocomplete
                            {...defaultPropsCountry}
                            id="disable-clearable"
                            disableClearable
                            value={city}
                            onChange={(event, newValue) => {
                                setcity(newValue);
                            }}
                            style={commonTextFieldStyle}
                            InputLabelProps={{
                                classes: commonInputLabelStyle,
                            }}
                            InputProps={{
                                style: commonInputPropsStyle,
                                classes: commonInputClasses,
                            }}
                            renderInput={(params) => (
                                <TextField {...params} required label="City" variant="standard" />
                            )}
                        />
                        <TextField
                            required
                            id="district"
                            label="District"
                            variant="outlined"
                            value={valueDistrict}
                            onChange={handleChangeDistrict}
                            type='text'
                            // autoComplete="current-name"
                            autoComplete="on"
                            style={commonTextFieldStyle}
                            InputLabelProps={{
                                classes: commonInputLabelStyle,
                            }}
                            InputProps={{
                                style: commonInputPropsStyle,
                                classes: commonInputClasses,
                            }}
                        />
                        <TextField
                            required
                            id="addredd"
                            label="Address"
                            variant="outlined"
                            value={address_details}
                            onChange={handleChangeAddress}
                            type='text'
                            // autoComplete="current-name"
                            autoComplete="on"
                            style={commonTextFieldStyle}
                            InputLabelProps={{
                                classes: commonInputLabelStyle,
                            }}
                            InputProps={{
                                style: commonInputPropsStyle,
                                classes: commonInputClasses,
                            }}
                        />
                        <TextField
                            required
                            id="note"
                            label="Note"
                            variant="outlined"
                            value={orderNote}
                            onChange={handleChangeNote}
                            type='text'
                            // autoComplete="current-name"
                            autoComplete="on"
                            style={commonTextFieldStyle}
                            InputLabelProps={{
                                classes: commonInputLabelStyle,
                            }}
                            InputProps={{
                                style: commonInputPropsStyle,
                                classes: commonInputClasses,
                            }}
                        />
                        <PhoneInput
                            className="phone_style"
                            value={userInfor.phone_number}
                            onChange={(newValue) => setphoneNumber(newValue)}
                            inputStyle={{
                                width: '100%', // Thiết lập chiều dài của phần nhập số điện thoại là 100%
                                backgroundColor: 'var(--color-bg)', // Thiết lập màu nền là yellow
                                color: 'var(--color-p)'
                            }}
                            inputProps={{
                                name: 'phone',
                                required: true,
                                autoFocus: true,
                            }}
                            style={commonTextFieldStyle}
                            InputLabelProps={{
                                classes: commonInputLabelStyle,
                            }}
                            InputProps={{
                                style: commonInputPropsStyle,
                                classes: commonInputClasses,
                            }}
                        />
                    </div>
                    <div className='app-hlemerts-check-out-total_price'>
                        <div className='app-hlemerts-check-out-total_price-subtotal'>
                            <h1>Total product cost</h1>
                            <p> ₫ {sub_total_price.toLocaleString()}</p>
                        </div>
                        <div className='app-hlemerts-check-out-total_price-subtotal'>
                            <h1>Shipping Fee</h1>
                            <p> ₫ {shipping_fee.toLocaleString()}</p>
                        </div>
                        <div className='app-hlemerts-check-out-total_price-total'>
                            <h1>Total payment</h1>
                            <p style={{ color: 'var(--color-h)' }}> ₫ {total_price.toLocaleString()}</p>
                        </div>
                    </div>
                    <div className='app-hlemerts-check-out-check_out'>
                        <button
                            onClick={saveOrder}
                            className='btn-transition'>Confirm</button>
                    </div>
                </div>
            }

        </div>

    )
};
const top76City = [
    { cityName: "Thành Phố Hồ Chí Minh" }, { cityName: "Hà Nội" }, { cityName: "Hải Phòng" }, { cityName: "Đà Nẵng" }, { cityName: "Cần Thơ" },
    { cityName: "Bà Rịa" }, { cityName: "Bạc Liêu" }, { cityName: "Bảo Lộc" }, { cityName: "Bắc Giang" }, { cityName: "Bắc Kạn" },
    { cityName: "Bắc Ninh" }, { cityName: "Bến Tre" }, { cityName: "Biên Hòa" }, { cityName: "Buôn Ma Thuột" }, { cityName: "Cà Mau" },
    { cityName: "Cam Ranh" }, { cityName: "Cao Bằng" }, { cityName: "Cao Lãnh" }, { cityName: "Cẩm Phả" }, { cityName: "Châu Đốc" },
    { cityName: "Đà Lạt" }, { cityName: "Điện Biên Phủ" }, { cityName: "Đông Hà" }, { cityName: "Đồng Hới" }, { cityName: "Đồng Xoài" },
    { cityName: "Hà Giang" }, { cityName: "Hạ Long" }, { cityName: "Hà Tiên" }, { cityName: "Hà Tĩnh" }, { cityName: "Hải Dương" },
    { cityName: "Hòa Bình" }, { cityName: "Hội An" }, { cityName: "Huế" }, { cityName: "Hưng Yên" }, { cityName: "Kon Tum" },
    { cityName: "Lai Châu" }, { cityName: "Lạng Sơn" }, { cityName: "Lào Cai" }, { cityName: "Long Xuyên" }, { cityName: "Móng Cái" },
    { cityName: "Mỹ Tho" }, { cityName: "Nam Định" }, { cityName: "Nha Trang" }, { cityName: "Ninh Bình" }, { cityName: "Phan Rang - Tháp Chàm" },
    { cityName: "Phan Thiết" }, { cityName: "Phủ Lý" }, { cityName: "Phúc Yên" }, { cityName: "Pleiku" }, { cityName: "Quảng Ngãi" },
    { cityName: "Quy Nhơn" }, { cityName: "Rạch Giá" }, { cityName: "Sa Đéc" }, { cityName: "Sầm Sơn" }, { cityName: "Sóc Trăng" },
    { cityName: "Sơn La" }, { cityName: "Sông Công" }, { cityName: "Tam Điệp" }, { cityName: "Tam Kỳ" }, { cityName: "Tân An" },
    { cityName: "Tây Ninh" }, { cityName: "Thái Bình" }, { cityName: "Thái Nguyên" }, { cityName: "Thanh Hóa" }, { cityName: "Thủ Dầu Một" },
    { cityName: "Trà Vinh" }, { cityName: "Tuy Hòa" }, { cityName: "Tuyên Quang" }, { cityName: "Uông Bí" }, { cityName: "Vị Thanh" },
    { cityName: "Việt Trì" }, { cityName: "Vinh" }, { cityName: "Vĩnh Long" }, { cityName: "Vĩnh Yên" }, { cityName: "Vũng Tàu" },
    { cityName: "Yên Bái" }, { cityName: "Thuận An" }, { cityName: "Dĩ An" }, { cityName: "Phú Quốc" }, { cityName: "Ngã Bảy" },
    { cityName: "Long Khánh" }, { cityName: "Hồng Ngự" }, { cityName: "Gia Nghĩa" },


];
const commonTextFieldStyle = {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 'none',
    border: '0px solid var(--color-p)',
    outline: 'none',
    background: 'transparent',
};

const commonInputLabelStyle = {
    root: 'custom-input-label',
};

const commonInputPropsStyle = {
    color: 'var(--color-p)',
    backgroundColor: 'transparent',
    borderRadius: '0rem',
    border: '0rem solid white',
    outline: 'none',
    fontSize: '13px',
    background: 'transparent',
    width: '100%',
};

const commonInputClasses = {
    root: 'custom-input-root',
    notchedOutline: 'custom-notched-outline',
    focused: 'custom-focused',
};

export default CheckOut