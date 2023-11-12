import React, { useEffect, useState } from 'react'
import './ProductDetails.css'
import { useNavigate, useParams } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'
import { AiOutlineUp, AiOutlineDown } from 'react-icons/ai';
import axios from 'axios'
import { images } from '../../Constants';
const ProductDetails = () => {
    const { id } = useParams();
    const [toggleSize, settoggleSize] = useState(false);
    const URL_PRODUCT_ID = "http://localhost:8000/api/products/" + id;
    const [loading, setloading] = useState(true);
    const [product_details, setproduct_details] = useState({});
    const [toggleErrSize, settoggleErrSize] = useState("");
    useEffect(() => {
        const fetchData = () => {
            setloading(true);
            const response = axios
                .get(URL_PRODUCT_ID)
                .then((response) => {
                    setproduct_details(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
            setloading(true);
        };
        fetchData();
    }, []);
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); // Gọi scrollTo khi component mount

    const [selectedSize, setselectedSize] = useState('');
    const handleSizeClick = (size) => {
        setselectedSize(size);
        console.log(selectedSize);
    };


    return (
        <div className='app-helmerts_product_details'>
            <div className='app-helmerts_product_details-top'>
                <div className='app-helmerts_product_details-top-back' onClick={() => handleBack()}>
                    <BsArrowLeft />
                    <p>Back</p>
                </div>
            </div>
            <div className='app-helmerts_product_details-content'>
                <div className='app-helmerts_product_details-content-main'>
                    <div className='app-helmerts_product_details-content-main-left'>
                        <div className='app-helmerts_product_details-content_left-img'>
                            <img src={images.modular} alt="" />
                        </div>

                    </div>
                    <div className='app-helmerts_product_details-content-main-right'>
                        <div className='app-helmerts_product_details-content-main-right-column'>
                            <div className='app-helmerts_product_details-content_right-header'>
                                <h1>Open Face Helmet XP05247 Black SXL</h1>
                                <div className='app-helmerts_product_details-content_right-header_price'>
                                    <p>	₫ 4,800,000</p>
                                    <p>	₫ 2,450,000</p>
                                </div>
                            </div>
                            <div className='line' />
                            <div className='app-helmerts_product_details-content_right-content'>
                                <div className='app-helmerts_product_details-content_right-content-color'>
                                    <h3>Color</h3>
                                    <p>Red</p>
                                </div>
                                <div className='line' />

                                <div className='app-helmerts_product_details-content_right-content-size'>
                                    {toggleSize
                                        ? <div className='app-helmerts_product_details-content_right-content-size-header' onClick={() => settoggleSize(false)}>
                                            <h3>Size</h3>
                                            <AiOutlineUp style={{ 'width': '20px' }} />
                                        </div>
                                        : <div className='app-helmerts_product_details-content_right-content-size-header' onClick={() => settoggleSize(true)} >
                                            <h3>Size</h3>
                                            <AiOutlineDown style={{ 'width': '20px' }} />
                                        </div>
                                    }
                                    {toggleErrSize &&
                                        <div className='app-helmerts_product_details-content_right-content-size-error'>
                                            <p>Please choose a size</p>
                                        </div>
                                    }
                                    {toggleSize &&
                                        <div className='app-helmerts_product_details-content_right-content-size-content'>
                                            <div className='app-helmerts_product_details-content_right-content-size-content-column'>
                                                <div
                                                    className={`app-helmerts_product_details-content_right-content-size-s ${selectedSize === 'S' ? 'selected' : ''}`}
                                                    onClick={() => handleSizeClick('S')}
                                                >
                                                    <p>S</p>
                                                </div>
                                            </div>
                                            <div className='app-helmerts_product_details-content_right-content-size-content-column'>
                                                <div
                                                    className={`app-helmerts_product_details-content_right-content-size-m ${selectedSize === 'M' ? 'selected' : ''}`}
                                                    onClick={() => handleSizeClick('M')}
                                                >
                                                    <p>M</p>
                                                </div>
                                            </div>
                                            <div className='app-helmerts_product_details-content_right-content-size-content-column'>
                                                <div
                                                    className={`app-helmerts_product_details-content_right-content-size-l ${selectedSize === 'L' ? 'selected' : ''}`}
                                                    onClick={() => handleSizeClick('L')}
                                                >
                                                    <p>L</p>
                                                </div>
                                            </div>
                                            <div className='app-helmerts_product_details-content_right-content-size-content-column'>
                                                <div
                                                    className={`app-helmerts_product_details-content_right-content-size-xl ${selectedSize === 'XL' ? 'selected' : ''}`}
                                                    onClick={() => handleSizeClick('XL')}
                                                >
                                                    <p>XL</p>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div className='line' />

                                <div className='app-helmerts_product_details-content_right-content-add_to_cart'>
                                    <button className='btn-transition'>Add to cart</button>
                                </div>
                                <div className='line' />

                                <div className='app-helmerts_product_details-content_right-content-description'>
                                    <p>
                                        Ankle boot in glazed calfskin with functional palladium-plated Kelly buckle and notched sole.
                                        For a feminine yet masculine look.
                                    </p>
                                    <p>Made in Vietnam</p>
                                    <p>Design by PhucHS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='app-helmerts_product_details-content-addition'>
                    <div className='app-helmerts_product_details-content_left-size-guide'>
                        size guide
                    </div>
                    <div className='app-helmerts_product_details-content_left-manuals'>
                        User manual
                    </div>
                    <div className='app-helmerts_product_details-content_left-similar'>
                        similar products
                    </div>
                    <div className='app-helmerts_product_details-content_left-reviews'>
                        reviews
                    </div>
                </div>


            </div>

        </div>
    )
}

export default ProductDetails