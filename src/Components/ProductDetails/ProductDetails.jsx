import React, { useEffect, useState } from 'react'
import './ProductDetails.css'
import { useNavigate, useParams } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'
import { AiOutlineUp, AiOutlineDown } from 'react-icons/ai';
import axios from 'axios'
import { images } from '../../Constants';

const data = [
    { name: "XXS", inch: "21.6", cm: "55", eur: "4", usa: "6 3/4", uk: "6 7/8" },
    { name: "XS", inch: "22", cm: "56", eur: "4 1/2", usa: "6 7/8", uk: "7" },
    { name: "S", inch: "22.4", cm: "57", eur: "5", usa: "7", uk: "7 1/8" },
    { name: "M", inch: "22.8", cm: "58", eur: "5 1/2", usa: "7 1/8", uk: "7 1/4" },
    { name: "L", inch: "23.2", cm: "59", eur: "6", usa: "7 1/4", uk: "7 3/8" },
    { name: "XL", inch: "23.6", cm: "60", eur: "6 1/2", usa: "7 3/8", uk: "7 1/2" },
    { name: "XXL", inch: "24", cm: "61", eur: "7", usa: "7 1/2", uk: "7 5/8" },
    { name: "XXXL", inch: "25", cm: "62", eur: "7 1/2", usa: "7 3/4", uk: "7 3/4" },

]
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
                        <div>
                            <h3>Size Guide</h3>
                        </div>
                        <table>
                            <tr className='app-helmerts_product_details-content_left-size-guide-header'>
                                <th>Size</th>
                                <th>Inches</th>
                                <th>Centimeters</th>
                                <th className='hidden'>Europe</th>
                                <th className='hidden'>USA</th>
                                <th className='hidden'>UK</th>
                            </tr>
                            {data.map((val, key) => {
                                return (
                                    <tr className='app-helmerts_product_details-content_left-size-guide-content' key={key}>
                                        <td>{val.name}</td>
                                        <td>{val.inch}</td>
                                        <td>{val.cm}</td>
                                        <td className='hidden'>{val.eur}</td>
                                        <td className='hidden' >{val.usa}</td>
                                        <td className='hidden'>{val.uk}</td>
                                    </tr>
                                )
                            })}
                        </table>
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