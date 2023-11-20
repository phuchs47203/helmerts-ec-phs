import React from 'react'
import './Account.css'
import { Signin, Signout, Signup } from '../../Containers';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
const Account = () => {
    const navigate = useNavigate();
    return (
        <div id='account'>
            <h1>Account</h1>

            <p>
                <Link to="/signup">Sigup</Link>
            </p>
            <p>
                <Link to="/signin">Log in</Link>
            </p>

            <Routes>
                <Route path='/signin' element={<Signin />} />
                <Route path='/signout' element={<Signout />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </div>
    )
}

export default Account