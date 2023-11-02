import React from 'react'
import './TermCOndition.css'
import InforLink from '../InforLink/InforLink';
const dataTermCondition = [
    {
        title: '1. Intellectual Property',
        content: 'All content and materials on the Website (drawings, designs, illustrations, photographs, sound tracks, written text, logos, trademarks, and all other intellectual property of any nature whatsoever) are the sole and exclusive property of HELMERTS. You may not reproduce, by any means or process, in full or in part, distribute, publish, transmit, create derivative works based on, modify or sell any such content or materials contained on the Website.'
    },
    {
        title: '2. Linking',
        content: 'The Website may contain links to third party websites not under the operation or control of HELMERTS. Such links are provided as a convenience only and cannot, and should not be interpreted as an express or implied endorsement of such third party websites or any products or services offered thereon. You may only provide a link to the Website if expressly authorized in advance in writing by HELMERTS.'
    },
    {
        title: '3. Limitation of Liability',
        content: 'To the fullest extent permitted by applicable law, HELMERTS will not be liable to you, or any third party, for any damages including without limitation indirect, incidental, exemplary, punitive, special or consequential damages, such as loss of profits, loss of goodwill or any other intangible losses, arising out of or in connection with your use or inability to use the Website, any content or materials on this website,  or any of the products or services offered on this website,  even if HELMERTS has been advised of the possibility of such damages, except where such liability or damage is the direct result of the gross negligence, fraud or willful misconduct of HELMERTS.'
    },
    {
        title: '4. Disclaimer of Warranty',
        content: 'The Website may contain technical inaccuracies or other defects; HELMERTS does not guarantee that any such defects will be corrected. The Website and its contents are provided on an "as is" and "as available" basis.  HELMERTS expressly disclaims all warranties of any kind, whether express or implied, to the fullest extent permitted by applicable law.'
    },
    {
        title: '5. Governing Law – Disputes',
        content: 'The application and enforcement of these Terms and Conditions of Use, the General Terms and Conditions of Sale, and any Specific Terms and Conditions of Sale that may be applicable, shall each be governed by and construed in accordance with the laws of Viet Nam, without regard to principles of conflicts of laws.  In the event of a dispute, the Federal and State courts of Viet Nam, shall have exclusive jurisdiction over any such dispute and you hereby agree to submit to the exclusive jurisdiction of such court to the fullest extent permitted by applicable law.  HELMERTS shall be entitled to seek and obtain injunctive or other equitable relief to protect its rights hereunder.'
    },
    {
        title: '6. Waiver',
        content: 'The failure of HELMERTS to enforce any part of these Terms and Conditions of Use, General Terms and Conditions of Sale or any Specific Terms and Conditions of Sale that may be applicable to your order, shall not constitute a waiver of any of HELMERTS rights hereunder for past or future acts.'
    },
];
const TearmCondition = () => {
    return (
        <div id='term-condition' className='app-helmerts_leagal-tearm-condition'>
            <div className='app-helmerts_leagal-tearm-condition_title'>
                <h1>GENERAL TERM AND CONDITIONS</h1>
                <p>
                    Last updated 20 Oct 2023
                </p>
            </div>
            <div className='app-helmerts_leagal-tearm-condition_content'>
                {
                    dataTermCondition.map((item, index) =>
                        <InforLink title={item.title} content={item.content} />
                    )
                }
            </div>
        </div>
    )
}

export default TearmCondition