import React, { useState } from 'react';

import '../Css/Header.css';
import '../Css/Contact.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import '../Css/About.css'; // Importing CSS file for styling
import c from '../assets/c.jpeg';

import A from '../assets/A.png';

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
      
  

<div className="container-fluid" style={{ backgroundColor: '#0235c3' }}>

     

    <div className="row">
  <div className="col-md-12">
   
      <div className="col-md-12 text-center"> {/* Adjust column size and alignment */}
      <h3 className="ppc" style={{ color: '#fff' }}>
  Search Engine Optimization: An Essential Guide
</h3>

        <h1 className='text'></h1><br></br>
        <br></br>
      </div>
  

  </div>
</div>


</div>
<br></br><br></br>


<div className="container-fluid seo-overview">
      <div className="container">
        <div className="row text-center">
          <p>
            The process of making a website or web page more visible and highly ranked in a search engine's organic (non-paid) results is known as search engine optimization, or SEO. SEO is an essential component of digital marketing that includes a range of tactics and approaches meant to raise a website's search engine rankings, increase traffic, and eventually boost conversion rates.
          </p>
        </div>
        <br />
        <div className="row">
          <div className="col-md-12">
            <h3 className="importance-heading">
              The Importance of SEO
            </h3>
            <p>
              The primary goal of SEO is to attract more visitors to a website by ensuring it appears higher on search engine results pages (SERPs) for relevant queries. Higher visibility in search results typically leads to increased traffic and more opportunities to convert prospects into customers. SEO is crucial because:
            </p>
          </div>
        </div>
      </div>
    </div>






<br></br>

<div className="container-fluid what-we-can-do">
      <div className="container">
        <div className="row text-center">
          <h4 className="ppc-text">What we can do for you</h4>
        </div>
        <div className="row">
          <div className="container">
            <div className="nk-block nk-block-features mgb-m30">
              <div className="row">
                <div className="col-lg-4">
                  <div className="feature-card">
                    <div className="feature-icon">
                      <i className="fas fa-chess"></i>
                    </div>
                    <div className="feature-text">
                      <h5 className="title title-sm">PPC Strategy</h5>
                      <p>Maximize your ROI with a data-driven PPC strategy that targets the right audience, optimizes ad performance, and continuously adapts to market trends.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="feature-card">
                    <div className="feature-icon">
                      <i className="fas fa-shopping-cart"></i>
                    </div>
                    <div className="feature-text">
                      <h5 className="title title-sm">Shopping Ads</h5>
                      <p>Shopping ads provide a highly visual and engaging way to showcase your products directly in search results, driving higher click-through rates and increasing sales by reaching customers actively searching for what you offer.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="feature-card">
                    <div className="feature-icon">
                      <i className="fas fa-chart-line"></i>
                    </div>
                    <div className="feature-text">
                      <h5 className="title title-sm">Tracking</h5>
                      <p>Accurate tracking and analytics are essential in PPC campaigns to monitor performance, optimize ad spend, and measure ROI, ensuring every click contributes to your business goals.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="feature-card">
                    <div className="feature-icon">
                      <i className="fas fa-pen"></i>
                    </div>
                    <div className="feature-text">
                      <h5 className="title title-sm">Ad Copywriting</h5>
                      <p>Effective ad copywriting is key to capturing attention and driving conversions; it involves crafting compelling, relevant, and persuasive messages that resonate with your target audience and encourage them to take action.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="feature-card">
                    <div className="feature-icon">
                      <i className="fas fa-key"></i>
                    </div>
                    <div className="feature-text">
                      <h5 className="title title-sm">Keywords</h5>
                      <p>Effective keyword research and selection are crucial for a successful PPC campaign, ensuring your ads reach the most relevant audience and achieve higher conversion rates.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="feature-card">
                    <div className="feature-icon">
                      <i className="fas fa-wrench"></i>
                    </div>
                    <div className="feature-text">
                      <h5 className="title title-sm">PPC Optimization</h5>
                      <p>Continuous PPC optimization is vital for maintaining and improving campaign performance; it involves refining keywords, adjusting bids, testing ad copy, and analyzing data to maximize ROI and achieve your marketing objectives.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>




     <div>
     <div className="container-fluid faq-section">
      <div className="container">
        <h3 className="faq-title">Frequently Asked Questions</h3>
        <div className="row text-center">
          <div className="col-md-6">
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                Accordion 1
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
                Accordion 2
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3-content" id="panel3-header">
                Accordion Actions
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
              </AccordionDetails>
              <AccordionActions>
                <Button>Cancel</Button>
                <Button>Agree</Button>
              </AccordionActions>
            </Accordion>
          </div>
          <div className="col-md-6">
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4-content" id="panel4-header">
                Accordion 1
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5-content" id="panel5-header">
                Accordion 2
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel6-content" id="panel6-header">
                Accordion Actions
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
              </AccordionDetails>
              <AccordionActions>
                <Button>Cancel</Button>
                <Button>Agree</Button>
              </AccordionActions>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
    </div>










</div>

  
  );
};

export default About;
