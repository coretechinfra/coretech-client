import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const InsightHero = ({
  featuredPosts,
  title,
  contentStyle,
  insightSettings,
}) => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    waitForAnimate: false,
  ...insightSettings,
    };

  return (
    <>
      <div className="blog-hero">
        <Slider {...settings} className="blog-hero-slider">
          {featuredPosts?.map((article) => (
            <div key={article.id} className="blog-hero-slide">
              <img
                src={article.heroImage}
                alt={article.title}
                className="blog-hero-image"
              />
              <div className=" container blog-hero-text" style={contentStyle}>
                <p>{title ? title : "Featured Posts"}</p>
                <hr />
                <h1>{article.title}</h1>
               {
                insightSettings?.description == false ? null :  <p>{article.description}</p>
               }
                <a
                  // href={`/articles/${article.id}`}
                  href={`/${article?.slug}`}
                  className="theme-btn btn-style-one light"
                >
                  Read {title?.replace("Featured ", "")}
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default InsightHero;
