import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [csrfToken, setCsrfToken] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const response = await axios.get('http://localhost:8000/csrf-token/');
        setCsrfToken(response.data.csrfToken);
      } catch (error) {
        console.error('Error fetching CSRF token:', error);
      }
    };
    fetchCsrfToken();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/login/', formData, {
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken
        }
      });
  
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('username', response.data.username);
      setUsername(response.data.username);
  
      if (response.data.is_superuser) {
        Swal.fire({
          title: 'Login Successful',
          text: `Welcome Admin ${response.data.username}!`,
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          navigate('/admin'); // Redirect to the admin dashboard
        });
      } else {
        Swal.fire({
          title: 'Login Successful',
          text: `Welcome ${response.data.username}!`,
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          navigate('/'); // Redirect to the home page
        });
      }
    } catch (error) {
      console.error('Login Error:', error);
      setError('Login failed. Please check your credentials.');
    }
  };
  
  return (
    <MDBContainer fluid className="p-3 my-5">
      <MDBRow>
        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Login illustration" />
        </MDBCol>
        <MDBCol col='4' md='6'>
          <form onSubmit={handleSubmit}>
            <MDBInput
              wrapperClass='mb-4'
              label='Email address'
              id='email'
              type='email'
              size="lg"
              name="email"
              onChange={handleChange}
              value={formData.email}
              required
            />
            <MDBInput
              wrapperClass='mb-4'
              label='Password'
              id='password'
              type='password'
              size="lg"
              name="password"
              onChange={handleChange}
              value={formData.password}
              required
            />
            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox
                name='rememberMe'
                id='rememberMe'
                label='Remember me'
              />
              <a href="#!">Forgot password?</a>
            </div>
            <MDBBtn className="mb-4 w-100" size="lg" type="submit">Sign in</MDBBtn>
            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">OR</p>
            </div>
            <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#3b5998' }}>
              <MDBIcon fab icon="facebook-f" className="mx-2" />
              Continue with Facebook
            </MDBBtn>
            <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#55acee' }}>
              <MDBIcon fab icon="twitter" className="mx-2" />
              Continue with Twitter
            </MDBBtn>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </form>
        </MDBCol>
      </MDBRow>
      {username && <p>Welcome, {username}!</p>}
    </MDBContainer>
  );
};

export default Login;
