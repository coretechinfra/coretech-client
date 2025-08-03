import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function ClientsSlider({ data, autoplay, dots, infinite, logoHeight }) {
  const settings = {
    dots: dots || true,
    infinite: infinite || true,
    // speed: 10,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: autoplay || true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <>
      <div className="container">
        <div className="slider-container p-5">
          <div class="sec-title text-center">
            <span class="sub-title">{data?.subTitle}</span>
            <h2>{data?.title}</h2>
          </div>
          <Slider {...settings}>
            {data?.slides?.map((imgSrc, i) => (
              <div className="slide-logo" key={i}>
                <Link to="#">
                  <img src={imgSrc} alt=""  style={{
                    height: logoHeight ? `${logoHeight}px` : '100px',
                  }}/>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default ClientsSlider;
