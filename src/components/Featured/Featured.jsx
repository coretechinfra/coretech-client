import React from 'react';
import './Featured.css';

const Featured = ({ featuredContent }) => {
    return (
        <>
            <section className="featured-1 container">
                <div className="main-img fadeInRight">
                    <img src={featuredContent?.imgSrc} alt="about-us" className='w-100' />
                </div>
                <div className="featured-content fadeInLeft">
                    <h4 className='fadeInLeft'>{featuredContent?.sectionName}</h4>
                    <h1 className='fadeInUp'>{featuredContent?.title}</h1>
                    <hr className='fadeInRight' />
                    <p className='fadeInUp'>
                        {featuredContent?.description}
                    </p>
                    <h5>{featuredContent?.content?.para}</h5>
                    <ul className='custom-list'>
                        {
                            featuredContent?.content?.list?.map((item, i) => (
                                <li key={i}>
                                    <strong>{item?.heading}:</strong>
                                    {item?.description}
                                </li>
                            ))
                        }
                    </ul>

                    {/* <div className="featured-analytics">
                        <div className="analytics-content-1 fadeInUp">
                            <h3>{featuredContent?.analytics[0]?.count}</h3>
                            <h5>
                                {featuredContent?.analytics[0]?.name}
                            </h5>
                        </div>
                        <div className="analytics-content-2 fadeInUp">
                            <h3>{featuredContent?.analytics[1]?.count}</h3>
                            <h5>
                                {featuredContent?.analytics[1]?.name}
                            </h5>
                        </div>
                    </div> */}
                </div>
            </section>
        </>
    )
}

export default Featured