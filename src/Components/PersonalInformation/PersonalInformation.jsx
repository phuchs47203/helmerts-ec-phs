import React from 'react'
import './PersonalInformation.css'
const PersonalInformation = () => {
    return (
        <div id='personal-information' className='app-helmerts_personal-information'>
            <div className='app-helmerts_personal-information_heading'>
                <h1>
                    Do Not Sell My Personal Information Privacy Right
                </h1>
                <p>
                    Last updated 20 Oct 2023
                </p>
            </div>
            <div className='app-helmerts_personal-information_content'>
                <p className='legal-p-content'>
                    You have the right or choice, at any time, to opt out of the "sale" or "sharing" of your personal information for targeted advertising with third parties. HELMERTS does NOT "sell" your personal information as traditionally defined for monetary consideration. However, under state privacy laws providing or making available your personal information for advertising or any other consideration may be defined as a "sale" or "sharing", which gives consumers the right to opt-out.
                </p>
                <p className='legal-p-content'>
                    To submit a request to opt out of the sale or sharing of your personal information for targeted advertising, click on the "Opt-Out" button below and send your request specifying your first and last name, email address, phone number and home address. Only one person per request. If you are submitting this request on behalf of someone else, please specify it as we will need to verify that you are an authorized agent.
                </p>
            </div>
        </div>
    )
}

export default PersonalInformation