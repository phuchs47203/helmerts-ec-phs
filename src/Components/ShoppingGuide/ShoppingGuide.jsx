import React from 'react'
import './ShoppingGuide.css'
import InforLink from '../InforLink/InforLink';
const ShoppingGuide = () => {
    return (
        <div id='shopping-guide' className='app-helmerts-shopping_guide'>
            <div className='app-helmerts-shopping_guide-heading'>
                <h1 className='text-title-h1'>Online shopping</h1>
            </div>
            <div className='app-helmerts-shopping_guide-content'>
                <div className='app-helmerts-shopping_guide-content-item'>
                    <div className='app-helmerts-shopping_guide-content-item-name'>
                        <h1>Browsing</h1>
                    </div>
                    <div className='app-helmerts-shopping_guide-content-item-main'>
                        {
                            dataBrowsing.map((item, index) =>
                                <InforLink title={item.title} content={item.content} />
                            )
                        }
                    </div>
                </div>
                <div className='app-helmerts-shopping_guide-content-item'>
                    <div className='app-helmerts-shopping_guide-content-item-name'>
                        <h1>Orders</h1>
                    </div>
                    <div className='app-helmerts-shopping_guide-content-item-main'>
                        {
                            dataOrders.map((item, index) =>
                                <InforLink title={item.title} content={item.content} />
                            )
                        }
                    </div>
                </div>
                <div className='app-helmerts-shopping_guide-content-item'>
                    <div className='app-helmerts-shopping_guide-content-item-name'>
                        <h1>Delivery</h1>
                    </div>
                    <div className='app-helmerts-shopping_guide-content-item-main'>
                        {
                            dataDelivery.map((item, index) =>
                                <InforLink title={item.title} content={item.content} />
                            )
                        }
                    </div>
                </div>
                <div className='app-helmerts-shopping_guide-content-item'>
                    <div className='app-helmerts-shopping_guide-content-item-name'>
                        <h1>Trade Program</h1>
                    </div>
                    <div className='app-helmerts-shopping_guide-content-item-main'>
                        {
                            dataTradeProgram.map((item, index) =>
                                <InforLink title={item.title} content={item.content} />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
const dataBrowsing = [
    {
        title: 'What is the availability status of items on the site?',
        content: 'All items for sale on the Hermes.com e-boutique are available. If you wish to order a significant number of a particular item, please contact us by email or telephone at 800-441-4488, option 1, Monday through Friday from 9:00 a.m. to 6 p.m. and Saturday from 10 a.m. to 6 p.m EST.'
    },
    {
        title: 'What do I need for optimum browsing when visiting Hermes.com?',
        content: 'To make your experience at Hermes.com as pleasant as possible, we recommend using the latest generation of your browser. If you access our website using an older version, we cannot guarantee that all of its features will function properly. Please note that your browser must accept cookies and be SSL compatible with standard browsing mode enabled. Hermes.com does not support private browsing mode at this time.'
    },
    {
        title: 'How accurate is color display on the Internet?',
        content: 'Each product is photographed with precise attention to detail, and the colors shown should accurately depict each product. However, it is possible that colors may vary slightly from one screen to another due to monitor display settings.'
    },
];
const dataOrders = [
    {
        title: 'How may I get assistance with my online order?',
        content: 'Please contact us by email or telephone at 800-441-4488, option 1, Monday through Friday from 9:00 a.m. to 6 p.m. and Saturday from 10 a.m. to 6 p.m EST.'
    },
    {
        title: 'How do I change information on my order after it has been placed?',
        content: 'Please contact us as soon as possible by email or telephone at 800-441-4488, option 1, Monday through Friday from 9:00 a.m. to 6 p.m. and Saturday from 10 a.m. to 6 p.m EST.'
    },
    {
        title: 'I just finalized my order but I still have not received the order summary.',
        content: 'You may experience a short delay after you have placed your order and before you receive the order summary. You should also check your "Spam" inbox, as the message may have been redirected depending on your email settings. If you still have not received an email, please contact us at care@helmerts.com'
    },
];
const dataDelivery = [
    {
        title: 'How much is the delivery?',
        content: 'Delivery cost depends on the delivery service you select: Express 2 days service will cost $35.00, Standard Overnight service will cost $60.00, Priority Overnight service will cost $70.00, and Saturday Delivery service will cost $85.00.'
    },
    {
        title: 'How long will delivery take?',
        content: 'Orders ship Monday through Friday with the exception of national holidays. Orders with expedited delivery must reach us before 2 p.m. (Eastern Standard Time) to ship same day unless an item is subject to a ship delay.'
    },
    {
        title: 'How do I track delivery of my order?',
        content: 'To track your order, click the "your account" link located at the top right of the Hermes.com website. Log in, then use the menu to track your order. '
    },
    {
        title: 'Are shipping fees refundable?',
        content: 'The shipping costs for expedited delivery charged at the time of purchase are non-refundable. If an item is exchanged, the shipping fee for the first delivery will not be refunded. You will not be charged a shipping fee for the second delivery except if a faster shipping method is requested.'
    },
    {
        title: 'Is a signature required for delivery of my order?',
        content: 'A signature is required upon receipt of your package.'
    },
];
const dataTradeProgram = [
    {
        title: 'Does Helmerts have a trade program for interior designers and architects?',
        content: 'If you are an interior designer or architect inquiring about our trade program, you may email our dedicated advisor, kevin.rose@helmerts.com, with your contact information. We will be in touch to provide you with eligibility requirements and other detailed information.'
    },
    {
        title: 'Who is eligible for a trade account?',
        content: 'Accredited interior designers and architects are welcome to join the Hermès trade program. Retailers, commercial developers, and product designers may not be eligible.'
    },
    {
        title: 'Are trade customers required to pay sales tax?',
        content: 'Helmerts is required to collect sales tax in accordance with state laws. If you have further questions, you may contact us at service@helmerts.com.'
    },
    {
        title: 'Can I request special delivery for my order?',
        content: 'Orders requiring special delivery will be arranged on your behalf. All other purchases will ship via FedEx with signature required upon delivery.'
    },
];
export default ShoppingGuide