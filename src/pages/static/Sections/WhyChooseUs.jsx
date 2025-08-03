import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight, FaPiggyBank } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { TbTransform } from "react-icons/tb";
import { PiStrategyBold } from "react-icons/pi";
import { LuGoal } from "react-icons/lu";

function WhyChooseUs({ featuredContent }) {
    return (
        <section className='featured-section-3 container-fluid'>
            <div className="featured-2 container">

                <div className="featured-content-2 fadeInLeft">
                    {/* <h4 className='fadeInLeft'>/ Why Coretech?</h4>
    <h1 className='fadeInUp'>The Coretech Difference</h1> */}
                    <div class="sec-title">
                        <span class="sub-title">Why Coretech?</span>
                        <h2>The Coretech Difference</h2>
                    </div>
                    <p className='fadeInUp'>
                    Building trust with our community is at the core of everything we do. We aim to help every industry succeed by implementing efficient and smart IT solutions and services.
                    </p>

                    <div className="featured-actions">
                        <div className="action-link fadeInUp">
                            <Link to="tel:+19452785774">Call Now {" "} <FaChevronRight /></Link>
                        </div>
                        <div className="action-link  fadeInUp">
                            <Link to="https://outlook.office365.com/book/CoretechInfrastructureSolutionsInc1@coretechinfra.com/s/-QDgTMR6kUq4LYy9OmsyGg2" target='_blank'>Book Free Estimate {" "} <FaChevronRight /></Link>
                        </div>
                    </div>
                </div>
                <div className="featured-content-3 fadeInRight">
                    <div className="items-col-1">
                        <div className="featured-item">
                            <GrTechnology />
                            <div className="featured-item-content">
                                <h4>Technology</h4>
                                <p>
                                    Analyze, architect, and co-create. We blend design, engineering, and analytics expertise to help you build the future.
                                </p>
                            </div>
                        </div>
                        <hr />
                        <div className="featured-item">
                            <TbTransform />
                            <div className="featured-item-content">
                                <h4>Transformation</h4>
                                <p>Building great technology has always been core to what we do. </p>
                            </div>
                        </div>
                    </div>
                    <div className="items-col-2">
                        <div className="featured-item">
                            <PiStrategyBold />
                            <div className="featured-item-content">
                                <h4>Strategy</h4>
                                <p>Go beyond the expected - Redefine what's possible, give shape to the future and get there.</p>
                            </div>
                        </div>
                        <hr />
                        <div className="featured-item">
                            <LuGoal />
                            <div className="featured-item-content">
                                <h4>Dedicated</h4>
                                <p>New technologies. Shifting customers. Industry disruption. Business moves fast, and we specialize in working through change with you.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;
