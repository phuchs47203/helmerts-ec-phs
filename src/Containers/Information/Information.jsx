import React from 'react'
import './Information.css'
import { CTA } from '../../Components';
import { TermCondition, PrivacyPolicy, ReturnExchange, PersonalInformation } from '../../Components';
const Information = () => {
  return (
    <div id='information' className='app-helmerts_information_legal section__padding'>
      <div className='app-helmerts_information_legal-heading'>
        <div className='app-helmerts_information_legal-heading_title'>
          <h1>This is Legal of HELMERTS online store</h1>
          <p>p tage detail</p>
        </div>

        <div className='app-helmerts_information_legal-heading_list'>
          <p>
            <a href="#term-condition"> Term & Condition</a>
          </p>
          <p>
            <a href="#privacy-policy">Privacy Policy</a>
          </p>
          <p>
            <a href="#return-exchange">Returns & Exchanges</a>
          </p>
        </div>
      </div>
      <div className='app-helmerts_information_legal-content'>
        <TermCondition />
        <PrivacyPolicy />
        <ReturnExchange />
        <PersonalInformation />
      </div>
    </div>
  )
}

export default Information