import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import support from '../assets/support.webp'; // Adjust the file path and name accordingly
import Marquee from "react-fast-marquee";
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick'; // Import Slider component from react-slick
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// Importing images from assets directory
import slide1 from '../assets/slide1.jpeg';
import slide2 from '../assets/slide2.jpeg';
import slide3 from '../assets/slide3.jpeg';
import aboutcard from '../assets/aboutcard.png';
import aboutcard2 from '../assets/aboutcard2.png';
import aboutcard3 from '../assets/aboutcard3.png';
import S from '../assets/S.png';
import v from '../assets/v.png';
import B from '../assets/B.png';
import LM from '../assets/LM.png';
import KO from '../assets/KO.png';
import LB from '../assets/LB.png';
import KM from '../assets/KM.png';
import image from '../assets/image.png';

import aboutline from '../assets/aboutline.png';
import content from '../assets/content.png';

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

    <br></br>


<div className="row justify-content-center align-items-center text-center">
  <div className="col-md-8">
    <h3 className='text1'>
    Discover the ultimate toolkit for effortless website creation.
    </h3>
    <h1 className='text'></h1>
    <br />
    <button className="btn-custom">Get Started</button>
  </div>
</div>














</div><br></br>


<div className="container">
  <div className="container">
    <div className="row">
     
    <p class="paragraph-text">SEO tools are essential in today's dynamic digital marketing environment because they help websites become more visible, rank higher in searches, and generate organic traffic. An extensive examination of several SEO tools and their features can be found below. </p>

<h4 class="section-heading">Tools for Analyzing and Managing Backlinks </h4>

<p class="tool-description"><span class="tool-name">Backlink Analytics:</span> This tool offers in-depth analysis of the backlink profile of a website. It is useful for monitoring backlink quantity and quality, locating referring websites, and deciphering anchor text. These understandings are essential for creating a strong link-building plan and keeping a strong backlink profile. </p>

<p class="tool-description"><span class="tool-name">Backlink Gap:</span> : This tool finds possibilities for obtaining valuable backlinks by comparing the backlink profiles of your website with those of competitors. It aids in link-building strategy by focusing on links that rivals have but you don't  </p>

<p class="tool-description"><span class="tool-name">Bulk analysis:</span> This feature enables users to examine several URLs at once and provides thorough information including backlink count, domain authority, and referring domains. This is particularly helpful for competitive analysis and extensive SEO audits.  </p>

    </div>
  </div>
</div>


<br></br><br></br>


<div class="container-fluid">
 
<div className="row">

 
<div className="col-md-4 mb-4">
  <div className="card custom-card">
  {<img src={S} alt="Description of the image" />}

  </div>
</div>
<div className="col-md-4 mb-4">
  <div className="card custom-card">
  {<img src={v} alt="Description of the image" />}

  </div>
</div>


<div className="col-md-4 mb-4">
  <div className="card custom-card">
  {<img src={B} alt="Description of the image" />}

  </div>
</div>

</div>


</div>


<div className="container">
  <div className="container">
    <div className="row">
     
    <p class="paragraph-text">SEO tools are essential in today's dynamic digital marketing environment because they help websites become more visible, rank higher in searches, and generate organic traffic. An extensive examination of several SEO tools and their features can be found below. </p>

<h4 class="section-heading">Tools for Keyword Research and Optimization  </h4>

<p class="tool-description"><span class="tool-name">Keyword Gap:</span>This tool shows you where you can get an advantage by comparing the performance of your keywords with those of your rivals. It assists in identifying keywords that rivals rank for, but you do not, allowing you to more effectively fill in these gaps. </p>

<p class="tool"><span class="tool-name">Keyword Magic:</span> :With information on search volume, keyword difficulty, and related phrases, Keyword Magic Tool provides a wealth of keyword ideas based on a seed keyword. It's perfect for identifying niche subjects and long-tail keywords to improve content strategy.   </p>

<p class="tool"><span class="tool-name">Keyword Overviews:</span> Offers a quick overview of the most important parameters, such as search traffic, trends, and competition density, for every particular keyword. This tool is crucial for assessing the feasibility and level of competition of focusing on keywords.  </p>

    </div>
  </div>
</div>




<div class="seo-tools-container">
  <div class="inner-container">
    <div class="row">
      <div class="col-md-6">
        <h4 class="section-heading">Tools for Managing Listings and Building Links</h4>
        <p class="tool-description"><span class="tool-name">Link Building Tool:</span> Supports the process of locating and handling opportunities for link building. It keeps tabs on outreach initiatives and the progress of backlinks obtained, guaranteeing a quick and efficient link-building procedure.</p>
        <p class="tool-description"><span class="tool-name">Listing Management:</span> With information on search volume, keyword difficulty, and related phrases, Keyword Magic Tool provides a wealth of keyword ideas based on a seed keyword. It's perfect for identifying niche subjects and long-tail keywords to improve content strategy.</p>
        <p class="tool-description"><span class="tool-name">Keyword Overviews:</span> Offers a quick overview of the most important parameters, such as search traffic, trends, and competition density, for every particular keyword. This tool is crucial for assessing the feasibility and level of competition of focusing on keywords.</p>
      </div>
      <div class="col-md-6">
        <div class="image-grid">
          <div class="image-box">
            <img src={LM} alt="Description of the image" />
          </div>
    
          <div class="image-box">
            <img src={KO} alt="Description of the image" />
          </div>
          <div class="image-box">
            <img src={LB} alt="Description of the image" />
          </div>
          <div class="image-box">
          {<img src={KM} alt="Description of the image" />}
          </div>
      
        </div>
      </div>
    </div>
  </div>
