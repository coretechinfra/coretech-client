import React, { useEffect } from 'react';
import { FaDatabase, FaCloudUploadAlt, FaShieldAlt, FaRobot, FaBalanceScale, FaTasks, FaCode, FaTools } from 'react-icons/fa';
import BreadCrumb2 from '../../../components/BreadCrumb/BreadCrumb2';
import { Link } from 'react-router-dom';

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <BreadCrumb2 heading="Services" />
            <section className="services-section container pt-0">
                <div className="auto-container">
                    <div className="row">

                        {/* Data */}
                        <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon-box"><FaDatabase className='icon' /></div>
                                <h5 className="title"><Link to="/services/data">Data Services</Link></h5>
                                <div className="text">Expert solutions for data engineering, architecture, management, and analytics.</div>
                                <Link to="/services/data" className="read-more"><i className="fa fa-long-arrow-alt-right"></i> Read more</Link>
                            </div>
                        </div>

                        {/* Cloud */}
                        <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon-box"><FaCloudUploadAlt className='icon' /></div>
                                <h5 className="title"><Link to="/services/cloud">Cloud Services</Link></h5>
                                <div className="text">Migrate, modernize, and optimize your infrastructure on the cloud.</div>
                                <Link to="/services/cloud" className="read-more"><i className="fa fa-long-arrow-alt-right"></i> Read more</Link>
                            </div>
                        </div>

                        {/* Security & Privacy */}
                        <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon-box"><FaShieldAlt className='icon' /></div>
                                <h5 className="title"><Link to="/services/security-and-privacy">Security & Privacy</Link></h5>
                                <div className="text">Safeguard your systems, data, and operations with robust solutions.</div>
                                <Link to="/services/security-and-privacy" className="read-more"><i className="fa fa-long-arrow-alt-right"></i> Read more</Link>
                            </div>
                        </div>

                        {/* Artificial Intelligence */}
                        <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon-box"><FaRobot className='icon' /></div>
                                <h5 className="title"><Link to="/services/artificial-intelligence">Artificial Intelligence</Link></h5>
                                <div className="text">Unlock insights, automate processes, and drive innovation with AI.</div>
                                <Link to="/services/artificial-intelligence" className="read-more"><i className="fa fa-long-arrow-alt-right"></i> Read more</Link>
                            </div>
                        </div>

                        {/* Governance & Compliance */}
                        <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon-box"><FaBalanceScale className='icon' /></div>
                                <h5 className="title"><Link to="/services/governance-and-compliance">Governance & Compliance</Link></h5>
                                <div className="text">Ensure regulatory compliance, risk management, and operational excellence.</div>
                                <Link to="/services/governance-and-compliance" className="read-more"><i className="fa fa-long-arrow-alt-right"></i> Read more</Link>
                            </div>
                        </div>

                        {/* Planning and Execution */}
                        <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon-box"><FaTasks className='icon' /></div>
                                <h5 className="title"><Link to="/services/planning-and-execution">Planning and Execution</Link></h5>
                                <div className="text">Achieve strategic goals with portfolio, product, program, and project management.</div>
                                <Link to="/services/planning-and-execution" className="read-more"><i className="fa fa-long-arrow-alt-right"></i> Read more</Link>
                            </div>
                        </div>

                        {/* Development & Integration */}
                        <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon-box"><FaCode className='icon' /></div>
                                <h5 className="title"><Link to="/services/development-and-integration">Development & Integration</Link></h5>
                                <div className="text">Build custom applications, websites, and mobile apps tailored to your needs.</div>
                                <Link to="/services/development-and-integration" className="read-more"><i className="fa fa-long-arrow-alt-right"></i> Read more</Link>
                            </div>
                        </div>

                        {/* Service Operations */}
                        <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon-box"><FaTools className='icon' /></div>
                                <h5 className="title"><Link to="/services/service-operations">Service Operations</Link></h5>
                                <div className="text">Ensure smooth system operation and continuous improvement with 24/7 support and maintenance.</div>
                                <Link to="/services/service-operations" className="read-more"><i className="fa fa-long-arrow-alt-right"></i> Read more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;
