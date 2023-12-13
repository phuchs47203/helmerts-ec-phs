import React, { useEffect, useState } from 'react'
import './ConfirmOrder.css'
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

const ConfirmOrder = ({Order, localToken, settoggleConfim }) => {
    const [valueNote, setvalueNote] = useState('');
    const handleChangeNote = (event) => {
        setvalueNote(event.target.value);
    };
    const handleClickDiscard = () => {
        settoggleConfim(false);

    }

    const ConfirmRequestByShipper = () => {
        const URL_REQUEST = 'http://localhost:8000/api/update-order-by-shipper/' + Order.id;

        axios.post(URL_REQUEST, null, {
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
        }, 2000);
    }
    // const ConfrimRequestByManager = () => {
    //     const URL_REQUEST = 'http://localhost:8000/api/update-order-by-manager/' +  Order.id;
    //     const formData = new FormData();
    //     formData.append('note', valueNote);
    //     formData.append('manager_id', );
    //     formData.append('shipper_id', );

    //     axios.post(URL_REQUEST, formData, {
    //         headers: {
    //             Accept: "application/json",
    //             Authorization: `Bearer ${localToken.token}`
    //         }
    //     })
    //         .then(response => {
    //             console.log(response.data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    //     setTimeout(() => {
    //         window.location.reload();
    //     }, 2000);
    // }
    const handleClickConfirm = () => {
        if (localToken.user.role === 'shipper') {
            ConfirmRequestByShipper();
        }
        // if (localToken.user.role === 'manager') {
        //     ConfrimRequestByManager();
        // }
    }
    return (
        <div className='app-helmerts-confirm_order'>
            <div className='app-helmerts-confirm_order-box'>
                <div className='app-helmerts-confirm_order-heading'>
                    <h1>Do you want to confirm order?</h1>

                </div>
                <div className='app-helmerts-confirm_order-content'>
                    {/* <div className='app-helmerts-confirm_order-content-input'>
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
                    </div> */}
                    <div className='app-helmerts-confirm_order-content-btn'>
                        <button className='button_default btn-transition'
                            onClick={handleClickDiscard}>
                            Discard
                        </button>
                        <button className='button_confirm btn-transition'
                            onClick={handleClickConfirm}>
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

export default ConfirmOrder