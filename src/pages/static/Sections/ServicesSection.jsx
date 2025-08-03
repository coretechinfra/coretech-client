import React from 'react';
import { FaCloudscale } from 'react-icons/fa';
import { FaBuildingColumns, FaShieldHalved } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  return (
   <>
   <section className="services-section container pt-0">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">What We’re Offering</span>
                        <h2>Services we’re offering to <br />our customers.</h2>
                    </div>

                    <div className="row">
                        <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon-box"><FaCloudscale className='icon'/></div>
                                <h5 className="title"><Link to="#">Cloud Architecture</Link></h5>
                                <div className="text">Streamline infrastructure, optimize performance, secure data.</div>
                                <Link to="#" className="read-more"><i className="fa fa-long-arrow-alt-right"></i> Read more</Link>
                            </div>
                        </div>

                        <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon-box"><FaBuildingColumns className='icon'/></div>
                                <h5 className="title"><Link to="#">IT Infrastructure</Link></h5>
                                <div className="text">Optimize networks, enhance operations with IT Infrastructure Excellence.</div>
                                <Link to="#" className="read-more"><i className="fa fa-long-arrow-alt-right"></i> Read more</Link>
                            </div>
                        </div>

                        <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon-box"><FaShieldHalved className='icon'/></div>
                                <h5 className="title"><Link to="#">Cyber Security</Link></h5>
                                <div className="text">Safeguard data, protect networks, mitigate risks.</div>
                                <Link to="#" className="read-more"><i className="fa fa-long-arrow-alt-right"></i> Read more</Link>
                            </div>
                        </div>
                        <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon-box"><FaShieldHalved className='icon'/></div>
                                <h5 className="title"><Link to="#">Business Optimization</Link></h5>
                                <div className="text">Tincidunt elit magnis nulla facilisis sags maecenas nunc amet ultrices.</div>
                                <Link to="#" className="read-more"><i className="fa fa-long-arrow-alt-right"></i> Read more</Link>
                            </div>
                        </div>
                        <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon-box"><FaShieldHalved className='icon'/></div>
                                <h5 className="title"><Link to="#">Service Management</Link></h5>
                                <div className="text">Tincidunt elit magnis nulla facilisis sags maecenas nunc amet ultrices.</div>
                                <Link to="#" className="read-more"><i className="fa fa-long-arrow-alt-right"></i> Read more</Link>
                            </div>
                        </div>
                        <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon-box"><FaShieldHalved className='icon'/></div>
                                <h5 className="title"><Link to="#">Cloud & Infra Security</Link></h5>
                                <div className="text">Tincidunt elit magnis nulla facilisis sags maecenas nunc amet ultrices.</div>
                                <Link to="#" className="read-more"><i className="fa fa-long-arrow-alt-right"></i> Read more</Link>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </section>
  
   </>
  )
}

export default ServicesSection