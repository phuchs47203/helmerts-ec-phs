import React, { useState } from 'react'
import './OneProduct.css';
import { AiFillEyeInvisible } from 'react-icons/ai';
const OneProduct = ({ product }) => {
    const [productDetails, setproductDetails] = useState(false);

    return (
        <div className='hermerts-app-one_product'>
            <div className='hermerts-app-oneproduct' onClick={() => setproductDetails(true)}>
                <div className='hermerts-app-oneproduct-head'>
                    <div className='hermerts-app-oneproduct-head_image'>
                        <img src={product.imgurl} alt="image" />
                    </div>
                </div>
                <div className='hermerts-app-oneproduct-description'>
                    <h3>{product.name}</h3>
                    <div className='hermerts-app-oneproduct-description-price' >
                        <p>₫ {product.sale_price}</p>
                        <p>-30%</p>
                    </div>
                </div>
            </div>
            {productDetails &&
                <div className='hermerts-app-one_product-details'>
                    <div className='hermerts-app-one_product-details_svg'>
                        <AiFillEyeInvisible onClick={() => setproductDetails(false)} />
                    </div>
                    <div className='hermerts-app-one_product-details_main scale-up-center'>
                        <div className='hermerts-app-one_product-details_main-img'>
                            <img src={product.imgurl} alt="" />
                        </div>
                        <div className='hermerts-app-one_product-details_main-description'>
                            <div className='hermerts-app-one_product-details_main-description_box'>
                                <p>{product.name}</p>
                                <p>{product.sale_price}</p>
                                <p>-{product.discount}%</p>
                                <br />
                                <p>{product.description}</p>
                                <p>{product.sold}</p>
                                <p>{product.available}</p>
                                <p>{product.name}</p>
                                <p>{product.sale_price}</p>
                                <p>ognrg sognew sdjjkgnegkn jsoge ksg
                                    gronge grongegegeon
                                    sngsng sgnngogn oengrjgonjeg eogne
                                    gngeng kegew
                                    njwgnewjg ogngogneogeg eg
                                    goigewgewngjegj osgsdg jdsnfje dfeeh  ebodg
                                    uhef jrbguor oewrn
                                    oig gogwon osg
                                    foigne sogeag off
                                    fioaf sogne pje ovrge
                                    wgin rgrg foagewg
                                </p>
                                <p>{product.sold}</p>
                                <p>{product.available}</p>
                                <p>{product.name}</p>
                                <p>{product.sale_price}</p>
                                <p>{product.description}</p>
                                <p>{product.sold}</p>
                                <p>{product.available}</p>
                                <div>
                                    <button>Add to cart</button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

export default OneProduct