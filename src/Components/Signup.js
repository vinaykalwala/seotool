import React, { useState } from 'react';
import axios from 'axios';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    company_name: '',
    company_size: '',
    seo_proficiency: '',
    otp: '',
  });
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!otpSent) {
        // Send OTP request
        const response = await axios.post('http://localhost:8000/api/otp/', {
          email: formData.email,
          company_name: formData.company_name,
          company_size: formData.company_size,
          seo_proficiency: formData.seo_proficiency
        });
        if (response.status === 200) {
          setOtpSent(true);
          Swal.fire({
            title: 'OTP Sent!',
            text: 'Please check your email for the OTP.',
            icon: 'info',
            confirmButtonText: 'OK'
          });
        }
      } else {
        // Verify OTP request
        const otpResponse = await axios.post('http://localhost:8000/api/verify-otp/', {
          email: formData.email,
          otp: formData.otp
        });
        if (otpResponse.status === 200) {
          setOtpVerified(true);
          Swal.fire({
            title: 'OTP Verified!',
            text: 'You can now sign up.',
            icon: 'success',
            confirmButtonText: 'OK'
          });
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'Invalid or expired OTP. Please try again.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'An error occurred. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };
  

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/signup/', formData);
      Swal.fire({
        title: 'Success!',
        text: 'Signup successful',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        navigate('/login');
      });
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Signup failed. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>
      <MDBRow>
        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
            The best offer <br />
            <span style={{color: 'hsl(218, 81%, 75%)'}}>for your business</span>
          </h1>
          <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>
        </MDBCol>
        <MDBCol md='6' className='position-relative'>
          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>
              <form onSubmit={handleSubmit}>
                <MDBInput
                  wrapperClass='mb-4'
                  label='Username'
                  id='username'
                  type='text'
                  name='username'
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
                <MDBInput
                  wrapperClass='mb-4'
                  label='Email'
                  id='email'
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <MDBInput
                  wrapperClass='mb-4'
                  label='Password'
                  id='password'
                  type='password'
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <MDBInput
                  wrapperClass='mb-4'
                  label='Company Name'
                  id='company_name'
                  type='text'
                  name='company_name'
                  value={formData.company_name}
                  onChange={handleChange}
                />
                <MDBInput
                  wrapperClass='mb-4'
                  label='Company Size'
                  id='company_size'
                  type='text'
                  name='company_size'
                  value={formData.company_size}
                  onChange={handleChange}
                />
                <MDBInput
                  wrapperClass='mb-4'
                  label='SEO Proficiency'
                  id='seo_proficiency'
                  type='text'
                  name='seo_proficiency'
                  value={formData.seo_proficiency}
                  onChange={handleChange}
                />
                {otpSent && (
                  <MDBInput
                    wrapperClass='mb-4'
                    label='Enter OTP'
                    id='otp'
                    type='text'
                    name='otp'
                    value={formData.otp}
                    onChange={handleChange}
                    required
                  />
                )}
                <div className='d-flex justify-content-center mb-4'>
                  <MDBCheckbox
                    name='subscribe'
                    id='subscribe'
                    label='Subscribe to our newsletter'
                    checked={formData.subscribe}
                    onChange={handleChange}
                  />
                </div>
                <div className="button-container">
                  {!otpSent && (
                    <MDBBtn className='w-50 mb-4 custom-signup-btn' size='md' type='submit'>Send OTP</MDBBtn>
                  )}
                  {otpSent && !otpVerified && (
                    <MDBBtn className='w-50 mb-4 custom-signup-btn' size='md' type='submit'>Verify OTP</MDBBtn>
                  )}
                  {otpVerified && (
                    <MDBBtn className='w-50 mb-4 custom-signup-btn' size='md' onClick={handleSignup}>Sign Up</MDBBtn>
                  )}
                  <MDBBtn className='w-50 mb-4 custom-login-btn' size='md' onClick={() => navigate('/login')}>Login</MDBBtn>
                </div>
              </form>
              <div className="text-center">
                <p>or sign up with:</p>
                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>
                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>
                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>
                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm"/>
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Signup;
