import React from 'react'
import './SliderIntro.css'
import { images } from '../../Constants';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideImages = [
  {
    url: images.slide1,
    caption: 'Regardless of the field, challenge, terrain, interests, or personality, with HELMERTS you don\'t need to worry.'
  },
  {
    url: images.slide2,
    caption: 'Regardless of the field, challenge, terrain, interests, or personality, with HELMERTS you don\'t need to worry.'
  },
  {
    url: images.slide3,
    caption: 'Regardless of the field, challenge, terrain, interests, or personality, with HELMERTS you don\'t need to worry.'
  },
  {
    url: images.slide4,
    caption: 'Regardless of the field, challenge, terrain, interests, or personality, with HELMERTS you don\'t need to worry.'
  },
  {
    url: images.slide5,
    caption: 'Regardless of the field, challenge, terrain, interests, or personality, with HELMERTS you don\'t need to worry.'
  },
  {
    url: images.slide6,
    caption: 'Regardless of the field, challenge, terrain, interests, or personality, with HELMERTS you don\'t need to worry.'
  },
  {
    url: images.slide7,
    caption: 'Regardless of the field, challenge, terrain, interests, or personality, with HELMERTS you don\'t need to worry.'
  },
  {
    url: images.slide8,
    caption: 'Regardless of the field, challenge, terrain, interests, or personality, with HELMERTS you don\'t need to worry.'
  },
  {
    url: images.slide9,
    caption: 'Regardless of the field, challenge, terrain, interests, or personality, with HELMERTS you don\'t need to worry.'
  },
  {
    url: images.slide10,
    caption: 'Regardless of the field, challenge, terrain, interests, or personality, with HELMERTS you don\'t need to worry.'
  },
  {
    url: images.slide11,
    caption: 'Regardless of the field, challenge, terrain, interests, or personality, with HELMERTS you don\'t need to worry.'
  },
  {
    url: images.slide12,
    caption: 'Regardless of the field, challenge, terrain, interests, or personality, with HELMERTS you don\'t need to worry.'
  },
];

const slideImagesVertical = [
  {
    url: images.slide1v,
    caption: 'Regardless of the field, challenge, terrain, interests, or personality, with HELMERTS you don\'t need to worry.'
  },
  {
    url: images.slide1,
    caption: 'Regardless of the field, challenge, terrain, interests, or personality, with HELMERTS you don\'t need to worry.'
  },
  {
    url: images.slide2v,
    caption: 'Regardless of the field, challenge, terrain, interests, or personality, with HELMERTS you don\'t need to worry.'
  },
  {
    url: images.slide3v,
    caption: 'Regardless of the field, challenge, terrain, interests, or personality, with HELMERTS you don\'t need to worry.'
  },
  {
    url: images.slide4v,
    caption: 'Regardless of the field, challenge, terrain, interests, or personality, with HELMERTS you don\'t need to worry.'
  },
  {
    url: images.slide5v,
    caption: 'Regardless of the field, challenge, terrain, interests, or personality, with HELMERTS you don\'t need to worry.'
  },
  {
    url: images.slide6v,
    caption: 'Regardless of the field, challenge, terrain, interests, or personality, with HELMERTS you don\'t need to worry.'
  },
];
const SliderIntro = () => {

  return (
    <div id='sliderintro' className='app-helmert-home-intro'>
      <Slide
        autoplay={true} duration={1000}
        arrows={false}
      >
        {slideImages.map((slideImage, index) => (
          <div key={index} className='div-style'>
            <div className="div-style-img" style={{ 'backgroundImage': `url(${slideImage.url})` }}>
              <p className='div-style-img'>{slideImage.caption}</p>
            </div>
          </div>
        ))
        }
      </Slide >
      <Slide
        autoplay={true} duration={1200}
        arrows={false}
      >
        {slideImagesVertical.map((slideImage, index) => (
          <div key={index} className='div-style-v'>
            <div className="div-style-v-img" style={{ 'backgroundImage': `url(${slideImage.url})` }}>
              <p className='div-style-v-img'>{slideImage.caption}</p>
            </div>
          </div>
        ))
        }
      </Slide >
    </div >
  )
}

export default SliderIntro