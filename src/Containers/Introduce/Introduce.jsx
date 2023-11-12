import React from 'react'
import './Introduce.css'
import { images } from '../../Constants';
import { FiTrendingUp } from 'react-icons/fi';
import { FaMoneyBillTrendUp } from 'react-icons/fa6';
import { useEffect } from 'react';
const Introduce = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id='introduce' className='app-helmert-introduce section__padding'>
      <div className='app-helmert-introduce-history'>
        <div className='app-helmert-introduce-history_heading'>
          <h1 className='text-title-h1'>HELMERTS</h1>
          <p className='text-paragraph-p'>
            Established in September 2023, Helmerts is currently one of the reputable helmet suppliers in Vietnam. We are proud to be a reliable companion of the Vietnamese people throughout the past times.
          </p>
          <p className='text-paragraph-p'>
            With the continuous development of fashion trends. Helmert wants to bring customers helmets that are not only good quality but also fashionable, helping generation Z youth enjoy wearing helmets that are both beautiful and safe.
          </p>
          <p className='text-paragraph-p'>
            <a href="/product" className='a-decoration'>
              Explore Our Online Store
            </a>
          </p>
        </div>
        <div className='app-helmert-introduce-history_video'>
          <video src={images.video}
            controls
            alt="Your browser does not assit video play"></video>
        </div>
      </div>
      <div className='app-helmert-introduce-feature'>
        <div className='app-helmert-introduce-feature_col1'>

          <div className='app-helmert-introduce-feature_col-content'>
            <FiTrendingUp />
            <h1 className='text-title-h1 texalign_start'>
              SERVICE QUALITY MAKES A DIFFERENCE
            </h1>
            <p className='text-paragraph-p texalign_justify'>
              When coming to Helmerts, customers will receive thorough advice on all detailed information about the product as well as have their questions answered enthusiastically and thoughtfully. Helmerts' staff is professionally trained, knowledgeable about product information and will always be ready to advise and support customers when needed.
            </p>
          </div>
        </div>
        <div className='app-helmert-introduce-feature_col2'>
          <div className='app-helmert-introduce-feature_col-content'>
            <FaMoneyBillTrendUp />
            <h1 className='text-title-h1 texalign_start'>
              ATTRACTIVE PROMOTION PROGRAM
            </h1>
            <p className='text-paragraph-p texalign_justify'>
              Between offering sales and working for suitable fashion. we chose the second option, How about discovering a great brand that also shares your values? We always have incentive programs for regular customers and many gifts for new customers to Helmert
            </p>
          </div>
          <div className='app-helmert-introduce-feature_col-content'>
            <FaMoneyBillTrendUp />
            <h1 className='text-title-h1 texalign_start'>
              OPTIMAL LOGISTICS SERVICES
            </h1>
            <p className='text-paragraph-p texalign_justify'>
              Shipping, warranty and product return policies are always applied in the most convenient way for customers. Processes are always focused and carried out carefully, from packaging to transportation. Ensure goods reach customers in the best condition.
            </p>
          </div>
        </div>
        <div className='app-helmert-introduce-feature_col3'>
          <div className='app-helmert-introduce-feature_col-content'>
            <FiTrendingUp />
            <h1 className='text-title-h1 texalign_start'>
              SERVICE QUALITY MAKES A DIFFERENCE
            </h1>
            <p className='text-paragraph-p texalign_justify'>
              Helmerts always listens and acknowledges customer feedback. Since then, we have continuously strived to improve and enhance service quality. Customer satisfaction is Helmerts' success.
            </p>
          </div>

          <div className='app-helmert-introduce-feature_col-content'>
            <FaMoneyBillTrendUp />
            <h1 className='text-title-h1 texalign_start'>
              UPDATE CONTINUALLY  TRENDS
            </h1>
            <p className='text-paragraph-p texalign_justify'>
              The most popular trends and product designs on the market today are constantly updated by Helmerts to promptly meet the tastes and needs of customers from basic to high-end.            </p>
          </div>

          <div className='app-helmert-introduce-feature_col-content'>
            <FaMoneyBillTrendUp />
            <h1 className='text-title-h1 texalign_start'>
              HIGHLIGHTS INFORMATION ALWAYS UPDATED QUICKLY
            </h1>
            <p className='text-paragraph-p texalign_justify'>
              We provide everything you need for a journey. Helmerts is proud to always receive trust and positive reviews from customers and is a reputable unit worthy of your trust.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduce