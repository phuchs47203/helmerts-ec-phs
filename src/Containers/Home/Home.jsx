import React from 'react'
import './Home.css'
import { CTA, MainProduct } from '../../Components'
import { Link } from 'react-router-dom'
import { images } from '../../Constants'
import { useEffect } from 'react'

const types = [
  "full",
  "open",
  "modular",
  "half",
  "bicycle",
  "children",
  "accessorie"
];

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const typefull = "fullface";
  return (
    <div id='home' className='helmert-app-home section__padding'>
      <div className='helmert-app-home_heading'>
        <div className='helmert-app-home_heading-title'>
          <h1 className='text-title-h1'>ENJOYE WITH HELMERTS</h1>
          <p className='text-paragraph-p'>
            Bringing forth modern beauty accompanies every journey while ensuring utmost safety.
          </p>
          <p className='text-paragraph-p'>
            Not only a helmet but also a fashion accessory.
          </p>
          <p className='text-paragraph-p'>
            <a href={`/product`} className='helmert-app-home_heading-title-link'>Explore the collection</a>
          </p>
        </div>

        <div className='helmert-app-home_heading-video'>
          <video src={images.video} controls />
        </div>
      </div>

      <div className='helmert-app-home_cta'>
        <CTA />
      </div>

      <div className='helmert-app-home_product-categorise'>
        <div className='helmert-app-home_product-categorise-title'>
          <h1 className='text-title-h1'>OUR CAVE OF WONDER</h1>
          <p className='text-paragraph-p'>
            <a href={`/product`} className='helmert-app-home_product-categorise-title-link'>Explore all</a>
          </p>
        </div>
        <div className='helmert-app-home_product-categorise-content'>
          <div className='helmert-app-home_product-categorise-content-row1'>
            <div className='helmert-app-home_product-categorise-content-row'>
              <div className='helmert-app-home_product-categorise-content-row-img'>
                <a href={`/product/category/${types[0]}`} className=''>
                  <img src={images.fullface} alt="fullface" />
                </a>

              </div>
              <div className='helmert-app-home_product-categorise-content-row-p'>
                <p>
                  <a href={`/product/category/${types[0]}`} className='helmert-app-home_heading-title-link p-bold'>Fullface</a>
                </p>
              </div>
            </div>
            <div className='helmert-app-home_product-categorise-content-row'>
              <div className='helmert-app-home_product-categorise-content-row-img'>
                <a href={`/product/category/${types[1]}`} className=''>
                  <img src={images.openface} alt="fullface" />
                </a>
              </div>
              <div className='helmert-app-home_product-categorise-content-row-p'>
                <p>
                  <a href={`/product/category/${types[1]}`} className='helmert-app-home_heading-title-link p-bold'>Openface</a>
                </p>
              </div>
            </div>
            <div className='helmert-app-home_product-categorise-content-row'>
              <div className='helmert-app-home_product-categorise-content-row-img'>
                <a href={`/product/category/${types[2]}`} className=''>
                  <img src={images.modular} alt="fullface" />
                </a>
              </div>
              <div className='helmert-app-home_product-categorise-content-row-p'>
                <p>
                  <a href={`/product/category/${types[2]}`} className='helmert-app-home_heading-title-link p-bold'>Modular</a>
                </p>
              </div>
            </div>
            <div className='helmert-app-home_product-categorise-content-row'>
              <div className='helmert-app-home_product-categorise-content-row-img'>
                <a href={`/product/category/${types[3]}`} className=''>
                  <img src={images.half} alt="fullface" />
                </a>
              </div>
              <div className='helmert-app-home_product-categorise-content-row-p'>
                <p>
                  <a href={`/product/category/${types[3]}`} className='helmert-app-home_heading-title-link p-bold'>Halfface</a>
                </p>
              </div>
            </div>
          </div>
          <div className='helmert-app-home_product-categorise-content-row2'>
            <div className='helmert-app-home_product-categorise-content-row'>
              <div className='helmert-app-home_product-categorise-content-row-img'>
                <a href={`/product/category/${types[4]}`} className=''>
                  <img src={images.bicycle} alt="fullface" />
                </a>
              </div>
              <div className='helmert-app-home_product-categorise-content-row-p'>
                <p>
                  <a href={`/product/category/${types[4]}`} className='helmert-app-home_heading-title-link p-bold'>Bike Helmet</a>
                </p>
              </div>
            </div>
            <div className='helmert-app-home_product-categorise-content-row'>
              <div className='helmert-app-home_product-categorise-content-row-img'>
                <a href={`/product/category/${types[5]}`} className=''>
                  <img src={images.children} alt="fullface" />
                </a>
              </div>
              <div className='helmert-app-home_product-categorise-content-row-p'>
                <p>
                  <a href={`/product/category/${types[5]}`} className='helmert-app-home_heading-title-link p-bold'>Kids Helmet</a>
                </p>
              </div>
            </div>
            <div className='helmert-app-home_product-categorise-content-row'>
              <div className='helmert-app-home_product-categorise-content-row-img'>
                <a href={`/product/category/${types[6]}`} className=''>
                  <img src={images.accessories} alt="fullface" />
                </a>
              </div>
              <div className='helmert-app-home_product-categorise-content-row-p'>
                <p>
                  <a href={`/product/category/${types[6]}`} className='helmert-app-home_heading-title-link p-bold'>Accessories</a>
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className='helmert-app-home_product-main'>
        <MainProduct />
      </div>
    </div>
  )
}

export default Home