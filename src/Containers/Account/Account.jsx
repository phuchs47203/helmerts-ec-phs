import React from 'react'
import './Account.css'
import { Signin, Signout, Signup } from '../../Containers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const Account = () => {
    return (
        <div id='account'>
            Account
            <Routes>
                <Route path='/signin' element={<Signin />} />
                <Route path='/signout' element={<Signout />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </div>
    )
}

export default Account