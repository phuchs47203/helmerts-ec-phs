import React, { useEffect, useState } from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'
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
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
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

const Signup = () => {
  const defaultProps = {
    options: top7OptionTitle,
    getOptionLabel: (option) => option.name,
  };
  const flatProps = {
    options: top7OptionTitle.map((option) => option.name),
  };
  const defaultPropsCountry = {
    options: top6OptionLocation,
    getOptionLabel: (option) => option.country,
  };
  const [valueEmail, setValueEmail] = useState('');
  const [valuePassword, setValuePassword] = useState(null);
  const [valueTitle, setValueTitle] = useState(null);
  const [valueCountry, setValueCountry] = useState(null);
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [dateOfBirth, setdateOfBirth] = useState('');
  const [valueDate, setValueDate] = React.useState(dayjs('2000-07-27'));
  // const [valueLocation, setValueLocation] = useState(null);
  const [valueAddressDetails, setvalueAddressDetails] = useState('');
  const [valueCity, setvalueCity] = useState('');
  const [valueDistrict, setvalueDistrict] = useState('');
  useEffect(() => {
    if (valueTitle !== null) {
      console.log(valueTitle.name);
    }
  }, [valueTitle]);
  useEffect(() => {
    if (valueEmail !== null) {
      console.log(valueEmail);
    }
  }, [valueEmail]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleChangeEmail = (event) => {
    setValueEmail(event.target.value);
  };
  const handleChangeFirstName = (event) => {
    setfirstName(event.target.value);
  };
  const handleChangeLastName = (event) => {
    setlastName(event.target.value);
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    if (file) {
      console.log("has file");

      reader.readAsDataURL(file);
      reader.onload = () => {
        setSelectedFile(reader.result);
        console.log(selectedFile);
      }
    }
  }
  const handleChangeAddress = (event) => {
    setvalueAddressDetails(event.target.value);
  };

  const handleChangeCity = (event) => {
    setvalueCity(event.target.value);
  };
  const handleChangeDistrict = (event) => {
    setvalueDistrict(event.target.value);
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




  return (
    <div id='signup' className='app-helmerts-signup-box'>
      <div className='app-helmerts-signup'>
        <div className='app-helmerts-signup-heading'>
          <h1>Create an account</h1>
          <p>
            By creating an account, you agree to accept the&nbsp;
            <Link to="/information" className='link_'>
              General Terms and Conditions
            </Link>
            &nbsp;of Use and that your data will be processed in compliance with the&nbsp;
            <Link to="/information" className='link_'>
              Privacy Policy
            </Link>
            &nbsp;of Helmerts.
          </p>
        </div>
        <div className='app-helmerts-signup-content'>
          <div className='app-helmerts-signup-content-attribute'>
            <div className='app-helmerts-signup-content-attribute-left'>
              <div className='app-helmerts-signup-content-attribute-left-login_information'>
                <div className='app-helmerts-signup-content-attribute-left-login_information-title'>
                  <h1>
                    LOGIN INFORMATION
                  </h1>
                  <p>
                    * Required information
                  </p>
                </div>
                <div className='app-helmerts-signup-content-attribute-left-login_information-content'>
                  <div className='app-helmerts-signup-content-attribute-left-login_information-content-email'>
                    <div className='app-helmerts-signup-content-attribute-left-login_information-content-email-input'>

                      <TextField
                        required
                        id="email"
                        label="E-mail"
                        // variant="outlined"
                        value={valueEmail}
                        onChange={handleChangeEmail}
                        type='email'
                        // autoComplete="current-email"
                        // className='custom-textfield-input'
                        autoComplete="on"
                        style={{
                          backgroundColor: 'white',
                          width: '100%',
                          borderRadius: 'none',
                          border: '0px solid var(--color-p)',
                          outline: 'none',
                          background: 'transparent',
                        }}
                        InputLabelProps={{
                          classes: {
                            root: 'custom-input-label'
                          }
                        }}
                        InputProps={{
                          style: {
                            color: 'var(--color-p)',
                            backgroundColor: 'transparent',
                            borderRadius: '0rem',
                            border: '0rem solid white',
                            outline: 'none',
                            fontSize: '13px',
                            background: 'transparent',
                            width: '100%',
                          },
                          classes: {
                            root: 'custom-input-root',
                            notchedOutline: 'custom-notched-outline',
                            focused: 'custom-focused'
                          }
                        }} />

                    </div>
                  </div>
                  <div className='app-helmerts-signup-content-attribute-left-login_information-content-password'>
                    <div className='app-helmerts-signup-content-attribute-left-login_information-content-password-input'>
                      <TextField
                        required
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
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
                    <div className='app-helmerts-signup-content-attribute-left-login_information-content-password-alert'>
                      <div className='app-helmerts-signup-content-attribute-left-login_information-content-password-alert-title'>
                        <p>
                          For your security, we invite you to fill your password according to the following criteria:
                        </p>
                      </div>
                      <div className='app-helmerts-signup-content-attribute-left-login_information-content-password-alert-list'>
                        <p>
                          At least 10 characters
                        </p>
                        <p>
                          At least 1 uppercase letter
                        </p>
                        <p>
                          At least 1 lowercase letter
                        </p>
                        <p>
                          At least 1 number
                        </p>
                        <p>
                          At least 1 special character
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='app-helmerts-signup-content-attribute-left-personal_information'>
                <div className='app-helmerts-signup-content-attribute-left-personal_information-title'>
                  <h1>
                    PERSONAL INFORMATION
                  </h1>
                </div>
                <div className='app-helmerts-signup-content-attribute-left-personal_information-content'>
                  <div className='app-helmerts-signup-content-attribute-left-personal_information-content-item'>
                    <Autocomplete
                      {...defaultProps}
                      id="disable-clearable"
                      disableClearable
                      value={valueTitle}
                      onChange={(event, newValue) => {
                        setValueTitle(newValue);
                      }}
                      style={commonTextFieldStyle}
                      InputLabelProps={{
                        classes: commonInputLabelStyle,
                      }}
                      InputProps={{
                        style: commonInputPropsStyle,
                        classes: commonInputClasses,
                      }}

                      renderInput={(params) => (
                        <TextField {...params}
                          required
                          label="Title"

                          variant="standard" />
                      )}
                    />
                  </div>
                  <div className='app-helmerts-signup-content-attribute-left-personal_information-content-item'>
                    <TextField
                      required
                      id="name"
                      label="First name "
                      variant="outlined"
                      value={firstName}
                      onChange={handleChangeFirstName}
                      type='text'
                      // autoComplete="current-name"
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
                  <div className='app-helmerts-signup-content-attribute-left-personal_information-content-item'>

                    <TextField
                      required
                      id="name"
                      label="Last name "
                      variant="outlined"
                      value={lastName}
                      onChange={handleChangeLastName}
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
                  <div className='app-helmerts-signup-content-attribute-left-personal_information-content-item'>
                    <Button component="label"
                      variant="contained"

                      style={{
                        backgroundColor: 'var(--color-icon3)',
                        color: 'var(--color-bg)',
                        fontSize: '14px',
                        fontFamily: 'var(--font-family)',
                        fontWeight: '400',
                        textTransform: 'capitalize'
                      }}
                      startIcon={<CloudUploadIcon />}>
                      Choose image profile *
                      <VisuallyHiddenInput
                        type="file"
                        onChange={handleFileChange}
                      //  accept='image/*'
                      />
                    </Button>
                    {selectedFile && (
                      <img src={selectedFile} className='imge-style' alt="no image" />
                    )

                    }

                  </div>
                  <div className='app-helmerts-signup-content-attribute-left-personal_information-content-item'>
                    <PhoneInput
                      className="phone_style"
                      inputStyle={{
                        width: '100%', // Thiết lập chiều dài của phần nhập số điện thoại là 100%
                        backgroundColor: 'var(--color-bg)', // Thiết lập màu nền là yellow
                        color: 'var(--color-p)'
                      }}
                      inputProps={{
                        name: 'phone',
                        required: true,
                        autoFocus: true,

                      }}
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
                  <div className='app-helmerts-signup-content-attribute-left-personal_information-content-item'>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer
                        components={['DatePicker', 'DatePicker']}>
                        <DatePicker
                          label="Date of birth"
                          value={valueDate}
                          onChange={(newValue) => setValueDate(newValue)}
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  </div>
                  {/* <div className='app-helmerts-signup-content-attribute-left-personal_information-content-item'>
                  </div>
                  <div className='app-helmerts-signup-content-attribute-left-personal_information-content-item'>
                  </div> */}
                </div>
              </div>
            </div>
            <div className='app-helmerts-signup-content-attribute-right-billing_information'>
              <div className='app-helmerts-signup-content-attribute-right-billing_information-title'>
                <h1>
                  BILLING INFORMATION
                </h1>
              </div>
              <div className='app-helmerts-signup-content-attribute-right-billing_information-content'>
                <div className='app-helmerts-signup-content-attribute-right-billing_information-content-item'>
                  <Autocomplete
                    {...defaultPropsCountry}
                    id="disable-clearable"
                    disableClearable
                    value={valueCountry}
                    onChange={(event, newValue) => {
                      setValueCountry(newValue);

                    }}
                    style={commonTextFieldStyle}
                    InputLabelProps={{
                      classes: commonInputLabelStyle,
                    }}
                    InputProps={{
                      style: commonInputPropsStyle,
                      classes: commonInputClasses,
                    }}
                    renderInput={(params) => (
                      <TextField {...params} required label="Location" variant="standard" />
                    )}
                  />
                </div>

                <div className='app-helmerts-signup-content-attribute-right-billing_information-content-item'>
                  <TextField
                    required
                    id="city"
                    label="City"
                    variant="outlined"
                    value={valueCity}
                    onChange={handleChangeCity}
                    type='text'
                    // autoComplete="current-name"
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
                <div className='app-helmerts-signup-content-attribute-right-billing_information-content-item'>
                  <TextField
                    required
                    id="district"
                    label="District"
                    variant="outlined"
                    value={valueDistrict}
                    onChange={handleChangeDistrict}
                    type='text'
                    // autoComplete="current-name"
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
                <div className='app-helmerts-signup-content-attribute-right-billing_information-content-item'>
                  <TextField
                    required
                    id="address"
                    label="Address"
                    variant="outlined"
                    value={valueAddressDetails}
                    onChange={handleChangeAddress}
                    type='text'
                    // autoComplete="current-name"
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
                {/* <div className='app-helmerts-signup-content-attribute-right-billing_information-content-item'>
                </div> */}
              </div>
            </div>
          </div>
          <div className='app-helmerts-signup-content-confirm'>
            <div className='line_' />
            <div className='app-helmerts-signup-content-confirm-content'>
              <div className='app-helmerts-signup-content-confirm-content-svg'>
                <FormControlLabel control={<Checkbox />} />
              </div>
              <div className='app-helmerts-signup-content-confirm-content-p'>
                <p>
                  I agree to receive information by email about offers, services, products and events from Hermes or other group companies, in accordance with
                  the&nbsp;<Link to='/information' className='link_'>Privacy Policy</Link>
                  .
                </p>
              </div>
            </div>
            <div className='app-helmerts-signup-content-confirm-button'>
              <button>Create an account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const top6OptionLocation = [
  {
    country: "中国内地"
  },
  {
    country: "Cambodia"
  },
  {
    country: "Indonesia"
  },
  {
    country: "Lao People's Democratic Republic"
  },
  {
    country: "Thailand"
  },
  {
    country: "Viet Nam"
  },
];
const top7OptionTitle = [
  {
    name: "Miss."
  },
  {
    name: "Mr."
  },
  {
    name: "Mrs."
  },
  {
    name: "Ms."
  },
  {
    name: "Dr."
  },
  {
    name: "Pr."
  },
  {
    name: "Hon."
  },
];
export default Signup