import React from 'react'
import './CTA.css'
import { AiOutlineSend } from 'react-icons/ai';
const CTA = () => {
  return (
    <div className='app-helmerts-cta'>
      <div className='app-helmerts-cta-header'>
        <h1>
          Leave your email address to receive promotional information from us
        </h1>
      </div>
      <div className='app-helmerts-cta-content'>
        <input type="text" placeholder='Email address' />
        <AiOutlineSend />
      </div>
    </div>
  )
}

export default CTA