import React, { useState } from 'react';

import '../Css/Header.css';
import '../Css/Search.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import engine from '../assets/engine.jpg';
import engine1 from '../assets/engine1.jpg';
import sem from '../assets/sem.webp';
import sem1 from '../assets/sem1.webp';
import sem2 from '../assets/sem2.png';
import sem4 from '../assets/sem4.webp';
import sem5 from '../assets/sem5.webp';
import sem6 from '../assets/sem6.jpg';
import sem7 from '../assets/sem7.webp';
import bg from '../assets/bg.jpg';








import '../Css/About.css'; // Importing CSS file for styling
import CA from '../assets/CA.png';


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
   
        <h1 className='text'>Search Engine Marketing</h1>
        <div class="card-body">
      <p style={{color: "white"}}>
        Search engine marketing (SEM) is a critical aspect of digital marketing. It focuses on increasing a website's visibility on search engine results pages (SERPs) through paid advertising. Businesses leverage SEM to drive traffic, convert leads into customers, and ultimately grow. This guide delves into the intricacies of SEM, exploring strategies, best practices, and its overall significance.
      </p>
    </div>
        <h1 className='text'></h1><br></br>
        <br></br>
    
  

      </div>
  </div>
</div>
<div class="container">
  <div class="card">
    <div class="row">
      <h1 style={{backgroundColor: "#FF8C00	",color:"white",padding:"20px"}}>What is Search Engine Marketing?</h1>
      <div class="col-md-6">

      {<img src={engine} alt="Description of the image" />}   
         </div>
      <div class="col-md-6">
        <div class="card-body">
          <p>
            SEM encompasses all efforts to enhance a website's exposure on search engines like Google, Bing, and Yahoo. Unlike Search Engine Optimization (SEO) that targets organic results, SEM primarily utilizes paid tactics. These include advertising models like Cost-Per-Thousand Impressions (CPM), Cost-Per-Acquisition (CPA), and Pay-Per-Click (PPC).
          </p>
        </div>
      </div>
    </div>
  </div>
</div><br></br><br></br>
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <div class="card-body">
        <h2 style={{ color: "orange" }}>Importance of SEM</h2>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <i class="fas fa-eye" style={{fontSize:"24px"}}></i> Instant Visibility: SEM makes it possible for advertisements to show up on the first page of search results right away, guaranteeing excellent visibility right now.  
          </li>
          <li class="list-group-item">
            <i class="fas fa-bullseye" style={{fontSize:"24px"}}></i> Targeted Advertising: Based on keywords, location, demographics, and even the time of day, advertisers can target particular audiences.
          </li>
          <li class="list-group-item">
            <i class="fas fa-chart-line" style={{fontSize:"24px"}}></i> Measurable Outcomes: SEM offers extensive metrics that let companies track the effectiveness of their ads and make real-time strategy adjustments.
          </li>
          <li class="list-group-item">
            <i class="fas fa-expand-arrows-alt" style={{fontSize:"24px"}}></i> Scalability: Based on budget and performance, SEM campaigns can be scaled up or down, giving marketers flexibility. 
          </li>
        </ul>
      </div>
    </div>
    <div class="col-md-6">
      <img src={engine1} alt="A visual representation of Search Engine Marketing (SEM)" class="img-fluid" />
    </div>
  </div>
</div>
<br></br><br></br>

