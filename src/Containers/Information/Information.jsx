import React from 'react'
import './Information.css'
import { CTA } from '../../Components';
import { TermCondition, PrivacyPolicy, ReturnExchange, PersonalInformation } from '../../Components';
const Information = () => {
  return (
    <div id='information' className='app-helmerts_information_legal section__padding'>
      <div className='app-helmerts_information_legal-heading'>
        <div className='app-helmerts_information_legal-heading_title'>
          <h1 className='text-title-h1'>This is the Legal of Helmerts online store</h1>
          <p className='text-paragraph-p'>Thank you for using our website service.Helmerts ensures that all information collected will be stored safely</p>
        </div>

        <div className='app-helmerts_information_legal-row'>
          <div className='app-helmerts_information_legal-heading_list'>
            <p>
              <a href="#term-condition" className='app-helmerts_information_legal-heading_list-link'>Term & Condition</a>
            </p>
            <p>
              <a href="#privacy-policy" className='app-helmerts_information_legal-heading_list-link'>Privacy Policy</a>
            </p>
            <p>
              <a href="#return-exchange" className='app-helmerts_information_legal-heading_list-link'>Returns & Exchanges</a>
            </p>
            <p>
              <a href="#personal-information" className='app-helmerts_information_legal-heading_list-link'>Protect Personal Information</a>
            </p>
          </div>
        </div>
      </div>
      <div className='app-helmerts_information_legal-content padding_content'>
        <TermCondition />
        <PrivacyPolicy />
        <ReturnExchange />
        <PersonalInformation />
      </div>
    </div>
  )
}

export default Information