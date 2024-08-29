import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import '../Css/Header.css';
import Swal from 'sweetalert2';

const Header = () => {
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleSignupClick = () => {
    navigate('/signupform');
  };

  const handleSigninClick = () => {
    navigate('/login');
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
      // Remove username and token from local storage
      localStorage.removeItem('username');
      localStorage.removeItem('token'); // If you are storing a token
      navigate('/login');
    }
  };


  return (
    <div className="home-container">
      <div className="container-fluid" style={{ backgroundColor: '#fff' }}>
        <header>
          <div className="header-container">
            <div></div>
            <div>
              <nav className="header-nav">
                <a href="#features" className="header-link">Site Audit</a>
                <a href="#home" className="header-link">Home</a>
                <div className="header-dropdown">
                  <a href="#tools" className="header-link">Website monetization</a>
                  <div className="header-dropdown-menu">
                    <a onClick={() => navigate('/rank')} className="header-link">Ranktracker</a>
                    <a href="#action/3.2" className="header-link">Dashboard</a>
                    <a href="#action/3.3" className="header-link">Keyword Explorer</a>
                    <a href="#action/3.3" className="header-link">Content Explorer</a>
                    <div className="header-divider"></div>
                    <a href="#action/3.4" className="header-link">Site Audit</a>
                  </div>
                </div>
                <a href="#features" className="header-link">Rank Tracking</a>
                <a href="#pricing" className="header-link">Keyword research</a>
                <a href="keywordexplorer" className="header-link">Keywordexplorer</a>
                <a href="competitoranalysis" className="header-link">Competitor Analysis</a>
                <div className="header-dropdown">
                  <a href="linkExplorer" className="header-link">Link Explorer</a>
                  <div className="header-dropdown-menu">
                    <a href="#action/3.1" className="header-link">Action</a>
                    <a href="#action/3.2" className="header-link">Another action</a>
                    <a href="#action/3.3" className="header-link">Something</a>
                    <div className="header-divider"></div>
                    <a href="#action/3.4" className="header-link">Separated link</a>
                  </div>
                </div>
                <a href="#features" className="header-link">Pricing</a>
              </nav>
            </div>
          </div>
        </header>
      </div>

      <div className="container-fluid" style={{ backgroundColor: '#0235c3' }}>
        <Navbar className="custom-navbar" expand="lg" style={{ backgroundColor: '#0235c3' }}>
          <Container className="custom-container" style={{ backgroundColor: '#0235c3' }}>
            <Navbar.Brand href="#home" className='logo'>V-Audit</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <NavDropdown title="Tools" id="basic-nav-dropdown" className="custom-dropdown">
                  <NavDropdown.Item onClick={() => navigate('/rank')}>Ranktracker</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={() => navigate('/contentexplorer')}>Content Explorer</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">Dashboard</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">Site Audit</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Keyword Explorer</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link onClick={() => navigate('/features')}>Features</Nav.Link>
                <Nav.Link onClick={() => navigate('/pricing')}>Pricing</Nav.Link>
                <Nav.Link onClick={() => navigate('/aboutus')}>Aboutus</Nav.Link>
                <NavDropdown title="Services" id="basic-nav-dropdown" className="custom-dropdown">
                  <NavDropdown.Item href="searchengineoptimisation">Search Engine Optimisation</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="payperclick">Pay Per Click Management</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="Searchenginemarketing">Search Engine Marketing</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="Searchenginemarketing">Social Media Marketing</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">Content Marketing</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">Conversation Rate Optimisation</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="linkbuilding">Link Building</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="contactus">Contactus</Nav.Link>
                <Nav.Link href="contactus">Contactus</Nav.Link>
                <Button onClick={handleLogout} className="ml-auto">Logout</Button>


                {!username ? (
                  <>
                    <Button variant="outline-success" onClick={handleSigninClick}>Sign In</Button>
                    <Button variant="outline-success" onClick={handleSignupClick}>Sign Up</Button>
                  </>
                ) : (
                  <span className="welcome-message"> {username}!</span>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <br />
      </div>
    </div>
  );
}

export default Header;
