import React, { useState } from "react";
import { LiaEnvelopeOpenTextSolid } from "react-icons/lia";
import Brand from "../../assets/coretech_logo_light.png";
import { FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../global/context";

const Footer2 = () => {
  const { api } = useGlobalContext();
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = async () => {
    try {
      const res = await api.post(`/api/subscriber`, { email });
      if (res?.status === 201) {
        console.log(res);
        setEmail("");
      }
    } catch (error) {
      console.log("Error fetching post", error);
    }
  };

  const handleSectionRoute = (sectionId) => {
    // Smooth scroll to the section with ID "mission"
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <footer className="main-footer" style={{ backgroundColor: "navy" }}>
        {/* <div className="bg bg-pattern-9"></div> */}
        <div className="container">
          <div className="subscribe-form">
            <div className="title-column">
              <h5 className="title">
                <span className="icon">
                  <LiaEnvelopeOpenTextSolid />{" "}
                </span>{" "}
                Subscribe now to get <br />
                latest updates
              </h5>
            </div>
            <div className="form-column">
              <form onSubmit={handleSubscribe}>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                  <button
                    type="button"
                    className="theme-btn"
                    onClick={handleSubscribe}
                  >
                    <i
                      className="fa fa-paper-plane"
                      style={{ color: "var(--theme-color2)" }}
                    ></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* <!--Widgets Section--> */}
        <div className="widgets-section">
          <div className="container">
            <div className="row">
              {/* <!--Footer Column--> */}
              <div className="footer-column col-xl-3 col-lg-12 col-md-12">
                <div className="footer-widget about-widget">
                  <div className="logo">
                    <Link to="/">
                      <img src={Brand} alt="" className="w-75" />
                    </Link>
                  </div>
                  <div className="text fw-light">
                    We collaborate closely with you to maximize our partnerships
                    with leading technology firms, ensuring optimal
                    implementation, integration, and support. By harnessing
                    cutting-edge solutions, we drive innovation and maximize the
                    return on your technology investments.
                  </div>
                  <ul className="social-icon-two">
                    <li>
                      <Link
                        target="_blank"
                        to="https://twitter.com/CoretechInfra"
                      >
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        target="_blank"
                        to="https://www.facebook.com/coretechinfra"
                      >
                        <i className="fab fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        target="_blank"
                        to="https://www.linkedin.com/company/coretechinfra"
                      >
                        <i className="fab fa-linkedin"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        target="_blank"
                        to="https://www.instagram.com/coretechinfra"
                      >
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        target="_blank"
                        to="https://www.youtube.com/@CoretechInfra"
                      >
                        <i className="fab fa-youtube"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <!--Footer Column--> */}
              <div className="footer-column col-xl-3 col-lg-4 col-md-4">
                <div className="footer-widget links-widget">
                  <h6 className="widget-title">Explore</h6>
                  <ul className="user-links">
                    <li>
                      <Link
                        to="/about"
                        onClick={() => handleSectionRoute("company")}
                      >
                        About Company
                      </Link>
                    </li>
                    {/* <li><Link to="/team">Meet the Team</Link></li> */}
                    <li>
                      <Link to="/news">News & Media</Link>
                    </li>
                    <li>
                      <Link to="/blogs">Blogs & Articles</Link>
                    </li>
                    <li>
                      <Link to="/training">Training</Link>
                    </li>
                    <li>
                      <Link to="/careers">Career</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!--Footer Column--> */}
              <div className="footer-column col-xl-3 col-lg-4 col-md-4">
                <div className="footer-widget links-widget">
                  <h6 className="widget-title">Our Services</h6>
                  <ul className="user-links">
                    <li>
                      <Link to="/services/data">Data</Link>
                    </li>
                    <li>
                      <Link to="/services/cloud">Cloud</Link>
                    </li>
                    <li>
                      <Link to="/services/security-and-privacy">
                        Security & Privacy
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/artificial-intelligence">
                        Artificial Intelligence
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/governance-and-compliance">
                        Governance & Complaince
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/planning-and-execution">
                        Planning & Execution
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/development-and-integration">
                        Development & Integration
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/service-operations">
                        Service Operations
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="footer-column col-xl-3 col-lg-4 col-md-4">
                <h5 className="widget-title">
                  <FaLocationArrow className="me-2" /> Corporate Office
                </h5>
                <ul className="user-links">
                  <li>
                    <Link
                      to="https://maps.app.goo.gl/5vKKcueaj1c5Lyg76"
                      target="_blank"
                    >
                      405 State Highway 121, Suite A250, Lewisville, Texas,
                      75067, USA
                    </Link>
                  </li>
                </ul>
                <h5 className="widget-title">
                  <FaPhoneAlt className="me-2" /> Call us on
                </h5>
                <ul className="user-links">
                  <li>
                    <Link to="tel: +19452785774">USA: +1 (945) 278 5774</Link>
                  </li>
                  <li>
                    <Link to="tel: +918050572875">India: +91 805 057 2875</Link>
                  </li>
                  {/* <li>
                    <Link to="tel: +918860857814">
                      India: (Danish Kamal) <br /> +91 88608 57814
                    </Link>
                  </li> */}
                </ul>
                <h5 className="widget-title">
                  <FaMessage className="me-2" /> Mail us on
                </h5>
                <ul className="user-links">
                  <li>
                    <Link to="mailto:info@coretechinfra.com">
                      info@coretechinfra.com
                    </Link>
                  </li>
                  {/* <li>
                                        <Link to="#">
                                            hr@coretechinfra.com
                                        </Link>
                                    </li> */}
                </ul>
                <Link
                  to="https://outlook.office365.com/book/CoretechInfrastructureSolutionsInc1@coretechinfra.com/s/-QDgTMR6kUq4LYy9OmsyGg2"
                  target="_blank"
                  className="theme-btn btn-style-three light"
                >
                  <span className="btn-title">Schedule a Meeting</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* <!--Footer Bottom--> */}
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="inner-container">
              <div className="copyright-text">
                <p>
                  &copy; {new Date().getFullYear()} Coretech Infrastructure
                  Solutions, Inc. All Rights Reserved.{" "}
                  <span>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </span>{" "}
                  <span>
                    <Link to="/terms-of-use">Terms of Use</Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer2;
