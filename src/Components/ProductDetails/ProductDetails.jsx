import React, { useEffect, useState } from 'react'
import './ProductDetails.css'
import { useNavigate, useParams } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'
import axios from 'axios'
const ProductDetails = () => {
    const { id } = useParams();
    const [toggleSize, settoggleSize] = useState(false);
    const URL_PRODUCT_ID = "http://localhost:8000/api/products/" + id;
    const [loading, setloading] = useState(true);
    const [product_details, setproduct_details] = useState({});
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
        console.log(window.location.href);
    }
    return (
        <div className='app-helmerts_product_details'>
            <div className='app-helmerts_product_details-top'>
                <div className='app-helmerts_product_details-top-back' onClick={() => handleBack()}>
                    <BsArrowLeft />
                    <p>Back</p>
                </div>
            </div>
            <div className='app-helmerts_product_details-content'>
                <div className='app-helmerts_product_details-content_left'>
                    <div className='app-helmerts_product_details-content_left-img'>
                        <img src={product_details.imgurl} alt="" />
                    </div>
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
                <div className='app-helmerts_product_details-content_right'>
                    <div className='app-helmerts_product_details-content_right-header'>
                        <h1>{product_details.name}</h1>
                        <div className='app-helmerts_product_details-content_right-header_price'>
                            <p>{product_details.origional_price}</p>
                            <p>{product_details.sale_price}</p>
                        </div>
                    </div>
                    <div className='app-helmerts_product_details-content_right-content'>
                        <div className='app-helmerts_product_details-content_right-content-color'>
                            <h3>color</h3>
                            <p>red</p>
                        </div>
                        <div className='app-helmerts_product_details-content_right-content-size'>
                            <div className='app-helmerts_product_details-content_right-content-size-error'>
                                <p>Please choose a size</p>
                            </div>
                            <div className='app-helmerts_product_details-content_right-content-size-s'>
                                S
                            </div>
                            <div className='app-helmerts_product_details-content_right-content-size-m'>
                                <p>M</p>
                            </div>
                            <div className='app-helmerts_product_details-content_right-content-size-l'>
                                <p>L</p>
                            </div>
                            <div className='app-helmerts_product_details-content_right-content-size-xl'>
                                xl
                            </div>
                        </div>
                        <div className='app-helmerts_product_details-content_right-content-add_to_cart'>
                            <button>Add to cart</button>
                        </div>
                        <div className='app-helmerts_product_details-content_right-content-description'>
                            <p>
                                material
                            </p>
                            <p>made in VietNam</p>
                            <p>be sign by PhucHS</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductDetails