import React, { useEffect, useState } from 'react'
import './Account.css'
import { Signin, Signout, Signup } from '../../Containers';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Account = () => {
    const navigate = useNavigate();
    const [permitUser, setPermitUser] = useState(false);
    const [accessToken, setaccessToken] = useState(null);
    const [expire_at, setexpire_at] = useState(null);
    const isTokenValid = () => {
        const storedAccessToken = localStorage.getItem('accessToken');
        if (storedAccessToken) {
            const parsedAccessToken = JSON.parse(storedAccessToken);
            const expirationTime = new Date(parsedAccessToken.expiration_time);
            setaccessToken(parsedAccessToken.token);

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
    return (
        <div id='account' className='app-helmerts-account'>
            <div className='app-helmerts-account-box'>
                <div className='app-helmerts-account-heading'>
                    <h1>Account</h1>
                </div>
                <div className='app-helmerts-account-content'>

                    {!permitUser &&
                        <div>
                            <h1>You do not have permission to access this page</h1>
                            <div>
                                <Signin />
                            </div>
                        </div>

                    }
                    {permitUser &&
                        <div>
                            <h1>
                                Has Permitted
                            </h1>
                            <p>
                                Token is still valid.
                            </p>
                            <button onClick={Loggout}>
                                Logout
                            </button>
                        </div>

                    }
                </div>


            </div>
        </div>
    )
}

export default Account