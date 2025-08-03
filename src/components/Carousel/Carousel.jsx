import React, { useEffect, useRef, useState } from "react";
import "./Carousel.css";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../global/context";

const Carousel = ({ videos, slideContent }) => {
  const { setIsSliderRendered } = useGlobalContext();
  const [activeSlide, setActiveSlide] = useState(0);
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  const handleSlideNavigation = (index) => {
    setActiveSlide(index);
  };

  const [timer, setTimer] = useState(0); // Separate state for timer

  useEffect(() => {
    setIsSliderRendered(true);
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1); // Increment timer state
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const nextSlideIndex = (activeSlide + 1) % slideContent.length;
    setActiveSlide(nextSlideIndex);
  }, [timer]); // Update activeSlide only when timer changes

  useEffect(() => () => setIsSliderRendered(false), []);
  return (
    <>
      <section className="hero-slider" ref={sliderRef}>
        {videos?.map((videoSrc, index) => (
          <video
            key={index}
            className={`video-slide ${activeSlide === index ? "active" : ""}`}
            src={videoSrc}
            autoPlay
            muted
            loop
          />
        ))}
        {slideContent?.map((slide, index) => (
          <div
            className={`container slider-content text-center py-5 animated ${
              slide.animation
            } ${activeSlide === index ? "active" : ""}`}
          >
            <h5 className="animated mb-3">{slide?.description}</h5>
            <h1 className="fw-bold animated mb-4 text-uppercase">
              {slide?.title}
            </h1>
            <button
              className="btn btn-warning rounded-5 fw-bold animated"
              onClick={() =>
                navigate(slide?.buttonLink ? slide?.buttonLink : "#")
              }
            >
              {slide?.buttonText}
            </button>
          </div>
        ))}

        <div className="slider-navigation">
          {slideContent?.map((_, index) => (
            <div
              key={index}
              className={`nav-btn ${activeSlide === index ? "active" : ""}`}
              onClick={() => handleSlideNavigation(index)}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Carousel;