</div>

<div class="seo-tools-container">
  <div class="inner-container">
    <div class="row">
      <p class="paragraph-text">SEO tools are essential in today's dynamic digital marketing environment because they help websites become more visible, rank higher in searches, and generate organic traffic. An extensive examination of several SEO tools and their features can be found below.</p>
      <div class="col-12">
        <h4 class="section-heading">Tools for Keyword Research and Optimization</h4>
        <p class="tool-description"><span class="tool-name">Site Audit:</span> Performs a thorough technical examination of your website to find problems including malfunctioning links, crawl errors, and sluggish page loads. It offers doable suggestions to enhance the health of the website and search engine ranking.</p>
        <p class="tool-description"><span class="tool-name">On Page SEO Checker:</span> Examines individual webpages and offers recommendations for improving meta data, keyword density, and content. This tool is crucial for improving on-page SEO and making sure every page is search engine optimized.</p>
        <p class="tool-description"><span class="tool-name">Log File Analyzer:</span> Analyze server log files with Log File Analyzer to learn how search engines index and navigate your website. It ensures that crucial pages are effectively indexed by assisting in the identification of crawling problems and optimizing the crawl budget.</p>
        <p class="tool-description"><span class="tool-name">Keyword Gap:</span> This tool shows you where you can get an advantage by comparing the performance of your keywords with those of your rivals. It assists in identifying keywords that rivals rank for, but you do not, allowing you to more effectively fill in these gaps.</p>
        <p class="tool-description"><span class="tool-name">Keyword Magic:</span> With information on search volume, keyword difficulty, and related phrases, Keyword Magic Tool provides a wealth of keyword ideas based on a seed keyword. It's perfect for identifying niche subjects and long-tail keywords to improve content strategy.</p>
        <p class="tool-description"><span class="tool-name">Keyword Overviews:</span> Offers a quick overview of the most important parameters, such as search traffic, trends, and competition density, for every particular keyword. This tool is crucial for assessing the feasibility and level of competition of focusing on keywords.</p>
      </div>
    </div>
  </div>
</div>






<div class="seo-tools-container">
  <div class="inner-container">
    <div class="header">
      <h2 class="section-heading">Tools for Reporting and Tracking Performance</h2>
    </div>
    <div class="tools-list">
      <div class="tool">
        <h4 class="tool-name">Site Audit:</h4>
        <p class="tool-description">These connectors enable the creation of customizable SEO reports by integrating with Google Looker Studio. They compile information from multiple sources, such as Google Analytics and Google Search Console, to offer thorough insights in one location.</p>
      </div>
      <div class="tool">
        <h4 class="tool-name">On Page SEO Checker:</h4>
        <p class="tool-description">Allows users to create personalized SEO reports by gathering multiple metrics and data elements into one document. It is possible to schedule and automate reports for automatic delivery, which facilitates tracking SEO success over time.</p>
      </div>
      <div class="tool">
        <h4 class="tool-name">Log File Analyzer:</h4>
        <p class="tool-description">Offers information on a website's success in organic searches, including its top-performing pages and keywords. It facilitates comprehension of traffic drivers and future optimization strategies.</p>
      </div>
      <div class="tool">
        <h4 class="tool-name">Position tracking:</h4>
        <p class="tool-description">Keeps tabs on your website's ranks over time for particular keywords. This is a crucial tool for monitoring the success of your SEO campaigns and seeing patterns in the performance of your keywords.</p>
      </div>
      <div class="tool">
        <h4 class="tool-name">Keyword Gap:</h4>
        <p class="tool-description">Traffic Insights provides a comprehensive overview of organic traffic by combining information from Google Search Console and Google Analytics. It assists in determining which sites and keywords get the most traffic.</p>
      </div>
      <div class="tool">
        <h4 class="tool-name">Ranks:</h4>
        <p class="tool-description">Offers current keyword ranking information from a variety of search engines. It assists in monitoring the status of your website and implementing any necessary changes to your SEO plan.</p>
      </div>
      <div class="tool">
        <h4 class="tool-name">Sensor:</h4>
        <p class="tool-description">Tracks alterations in search engine results pages to identify any algorithmic modifications. Understanding how these modifications will affect the SEO of your website is made easier by it.</p>
      </div>
    </div>
  </div>
</div>






{/* 

<div className="container-blue">
  <div className="background-image" style={{ backgroundImage: `url(${content})` }}>
    <div className="overlay">

      <p className="overlay-text">The ideal toolkit for making <br></br>your site in an easy way.</p>
      <button type="button" class="purchase-btn">PURCHASE</button>

    </div>
  </div>
</div> */}
























</div>

  
  );
};

export default About;
