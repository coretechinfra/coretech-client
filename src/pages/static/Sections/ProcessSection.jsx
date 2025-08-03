import { iconClasses } from '@mui/material';
import React from 'react';



const ProcessSection = ({data}) => {
    return (
        <>
            <section className="process-section">
                <div className="container">
                    <div className="sec-title text-center">
                        <span className="sub-title">{data?.sectionTitle}</span>
                        <h2>{data?.title}</h2>
                    </div>

                    <div className="row justify-content-center">
                        {/* <!-- Process block --> */}
                        {
                            data?.process?.map((process, index) => (
                                <div className="process-block col-lg-4 col-md-6 col-sm-12 fadeInUp" key={index}>
                                    <div className="inner-box">
                                        <div className="icon-box">
                                            <span className="count">{process?.stepId}</span>
                                            <i className={`icon ${process?.iconClass}`}></i>
                                        </div>
                                        <h5 className="title">{process?.title}</h5>
                                        <div className="text">{process?.description}</div>
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

export default ProcessSection;