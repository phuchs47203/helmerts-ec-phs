import React from 'react'
import './Home.css'
import { SlideIntro, CTA } from '../../Components'
import { Link } from 'react-router-dom'
import { images } from '../../Constants'
const Home = () => {
  const typefull = "fullface";
  return (
    <div id='home' className='helmert-app-home section__padding'>
      <div className='helmert-app-home_heading'>
        <div className='helmert-app-home_heading-title'>
          <h1>ENJOYE WITH HELMERTS</h1>
          <p>
            Bringing forth modern beauty accompanies every journey while ensuring utmost safety.
          </p>
          <p>
            Not only a helmet but also a fashion accessory.
          </p>
          <p>
            <Link to={`/product/category/${typefull}`} className='helmert-app-home_heading-title-link '>Explore the collection</Link>
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
        <div className='helmert-app-home_product-categorise-heading helmert-app-home_heading-title p-bold'>
          <h1>OUR CAVE OF WONDER</h1>
          <p>
            <Link to="/product" className='helmert-app-home_heading-title-link'>Explore all</Link>
          </p>
        </div>
        <div className='helmert-app-home_product-categorise-content'>
          <div className='helmert-app-home_product-categorise-content-row1'>
            <div className='helmert-app-home_product-categorise-content-row'>
              <div className='helmert-app-home_product-categorise-content-row-img'>
                <Link to={`/product/category/${typefull}`} className=''>
                  <img src={images.fullface} alt="fullface" />
                </Link>
              </div>
              <div className='helmert-app-home_product-categorise-content-row-p'>
                <p>
                  <Link to={`/product/category/${typefull}`} className='helmert-app-home_heading-title-link p-bold'>Fullface</Link>
                </p>
              </div>
            </div>
            <div className='helmert-app-home_product-categorise-content-row'>
              <div className='helmert-app-home_product-categorise-content-row-img'>
                <Link to={`/product/category/${typefull}`} className=''>
                  <img src={images.openface} alt="fullface" />
                </Link>
              </div>
              <div className='helmert-app-home_product-categorise-content-row-p'>
                <p>
                  <Link to={`/product/category/${typefull}`} className='helmert-app-home_heading-title-link p-bold'>Openface</Link>
                </p>
              </div>
            </div>
            <div className='helmert-app-home_product-categorise-content-row'>
              <div className='helmert-app-home_product-categorise-content-row-img'>
                <Link to={`/product/category/${typefull}`} className=''>
                  <img src={images.modular} alt="fullface" />
                </Link>
              </div>
              <div className='helmert-app-home_product-categorise-content-row-p'>
                <p>
                  <Link to={`/product/category/${typefull}`} className='helmert-app-home_heading-title-link p-bold'>Modular</Link>
                </p>
              </div>
            </div>
            <div className='helmert-app-home_product-categorise-content-row'>
              <div className='helmert-app-home_product-categorise-content-row-img'>
                <Link to={`/product/category/${typefull}`} className=''>
                  <img src={images.half} alt="fullface" />
                </Link>
              </div>
              <div className='helmert-app-home_product-categorise-content-row-p'>
                <p>
                  <Link to={`/product/category/${typefull}`} className='helmert-app-home_heading-title-link p-bold'>Halfface</Link>
                </p>
              </div>
            </div>
          </div>
          <div className='helmert-app-home_product-categorise-content-row2'>
            <div className='helmert-app-home_product-categorise-content-row'>
              <div className='helmert-app-home_product-categorise-content-row-img'>
                <Link to={`/product/category/${typefull}`} className=''>
                  <img src={images.bicycle} alt="fullface" />
                </Link>
              </div>
              <div className='helmert-app-home_product-categorise-content-row-p'>
                <p>
                  <Link to={`/product/category/${typefull}`} className='helmert-app-home_heading-title-link p-bold'>Bike Helmet</Link>
                </p>
              </div>
            </div>
            <div className='helmert-app-home_product-categorise-content-row'>
              <div className='helmert-app-home_product-categorise-content-row-img'>
                <Link to={`/product/category/${typefull}`} className=''>
                  <img src={images.children} alt="fullface" />
                </Link>
              </div>
              <div className='helmert-app-home_product-categorise-content-row-p'>
                <p>
                  <Link to={`/product/category/${typefull}`} className='helmert-app-home_heading-title-link p-bold'>Kids Helmet</Link>
                </p>
              </div>
            </div>
            <div className='helmert-app-home_product-categorise-content-row'>
              <div className='helmert-app-home_product-categorise-content-row-img'>
                <Link to={`/product/category/${typefull}`} className=''>
                  <img src={images.accessories} alt="fullface" />
                </Link>
              </div>
              <div className='helmert-app-home_product-categorise-content-row-p'>
                <p>
                  <Link to={`/product/category/${typefull}`} className='helmert-app-home_heading-title-link p-bold'>Accessories</Link>
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className='helmert-app-home_product-'>
        cho 2 loại sản phẩm, sản phẩm nổi bật và sản phẩm discount, nổi bật alf nhiều người mua
        dành cho sp nổi bật
      </div>
      <div className='helmert-app-home_product-'>
        cho 2 loại sản phẩm, sản phẩm nổi bật và sản phẩm discount, nổi bật alf nhiều người mua
        dnahf cho sản phẩm scale
      </div>

    </div>
  )
}

export default Home