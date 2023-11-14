import React, { useState, useEffect, useRef } from 'react'
import './OneProduct.css';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
const OneProduct = ({ product }) => {
    const [productDetails, setproductDetails] = useState(false);
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/product/${product.id}`);
    }
    const [inView, setInView] = useState(false);
    const productRef = useRef(null);

    const handleIntersection = () => {
        if (productRef.current) {
            const rect = productRef.current.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight;
            setInView(isInView);
        }
    };

    useEffect(() => {
        const scrollHandler = () => {
            handleIntersection();
        };

        window.addEventListener('scroll', scrollHandler);
        handleIntersection(); // Kiểm tra sự xuất hiện khi component được mount

        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    return (
        <div
            className={`hermerts-app-one_product ${inView ? 'visible' : 'hidden'}`}
            ref={productRef}
        >
            <a href={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                <div className={`hermerts-app-oneproduct ${inView ? 'scale-in' : ''}`}>
                    <div className='hermerts-app-oneproduct-head'>
                        <div className='hermerts-app-oneproduct-head_image'>
                            <img src={product.imgurl} alt="image" />
                        </div>
                    </div>
                    <div className='hermerts-app-oneproduct-description'>
                        <h1>{product.name}</h1>
                        <div className='hermerts-app-oneproduct-description-price' >
                            <p >₫ {product.sale_price}</p>
                            <p >-30%</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default OneProduct