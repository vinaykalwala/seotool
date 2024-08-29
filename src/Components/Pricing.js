import React, { useState } from 'react';


import '../Css/Header.css'; // Importing CSS file for styling
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../Css/Pricing.css'; // Importing CSS file for styling

import aboutline from '../assets/aboutline.png';
import meet from '../assets/meet.png';

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
  return (
    <div className="home-container">
      
      <div className="container-fluid" style={{ backgroundColor: '#fff' }}>




</div>


<div className="container-fluid" style={{ backgroundColor: '#0235c3' }}>

     

    <div className="row">
  <div className="col-md-12">
   
      <div className="col-md-6 text-center"> {/* Adjust column size and alignment */}
        <h1 className='text'>Plans & pricing</h1>
        <p className='text'>We’ve been crawling the entire web 24/7 since 2010, indexing and structuring petabytes of information. Get access to these insights with an Ahrefs subscription and use them to improve your business.</p><br></br>
        <br></br>
        {/* <button className="btn-custom">Get Started</button> */}
      </div>
  

      <div className="col-md-7">

        </div>
  </div>
</div>



</div>



<div className="container-fluid" >

<div className="container">
<div className="row">
<div class="col-12 col-sm-8 col-md-6 col-lg-4">
      <div class="card text-center price-card">
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
          <li class="list-group-item"><i class="fas fa-male text-success mx-2"></i>SERP history</li>
          <li class="list-group-item"><i class="fas fa-venus text-success mx-2"></i>Page inspect</li>
          </ul>
        <div class="card-footer border-top-0">
        <button class="button-txt">Explore  More</button>
        </div>
      </div>
    </div>
   
    <div class="col-12 col-sm-8 col-md-6 col-lg-4">
      <div class="card text-center">
        <div class="card-header text-center border-bottom-0 bg-transparent text-success pt-4">
          <h5>Pay as You Go</h5>
        </div>
        <div class="card-body">
          <h1>$499</h1>
          <h5 class="text-muted"><small>Taxes per Month</small></h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><i class="fas fa-male text-success mx-2"></i> Projects </li>
          <li class="list-group-item"><i class="fas fa-venus text-success mx-2"></i> Years History</li>
          <li class="list-group-item"><i class="fas fa-gavel text-success mx-2"></i> 750 credits per user /mo</li>
        </ul>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><i class="fas fa-male text-success mx-2"></i>All in Lite, plus:</li>
          <li class="list-group-item"><i class="fas fa-venus text-success mx-2"></i>Content Explorer</li>
          <li class="list-group-item"><i class="fas fa-venus text-success mx-2"></i>Batch Analysis</li>

          <li class="list-group-item"><i class="fas fa-venus text-success mx-2"></i>SERP comparison</li>

          <li class="list-group-item"><i class="fas fa-venus text-success mx-2"></i>More in Site Explorer:</li>

          <li class="list-group-item"><i class="fas fa-venus text-success mx-2"></i>Portfolios New</li>

          <li class="list-group-item"><i class="fas fa-venus text-success mx-2"></i>Portfolios New</li>

          </ul>
        <div class="card-footer border-top-0">
        <button class="button-txt">Explore  More</button>
        </div>
      </div>
    </div>

    <div class="col-12 col-sm-8 col-md-6 col-lg-4">
      <div class="card text-center">
        <div class="card-header text-center border-bottom-0 bg-transparent text-success pt-4">
          <h5>Pay as You Go</h5>
        </div>
        <div class="card-body">
          <h1>$699</h1>
          <h5 class="text-muted"><small>Taxes per Month</small></h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><i class="fas fa-male text-success mx-2"></i>  50 Projects </li>
          <li class="list-group-item"><i class="fas fa-venus text-success mx-2"></i>5 years of history</li>
          <li class="list-group-item"><i class="fas fa-gavel text-success mx-2"></i>1,000 credits per user /mo</li>
        </ul>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><i class="fas fa-male text-success mx-2"></i>All in Standard, plus:</li>
          <li class="list-group-item"><i class="fas fa-venus text-success mx-2"></i>Web Explorer</li>
          <li class="list-group-item"><i class="fas fa-venus text-success mx-2"></i>Images, Video, News search volume N</li>
          <li class="list-group-item"><i class="fas fa-venus text-success mx-2"></i>More in Site Explorer:</li>
          <li class="list-group-item"><i class="fas fa-venus text-success mx-2"></i>Forecasting S</li>
          </ul>
        <div class="card-footer border-top-0">
        <button class="button-txt">Explore  More</button>
        </div>
      </div>
    </div>

  </div>
  </div>
  </div>
  <div class="container-fluid">
    <div class="container">
      <div class="row">
        <section>
          <h3 class="text-center mb-4 pb-2 text-orange fw-bold">Frequently asked questions</h3>
          <p class="text-center mb-5">
            Find the answers for the most frequently asked questions below
          </p>

          <div class="row">
            <div class="col-md-6 col-lg-4 mb-4">
              <div class="faq-card">
                <h6 class="mb-3 text-orange"><i class="far fa-paper-plane text-orange pe-2"></i> A simple
                  question?</h6>
                <p>
                  <strong><u>Absolutely!</u></strong> We work with top payment companies which guarantees
                  your
                  safety and
                  security. All billing information is stored on our payment processing partner.
                </p>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 mb-4">
              <div class="faq-card">
                <h6 class="mb-3 text-orange"><i class="fas fa-pen-alt text-orange pe-2"></i> A question
                  that
                  is longer then the previous one?</h6>
                <p>
                  <strong><u>Yes, it is possible!</u></strong> You can cancel your subscription anytime in
                  your
                  account. Once the subscription is
                  cancelled, you will not be charged next month.
                </p>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 mb-4">
              <div class="faq-card">
                <h6 class="mb-3 text-orange"><i class="fas fa-user text-orange pe-2"></i> A simple
                  question?
                </h6>
                <p>
                  Currently, we only offer monthly subscription. You can upgrade or cancel your monthly
                  account at any time with no further obligation.
                </p>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 mb-4">
              <div class="faq-card">
                <h6 class="mb-3 text-orange"><i class="fas fa-rocket text-orange pe-2"></i> A simple
                  question?
                </h6>
                <p>
                  Yes. Go to the billing section of your dashboard and update your payment information.
                </p>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 mb-4">
              <div class="faq-card">
                <h6 class="mb-3 text-orange"><i class="fas fa-home text-orange pe-2"></i> A simple
                  question?
                </h6>
                <p><strong><u>Unfortunately no</u>.</strong> We do not issue full or partial refunds for any
                  reason.</p>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 mb-4">
              <div class="faq-card">
                <h6 class="mb-3 text-orange"><i class="fas fa-book-open text-orange pe-2"></i> Another
                  question that is longer than usual
                </h6>
                <p>
                  Of course! We’re happy to offer a free plan to anyone who wants to try our service.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>


  <div class="container">
    <div class="row">
     
    <div className="col-md-6">
      <h2 style={{color: 'orange'}}>Custom Enterprise Plans</h2>
      <p>Tailored solutions for large enterprises and organizations with specific requirements.</p>
      <ul>
        <li style={{color: 'orange', fontSize: '20px'}}><i className="fas fa-arrow-circle-right text-primary"></i> Customized Feature Set</li>
        <li style={{color: 'orange', fontSize: '20px'}}><i className="fas fa-arrow-circle-right text-primary"></i> Dedicated Account Manager</li>
        <li style={{color: 'orange', fontSize: '20px'}}><i className="fas fa-arrow-circle-right text-primary"></i> On-site Training and Support</li>
        <li style={{color: 'orange', fontSize: '20px'}}><i className="fas fa-arrow-circle-right text-primary"></i> SLA (Service Level Agreement)</li>
        <li style={{color: 'orange', fontSize: '20px'}}><i className="fas fa-arrow-circle-right text-primary"></i> Custom Pricing</li>
      </ul>   
    </div>
   
      <div class="col-md-6">
        {/* <h2>Image Column</h2> */}
        {<img src={meet} alt="Description of the image" />}
      </div>
    </div>
  </div>



</div>
  
  );
};

export default About;
