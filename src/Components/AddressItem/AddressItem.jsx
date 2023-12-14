import React, { useEffect } from 'react'
import './AddressItem.css'
import { AiOutlineYoutube, AiOutlineInstagram, AiOutlineFacebook, AiOutlinePhone } from 'react-icons/ai';
import { GiPositionMarker } from 'react-icons/gi';

const AddressItem = ({ dataAddress }) => {
    useEffect(() => {
        console.log(dataAddress);
    }, []);

    return (
        <div className='app-helmerts-addredd_item'>
            <div className='app-helmerts-addredd_item-img'>
                <a href={dataAddress.linkaddress}>
                    <img src={dataAddress.imgurl} alt="" />
                </a>
            </div>
            <div className='app-helmerts-addredd_item-content'>
                <div className='app-helmerts-addredd_item-content-name'>
                    <h1>{dataAddress.name}</h1>
                </div>
                <div className='app-helmerts-addredd_item-content-description'>
                    <div className='app-helmerts-addredd_item-content-description-item'>
                        <a href={dataAddress.linkaddress} className='link_address'>
                            <GiPositionMarker className='margin_top' />
                            <p>
                                {dataAddress.address}
                            </p>
                        </a>
                    </div>
                    <div className='app-helmerts-addredd_item-content-description-item'>
                        <a href={`tel:${dataAddress.phone}`} className='link_address' >
                            <AiOutlinePhone />
                            <p >{dataAddress.phone}</p>
                        </a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AddressItem