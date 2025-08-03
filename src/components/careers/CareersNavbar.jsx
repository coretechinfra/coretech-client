import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Divider } from '@mui/material';

const CareersNavbar = () => {
  const location = useLocation();
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <Navbar bg="dark"  className="text-white posiition-relative " data-bs-theme="dark" >
      <div className="px-5">
        <Navbar.Toggle aria-controls="careers-navbar" />
        <Navbar.Collapse id="careers-navbar" className="d-flex justify-content-between">
          <Nav className="me-auto">
           
            <Nav.Link 
              className="text-white"
              as={Link} 
              to="/careers/jobs/positions"
              active={location.pathname.startsWith('/careers/jobs/positions')}
            >
              Open Positions
            </Nav.Link>
           
          </Nav>
          <Nav>
            <Divider color="white"/>
            {isAuthenticated || user?.role === 'applicant' ? (
              <>
                <Nav.Link 
                  className="text-white"
                  as={Link} 
                  to="/careers/jobs/applications"
                  active={location.pathname === '/careers/jobs/applications'}
                >
                  My Applications
                </Nav.Link>
                <Nav.Link 
                  className="text-white"
                as={Link} 
                  to="/careers/jobs/profile"
                  active={location.pathname === '/careers/jobs/profile'}
                >
                  Profile
                </Nav.Link>
                <Nav.Link 
                  className="text-white"
                  as={Link} 
                  to="/careers/jobs"
                  onClick={logout}
                >
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link 
                  className="text-white"
                  as={Link} 
                  to="/careers/jobs/login"
                  active={location.pathname === '/careers/jobs/login'}
                >
                  Login
                </Nav.Link>
                <Nav.Link 
                  className="text-white"
                  as={Link} 
                  to="/careers/jobs/register"
                  active={location.pathname === '/careers/jobs/register'}
                >
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default CareersNavbar; 