<div class="container">
  <h1 class="text-center display-4" style={{ padding: "20px",fontWeight:'normal',color:'orange' }}>Key Components of SEM</h1>

  <div class="row">
    <div class="col-md-6 order-md-2">
    {<img src={sem} alt="Description of the image" />} 
    {<img src={sem1} alt="Description of the image" />}  

    </div>
    <div class="col-md-6 order-md-1">
      <div class="card shadow-sm border-info">
        <div class="card-header bg-info text-white">
          <h3>Keyword Research</h3>
        </div>
        <div class="card-body">
          <p>
            <i class="fas fa-search text-primary"></i>  <span class="h5">Unlocking the Secrets:</span> Keyword research is the foundation of successful SEM. Tools like Ahrefs, SEMrush, and Google Keyword Planner help you find the keywords your target audience uses.
          </p>
        </div>
      </div>

      <div class="card shadow-sm mt-4 border-warning text-center">
        <div class="card-header bg-warning text-white">
          <h3>Ad Creation</h3>
        </div>
        <div class="card-body">
          <p>
            <i class="fas fa-magnet text-warning"></i>  <span class="h5">Crafting Captivating Ads:</span> Compelling headlines, informative descriptions, and clear calls to action (CTAs) are key. Enhance performance with sitelinks, call buttons, and ad extensions.
          </p>
        </div>
      </div>

      <div class="card shadow-sm mt-4 border-success text-center">
        <div class="card-header bg-success text-white">
          <h3>Landing Pages</h3>
        </div>
        <div class="card-body">
          <p>
            <i class="fas fa-sign-in-alt text-success"></i>  <span class="h5">Conversion Champions:</span> Landing pages need to be optimized for conversions and relevant to your ads. Provide a seamless user experience and persuasive content with clear CTAs.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="row mt-4 justify-content-center">
    <div class="col-md-6 mb-4">
      <div class="card shadow-sm border-primary text-center">
        <div class="card-header bg-primary text-white">
          <h3>Bid Management & Ad Auction</h3>
        </div>
        <div class="card-body">
          <p>
            <i class="fas fa-gavel text-primary"></i>  <span class="h5">Bidding for Visibility:</span> Platforms like Google Ads offer automated bidding strategies to optimize bids for clicks, conversions, or return on ad spend (ROAS). Your bid and ad Quality Score determine placement in the ad auction.
          </p>
        </div>
      </div>
    </div>

    <div class="col-md-6 mb-4">
      <div class="card shadow-sm border-dark text-center">
        <div class="card-header bg-dark text-white">
          <h3>Quality Score Explained</h3>
        </div>
        <div class="card-body">
          <p>
            <i class="fas fa-star text-warning"></i>  <span class="h5">The Quality Score Equation:</span> A combination of factors affects your Quality Score, including predicted click-through rate (CTR), landing page experience, and ad relevance. A higher Quality Score leads to better ad placement and potentially lower costs.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

        <div className="container mt-5">
            <h2 className="text-center mb-4" style={{ color: "orangered" }}>Charming SEM Strategies</h2>
            <div className="d-flex flex-wrap align-items-stretch" style={{ padding: "20px", borderRadius: "10px", backgroundColor: "#f8f9fa" }}>
                <div className="col-md-4 p-0">
                    <img src={sem2} alt="Description of the image" className="img-fluid rounded h-100" style={{ objectFit: "cover" }} />
                </div>
                <div className="col-md-8 d-flex flex-column justify-content-center">
                    <div className="p-3">
                        <div className="d-flex align-items-center mb-4">
                            <i className="fas fa-chart-bar" style={{ color: "yellow", fontSize: "30px", marginRight: "10px" }}></i>
                            <h3>Competitive Analysis</h3>
                        </div>
                        <p>
                            <i className="fas fa-arrow-right" style={{ color: "black", fontSize: "20px", marginRight: "10px" }}></i>
                            Spy on your rivals (nicely)! Analyze their keywords, ad wording, and bidding for hidden opportunities.
                        </p>
                        <hr />

                        <div className="d-flex align-items-center mt-4 mb-4">
                            <i className="fas fa-flask" style={{ color: "blue", fontSize: "30px", marginRight: "10px" }}></i>
                            <h3>A/B Testing</h3>
                        </div>
                        <p>
                            <i className="fas fa-arrow-right" style={{ color: "black", fontSize: "20px", marginRight: "10px" }}></i>
                            Be a mad scientist! Experiment with various landing pages, bids, and ad variations to brew up campaign success.
                        </p>
                        <hr />

                        <div className="d-flex align-items-center mt-4 mb-4">
                            <i className="fas fa-bullseye" style={{ color: "orange", fontSize: "30px", marginRight: "10px" }}></i>
                            <h3>Remarketing</h3>
                        </div>
                        <p>
                            <i className="fas fa-arrow-right" style={{ color: "black", fontSize: "20px", marginRight: "10px" }}></i>
                            Give website visitors a gentle nudge! Remind them with remarketing ads to convert those warm leads.
                        </p>
                        <hr />

                        <div className="d-flex align-items-center mt-4 mb-4">
                            <i className="fas fa-map-marker-alt" style={{ color: "red", fontSize: "30px", marginRight: "10px" }}></i>
                            <h3>Local SEM</h3>
                        </div>
                        <p>
                            <i className="fas fa-arrow-right" style={{ color: "black", fontSize: "20px", marginRight: "10px" }}></i>
                            Get people walking through your door! Target local searches with location-specific keywords and geo-targeting.
                        </p>
                        <hr />

                        <div className="d-flex align-items-center mt-4 mb-4">
                            <i className="fas fa-plus-square" style={{ color: "green", fontSize: "30px", marginRight: "10px" }}></i>
                            <h3>Ad Extensions</h3>
                        </div>
                        <p>
                            <i className="fas fa-arrow-right" style={{ color: "black", fontSize: "20px", marginRight: "10px" }}></i>
                            Supercharge your ads! Use extensions like callouts, snippets, and prices to grab attention and boost clicks.
                        </p>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
