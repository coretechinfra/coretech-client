import React from "react";
import {
  FiActivity,
  FiAlertOctagon,
  FiSettings,
  FiTarget,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const WhatWeDoSection = ({ services }) => {
  return (
    <>
      <section className="container-fluid  bg-light p-0">
        <div
          className="container-fluid "
          style={{
            backgroundColor: "var(--theme-black)",
          }}
        >
          <div className="container py-5">
            <div className="sec-title text-center">
              <span className="sub-title">Services</span>
              <h2 className="mb-3 text-white">What We Do</h2>
            </div>
            {/* <div className="row row-cols-1 row-cols-md-2">
                            
                            <div className="col p-5">
                                <Link to="#" className="mb-3 text-warning    ">
                                    <h2>Cyber Security</h2>
                                </Link>
                                <p className="text w-75 fw-semibold" style={{ color: "lightgrey" }}>
                                We offer a range of expert Vulnerability Assessment and Penetration Testing (VAPT) services to safeguard your digital assets and ensure the security of your applications and systems based on OWASP, Logical function, CVE, CWE,CVSS,CWSS.
                                </p>
                            </div>
                            <div className="col p-5">
                                <Link to="#" className="mb-3 text-warning    ">
                                    <h2>Managed Services</h2>
                                </Link>
                                <p className="text w-75 fw-semibold" style={{ color: "lightgrey" }}>
                                    Bring industrialized cloud services together with patented tools and automation that speed migration, provides data sovereignty and mitigate risks.
                                </p>
                            </div>
                            <div className="col p-5">
                                <Link to="#" className="mb-3 text-warning    ">
                                    <h2>Web Development</h2>
                                </Link>
                                <p className="text w-75 fw-semibold" style={{ color: "lightgrey" }}>
                                We specialize in crafting cutting-edge web-based solutions that not only add value to your customers' experiences but also prioritize delivering captivating user experiences.
                                </p>
                            </div>
                            <div className="col p-5">
                                <Link to="#" className="mb-3 text-warning    ">
                                    <h2>Corporate Training</h2>
                                </Link>
                                <p className="text w-75 fw-semibold" style={{ color: "lightgrey" }}>
                                    Ethical Hacking and Bug Bounty Training program is designed to equip you with the knowledge and skills needed to protect organizations from cyber threats and vulnerabilities.
                                </p>
                            </div>
                        </div> */}
            <div className="container">
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                {services?.map((benefit, index) => (
                  <div
                    key={index}
                    className="service-benefits col d-flex "
                    style={{
                      // maxWidth: "30%",
                      marginTop: "3.5rem",
                    }}
                  >
                    <div className="row">
                      <div className="col col-2">
                        <i
                          className={`icon ${benefit?.iconClass}`}
                          style={{
                            fontSize: "40px",
                            // marginRight: "25px",
                            color: "var(--theme-color3)",
                          }}
                        ></i>
                      </div>
                      <div className="col col-10">
                        <div className="benefits-content">
                          <h5
                            style={{
                              fontWeight: "bold",
                              color: "var(--theme-color3)",
                            }}
                          >
                            {benefit?.title}
                          </h5>
                          <p className="" style={{ color: "lightgray" }}>
                            {benefit?.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container">
          <div className="process-title text-center">
            <h2 className="fw-bolder my-3">PROCESS</h2>
          </div>
          <div className="services-section-three">
            <div class="row">
              <div class="service-block-three col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                <div class="inner-box">
                  <div class="content">
                    <div class="icon-box">
                      <span className="icon">
                        <FiTarget />
                      </span>
                    </div>
                    <h5 class="title">
                      <a href="#">Assessment</a>
                    </h5>
                    <div class="text">
                      Conduct a comprehensive assessment of your existing
                      security posture and vulnerabilities.
                    </div>
                  </div>
                  <a href="#" class="read-more">
                    <i class="fa fa-long-arrow-alt-right"></i>
                  </a>
                </div>
              </div>

              <div class="service-block-three col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                <div class="inner-box">
                  <div class="content">
                    <div class="icon-box">
                      <span className="icon">
                        <FiSettings />
                      </span>
                    </div>
                    <h5 class="title">
                      <a href="#">Implementation</a>
                    </h5>
                    <div class="text">
                      Deploy customized security solutions based on assessment
                      findings for cyber defense.
                    </div>
                  </div>
                  <a href="#" class="read-more">
                    <i class="fa fa-long-arrow-alt-right"></i>
                  </a>
                </div>
              </div>

              <div class="service-block-three col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                <div class="inner-box">
                  <div class="content">
                    <div class="icon-box">
                      <span className="icon">
                        <FiActivity />
                      </span>
                    </div>
                    <h5 class="title">
                      <a href="#">Monitoring</a>
                    </h5>
                    <div class="text">
                      Continuously monitor network traffic, logs, and user
                      activity for signs of suspicious behavior.
                    </div>
                  </div>
                  <a href="#" class="read-more">
                    <i class="fa fa-long-arrow-alt-right"></i>
                  </a>
                </div>
              </div>

              <div class="service-block-three col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                <div class="inner-box">
                  <div class="content">
                    <div class="icon-box">
                      <span className="icon">
                        <FiAlertOctagon />
                      </span>
                    </div>
                    <h5 class="title">
                      <a href="#">Incident Response</a>
                    </h5>
                    <div class="text">
                      Swiftly respond to security incidents with predefined
                      incident response procedures.
                    </div>
                  </div>
                  <a href="#" class="read-more">
                    <i class="fa fa-long-arrow-alt-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default WhatWeDoSection;
