import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';



const DashboardLayout = () => {
  return (
    <div>
      <Dashboard /> {/* Add the Header component */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
     
     
       
       


      </Routes>
    </div>
  );
};

export default DashboardLayout;
