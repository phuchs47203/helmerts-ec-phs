import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import './InforLink.css';
const InforLink = ({ title, content }) => {
    const [toggleContent, settoggleContent] = useState(false);
    return (
        <div className='app-helmerts_infor-link'>
            <div className='app-helmerts_infor-link_title '>
                <p>
                    {title}
                </p>
                {toggleContent
                    ? <AiOutlineMinus onClick={() => settoggleContent(false)} className='scale-up-center' />
                    : <AiOutlinePlus onClick={() => settoggleContent(true)} className='scale-up-center' />
                }
            </div>
            {toggleContent &&
                <p className='app-helmerts_infor-link_content scale-up-center'>
                    {content}
                </p>
            }
        </div>
    )
}

export default InforLink