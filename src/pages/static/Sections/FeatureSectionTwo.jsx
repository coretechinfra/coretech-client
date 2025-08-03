import React from 'react';

const FeatureSectionTwo = () => {
    return (
        <>
            <section className="features-section-two p-0">
                <div className="container">
                    <div className="outer-box">
                        <div className="row">
                            {/* <!-- Feature Block Two --> */}
                            <div className="feature-block-two col-lg-4 col-md-12 col-sm-12">
                                <div className="inner-box overlay-anim">
                                    <div className="content">
                                        <span className="icon"><i className="flaticon-trophy"></i></span>
                                        <h6 className="title">Award winning service</h6>
                                        {/* <div className="text">Lorem ium dolor sit amet pisicing elit sed do ut.</div> */}
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Feature Block Two --> */}
                            <div className="feature-block-two col-lg-4 col-md-12 col-sm-12">
                                <div className="inner-box overlay-anim">
                                    <div className="content">
                                        <span className="icon"><i className="flaticon-medal"></i></span>
                                        <h6 className="title">Best quality testing</h6>
                                        {/* <div className="text">Lorem ium dolor sit amet pisicing elit sed do ut.</div> */}
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Feature Block Two --> */}
                            <div className="feature-block-two col-lg-4 col-md-12 col-sm-12">
                                <div className="inner-box overlay-anim">
                                    <div className="content">
                                        <span className="icon"><i className="flaticon-satisfaction"></i></span>
                                        <h6 className="title">Satisfaction guarantee</h6>
                                        {/* <div className="text">Lorem ium dolor sit amet pisicing elit sed do ut.</div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FeatureSectionTwo;