import React, { useEffect, useState } from 'react'
import './ProductDetails.css'
import { useNavigate, useParams } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'
import { AiOutlineUp, AiOutlineDown } from 'react-icons/ai';
import axios from 'axios'
import { images } from '../../Constants';
import InforLink from '../InforLink/InforLink';
import InterestedProduct from '../InterestedProduct/InterestedProduct';
import OneProduct from '../OneProduct/OneProduct';
const data = [
    { name: "XXS", inch: "21.6", cm: "55", eur: "4", usa: "6 3/4", uk: "6 7/8" },
    { name: "XS", inch: "22", cm: "56", eur: "4 1/2", usa: "6 7/8", uk: "7" },
    { name: "S", inch: "22.4", cm: "57", eur: "5", usa: "7", uk: "7 1/8" },
    { name: "M", inch: "22.8", cm: "58", eur: "5 1/2", usa: "7 1/8", uk: "7 1/4" },
    { name: "L", inch: "23.2", cm: "59", eur: "6", usa: "7 1/4", uk: "7 3/8" },
    { name: "XL", inch: "23.6", cm: "60", eur: "6 1/2", usa: "7 3/8", uk: "7 1/2" },
    { name: "XXL", inch: "24", cm: "61", eur: "7", usa: "7 1/2", uk: "7 5/8" },
    { name: "XXXL", inch: "25", cm: "62", eur: "7 1/2", usa: "7 3/4", uk: "7 3/4" },

];
const dataManual = [
    {
        title: '1. No Helmet Can Protect You Against All Possible Impacts At Low And High Speed',
        content: 'In any case, in order to have maximum protection for your head, the helmet must fit perfectly and the locking system must be knotted securely under your chin. The helmet should allow you to have peripheral vision while you are wearing it. If your helmet is too big, it can move on your head when you are driving your motorcycle which can cause it to fall off in case of accident or even block your vision while driving. In the first case, your helmet would not protect your head in case of accident and this may result in a severe injury or even death. In the second case, if your vision is impaired, this can cause an accident.'
    },
    {
        title: '2. Only Use A Helmet That Completely Holds Your Entire Head And Tighten The Locking System Securely Under Your Chin',
        content: 'Open the helmet with your hands and put it on your head. Please check to see if the helmet fits correctly according to the list of points to be checked. Pull the straps of the locking system, not the mechanisms. Pulling the mechanisms could break them.'
    },
    {
        title: '3. Clean Your Helmet Carefully Clean Your Helmet Carefully',
        content: 'Never use hot or salty water, gasoline, glass cleaners or any other solvent. Your helmet could suffer severe damage due to these substances although no visible damage is appreciated externally. A helmet deteriorated or weakened by a cleaning agent may not offer protection in case of accident, causing severe injuries or death.'
    },
    {
        title: '4. Never Modify Your Helmet',
        content: 'Punching holes, cutting the shell or the material on the inside is very dangerous. Modifications may weaken the helmet. Modifying the locking system may also weaken the helmet and it may break in case of accident. Removing parts such as the chin-strap or other parts may leave cutting edges of the shell uncovered which may be very dangerous in case of accident. Always use original LS2 spare parts: screens, screws and other parts.'
    },
    {
        title: '5. Do Not Mistreat Your Helmet',
        content: 'Never drive with the helmet hanging from the locking system and do not hang the helmet on a support, for example, a mirror. Do not sit on the helmet and do not throw it. You should not expose the inside of the helmet to sun light or sources which generate excessive heat such as heaters, which may produce temperatures higher than 50ºC (122ºF). Avoid exposing the helmet to anti-mosquito sprays. If you do not treat your helmet correctly, the shell and the inside could weaken and it could lose its capacity to protect you in case of accident.'
    },
    {
        title: '6. Do Not Repain The Helmet',
        content: 'We do not recommend repainting the helmet given that the paint may damage the materials used in its manufacturing. A helmet damaged and weakened by a paint agent may not offer protection in case of accident, causing severe injuries or even death. If you need to paint your helmet, please contact your LS2 supplier.'
    },


];
const ProductDetails = () => {
    const { id } = useParams();
    const [toggleSize, settoggleSize] = useState(false);
    const URL_PRODUCT_ID = "http://localhost:8000/api/products/" + id;
    const [loading, setloading] = useState(true);
    const [product_details, setproduct_details] = useState({});
    const [toggleErrSize, settoggleErrSize] = useState("");
    const [catId, setCatId] = useState(null);

    const [ListSize, setListSize] = useState([
        {
            size: "XS"
        },
        {
            size: "S"
        },
        {
            size: "M"
        },
        {
            size: "L"
        },
        {
            size: "XL"
        },
        {
            size: "XXL"
        },
        {
            size: "XXXL"
        }
    ]);

    useEffect(() => {
        const fetchData = async () => {
            setloading(true);
            try {
                const response = await axios.get(URL_PRODUCT_ID);
                setproduct_details(response.data);
                setCatId(response.data.cat_id);
            } catch (error) {
                console.log(error);
            } finally {
                setloading(false);
            }
        };
        fetchData();
    }, []);

    const URL_PRODUCT_INTERESTED = "http://localhost:8000/api/products/interested/";

    const [productInterested, setproductInterested] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            // console.log("catId in second useEffect:", catId);
            if (catId != null) {
                try {
                    const response = await axios.get(URL_PRODUCT_INTERESTED + catId);
                    setproductInterested(response.data);
                } catch (error) {
                    console.log(error);
                }
            }
        };
        fetchData();
    }, [catId]);

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
    };
    useEffect(() => {
        console.log(selectedSize);
    }, [selectedSize]);

    const addToCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        // console.log('sizeSelectted: ', selectedSize);
        if (!selectedSize) {
            console.log('chưa chọn size');
            return;
        }
        const existItem = cart.find(item => (item.product_details && item.product_details.id === product_details.id)
            && (item.size === selectedSize)
        );

        // localStorage.removeItem('cart');

        if (existItem) {
            if (existItem.quantity >= 7) {
                console.log('vượt quá số lượng sản phẩm tôi đa');
                return;
            }
            existItem.quantity++;
        }
        else {
            cart.push({ product_details, size: selectedSize, quantity: 1 });
        }
        setselectedSize('');
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log('Cart:', cart); // Xuất ra giỏ hàng
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
                            {/* <img src={product_details.imgurl} alt="" /> */}
                            <img src={images.modular} alt="" />

                        </div>

                    </div>
                    <div className='app-helmerts_product_details-content-main-right'>
                        <div className='app-helmerts_product_details-content-main-right-column'>
                            <div className='app-helmerts_product_details-content_right-header'>
                                <h1>{product_details.name}</h1>
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
                                    {/* {toggleSize &&
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
                                    } */}

                                    {/*        
                                             className={`app-helmerts_product_details-content_right-content-size-s ${item.size.toLowerCase()} ${selectedSize === item.size ? 'selected' : ''}`}
 */}
                                    {toggleSize &&
                                        <div className='app-helmerts_product_details-content_right-content-size-content'>

                                            {ListSize.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className={`app-helmerts_product_details-content_right-content-size-s  ${selectedSize === item.size ? 'selected' : ''}`}
                                                    onClick={() => handleSizeClick(item.size)}
                                                >
                                                    <p>{item.size}</p>
                                                </div>
                                            ))}

                                        </div>
                                    }
                                </div>
                                <div className='line' />

                                <div className='app-helmerts_product_details-content_right-content-add_to_cart'>
                                    <button className='btn-transition' onClick={() => addToCart()}>Add to cart</button>
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
                        <div className='app-helmerts_product_details-content_left-manuals-heading'>
                            <h1>
                                SAFETY RECOMMENDATIONS
                            </h1>
                        </div>
                        <div className='app-helmerts_product_details-content_left-manuals-content'>
                            {
                                dataManual.map((item, index) =>
                                    <InforLink title={item.title} content={item.content} />
                                )
                            }
                        </div>
                    </div>
                    <div className='app-helmerts_product_details-content_left-similar'>
                        <div className='app-helmerts_product_details-content_left-similar-heading'>
                            <h1>
                                You may also be interested
                            </h1>
                        </div>
                        <div className='app-helmerts_product_details-content_left-similar-content'>
                            {productInterested.map((product) => (
                                <OneProduct product={product} key={product.id} />
                            ))}
                        </div>
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