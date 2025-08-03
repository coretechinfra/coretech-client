import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import { FaBuilding } from "react-icons/fa";
import { SvgIcon } from "@mui/material";
import { CloudIcon, DataIcon } from "../Icons";

const Hero = ({
  name,
  heading,
  description,
  imgSrc,
  link,
  linkText,
  linkTarget,
}) => {
  return (
    <>
      {/* <section className="hero">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col hero-content text-white">
                            <h1 className="hero-title">{heading}</h1>
                            <p className="hero-description">{description}</p>
                            <Link to={link? link : "#"} target={linkTarget? linkTarget : ""} className="theme-btn btn-style-one"><span className="btn-title">{linkText}</span></Link>
                        </div>
                        <div className="col-4 hero-image">
                            
                            <img src={imgSrc} alt="Cyber Security" className='w-100' />
                        </div>
                    </div>
                </div>
            </section> */}
      <section>
        <div className="container-fluid">
          <div className="row my-4">
            <div className="col">
              <h2
                style={{
                  fontSize: "58px",
                  color: "limegreen",
                }}
              >
                Ensuring Stability, Mitigating Risk, and Fostering Growth
              </h2>
            </div>
            <div className="col">
              <div className="service-title d-flex mb-5 align-items-center">
                <div
                  className="service-icon p-2"
                  style={{
                    backgroundColor: "limegreen",
                    // borderRadius: "10px",
                    width: "105px",
                    height: "90px",
                  }}
                >
                  <CloudIcon color="white" />
                </div>
                <h1
                  className="service-name"
                  style={{ marginLeft: "30px", fontSize: "44px" }}
                >
                  Governance & Compliance
                </h1>
              </div>
              <div className="service-overview">
                <p>
                  At Coretech Infrastructure Solutions Inc., we understand the
                  complexities of navigating the regulatory landscape and
                  managing organizational change. Our Governance & Compliance
                  services provide a comprehensive framework to help your
                  business operate efficiently, ethically, and in accordance
                  with industry standards and best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
