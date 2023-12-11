import React, { useEffect, useState } from 'react'
import './Account.css'
import { Signin, Signout, Signup } from '../../Containers';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BsFillPersonFill } from 'react-icons/bs';
import { IoReceiptSharp } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { ListOrder, UpdatePersonalInformation } from '../../Components';
import { FaShippingFast } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";


const Account = () => {
    const navigate = useNavigate();
    const [permitUser, setPermitUser] = useState(false);
    const [accessToken, setaccessToken] = useState(null);
    const [expire_at, setexpire_at] = useState(null);
    const [userInfor, setuserInfor] = useState([]);
    const [localToken, setlocalToken] = useState(null);
    const isTokenValid = () => {
        const storedAccessToken = localStorage.getItem('accessToken');
        if (storedAccessToken) {
            const parsedAccessToken = JSON.parse(storedAccessToken);
            const expirationTime = new Date(parsedAccessToken.expiration_time);
            setlocalToken(parsedAccessToken);
            setaccessToken(parsedAccessToken.token);
            setuserInfor(parsedAccessToken.user);
            console.log("Minutes: ", (expirationTime.getTime() - Date.now()) / 60000);
            return Date.now() < expirationTime.getTime();
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
    const URL_LOGOUT = "http://localhost:8000/api/logout";
    const [accessTokenLogout, setaccessTokenLogout] = useState(null);
    const Loggout = () => {
        try {
            const storedAccessToken = localStorage.getItem('accessToken');
            const parsedAccessToken = JSON.parse(storedAccessToken);
            setaccessTokenLogout(parsedAccessToken.token);
            console.log("token:", parsedAccessToken.token);
            axios.post(URL_LOGOUT, null, {
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${parsedAccessToken.token}`
                }
            })
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                });

            localStorage.removeItem('accessToken');
            setTimeout(() => {
                navigate(`/home`);
            }, 1500);
        } catch (error) {
            return error;
        }

    }
    const [updateInfor, setupdateInfor] = useState(false);
    return (
        <div id='account' className='app-helmerts-account'>
            <div className='app-helmerts-account-box'>
                {!permitUser &&
                    <div className='app-helmerts-account-denied'>
                        <h1 className='app-helmerts-account-denied-title'>You do not have permission to access this page</h1>
                        <div className='app-helmerts-account-denied-signin'>
                            <Signin />
                        </div>
                    </div>

                }
                {permitUser &&
                    <div className='app-helmerts-account-content'>
                        <div className='app-helmerts-account-content-left'>
                            <div className='app-helmerts-account-content-left-profile'>
                                <div className='app-helmerts-account-content-left-profile-img'>
                                    <img
                                        onClick={() => setupdateInfor(true)}
                                        src={userInfor.imgurl} alt="" />
                                </div>
                                <div className='app-helmerts-account-content-left-description'>
                                    <div className='app-helmerts-account-content-left-description-name'>
                                        <p>
                                            {userInfor.last_name}
                                            &nbsp;{userInfor.first_name}
                                            &nbsp;Phúc
                                        </p>
                                    </div>
                                    <div
                                        onClick={() => setupdateInfor(true)}
                                        className='app-helmerts-account-content-left-description-button'>
                                        <CiEdit />
                                        <p>Edit</p>
                                    </div>
                                </div>
                            </div>
                            <div className='app-helmerts-account-content-left-link'>
                                <div className='app-helmerts-account-content-left-link-item' onClick={() => setupdateInfor(true)}>
                                    <BsFillPersonFill />
                                    <p>My Profile</p>
                                </div>
                                <div
                                    onClick={() => setupdateInfor(false)}
                                    className='app-helmerts-account-content-left-link-item'>
                                    <IoReceiptSharp />
                                    <p>My Order</p>
                                </div>
                                {userInfor.role === 'shipper' &&
                                    <div className='app-helmerts-account-content-left-link-item'>
                                        <FaShippingFast />
                                        <p>Delivery Order</p>
                                    </div>
                                }

                                <div
                                    onClick={Loggout}
                                    className='app-helmerts-account-content-left-link-item'>
                                    <TbLogout2 />
                                    <p>Log out</p>
                                </div>
                            </div>
                        </div>
                        <div className='app-helmerts-account-content-right'>
                            <div className='app-helmerts-account-content-right-list_order'>
                                {!updateInfor &&
                                    <ListOrder localToken={localToken} />
                                }
                            </div>
                            {updateInfor &&
                                <div className='app-helmerts-account-content-right-update_infor'>
                                    <UpdatePersonalInformation User_Details={userInfor} />
                                </div>
                            }

                        </div>


                    </div>

                }
            </div>
        </div>
    )
}

export default Account