import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Page from '../../../Layout/Page';

const Careers = () => {
  useEffect(()=> {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  },[]);

  

  return (
    <Page 
      title="Careers at Coretech | Build the Future of Infrastructure"
      description="Join Coretech Infrastructure's dynamic team. Explore exciting career opportunities in infrastructure development, work on innovative projects, and make a lasting impact."
      keywords="Coretech careers, infrastructure jobs, engineering careers, sustainable development, construction jobs, project management"

    >
      <div className='careers-hero position-relative' style={{ marginBottom: '3rem' }}>
        <img 
          src="https://images.pexels.com/photos/2467506/pexels-photo-2467506.jpeg" 
          alt="Coretech Infrastructure Team" 
          className="w-100"
          style={{ height: '550px', objectFit: 'cover' }}
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"></div>
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center">
          <div className="container">
            <div className="col-12 col-lg-8 px-4">
              <h1 className='text-light mb-4 display-4 fw-bold'>
                Building Tomorrow's Future Today. <span className="text-warning">Join Our Visionary Team!</span>
              </h1>
              <Link to="/careers/jobs/positions" className="btn btn-warning btn-lg px-5 rounded-5 fw-bold">
                Explore Opportunities <i className="fa-solid fa-arrow-up-right-from-square ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    
      <div className="container-fluid px-0">
        <h1 className='text-center my-5 p-4' style={{ fontSize: "3.5rem" }}>
          Why Choose Coretech? <span className="text-warning">Here's What Sets Us Apart</span>
        </h1>
        
        <div className="row align-items-center mb-5 row-cols-1 row-cols-lg-2 g-0">
          <div className="col p-0">
            <img 
              src="https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Coretech Team Collaboration" 
              className="w-100"
              style={{ height: '550px', objectFit: 'cover', borderRadius: "0 20px 20px 0" }} 
            />
          </div>
          <div className="col p-5">
            <p className='fs-3 pb-3 text-muted'>
              <i>"At Coretech, we're not just building infrastructure – we're shaping the future. Our team combines innovation with expertise to create sustainable solutions that make a real difference."</i>
            </p>
            <div className="pb-3">
              <h5 className="fw-bold">Rajesh Kumar</h5>
              <h6 className="text-warning">Managing Director</h6>
            </div>
            <Link to="/about" className='btn btn-outline-dark btn-lg rounded-5 border-3'>
              Learn About Our Culture <i className="fa-regular fa-circle-play ms-2"></i>
            </Link>
          </div>
        </div>

        <div className="row align-items-center mb-5 row-cols-1 row-cols-lg-2 g-0">
          <div className="col p-5 order-lg-1 order-2">
            <p className='fs-3 pb-3 text-muted'>
              <i>"Working at Coretech has been transformative. The opportunity to work on large-scale infrastructure projects while being supported by an incredible team makes every day rewarding."</i>
            </p>
            <div className="pb-3">
              <h5 className="fw-bold">David</h5>
              <h6 className="text-warning">Senior Project Manager</h6>
            </div>
            {/* <Link to="/projects" className='btn btn-outline-dark btn-lg rounded-5 border-3'>
              View Our Projects <i className="fa-regular fa-circle-play ms-2"></i>
            </Link> */}
          </div>
          <div className="col p-0 order-lg-2 order-1">
            <img 
              src="https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Coretech Project Team" 
              className="w-100"
              style={{ height: '550px', objectFit: 'cover', borderRadius: "20px 0 0 20px" }} 
            />
          </div>
        </div>
      </div>

      <hr className='border-warning border-3' />
      
      <div className="container my-5 py-5">
        <div className="row row-cols-1 row-cols-lg-2 g-4">
          <div className="col">
            <h2 className="text-dark pe-lg-5 fs-1 fw-bold">
              Join a Team That's making a future better
            </h2>
          </div>
          <div className="col">
            <p className='fs-4 text-muted mb-4'>
              At Coretech, we believe in empowering our team members to reach their full potential while contributing to nation-building projects.
            </p>
            <Link to="/careers/jobs/positions" className='btn btn-warning btn-lg rounded-5 fw-bold'>
              Explore Career Opportunities <i className="fa-solid fa-square-arrow-up-right ms-2"></i>
            </Link>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Careers