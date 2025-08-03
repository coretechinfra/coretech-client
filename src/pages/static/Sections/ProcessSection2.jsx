import React from 'react';
import { FiTarget } from 'react-icons/fi';
import { Link } from 'react-router-dom';


const ProcessSection2 = ({ data, size='md' }) => {
    return (
        <>
            <section class="services-section-three">
                <div class="container">
                    <div class="sec-title text-center">
                        <span class="sub-title">{data?.sectionTitle}</span>
                        <h2>{data?.title}</h2>
                    </div>

                    <div class="row">
                        {
                            data?.process?.map((process, i) => (
                                <div class="service-block-three col-lg-3 col-md-6 col-sm-12 fadeInUp">
                                    <div class="inner-box">
                                        <div class="content" style={{minHeight: `${size==='lg' ? '444px' : ''}`}}>
                                            <div class="icon-box"><span className="icon"><FiTarget /></span></div>
                                            <h5 class="title"><Link to="#">{process?.title}</Link></h5>
                                            <div class="text">{process?.description}</div>
                                        </div>
                                        <Link to="#" class="read-more"><i class="fa fa-long-arrow-alt-right"></i></Link>
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

export default ProcessSection2;