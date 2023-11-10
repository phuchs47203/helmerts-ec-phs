import React from 'react'
import './Footer.css'
import { images } from '../../Constants';
import { FaSquareFacebook } from 'react-icons/fa6';
import { LuMail } from 'react-icons/lu';
import { AiOutlineYoutube, AiOutlineInstagram, AiOutlineFacebook, AiOutlinePhone } from 'react-icons/ai';
import { GiPositionMarker } from 'react-icons/gi';

import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div id='footer' className='app-helmerts-footer'>
      <div className='app-helmerts-footer-heading'>

        <div className='app-helmerts-footer-heading-content'>
          <div className='app-helmerts-footer-heading-content-brand'>
            <div className='app-helmerts-footer-heading-content-brand-img'>
              <a href="https://row.burberry.com/">
                <img src={images.burberry} alt="your brouser is not assit image" />
              </a>
            </div>
            <div className='app-helmerts-footer-heading-content-brand-img'>
              <a href="https://www.dolcegabbana.com/en-it/">
                <img src={images.dolce} alt="your brouser is not assit image" />
              </a>
            </div>
            <div className='app-helmerts-footer-heading-content-brand-img'>
              <a href="https://eu.louisvuitton.com/eng-e1/homepage">
                <img src={images.louislutton} alt="your brouser is not assit image" />
              </a>
            </div>
            <div className='app-helmerts-footer-heading-content-brand-img'>
              <a href="https://www.hermes.com/us/en/">
                <img src={images.hermes} alt="your brouser is not assit image" />
              </a>
            </div>
            <div className='app-helmerts-footer-heading-content-brand-img'>
              <a href="https://www.gucci.com/us/en/">
                <img src={images.gucci} alt="your brouser is not assit image" />
              </a>
            </div>

            <div className='app-helmerts-footer-heading-content-brand-img'>
              <a href="https://www.versace.com/vn/en/">
                <img src={images.versace} alt="your brouser is not assit image" />
              </a>
            </div>
          </div>
          <div className='app-helmerts-footer-heading-content-main'>
            <div className='app-helmerts-footer-heading-content-main-service'>
              <div className='app-helmerts-footer-heading-content-main-service_title'>
                <h1 className='title-main'>Clien Service</h1>
              </div>
              <div className='app-helmerts-footer-heading-content-main-service_link'>
                <div className='app-helmerts-footer-heading-content-main-service_link-content'>
                  <p>
                    <Link to="" className='link-decoration'>Choosing Size Guide</Link>
                  </p>
                </div>
                <div className='app-helmerts-footer-heading-content-main-service_link-content'>
                  <p>
                    <Link to="" className='link-decoration'>Shopping Guide</Link>
                  </p>
                </div>
                <div className='app-helmerts-footer-heading-content-main-service_link-content'>
                  <p>
                    <Link to="" className='link-decoration'>Shop System</Link>
                  </p>
                </div>
                <div className='app-helmerts-footer-heading-content-main-service_link-content'>
                  <p>
                    <Link to="" className='link-decoration'>Gifting</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className='app-helmerts-footer-heading-content-main-contact'>
              <div className='app-helmerts-footer-heading-content-main-contact_title'>
                <h1 className='title-main'>Contact</h1>
              </div>
              <div className='app-helmerts-footer-heading-content-main-contact_link'>
                <div className='app-helmerts-footer-heading-content-main-contact_link-content'>
                  <a href="mailto:infor@helmerts.com" className='app-helmerts-footer-heading-content-main-contact_link-content link-decoration'>
                    <LuMail className='color-svg' />
                    <p className='link-decoration'>infor@helmerts.com</p>
                  </a>
                </div>
                <div className='app-helmerts-footer-heading-content-main-contact_link-content'>
                  <a href="#footer" className='app-helmerts-footer-heading-content-main-contact_link-content link-decoration'>
                    <AiOutlinePhone className='color-svg' />
                    <p className='link-decoration'>0909 699 996</p>
                  </a>
                </div>
                <div className='app-helmerts-footer-heading-content-main-contact_link-content'>
                  <a href="https://maps.app.goo.gl/ZzTmZLgkmd7C54L1A" className='app-helmerts-footer-heading-content-main-contact_link-content link-decoration'>
                    <GiPositionMarker className='color-svg' />
                    <p className='link-decoration'>
                      District 1, Ho Chi Minh City
                    </p>
                  </a>
                </div>
              </div>
            </div>

            <div className='app-helmerts-footer-heading-content-main-legal'>
              <div className='app-helmerts-footer-heading-content-main-legal_title'>
                <h1 className='title-main'>Legal</h1>
              </div>
              <div className='app-helmerts-footer-heading-content-main-legal_link'>
                <div className='app-helmerts-footer-heading-content-main-legal_link-content'>
                  <p>
                    <a href="/information" className='link-decoration'>Term & Condition</a>
                  </p>
                </div>
                <div className='app-helmerts-footer-heading-content-main-legal_link-content'>
                  <p>
                    <a href="/information" className='link-decoration'>Privacy Policy</a>
                  </p>
                </div>
                <div className='app-helmerts-footer-heading-content-main-legal_link-content'>
                  <p>
                    <a href="/information" className='link-decoration'>Returns & Exchanges</a>
                  </p>
                </div>
                <div className='app-helmerts-footer-heading-content-main-legal_link-content'>
                  <p>
                    <a href="/information" className='link-decoration'>Do Not Sell/Share My Personal Information</a>
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className='app-helmerts-footer-heading-logo'>
          <div className='app-helmerts-footer-heading-logo-img'>
            <Link to="/home">
              <img src={images.helmerts_high_resolution_logo_transparent} alt="" />
            </Link>
          </div>
          <div className='app-helmerts-footer-heading-logo-social'>
            <a href="" className='app-helmerts-footer-heading-logo-social-content link-decoration'>
              <FaSquareFacebook className='color-svg-social' />
            </a>
            <a href="" className='app-helmerts-footer-heading-logo-social-content link-decoration'>
              <AiOutlineInstagram className='color-svg-social' />
            </a>
            <a href="" className='app-helmerts-footer-heading-logo-social_link-content link-decoration'>
              <AiOutlineYoutube className='color-svg-social' />
            </a>
          </div>
        </div >
      </div>
      <div className='app-helmerts-footer-copyright'>
        <p>
          © Helmerts 2023. All rights reserved.
        </p>
      </div>
    </div >
  )
}

export default Footer