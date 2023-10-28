import React, { useState } from 'react'
import './CTA.css'
import { AiOutlineSend } from 'react-icons/ai';
const CTA = () => {
  const [erroEmail, seterroEmail] = useState("");
  const [successEmail, setsuccessEmail] = useState("");
  const [textEmail, settextEmail] = useState("");
  const handleChangeEmail = (e) => {
    const value = e.target.value;
    settextEmail(value);
    setsuccessEmail('');
  }
  const handleSendEmail = (e) => {
    e.preventDefault();
    setsuccessEmail('');
    if (!textEmail) {
      seterroEmail('Email address cannot be empty');
      return;
    }
    seterroEmail('');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailPattern.test(textEmail)) {
      seterroEmail('Email is not valid. Ex-name@gmail.com');
      return;
    }
    settextEmail("");
    seterroEmail("");
    setsuccessEmail('Successfull');
    return;
  };
  return (
    <div className='app-helmerts-cta'>
      <div className='app-helmerts-cta-header'>
        <h1>
          Leave your email address to receive promotional information from us
        </h1>
      </div>
      <div className='app-helmerts-cta-content'>
        <input
          type="text"
          value={textEmail}
          onChange={(e) => handleChangeEmail(e)}
          placeholder='Email address' />
        <AiOutlineSend onClick={(e) => handleSendEmail(e)} />
      </div>
      <div className='app-helmerts-cta-error'>
        {erroEmail
          &&
          <p
            className="error-message">{erroEmail}
          </p>}
      </div>
      <div className='app-helmerts-cta-error'>
        {successEmail
          &&
          <p
            className="success-message">{successEmail}
          </p>}
      </div>
    </div>
  )
}

export default CTA