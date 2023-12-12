import React, { useEffect, useState } from 'react'
import './CancelOrder.css'
import { Link, json, useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
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

const CancelOrder = ({ Order, localToken, setToggleCancel }) => {
    const [valueNote, setvalueNote] = useState('');
    const handleChangeNote = (event) => {
        setvalueNote(event.target.value);
    };
    const handleClickDiscard = () => {
        setToggleCancel(false);

    }
    const CancelRequestByUser = () => {
        const URL_REQUEST = 'http://localhost:8000/api/cancel-order-by-user/' + Order.id;
        const formData = new FormData();
        formData.append('note', valueNote);
        axios.post(URL_REQUEST, formData, {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${localToken.token}`
            }
        })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        setTimeout(() => {
            window.location.reload();
        }, 500);
    }
    const CancelRequestByShipper = () => {
        const URL_REQUEST = 'http://localhost:8000/api/cancel-order-by-shipper/' + Order.id;
        const formData = new FormData();
        formData.append('note', valueNote);
        axios.post(URL_REQUEST, formData, {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${localToken.token}`
            }
        })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        setTimeout(() => {
            window.location.reload();
        }, 500);
    }
    const CancelRequestByManager = () => {
        const URL_REQUEST = 'http://localhost:8000/api/cancel-order-by-manager/' + localToken.user.id + '/' + Order.id;
        const formData = new FormData();
        formData.append('note', valueNote);
        axios.post(URL_REQUEST, formData, {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${localToken.token}`
            }
        })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        setTimeout(() => {
            window.location.reload();
        }, 500);
    }
    const handleClickCancel = () => {

        if (localToken.user.role === 'user') {
            CancelRequestByUser();
        }
        if (localToken.user.role === 'shipper') {
            CancelRequestByShipper();
        }
        if (localToken.user.role === 'manager') {
            CancelRequestByManager();
        }
    }
    return (
        <div className='app-helmerts-cancel_order'>
            <div className='app-helmerts-cancel_order-box'>
                <div className='app-helmerts-cancel_order-heading'>
                    <h1>Do you want to cancel order?</h1>

                </div>
                <div className='app-helmerts-cancel_order-content'>
                    <div className='app-helmerts-cancel_order-content-input'>
                        <TextField
                            required
                            id="note"
                            label="Reason"
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
                    <div className='app-helmerts-cancel_order-content-btn'>
                        <button className='button_default btn-transition'
                            onClick={handleClickDiscard}>
                            Discard
                        </button>
                        <button className='button_default btn-transition'
                            onClick={handleClickCancel}>
                            Confirm
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
export default CancelOrder