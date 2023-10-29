import React from 'react'
import './Home.css'
import { SlideIntro, CTA } from '../../Components'
import { Link } from 'react-router-dom'
import { images } from '../../Constants'
const Home = () => {
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
            <Link to="/product" className='helmert-app-home_heading-title-link'>Explore the collection</Link>
          </p>
        </div>
        <div className='helmert-app-home_heading-video'>
          <video src={images.video} controls/>
        </div>
      </div>

      <div className='helmert-app-home_cta'>
        <CTA />
      </div>
      <div className='helmert-app-home_product-categorise'>
        product MenuProductCategories, 6 laoij sản phẩm chính

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