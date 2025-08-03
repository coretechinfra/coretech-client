import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import { FaBuilding } from "react-icons/fa";
import { SvgIcon } from "@mui/material";
import { CloudIcon, DataIcon } from "../Icons";

const HeroTwo = ({
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
      <section className="hero">
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
            </section>
      
    </>
  );
};

export default HeroTwo;
