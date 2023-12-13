import React, { useEffect, useState } from 'react'
import './WritePreview.css'
import TextField from '@mui/material/TextField';
import 'react-phone-input-2/lib/style.css'
import { styled } from '@mui/material/styles';
import axios from 'axios';
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const WritePreview = ({ Order, localToken, settoggleWriteReview }) => {
    const [valueNote, setvalueNote] = useState('');
    const handleChangeNote = (event) => {
        setvalueNote(event.target.value);
    };
    const handleClickDiscard = () => {
        settoggleWriteReview(false);
    }

    const RequestComment = () => {
        const URL_REQUEST = 'http://localhost:8000/api/comments';
        const formData = new FormData();
        formData.append('order_id', Order.id);
        formData.append('content', valueNote);
        axios.post(URL_REQUEST, formData, {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${localToken.token}`
            }
        })
            .then(response => {
                console.log(response.data);
                settoggleWriteReview(false);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className='app-helmerts-comment_order'>
            <div className='app-helmerts-comment_order-box'>
                <div className='app-helmerts-comment_order-heading'>
                    <h1>Please leave your useful review, sincerely !</h1>
                </div>
                <div className='app-helmerts-comment_order-content'>
                    <div className='app-helmerts-comment_order-content-input'>
                        <TextField
                            required
                            id="note"
                            label="Review"
                            variant="outlined"
                            value={valueNote}
                            onChange={handleChangeNote}
                            type='text'
                            autoComplete="on"
                            style={commonTextFieldStyle}
                            InputLabelProps={{
                                classes: commonInputLabelStyle,
                            }}
                            InputProps={{
                                style: commonInputPropsStyle,
                                classes: commonInputClasses,
                            }}
                        />
                    </div>
                    <div className='app-helmerts-comment_order-content-btn'>
                        <button className='button_default btn-transition'
                            onClick={handleClickDiscard}>
                            Discard
                        </button>
                        <button className='button_confirm btn-transition'
                            onClick={RequestComment}>
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};
const commonTextFieldStyle = {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 'none',
    border: '0px solid var(--color-p)',
    outline: 'none',
    background: 'transparent',
};

const commonInputLabelStyle = {
    root: 'custom-input-label',
};

const commonInputPropsStyle = {
    color: 'var(--color-p)',
    backgroundColor: 'transparent',
    borderRadius: '0rem',
    border: '0rem solid white',
    outline: 'none',
    fontSize: '13px',
    background: 'transparent',
    width: '100%',
};

const commonInputClasses = {
    root: 'custom-input-root',
    notchedOutline: 'custom-notched-outline',
    focused: 'custom-focused',
};

export default WritePreview