import React from 'react';
import './BreadCrumb.css';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { FaAngleDoubleRight, FaChevronRight } from 'react-icons/fa';

const BreadCrumb2 = ({ heading }) => {
  const route = useLocation().pathname;
  return (
    <>
      <Helmet>
        <title>{heading}</title>
        <link rel="canonical" href={"https://www.coretechinfra.com" + route} />
      </Helmet>
      <div className="breadcrumb-section">
        <img src="https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/bg/bg1.jpg" alt="about-coretech" className='image-slide'/>
        <div className="breadcrumb-content">
          {/* <h5>Home <span><FaAngleDoubleRight /></span> About </h5> */}
          <h1>{heading}</h1>
        </div>
      </div>
    </>
  )
}

export default BreadCrumb2;