import React from 'react'
import './ClientService.css'
import { Gifting, ShopSystem, ShoppingGuide, SizeGuide } from '../../Components'
const ClientService = () => {
    return (
        <div id='client-service' className='app-helmerts-cliend_service-box'>

            <div className='app-helmerts-cliend_service'>
                <div className='app-helmerts-cliend_service-link'>
                    <div className='app-helmerts-cliend_service-link-heading'>
                        <h1 className='text-title-h1'>This is the Client Services of Helmerts online store</h1>
                        <p className='text-paragraph-p'>Thank you for using our website service.Helmerts ensures that all information collected will be stored safely</p>
                    </div>
                    <div className='app-helmerts-cliend_service-link-box'>
                        <a href="#shopping-guide">Shopping Guide</a>
                        <a href="#size-guide">Shoosing Size Guide</a>
                        <a href="#shop-system">Shop System</a>
                        <a href="#gifting">Gifting</a>
                    </div>
                </div>
                <ShoppingGuide />
                <SizeGuide />
                <ShopSystem />
                <Gifting />

            </div>
        </div>
    )
}

export default ClientService