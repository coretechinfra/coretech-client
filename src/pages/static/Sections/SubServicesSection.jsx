import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const SubServicesSection = ({ data }) => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: data?.services.length <= 4 ? data.services.length : 4,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <ul
        style={{
          marginTop: "20px",
          listStyle: "none",
          padding: 0,
          textAlign: "center",
        }}
      >
        {dots.map((dot, index) => (
          <li key={index} style={{ display: "inline-block", margin: "0 5px" }}>
            {dot}
          </li>
        ))}
      </ul>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section class="services-section-two">
        <div class="bg bg-pattern-10"></div>

        <div class="container">
          <div class="upper-box row">
            <div class="left-column col-lg-6 col-md-12">
              <div class="sec-title light">
                <span class="sub-title">{data?.sectionTitle}</span>
                <h2>{data?.title}</h2>
              </div>
            </div>

            <div class="right-column col-lg-6 col-md-12">
              <div class="fact-counter-three">
                {data?.analytics?.map((analytic, i) => (
                  <div class="counter-block-three fadeInUp">
                    <div class="inner">
                      <div class="count-box">
                        <span
                          class="count-text"
                          data-speed="3000"
                          data-stop={analytic?.count}
                        >
                          0
                        </span>
                        +
                      </div>
                      <h6 class="counter-title">{analytic?.caption}</h6>
                    </div>
                  </div>
                ))}
              </div>

              {/* <div class="video-box">
                <figure class="image">
                  <img
                    src="https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/resource/image-4.jpg"
                    alt=""
                  />
                </figure>
                <Link
                  to="https://www.youtube.com"
                  target="_blank"
                  class="play-btn"
                  data-fancybox="gallery"
                  data-caption=""
                >
                  <i class="icon fa fa-play" aria-hidden="true"></i>
                </Link>
              </div> */}
            </div>
          </div>

          <div class="outer-box p-3">
            <div class="services-carousel">
              <Slider {...settings}>
                {data?.services?.map((service) => (
                  <div class="service-block-two p-1">
                    <div class="inner-box">
                      <span class="count">{service?.index}</span>
                      <div class="icon-box">
                        <i class={`icon ${service?.iconClass}`}></i>
                      </div>
                      <h5 class="title">
                        <Link to={service?.link}>{service?.title}</Link>
                      </h5>
                      <div class="text">{service?.description}</div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div class="bottom-box">
            <div class="text">
              {data?.cta?.text}
              <a href={data?.cta?.buttonLink} class="theme-btn">
                {data?.cta?.buttonText}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubServicesSection;
