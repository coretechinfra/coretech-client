import React, { useState } from "react";
import Brand from "../../assets/logo-4.png";
import './navbar.css';
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)
  
    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }
  
    return (
      <nav className="navbar sticky-top shadow-sm">
        <div className="container-fluid px-5">
          <div className="logo">
            <img src={Brand} alt="coretech" height={50} />
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <RxHamburgerMenu />
          </div>
          <div className={`nav-elements  ${showNavbar && 'active'}`}>
            <ul>
              <li>
                <NavLink to="/" className="nav-links">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" className="nav-links">About</NavLink>
              </li>
              <li>
                <NavLink to="/services" className="nav-links">Services</NavLink>
              </li>
              <li>
                <NavLink to="/training" className="nav-links">Training</NavLink>
              </li>
              <li>
                <NavLink to="/blogs" className="nav-links">Insights Hub</NavLink>
              </li>
              <li>
                <NavLink to="/career" className="nav-links">Career</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="nav-links">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
  
export default Navbar;