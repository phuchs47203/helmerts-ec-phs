import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import './InforLink.css';
const InforLink = ({ title, content }) => {
    const [toggleContent, settoggleContent] = useState(false);
    return (
        <div className='app-helmerts_infor-link'>
            {toggleContent
                ? <div className='app-helmerts_infor-link_title' onClick={() => settoggleContent(false)}>
                    <p className='legal-p-title'>
                        {title}
                    </p>
                    <AiOutlineMinus className='scale-up-center pointer' />

                </div>
                : <div className='app-helmerts_infor-link_title ' onClick={() => settoggleContent(true)}>
                    <p className='legal-p-title'>
                        {title}
                    </p>
                    <AiOutlinePlus className='scale-up-center pointer' />

                </div>
            }
            {toggleContent &&
                <p className='legal-p-content scale-up-center'>
                    {content}
                </p>
            }
        </div>
    )
}

export default InforLink