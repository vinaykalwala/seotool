import React, { useState } from 'react';

import '../Css/Header.css';
import '../Css/Contact.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import '../Css/About.css'; // Importing CSS file for styling
import CA from '../assets/CA.png';
import { MDBContainer, MDBBtn, MDBInput, MDBTextArea,MDBCheckbox } from 'mdb-react-ui-kit'; // Added MDBTextArea


import { useNavigate } from 'react-router-dom';

const About = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate(); // Correct use of useNavigate
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission,
    // such as sending the form data to a server
    console.log('Form data submitted:', formData);
  };
  // Function to handle the navigation toggle
  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };
  const tickSymbol = (
    <span className="tick-symbol">✔</span>
  );

  const handleSignupClick = () => {
    navigate('/signup');
  };
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3, // Number of cards to show at once
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 768, // Adjust number of cards shown for different screen sizes
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    }

    


  return (
    <div className="home-container">
      
      <div className="container-fluid" style={{ backgroundColor: '#fff' }}>




</div>


<div className="container-fluid" style={{ backgroundColor: '#0235c3' }}>

     <br></br>


    <div className="row">
  <div className="col-md-12">
   
      <div className="col-md-12 text-center"> {/* Adjust column size and alignment */}
        <h1 className='text'>Contact us</h1>
        <h1 className='text'></h1><br></br>
        <br></br>
      </div>
  

      <div className="col-md-7">

        </div>
  </div>
</div>


</div>
<br></br><br></br>



<div className="container-fluid" >
<div className="container">
     <div class="row">  

     <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title card-title-blue">Gmial us</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">
            <i className="fas fa-envelope"></i> email@example.com
          </p>
         
        </div>
      </div>

      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Call us at</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">
            <i className="fas fa-phone"></i> (123) 456-7890
          </p>
  
        </div>
      </div>

      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Location</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">
            <i className="fas fa-map-marker-alt"></i> 123 Main St, Anytown, USA
          </p>
      
        </div>
      </div>
    </div>

</div>

</div>



<div className="container-fluid" style={{}}>
<div className="container">
     <div class="row">  
     <h2 style={{ color: 'orange' }}>Get in touch with us</h2>
     <div class="col-md-6">  

<div className="container">
<form id='form' className='text-center' style={{ width: '100%', maxWidth: '300px' }}>

      <MDBInput label='Name' v-model='name' wrapperClass='mb-4' />

      <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' />

      <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' />

      <MDBTextArea wrapperClass='mb-4' label='Message' />

      {/* <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' /> */}

      <MDBBtn color='primary' block className='my-4'>
        Send
      </MDBBtn>
    </form>
    </div>

</div>


<div class="col-md-6">  

{<img src={CA} alt="Description of the image" />}

</div>
</div>
</div>
</div>


<div className="container-fluid">
      <div className="container">
        <div className="row"> 
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5403.997110073088!2d78.52381813504765!3d17.364567547603485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99001ae0bbed%3A0xdc9e10c4d03ffd7!2sSRI%20SHUBHAM%20JEWELLERS!5e0!3m2!1sen!2sin!4v1717136433692!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>












</div>

  
  );
};

export default About;
