import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = ({title, link, linkText}) => {
    return (
        <>
            <section className="call-to-action" style={{color: 'var(--theme-color2'}}>
                <div className=""></div>
                <div className="container">
                    <div className="outer-box wow fadeIn">
                        <div className="title-box">
                            <h1 className="title">{title}</h1>
                            {/* <p>Take the first step towards a rewarding career in cybersecurity. <br/>Enroll in our Ethical Hacking and Bug Bounty Training program today <br/>and unleash your potential as a cybersecurity expert!</p> */}
                        </div>
                        <div className="btn-box">
                            <Link to={link} target='_blank' className="theme-btn btn-style-one light"><span className="btn-title">{linkText}</span></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CTASection;