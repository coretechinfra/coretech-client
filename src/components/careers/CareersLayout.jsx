import React from 'react';
import { Outlet } from 'react-router-dom';
import CareersNavbar from './CareersNavbar';

const CareersLayout = () => {
  return (
    <div className="careers-layout">
      <CareersNavbar />
      <div className="careers-content">
        <Outlet />
      </div>
    </div>
  );
};

export default CareersLayout; 