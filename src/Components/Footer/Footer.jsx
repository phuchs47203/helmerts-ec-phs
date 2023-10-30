import React from 'react'
import './Footer.css'
import { images } from '../../Constants';
import { TfiEmail } from 'react-icons/tfi';
import { AiOutlineYoutube, AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div id='footer' className='app-helmerts-footer section__padding'>
      <div className='app-helmerts-footer-heading'>
        <div className='app-helmerts-footer-heading-logo'>
          <img src={images.logo_text} alt="" />
        </div >
        <div className='app-helmerts-footer-heading-content'>
          <div className='app-helmerts-footer-heading-content-brand'>
            <div className='app-helmerts-footer-heading-content-brand-img'>
              <a href="https://row.burberry.com/">
                <img src={images.burberry} alt="your brouser is not assit image" />
              </a>
            </div>
            <div className='app-helmerts-footer-heading-content-brand-img'>
              <a href="https://eu.louisvuitton.com/eng-e1/homepage">
                <img src={images.louislutton} alt="your brouser is not assit image" />
              </a>
            </div>
            <div className='app-helmerts-footer-heading-content-brand-img'>
              <a href="https://www.versace.com/vn/en/">
                <img src={images.versace} alt="your brouser is not assit image" />
              </a>
            </div>
            <div className='app-helmerts-footer-heading-content-brand-img'>
              <a href="https://www.gucci.com/us/en/">
                <img src={images.gucci} alt="your brouser is not assit image" />
              </a>
            </div>
            <div className='app-helmerts-footer-heading-content-brand-img'>
              <a href="https://www.hermes.com/us/en/">
                <img src={images.hermes} alt="your brouser is not assit image" />
              </a>
            </div>
          </div>
          <div className='app-helmerts-footer-heading-content-main'>
            <div className='app-helmerts-footer-heading-content-main-contact'>
              <div className='app-helmerts-footer-heading-content-main-contact_title'>
                <h1>contact</h1>
              </div>
              <div className='app-helmerts-footer-heading-content-main-contact_link'>
                <div className='app-helmerts-footer-heading-content-main-contact_link-content'>
                  <div className='app-helmerts-footer-heading-content-main-contact_link-content_icon'>
                    <TfiEmail />
                  </div>
                  <p>tranhoangphuc5428@gm.uit.edu</p>
                </div>
                <div className='app-helmerts-footer-heading-content-main-contact_link-content'>
                  <div className='app-helmerts-footer-heading-content-main-contact_link-content_icon'>
                    <TfiEmail />
                  </div>
                  <p>tranhoangphuc5428@gm.uit.edu</p>
                </div>
                <div className='app-helmerts-footer-heading-content-main-contact_link-content'>
                  <div className='app-helmerts-footer-heading-content-main-contact_link-content_icon'>
                    <TfiEmail />
                  </div>
                  <p>tranhoangphuc5428@gm.uit.edu</p>
                </div>
              </div>
            </div>
            <div className='app-helmerts-footer-heading-content-main-socialmedia'>
              <div className='app-helmerts-footer-heading-content-main-contact_title'>
                <h1>Social Media</h1>
              </div>
              <div className='app-helmerts-footer-heading-content-main-contact_link'>
                <div className='app-helmerts-footer-heading-content-main-contact_link-content'>
                  <div className='app-helmerts-footer-heading-content-main-contact_link-content_icon'>
                    <AiOutlineFacebook />
                  </div>
                  <p>
                    <Link to="">link to social media</Link>
                  </p>
                </div>
                <div className='app-helmerts-footer-heading-content-main-contact_link-content'>
                  <div className='app-helmerts-footer-heading-content-main-contact_link-content_icon'>
                    <AiOutlineInstagram />
                  </div>
                  <p>
                    <Link to="">link to social media</Link>
                  </p>
                </div>
                <div className='app-helmerts-footer-heading-content-main-contact_link-content'>
                  <div className='app-helmerts-footer-heading-content-main-contact_link-content_icon'>
                    <AiOutlineYoutube />
                  </div>
                  <p>
                    <Link to="">link to social media</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className='app-helmerts-footer-heading-content-main-service'>
              <div className='app-helmerts-footer-heading-content-main-contact_title'>
                <h1>Clien service</h1>
              </div>
              <div className='app-helmerts-footer-heading-content-main-contact_link'>
                <div className='app-helmerts-footer-heading-content-main-contact_link-content'>
                  <p>
                    <Link to="">link to social media</Link>
                  </p>
                </div>
                <div className='app-helmerts-footer-heading-content-main-contact_link-content'>
                  <p>
                    <Link to="">link to social media</Link>
                  </p>
                </div>
                <div className='app-helmerts-footer-heading-content-main-contact_link-content'>
                  <p>
                    <Link to="">link to social media</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className='app-helmerts-footer-heading-content-main-legal'>
              <div className='app-helmerts-footer-heading-content-main-contact_title'>
                <h1>Legal</h1>
              </div>
              <div className='app-helmerts-footer-heading-content-main-contact_link'>
                <div className='app-helmerts-footer-heading-content-main-contact_link-content'>
                  <p>
                    <Link to="">link to social media</Link>
                  </p>
                </div>
                <div className='app-helmerts-footer-heading-content-main-contact_link-content'>
                  <p>
                    <Link to="">link to social media</Link>
                  </p>
                </div>
                <div className='app-helmerts-footer-heading-content-main-contact_link-content'>
                  <p>
                    <Link to="">link to social media</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='app-helmerts-footer-copyright'>
        <p>© 2023 Helmerts - All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer