import React from 'react';
import './MegaMenu.css';
import { Link } from 'react-router-dom';

const MegaMenuTraining = ({handleMouseEnter, handleMouseLeave}) => {
  return (
    <div className="mega-menu-content" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="mega-menu-section">
        <h3><Link onClick={handleMouseLeave} to="/training/cyber-security">Cyber Security</Link></h3>
        <ul>
          <li>VAPT</li>
          <li>Ethical Hacking</li>
          <li>Security Practices</li>
          {/* <li>Predictive Analytics & Dashboard</li> */}
        </ul>
      </div>
      <div className="mega-menu-section">
        <h3><Link onClick={handleMouseLeave} to="/training/salesforce">Salesforce</Link></h3>
        <ul>
          <li>Administrator</li>
          <li>Developer</li>
        </ul>
      </div>
      
      
    </div>
  );
}

export default MegaMenuTraining;
