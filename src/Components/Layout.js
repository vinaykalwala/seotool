import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from '../Components/Footer';  // if Footer.js is in the components folder

const Layout = () => {
  const location = useLocation();

  // Define routes where the header should not be displayed
  const noHeaderRoutes = ['/login', '/signupform', '/otp'];
  const noFooterRoutes = ['/login', '/signupform', '/otp'];

  return (
    <div>
      {!noHeaderRoutes.includes(location.pathname) && <Header />}
      <Outlet />
      {!noFooterRoutes.includes(location.pathname) && <Footer />}

    </div>
  );
};

export default Layout;
