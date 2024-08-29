import React, { useState } from 'react';

import '../Css/Header.css'; // Importing CSS file for styling
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../Css/About.css'; // Importing CSS file for styling
import aboutcard from '../assets/aboutcard.png';
import aboutcard2 from '../assets/aboutcard2.png';
import aboutcard3 from '../assets/aboutcard3.png';
import image from '../assets/image.png';
import aboutline from '../assets/aboutline.png';
import '../App.css';

import { useNavigate } from 'react-router-dom';

const About = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate(); // Correct use of useNavigate

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

    const containerStyle = {
      backgroundImage: `url(${aboutline})`,
      backgroundSize: 'cover',
      width: '100%', // Adjust width as needed
      height: '100px', // Adjust height as needed
      overflow: 'hidden', // Hide overflowing content
      position: 'relative',
    };


    const handleGetStartedClick = () => {
      navigate('/signupform'); // Navigate to /signup route
    };
  return (
    <div className="home-container">
      
      <div className="container-fluid" style={{ backgroundColor: '#fff' }}>


    


</div>


<div className="container-fluid" style={{ backgroundColor: '#0235c3' }}>

     


<div className="row">
  <div className="col-md-12">
    <div className="row justify-content-center">
        <h1 className='text'></h1>
        <form className="d-flex justify-content-center">
          <div className="form-group">
            <input
              type='email'
              className='form-control'
              id='email'
              aria-describedby='emailHelp'
              placeholder='Enter email'
              style={{ height: '50px',width:'300px' }} // Increase input field height
            />
          </div>
          <button type="button" className="btn btn-primary btn-custom btn-custom-size" onClick={handleGetStartedClick}>Get free link data</button>
          </form>
      </div>

     
  </div>
</div>












</div><br></br>
<div className="row">
  <div className="col-md-12">
    <h1 className="orange-heading">
      Who We Are
    </h1>
    <p>
      We are a dedicated team of SEO experts, developers, and marketers with years of experience in the industry. Our combined expertise and commitment to excellence drive us to develop cutting-edge tools that simplify the complexities of SEO, making it accessible to everyone.
    </p>
    <br />
  </div>
</div>


<div className="row">

 
      <div className="col-md-4 mb-4">
        <div className="card custom-card">
        {<img src={aboutcard} alt="Description of the image" />}

          <div className="card-body">
            <h5 className="card-title">Research</h5>
            <p className="card-text">Migrating your rank Google Analytics to another solution.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card custom-card">
        {<img src={aboutcard2} alt="Description of the image" />}

          <div className="card-body">
            <h5 className="card-title">Customize</h5>
            <p className="card-text">Migrating your rank Google Analytics to another solution.</p>
          </div>
        </div>
      </div>
  
   
      <div className="col-md-4 mb-4">
        <div className="card custom-card">
        {<img src={aboutcard3} alt="Description of the image" />}

          <div className="card-body">
            <h5 className="card-title">Targeting</h5>
            <p className="card-text">Migrating your rank Google Analytics to another solution. </p>
          </div>
        </div>
      </div>

</div>

<div className="container-fluid">
<div className="container">

<div className="row">
      <div className="col-md-6">
        <h1 className="orange-heading">Who We Are</h1>
        <p>
        <span>S</span>EO strategies help you to rank higher on the search engine’s results page (SERP). This means that when your target customers search for products and services that your industry offers to find your website.
        </p>
        <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
          <li>{tickSymbol} User-Friendly Interface</li>
          <li>{tickSymbol} Advanced reporting and analytics</li>
          <li>{tickSymbol} Customizable branding options</li>
          <li>{tickSymbol} Start your journey to success</li>
        </ul>
        <button class="button-txt">Explore  More</button>

      </div>
      <div className="col-md-6">
      {<img src={image} alt="Description of the image" />}
      </div>
    </div>


</div>
</div>
<br></br>

<marquee  className="marque"style={containerStyle}>
        I can be a React component, multiple React components, or just some text.
</marquee>






</div>

  
  );
};

export default About;
