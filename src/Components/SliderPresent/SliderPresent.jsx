import React from 'react'
import './SliderPresent.css'
import { images } from '../../Constants';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideImages = [
    {
        url: images.slide1,
        caption: 'Regardless of the field, challenge, terrain, interests, or personality, with HELMERTS you don\'t need to worry.'
    },
    {
        url: images.slide4,
        caption: 'Regardless of the field, challenge, terrain, interests, or personality, with HELMERTS you don\'t need to worry.'
    },
    {
        url: images.pre1,
        caption: 'Regardless of the field, challenge, terrain, interests, or personality, with HELMERTS you don\'t need to worry.'
    },
];
const SliderPresent = () => {
    return (
        <Slide
            autoplay={true} duration={1500}
            arrows={false}
        >
            {slideImages.map((slideImage, index) => (
                <div key={index} className='pre-div-style'>
                    <div className="pre-div-style-img" style={{ 'backgroundImage': `url(${slideImage.url})` }}>
                        <p className='pre-div-style-img'>{slideImage.caption}</p>
                    </div>
                </div>
            ))
            }
        </Slide >)
}

export default SliderPresent