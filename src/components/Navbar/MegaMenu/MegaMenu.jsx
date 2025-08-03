import React from 'react';
import './MegaMenu.css';
import { Link } from 'react-router-dom';
import { FaArrowCircleRight } from 'react-icons/fa';

const MegaMenu = ({handleMouseEnter, handleMouseLeave}) => {
  return (
    <div className="mega-menu-content" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="mega-menu-section">
        <h3><Link onClick={handleMouseLeave} to="/services/data">Data</Link></h3>
        <ul>
          <li>Engineering & Architecture</li>
          <li>Management & Governance</li>
          <li>Reporting & Analytics</li>
          {/* <li>Predictive Analytics & Dashboard</li> */}
        </ul>
      </div>
      <div className="mega-menu-section">
        <h3><Link onClick={handleMouseLeave} to="/services/cloud">Cloud</Link></h3>
        <ul>
          <li>Migration & Modernization</li>
          <li>Optimization</li>
          <li>Infrastructure</li>
          <li>System Design</li>
        </ul>
      </div>
      <div className="mega-menu-section">
        <h3><Link onClick={handleMouseLeave} to="/services/security-and-privacy">Security & Privacy</Link></h3>
        <ul>
          <li>Cyber Security</li>
          <li>SIEM Solution</li>
          <li>Data privacy</li>
          <li>ISO:27001</li>
        </ul>
      </div>
      <div className="mega-menu-section">
        <h3><Link onClick={handleMouseLeave} to="/services/artificial-intelligence">Artificial Intelligence</Link></h3>
        <ul>
          <li>AI & Machine learning</li>
          <li>Intelligent product/platform</li>
          <li>Chatbot Automation</li>
          <li>Computer Vision</li>
        </ul>
      </div>

      <div className="mega-menu-section">
        <h3><Link onClick={handleMouseLeave} to="/services/governance-and-compliance">Governance & Compliance</Link></h3>
        <ul>
          <li>ISO Certification</li>
          <li>Business Continuity</li>
          <li>Risk Management</li>
          <li>Change management</li>
          <li>Process improvement/optimization</li>
          <li>Talent development & learning</li>
        </ul>
      </div>
     
      <div className="mega-menu-section">
        <h3><Link onClick={handleMouseLeave} to="/services/planning-and-execution">Planning and Execution</Link></h3>
        <ul>
          {/* <li>Planning and Execution</li> */}
          <li>Portfolio management</li>
          <li>Product management</li>
          <li>Program & Project management</li>
          <li>Systems implementation</li>
        </ul>
      </div>
      
      <div className="mega-menu-section">
        <h3><Link onClick={handleMouseLeave} to="/services/development-and-integration">Development & Integration</Link></h3>
        <ul>
          <li>Application Development</li>
          <li>Web Development</li>
          <li>Mobile App Development</li>
          <li>Third Party Integration</li>
          <li>Tailored Solutions</li>
          <li>Digital Marketing</li>
        </ul>
      </div>
      <div className="mega-menu-section">
        <h3><Link onClick={handleMouseLeave} to="/services/service-operations">Service Operations</Link></h3>
        <ul>
          <li>24/7 System Support</li>
          <li>Annual Maintenance Contract</li>
          <li>System Administration & Improvement</li>
        </ul>
        <h3 className='mt-5'><Link onClick={handleMouseLeave} to="/training">Coporate Training <FaArrowCircleRight/> </Link></h3>
      </div>
      
    </div>
  );
}

export default MegaMenu;
