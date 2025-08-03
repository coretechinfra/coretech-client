import React from 'react';

const AboutSection = () => {
    return (
        <>
            <section className="features-section">
                <div className="bg bg-pattern-11"></div>
                <div className="container">
                    <div className="row">
                        {/* <!-- Content Column --> */}
                        <div className="content-column col-xl-5 col-lg-6 col-md-12">
                            <div className="inner-column wow fadeInRight">
                                <div className="sec-title">
                                    <span className="sub-title">About Us</span>
                                    <h2 className='mb-3'>Who we are</h2>
                                    <p>At Coretech, we believe technology is the fuel for a brighter future. Our purpose is to ignite your potential, helping individuals and organizations dream bigger, move faster, and build a better tomorrow.</p>
                                </div>

                                <div className="feature-block">
                                    <div className="inner-box">
                                        <div className="content">
                                            <span className="icon"><i className="fa fa-check"></i></span>
                                            <h5 className="title">Solidify your software foundation</h5>
                                            <div className="text">We optimize your software architecture for agility and scalability, ensuring it supports your growth.</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="feature-block">
                                    <div className="inner-box">
                                        <div className="content">
                                            <span className="icon"><i className="fa fa-check"></i></span>
                                            <h5 className="title">Craft a winning digital strategy</h5>
                                            <div className="text">We collaborate with you to develop a tech-driven roadmap that aligns perfectly with your business goals.</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="feature-block">
                                    <div className="inner-box">
                                        <div className="content">
                                            <span className="icon"><i className="fa fa-check"></i></span>
                                            <h5 className="title">Streamline your software portfolio</h5>
                                            <div className="text">We identify opportunities to optimize your software ecosystem, maximizing efficiency and cost-effectiveness.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Content Column --> */}
                        <div className="image-column col-xl-7 col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column wow fadeInLeft">
                                <div className="image-box">
                                    <figure className="image"><img src="images/resource/image-2.jpg" alt=""/></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutSection;