import React from 'react'
import InforLink from '../InforLink/InforLink';
import './Gifting.css'
import { images } from '../../Constants';
const Gifting = () => {
    return (
        <div id='gifting' className='app-helmerts-gifting'>
            <div className='app-helmerts-gifting-heading'>
                <h1 className='text-title-h1'>Gifting</h1>
            </div>
            <div className='app-helmerts-gifting-content'>
                <div className='app-helmerts-gifting-content-item'>
                    <div className='app-helmerts-gifting-content-item-name'>
                        <img src={images.orange_box} alt="" />
                    </div>
                    <div className='app-helmerts-gifting-content-item-main'>
                        {
                            dataGifting.map((item, index) =>
                                <InforLink title={item.title} content={item.content} />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
const dataGifting = [
    {
        title: 'Will my order be gift wrapped?',
        content: 'Your purchases are delivered in an orange box tied with a Bolduc ribbon, with the exception of fragrances, makeup and beauty products, books, certain equestrian and bulky items.'
    },
    {
        title: 'Can I use a gift card or store credit for an online purchase?',
        content: 'Hermès gift cards and store credits may not be used on the Hermes.com website. Please consult the conditions listed on your gift card for its terms of use in stores.'
    },
    {
        title: 'Can I include a personalized gift message with my purchase?',
        content: 'When viewing the items in your cart before checking out, you may include a blank or printed card and priceless invoice. Personalized messages should only be written in English language characters to guarantee accuracy. Use of other characters or images may not print correctly.'
    },
    {
        title: 'Will my gift order include an invoice where the price of the items are not shown?',
        content: 'An order will be considered a "gift" if the civil status, last name or first name of the invoicing information is different from that of the delivery information. In this specific case, an invoice where the price of the items are not shown will be included in the package that is sent to the gift recipient.'
    },
    {
        title: 'If I give a gift to someone, can that person exchange it for something else?',
        content: 'Accompanied with an invoice or priceless invoice, a gift may be exchanged for an item of equal or greater value. The difference must be paid at the time of the exchange.'
    },

];
export default Gifting