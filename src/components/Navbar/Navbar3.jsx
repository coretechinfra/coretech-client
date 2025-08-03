import React, { useEffect, useState } from "react";
import "./Navbar2.css";
import Brand from "../../assets/coretech_logo_blue.png";
import BrandInvert from "../../assets/coretech_logo_light.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import MegaMenu from "./MegaMenu/MegaMenu";
import { FaBars, FaCross } from "react-icons/fa";
import FullScreenMenu from "./MobileMenu/FullScreenMenu";
import { FaXmark } from "react-icons/fa6";
import { CSSTransition } from "react-transition-group";
import { useGlobalContext } from "../../global/context";

const Navbar3 = () => {
  const {isSliderRendered} = useGlobalContext();
  const [isMegaMenuVisible, setMegaMenuVisible] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const handleSectionRoute = (sectionId) => {
    // Smooth scroll to the section with ID "mission"
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

 
  const [isPlainNav, setIsPlainNav] = useState(false);

  let hoverTimeOut; // Declare hoverTimeOut variable outside of the function

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeOut);
    setMegaMenuVisible(true);
    console.log({ isMegaMenuVisible });
  };

  const handleMouseLeave = () => {
    hoverTimeOut = setTimeout(() => {
      setMegaMenuVisible(false);
    }, 1);
  };

  const handleMouseLeaveMegaMenu = () => {
    setMegaMenuVisible(false);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  const [isSticky, setIsSticky] = useState(true);
  const scrollThreshold = 1; // Adjust this value to change the scroll position

  const handleScroll = () => {
    const scrolledY = window.scrollY;
    setIsSticky(scrolledY > scrollThreshold);
  };

  useEffect(() => {
    
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array to run effect only once

  useEffect(() => {
     
    console.log({ isCarouselRendered: isSliderRendered});
    setIsPlainNav(!isSliderRendered);
  },[isSliderRendered]);

  return (
    <>
      <header className={`main-header header-style-two ${isSticky ? 'bg-white sticky-top shadow-sm' : ''} ${isPlainNav ? 'bg-white sticky-top' : ''}`}>
        <div className="header-lower">
          <div className="container-fluid">
            {/* <!-- Main box --> */}
            <div className="main-box">
              <div className="logo-box">
                <div className="logo">
                  <Link to="/">
                    <img src={isSticky || isPlainNav ? Brand : BrandInvert } height={50} alt="" title="Coretech"/>
                  </Link>
                </div>
              </div>

              {/* <!--Nav Box--> */}
              <div className="nav-outer">
                <nav className="nav main-menu">
                  <ul className="navigation">
                    {/* <li>
                      <NavLink to="/">Home</NavLink>
                    </li> */}

                    <li className="dropdown">
                      <NavLink to="/about" className="d-flex align-items-center">
                        About <MdOutlineKeyboardArrowDown />{" "}
                      </NavLink>
                      <ul>
                        {/* <li>
                          <Link to="/team">Team</Link>
                        </li> */}
                        <li>
                          <Link
                            to="/about"
                            onClick={() => handleSectionRoute("clients")}
                          >
                            Clients
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/about"
                            onClick={() => handleSectionRoute("partners")}
                          >
                            Partners
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/about"
                            onClick={() => handleSectionRoute("company")}
                          >
                            Company
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/about"
                            onClick={() => handleSectionRoute("mission")}
                          >
                            Mission & Vision
                          </Link>
                        </li>
                      </ul>
                    </li>
                  
                    
                    <li
                      className="dropdown mega-menu"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <NavLink
                        to="/services"
                        className="d-flex align-items-center"
                        // onClick={handleMegamenuHover}
                      >
                        Services <MdOutlineKeyboardArrowDown />
                      </NavLink>

                      {/* <div className="mega-menu-container">
                        <div className="mega-menu-content">
                          <div className="row row-cols-2">
                            <div className="col">
                              <h4>Cyber Security</h4>
                              <ul className="nav-group ">
                                <li>
                                  <Link to="/vulnerability-assessment-penetration-testing">
                                    VAPT
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/cloud-and-infra-security">
                                    Cloud & Infra Security
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col">
                              <h4>Cloud</h4>
                              <ul className="nav-group ">
                                <li>
                                  <Link to="/cloud-migration-modernization">
                                    Migration & Modernization
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/cloud-optimization">
                                    Optimization
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/cloud-infrastructure">
                                    Infrastructure
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col">
                              <h4>Data</h4>
                              <ul className="nav-group ">
                                <li>
                                  <Link to="/data-engineering-architecture">
                                    Engineering & Architecture
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/data-management-governance">
                                    Management & Governance
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/data-literacy-analytics">
                                    Literacy & Analytics
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col">
                              <h4>Business Solutions</h4>
                              <ul className="nav-group ">
                                <li>
                                  <Link to="/business-optimization">
                                    Business Optimization
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/managed-services">
                                    Managed Services
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/application-development">
                                    Application Development
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            backgroundColor: "teal",
                            width: "100%",
                            height: "10px",
                            borderRadius: "0px 0px 30px 30px",
                          }}
                        ></div>
                      </div> */}
                    </li>
                    {/* <li className="dropdown">
                      <NavLink to="#" className="d-flex align-items-center">
                        Training <MdOutlineKeyboardArrowDown />
                      </NavLink>
                      <ul>
                        <li className="dropdown">
                          <Link to="#">Salesforce</Link>
                          <ul>
                            <li>
                              <Link to="/training/salesforce/developer">
                                Salesforce Developer
                              </Link>
                            </li>
                            <li>
                              <Link to="/training/salesforce/administrator">
                                Salesforce Administrator
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/training/cyber-security">Cyber Security</Link>
                        </li>
                        <li><Link to="/training">Certiification</Link></li>
												<li><Link to="/training">Webinar</Link></li>
                      </ul>
                    </li> */}

                    <li className="dropdown">
                      <NavLink to="#" className="d-flex align-items-center">
                        Insights <MdOutlineKeyboardArrowDown />
                      </NavLink>
                      <ul>
                        <li>
                          <Link to="/news">News</Link>
                        </li>
                        <li>
                          <Link to="/blogs">Blogs</Link>
                        </li>
                        <li>
                          <Link to="/articles">Articles</Link>
                        </li>
                        <li>
                          <Link to="/case-studies">Case Studies</Link>
                        </li>
                      </ul>
                    </li>
                    <li><Link to="/careers">Careers</Link></li>
                    <li>
                      <Link to="/contact">Get in Touch</Link>
                    </li>
                  </ul>
                </nav>
                {/* <!-- Main Menu End--> */}
                <div className="mobile-menu-btn">
                  {mobileMenuVisible ? (
                    <FaXmark
                      className="fs-1"
                      onClick={handleMobileMenuToggle}
                    />
                  ) : (
                    <FaBars className="fs-1" onClick={handleMobileMenuToggle} />
                  )}
                </div>
              </div>
            </div>
          </div>
          {isMegaMenuVisible ? (
            <>
              <MegaMenu
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeaveMegaMenu}
              />
              {/* <div style={{height: '5px', width: '100%', backgroundColor: "blueviolet"}}></div> */}
            </>
          ) : null}
          {/* <!-- Mobile Menu  --> */}
          <CSSTransition
            in={mobileMenuVisible}
            timeout={3000} // Match your CSS transition duration
            classNames="fullscreen-menu-transition"
            unmountOnExit
          >
            <FullScreenMenu
              isOpen={mobileMenuVisible}
              toggleMenu={handleMobileMenuToggle}
            />
          </CSSTransition>
        </div>
      </header>
    </>
  );
};

export default Navbar3;
