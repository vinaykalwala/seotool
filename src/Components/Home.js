import support from '../assets/support.webp'; // Adjust the file path and name accordingly
import '../Css/Header.css'; // Importing CSS file for styling
import '../Css/Mainheader.css'; // Importing CSS file for styling
import Swal from 'sweetalert2';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick'; // Import Slider component from react-slick


import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate();

  const [username, setUsername] = useState('');

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout!',
    });

    if (result.isConfirmed) {
      localStorage.removeItem('username');
      localStorage.removeItem('token'); // If you are storing a token
      navigate('/login');
    }
  };

  const handleSigninClick = () => {
    navigate('/login');
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
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
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    setUsername(storedUsername);
  }, []);
  return (
    <div className="home-container">
      
      <div className="container-fluid" style={{ backgroundColor: '#fff' }}>


    


</div>


<div className="container-fluid" style={{ backgroundColor: '#0235c3' }}>

    


    <div className="row">
  <div className="col-md-12">
    <div className="d-flex justify-content-center align-items-center">
      <div className="col-md-8 text-center"> {/* Adjust column size and alignment */}
        <h3 className='text'>Thinking about Digital Marketing, get the prolific results with one tool.</h3>
        <h1 className='text'></h1><br></br>
        <br></br>
        {username && <p>Welcome, {username}!</p>}

        <button className="btn-custom">Get Started</button>
      </div>
    </div>
  </div>
</div>


</div><br></br>















<div className='container-fluid'>
<div className='container'>
  <div className='row'>

<div className='col-md-6'>

</div>
<div className='col-md-6'>

      {/* <CCarousel>
        <CCarouselItem>
          <CImage className="d-block w-100" src={slide1} alt="Slide 1"/>
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={slide2} alt="Slide 2"/>
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={slide3} alt="Slide 3"/>
        </CCarouselItem>
      </CCarousel><br></br> */}
      </div>
      </div>
      </div>
      </div>

<div className="container-fluid">

<div className="container">

<div className="row">

<Slider {...settings}>

      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Position Tracking</h5>
          <p className="card-text">Position tracking is the process of tracking an object's or person's precise location using technologies such as GPS, RFID, Wi-Fi, Bluetooth, INS, and UWB for a variety of uses. </p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

      <div className="card text-center" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title"> Site Audit</h5>
          <p className="card-text">To find areas for development and maximize online presence, site audit information includes a thorough examination and review of a website's performance, including SEO elements, technical concerns, content quality, and user experience. 
</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

      <div className="card text-right" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title"> Social Poster</h5>
          <p className="card-text">A social poster is a graphic or digital image that uses attention-grabbing imagery and short text to promote events, spread messages, or increase awareness on social media platforms. </p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div className="card text-right" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Position Tracking</h5>
          <p className="card-text"> Position tracking is the process of tracking an object's or person's precise location using technologies such as GPS, RFID, Wi-Fi, Bluetooth, INS, and UWB for a variety of uses. 
</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div className="card text-right" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Social Tracker</h5>
          <p className="card-text">To provide insights and measure performance metrics for specific people, brands, or campaigns, a social tracker keeps an eye on and evaluates social media activity, engagement, and trends. </p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div className="card text-right" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Keyword Too</h5>
          <p className="card-text">A keyword tool is an online application that helps with pay-per-click (PPC) and search engine optimization (SEO) by identifying and analyzing suitable keywords.  
</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div className="card text-right" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title"> Backlink Audit</h5>
          <p className="card-text"> The practice of analyzing all inbound links to a website to determine their quality, identify harmful links, and enhance site health and search engine ranking is known as a backlink audit. 
</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div className="card text-right" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Backlink Analytic</h5>
          <p className="card-text"> Backlink analytics is the process of analyzing the volume, caliber, and origins of inbound links to a website in order to determine its authority, efficacy as a link-building tool, and influence on search engine rankings. </p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
</Slider>
    </div>
    
    </div>
   </div>



   <div className="container-fluid">

<div className="container">

<div className="row">


<div className="col-md-6">

<div className="quote-container">
            <h2 className="quote-text">
            SEO, Content Marketing, Social Media Marketing, PPC, and many more digital marketing strategies to rank higher and get more organic traffic.
            </h2>
          </div>

</div>
<div className="col-md-5">



</div>
</div></div>


   
    </div>




    <div className="container-fluid"  style={{ backgroundColor: '#f36225' }}>


    <div className="container"  style={{ backgroundColor: '#f36225' }}>
  <div className="row">
  <div className="col-md-12 text-center text-white">
  <h2>Pricing</h2>
  <p>SEO empowers brands to climb the digital ladder, enhancing visibility and connecting with target audiences organically.</p>

</div>

    </div>
  </div>

</div>

<div className="container-fluid"  style={{ backgroundColor: '#f36225' }}>

  <div className="container"  style={{ backgroundColor: '#f36225' }}>
  <div class="row">
    <div class="col-12 col-sm-8 col-md-6 col-lg-4">
      <div class="card text-center">
        <div class="card-header text-center border-bottom-0 bg-transparent text-success pt-4">
          <h5>Pay as You Go</h5>
        </div>
        <div class="card-body">
          <h1>$299</h1>
          <h5 class="text-muted"><small>Taxes per Month</small></h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><i class="fas fa-male text-success mx-2"></i> Projects </li>
          <li class="list-group-item"><i class="fas fa-venus text-success mx-2"></i> Months History</li>
          <li class="list-group-item"><i class="fas fa-gavel text-success mx-2"></i> Dashboard</li>
        </ul>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><i class="fas fa-male text-success mx-2"></i>Site Explorer</li>
          <li class="list-group-item"><i class="fas fa-venus text-success mx-2"></i>Key Word Explorer</li>
          </ul>
        <div class="card-footer border-top-0">
          <a href="#" class="text-muted text-uppercase">Basic Plan <i class="fas fa-arrow-right"></i></a>
        </div>
      </div>
    </div>

    <div class="col-12 col-sm-8 col-md-6 col-lg-4">
      <div class="card text-center">
        <div class="card-header text-center border-bottom-0 bg-transparent text-success pt-4">
          <h5>Pay as You Go</h5>
        </div>
        <div class="card-body">
          <h1>$299</h1>
          <h5 class="text-muted"><small>Taxes per Month</small></h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><i class="fas fa-male text-success mx-2"></i> Projects </li>
          <li class="list-group-item"><i class="fas fa-venus text-success mx-2"></i> Months History</li>
          <li class="list-group-item"><i class="fas fa-gavel text-success mx-2"></i>Site Audit</li>
        </ul>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><i class="fas fa-male text-success mx-2"></i>Rank Tracking</li>
          <li class="list-group-item"><i class="fas fa-venus text-success mx-2"></i>Competitive Analysis</li>
</ul>
        <div class="card-footer border-top-0">
          <a href="#" class="text-muted text-uppercase">Standard <i class="fas fa-arrow-right"></i></a>
        </div>
      </div>
    </div>


    <div class="col-12 col-sm-8 col-md-6 col-lg-4">
      <div class="card text-center">
        <div class="card-header text-center border-bottom-0 bg-transparent text-success pt-4">
          <h5>Pay as You Go</h5>
        </div>
        <div class="card-body">
          <h1>$299</h1>
          <h5 class="text-muted"><small>Taxes per Month</small></h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><i class="fas fa-male text-success mx-2"></i> Project
</li>
          <li class="list-group-item"><i class="fas fa-venus text-success mx-2"></i>History up to 3 site audits</li>
          <li class="list-group-item"><i class="fas fa-gavel text-success mx-2"></i>Site Audit</li>
        </ul>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><i class="fas fa-male text-success mx-2"></i>Back link checker</li>
          <li class="list-group-item"><i class="fas fa-venus text-success mx-2"></i>Content Explorer</li>
</ul>
        <div class="card-footer border-top-0">
          <a href="#" class="text-muted text-uppercase">Advanced:<i class="fas fa-arrow-right"></i></a>
        </div>
      </div>
    </div>
  </div>

  <div className="row" style={{ backgroundColor: '#f36225', height: '100px' }}>
      {/* Your content here */}
    </div>
</div>




</div>
<br></br><br></br>







<div className="container-fluid">


<div className="container">
<div className="row">

<div class="col-md-6">
<h2 class="font-large" style={{ fontSize: '30px', color: '#f36225' }}>24/7 Support</h2>
  <p class="text-black font-medium" style={{ fontSize: '20px' }}>
  We, At VAudit, are available 24/7 to help you out of any kind of tricky situations if you get stuck.
Feel free to reach out to us at any given time to get the work done.

</p>
<p class="text-black font-medium" style={{ fontSize: '20px' }}>
Personalized assistance is also available depending the seriousness of the issue.</p><br></br>


<br></br>

<button type="button" class="btn btn-dark">Get Help</button>
</div>

<div className="col-md-6">
  <img src={support} alt="Description of the image" />
</div>

  </div>
  </div>
  </div>
  <br></br><br></br>






  <div className="container-fluid support-section">
  <div className="container" style={{ backgroundColor: '#f36225' }}>
    <div className="row" style={{ backgroundColor: '#f36225' }}>
      <p className="seo-text" style={{ fontSize: '20px', color: 'white', textAlign: 'justify' }}>
        <h1>Learn more about VAudit</h1>
        <ul>
          <li>1. Site Crawl: Crawl your site to find out the areas that need to be improved. Auditing the site provides more detailed information about issues.</li>
          <li>2. Rank Tracking: Track the millions of keywords' performance across the search engines.</li>
          <li>3. Spam Score Checking: Verify your site’s spam score to have an awareness about how to get noticed by search engines.</li>
          <li>4. Domain Authority: Check your domain authority to get noticed by searching robots, improve your site’s domain authority by adding high performing domains to your site as external links.</li>
          <li>5. Link Research: Find out the internal, external, backlinks, and broken links of your site to have a prominent idea of how these links work and how to improve SEO with these.</li>
          <li>6. Keyword Research: The tool provides the efficient keywords that rank higher on the SERP of each search engine.</li>
          <li>7. Competitive Research: Know your competitors in the market to take a step forward.</li>
          <li>8. Domain Overview: Have a look at your domain functionality, authority, overview, and how it plays a key role in Search Engine Optimization.</li>
        </ul>
      </p>
    </div>
  </div>
</div>









</div>

  
  );
};

export default Home;
