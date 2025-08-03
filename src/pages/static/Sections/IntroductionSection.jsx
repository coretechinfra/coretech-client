import React from 'react'
import { Link } from 'react-router-dom';



const IntroductionSection = ({ data }) => {
    return (
        <>
            <section className="about-section-two">
                <div className="container">
                    <div className="row">
                        <div className={`content-column ${data?.images?.length ? "col-xl-6 col-lg-7" : ""} col-md-12 col-sm-12 order-2 fadeInRight`} data-wow-delay="600ms">
                            <div className="inner-column">
                                {/* <div className="float-text">VAPT</div> */}
                                <div className="sec-title">
                                    <span className="sub-title">{data?.sectionTitle}</span>
                                    <h2>{data?.title}</h2>
                                    <div className="text">
                                        <p>
                                            {data?.description}
                                        </p>

                                        {
                                            data?.paragraphs?.map((para, i) => (
                                                <p key={i}>
                                                    {para}
                                                </p>
                                            ))
                                        }
                                    </div>
                                </div>

                                <div className="row">
                                    {
                                        data?.features?.map((feature, i) => (
                                            <div className="about-block col-lg-6 col-md-6" key={i}>
                                                <div className="inner-box">
                                                    <i className={`icon ${feature?.iconClass}`}></i>
                                                    <h6 className="title">{feature?.title}</h6>
                                                    <div className="text">{feature?.description}</div>
                                                </div>
                                            </div>
                                        ))
                                    }


                                </div>

                                {
                                    data?.cta ? 
                                    <Link to={data?.cta?.buttonLink} className="theme-btn btn-style-one"><span className="btn-title">{data?.cta?.buttonText}</span></Link> : null
                                }
                            </div>
                        </div>

                        {/* <!-- Image Column --> */}
                        {
                            data?.images?.length ?
                                <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                                    <div className="inner-column fadeInLeft">
                                        <figure className="image-1 overlay-anim fadeInUp"><img src={data?.images[0]} alt="" className='w-100'/></figure>
                                        <figure className="image-2 overlay-anim fadeInRight"><img src={data?.images[1]} alt="" className='w-100'/></figure>
                                        {/* <div className="experience bounce-y">
                                            <div className="inner">
                                                <i className="icon flaticon-design"></i>
                                                <div className="text">Founded<br /> 2023</div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div> :
                                null
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default IntroductionSection;