<br></br><br></br>

        <div class="container">
    <h1 class="text-center mb-4" style={{ color: "orangered" }}>Best Techniques</h1>
    <div class="row">
        <div class="col-lg-6">
            <div class="card technique-card">
            {<img src={sem4} alt="Description of the image" />} 
                <div class="card-body">
                    <h5 class="card-title" style={{ color: "orangered" }}>High-Quality Content</h5>
                    <p class="card-text">High-quality content is essential, even for sponsored search. Make sure the material on your landing page and in your ads is relevant, of the highest calibre, and offers the user value.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="card technique-card">
            {<img src={sem5} alt="Description of the image" />} 
                <div class="card-body">
                    <h5 class="card-title" style={{ color: "orangered" }}>Constant Monitoring and Optimization</h5>
                    <p class="card-text">Track the results of your campaigns on a regular basis and make adjustments based on the information. To enhance results, change the bids, keywords, and ad wording as necessary.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="card technique-card">
            {<img src={sem6} alt="Description of the image" />} 
                <div class="card-body">
                    <h5 class="card-title" style={{ color: "orangered" }}>Effective Budget Management</h5>
                    <p class="card-text">To optimize return on investment, increase spending on keywords and ads that are working well while decreasing expenditure on those that are not. ads while scaling back on underperforming ones.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="card technique-card">
            {<img src={sem7} alt="Description of the image" />} 
                <div class="card-body">
                    <h5 class="card-title" style={{ color: "orangered" }}>Keep Up with Trends</h5>
                    <p class="card-text">The world of digital marketing is always changing. You may gain a competitive advantage by keeping up with the most recent trends, algorithm modifications, and ad platform feature additions.</p>
                </div>
            </div>
        </div>
    </div>
</div>
<br></br><br></br>
<div id="container" >
    <h1 style={{ color: "white" }}>An effective strategy for increasing your website's online presence and bringing in targeted visitors is search engine marketing.</h1>
    <p style={{ color: "white",textAlign:"center" }}>Businesses may effectively utilize search engine marketing (SEM) to accomplish their marketing objectives by comprehending its essential elements, tactics, and best practices. Search engine marketing can be complicated, but this guide's insights will help you navigate it and succeed in your digital marketing efforts whether you're new to SEM or trying to improve your current tactics.</p>
</div>






</div>

  
  );
};

export default About;
