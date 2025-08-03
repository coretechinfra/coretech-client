import { Description } from '@mui/icons-material';
import React from 'react'
import { Link } from 'react-router-dom';



const WhySection = ({data}) => {
    return (
        <>
            <section className="about-section-two pt-1">
                <div className="container">
                    <div className="sec-title text-center px-5">
                        <span className="sub-title">{data?.sectionTitle}</span>
                        <h2>{data?.title}</h2>
                    </div>
                    <div className="text text-center px-5 mb-5">
                        <p>
                            {data?.description}
                        </p>

                        {
                            data?.paragraphs?.map((paragraph, i) => (
                                <p key={i}>
                                    {paragraph}
                                </p>
                            ))
                        }
                    </div>
                    <div className="row px-4">
                        {
                            data?.services?.map((service, i) => (
                                <div className="about-block col-lg-4 col-md-6" key={i}>
                                    <div className="inner-box">
                                        <i className="icon flaticon-user-interface"></i>
                                        <h6 className="title">{service?.title}</h6>
                                        <div className="text">{service?.description}</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhySection;