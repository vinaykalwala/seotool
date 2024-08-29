import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import support from '../assets/support.webp'; // Adjust the file path and name accordingly
import Marquee from "react-fast-marquee";

import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import '../Css/Header.css'; // Importing CSS file for styling
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick'; // Import Slider component from react-slick
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// Importing images from assets directory

import '../Css/Linkbul.css'; // Importing CSS file for styling

import aboutline from '../assets/aboutline.png';
import trust from '../assets/trust.png';
import traffic from '../assets/traffic.jpg';
import improve from '../assets/improve.jpg';

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
    navigate('/signupform');
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
  return (
    <div className="home-container">
      
      <div className="container-fluid" style={{ backgroundColor: '#fff' }}>


</div>


<div className="container-fluid" style={{ backgroundColor: '#0235c3' }}>
<br></br>

<div className="row justify-content-center align-items-center text-center">
  <div className="col-md-8">
    <h3 className='text1'>
    Understanding Link Building: A Key Component of SEO </h3>
    <h1 className='text'></h1>
    <br />
    <button className="btn-custom">Get Started</button>
  </div>
</div>










</div><br></br>


<div class="blue-border">
        <p>Link building is an essential component of search engine optimization (SEO). It entails obtaining links from various websites to your own. Search engines use these links to explore the web and assist people navigate between pages. Effective link building can improve a website's visibility, reputation, and search engine rankings.</p>
    </div>


    <div class="container my-5">
    <h1 class="text-center text-warning mb-5">Why Link Building Matters?</h1>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col">
        <div class="card h-100 shadow-sm">
          {<img src={improve} class="card-img-top" alt="Line chart showing website ranking improvement" />}
          <div class="card-body">
            <h5 class="card-title">Improves Search Engine Rankings</h5>
            <p class="card-text">Links act as votes, boosting your website's position in search results.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 shadow-sm">
        {<img src={traffic} class="card-img-top" alt="Icon depicting website traffic flow" />}
          <div class="card-body">
            <h5 class="card-title">Increases Web Traffic</h5>
            <p class="card-text">Credible links drive visitors from trusted websites to your content.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 shadow-sm">
          {<img src={trust} class="card-img-top" alt="Handshake icon symbolizing trust" />}
          <div class="card-body">
            <h5 class="card-title">Establishes Authority and Trust</h5>
            <p class="card-text">Links from reputable sources signal valuable and trustworthy content.</p>
          </div>
        </div>
      </div>
    </div>
  </div>


<br></br>











</div>

  
  );
};

export default About;
