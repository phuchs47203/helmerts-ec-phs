import React from 'react'
import './ShopSystem.css'
import { images } from '../../Constants';
import AddressItem from '../AddressItem/AddressItem';


const ShopSystem = () => {
    return (
        <div id='shop-system' className='app-helmerts-shop_system'>
            <div className='app-helmerts-shop_system-heading'>
                <h1 className='text-title-h1'>Shop System</h1>
            </div>
            <div className='app-helmerts-shop_system-content'>
                {
                    dataShopSystems.map((item, index) => (
                        <AddressItem dataAddress={item} key={index} />
                    ))
                }
            </div>
        </div>
    )
};
const dataShopSystems = [
    {
        imgurl: images.hcm1,
        name: 'Helmerts DTH Q1',
        address: '103 Đ. Đinh Tiên Hoàng, Đa Kao, Quận 1, TPHCM',
        phone: '842838201836',
        linkaddress: 'https://maps.app.goo.gl/dygCQzz1xXVoez5AA',
    },
    {
        imgurl: images.hcm2,
        name: 'Helmerts TQH 83',
        address: '83 Đ. Trần Quốc Hoàn, Phường 4, Tân Bình, TPHCM',
        phone: '842839483998',
        linkaddress: 'https://maps.app.goo.gl/BytQQbsHEXFfK4CE9',
    },
    {
        imgurl: images.hcm3,
        name: 'Helmerts CVL Q5',
        address: '2 Đ. Châu Văn Liêm, Phường 10, Quận 5, TPHCM',
        phone: '842838552955',
        linkaddress: 'https://maps.app.goo.gl/WRcEJaK2i8XYJhrTA',
    },
    {
        imgurl: images.hn1,
        name: 'Helmerts TD HBT',
        address: '4 Trương Định, Hai Bà Trưng District, Hà Nội',
        phone: '842432181669',
        linkaddress: 'https://maps.app.goo.gl/vNa8pN2Lqui3VjrA9',
    },
    {
        imgurl: images.hn2,
        name: 'Helmerts DDHN',
        address: '520 P. Xã Đàn, Nam Đồng, Đống Đa, Hà Nội',
        phone: '842435773162',
        linkaddress: 'https://maps.app.goo.gl/jhX4kgZSAkcBNhUo8',
    },
    {
        imgurl: images.ct1,
        name: 'Helmerts NKCT',
        address: '1-23 Đ. Mậu Thân, Xuân Khánh, Ninh Kiều, Cần Thơ',
        phone: '842923828268',
        linkaddress: 'https://maps.app.goo.gl/Yn9aW7iK6H2RovNC8',
    },
];

export default ShopSystem