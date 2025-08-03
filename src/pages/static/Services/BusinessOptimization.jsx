import React, { useEffect, useRef } from 'react';
import CarouselTwo from '../../../components/Carousel/CarouselTwo';
import FeatureSectionTwo from '../Sections/FeatureSectionTwo';
import IntroductionSection from '../Sections/IntroductionSection';
import WhySection from '../Sections/WhySection';
import ProcessSection from '../Sections/ProcessSection';
import SubServicesSection from '../Sections/SubServicesSection';
import VAPTFormSection from '../Sections/VAPTFormSection';
import ProcessSection2 from '../Sections/ProcessSection2';
import BusinessOptimizationForm from '../Sections/BusinessOptimizationForm';





const BusinessOptimization = () => {
    const formSectionRef = useRef(null);

    const navigateToSection = () => {
        formSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const videos = [
        'https://cdn.pixabay.com/video/2021/09/28/89986-620432887_large.mp4',
        'https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4',
        'https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4',
        'https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4',
    ];

    const slideContent = [
        {
            "title": "Unlock Your Business Potential",
            "description": "Maximize efficiency, productivity, and profitability with our business optimization solutions. Empower your organization to achieve peak performance and sustainable growth.",
            "buttonText": "Explore Solutions",
            "buttonNavigation": "#solutions",
            "animation": "fadeInRight"
        },
        {
            "title": "Streamline Processes and Workflows",
            "description": "Identify inefficiencies and bottlenecks in your business processes. Our optimization solutions streamline workflows, reducing costs and enhancing agility.",
            "buttonText": "Learn More",
            "buttonNavigation": "#processes",
            "animation": "fadeInRight"
        },
        {
            "title": "Data-Driven Decision Making",
            "description": "Harness the power of data analytics to drive informed decision-making. Our optimization solutions provide actionable insights for strategic planning and resource allocation.",
            "buttonText": "Discover Insights",
            "buttonNavigation": "#data-analytics",
            "animation": "fadeInRight"
        },
        {
            "title": "Continuous Improvement and Innovation",
            "description": "Foster a culture of continuous improvement and innovation within your organization. Our optimization solutions promote agility, adaptability, and competitiveness.",
            "buttonText": "Start Innovating",
            "buttonNavigation": "#innovation",
            "animation": "fadeInRight"
        }
    ];
    

    const introduction = {
        "sectionTitle": "What is Business Optimization?",
        "title": "Maximizing Efficiency and Performance",
        "description": "Business optimization involves analyzing and improving various aspects of a business to enhance efficiency, productivity, and overall performance. It encompasses strategies, processes, and technologies aimed at streamlining operations, reducing costs, and maximizing profitability.",
        "features": [
            {
                "title": "Process Improvement",
                "description": "Identify inefficiencies and bottlenecks in business processes and implement solutions to streamline workflows.",
                "iconClass": "flaticon-strategy"
            },
            {
                "title": "Data Analysis",
                "description": "Utilize data analytics tools and techniques to gain insights into business operations and make informed decisions.",
                "iconClass": "flaticon-analytics"
            },
            {
                "title": "Technology Integration",
                "description": "Leverage technology solutions and systems to automate tasks, improve collaboration, and optimize resource allocation.",
                "iconClass": "flaticon-settings"
            },
            {
                "title": "Strategic Planning",
                "description": "Develop long-term strategies and action plans to achieve business goals and stay ahead of the competition.",
                "iconClass": "flaticon-growth"
            }
        ],
        "images": [
            "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/resource/about-3.jpg",
            "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/resource/about-4.jpg"
        ]
    };
    
    const benefits = {
        "sectionTitle": "Benefits of Business Optimization",
        "title": "Unlocking Business Advantages with Optimization",
        "description": "Business optimization initiatives can lead to numerous benefits, enabling organizations to thrive in a competitive landscape.",
        "services": [
            {
                "title": "Increased Efficiency",
                "description": "Optimize processes and workflows to reduce waste, minimize errors, and enhance productivity.",
            },
            {
                "title": "Cost Reduction",
                "description": "Identify cost-saving opportunities and implement strategies to reduce expenses without sacrificing quality or performance.",
            },
            {
                "title": "Improved Decision Making",
                "description": "Access actionable insights derived from data analysis to make informed decisions and drive business growth.",
            },
            {
                "title": "Enhanced Customer Satisfaction",
                "description": "Deliver better products and services by aligning business operations with customer needs and expectations.",
            },
            {
                "title": "Agility and Adaptability",
                "description": "Develop the ability to quickly adapt to changes in the market, technology, and regulatory environment.",
            },
            {
                "title": "Competitive Advantage",
                "description": "Gain a competitive edge by optimizing business processes, increasing agility, and delivering superior value to customers.",
            }
        ]
    };
    
    const process = {
        "sectionTitle": "Our Business Optimization Process",
        "title": "Streamlined Approach to Business Excellence",
        "process": [
            {
                "stepId": 1,
                "title": "Assessment & Analysis",
                "description": "Conduct a comprehensive assessment of current business operations and identify areas for improvement.",
                "iconClass": "flaticon-analytics"
            },
            {
                "stepId": 2,
                "title": "Strategy Development",
                "description": "Formulate a customized optimization strategy and action plan based on the assessment findings and business goals.",
                "iconClass": "flaticon-strategy"
            },
            {
                "stepId": 3,
                "title": "Implementation & Execution",
                "description": "Implement the optimization initiatives and execute the action plan in collaboration with stakeholders.",
                "iconClass": "flaticon-settings"
            },
            {
                "stepId": 4,
                "title": "Monitoring & Improvement",
                "description": "Monitor key performance indicators (KPIs) and metrics to track progress and make continuous improvements.",
                "iconClass": "flaticon-growth"
            }
        ]
    };
    
    const services = {
        "sectionTitle": "Our Business Optimization Services",
        "title": "Tailored Solutions for Business Excellence",
        "description": "We offer a range of business optimization services designed to help organizations streamline operations, maximize efficiency, and achieve sustainable growth.",
        "services": [
            {
                "index": "01",
                "title": "Process Optimization",
                "description": "Identify inefficiencies and bottlenecks in business processes and implement solutions to improve efficiency and productivity.",
                "iconClass": "flaticon-settings"
            },
            {
                "index": "02",
                "title": "Cost Reduction Strategies",
                "description": "Develop cost-saving strategies and initiatives to reduce expenses without compromising quality or performance.",
                "iconClass": "flaticon-money"
            },
            {
                "index": "03",
                "title": "Data Analytics Solutions",
                "description": "Utilize advanced data analytics tools and techniques to derive actionable insights and drive informed decision making.",
                "iconClass": "flaticon-analytics"
            },
            {
                "index": "04",
                "title": "Technology Integration Services",
                "description": "Integrate cutting-edge technology solutions to automate tasks, improve collaboration, and optimize resource utilization.",
                "iconClass": "flaticon-growth"
            }
        ],
        "cta": {
            "text": "Focus on what's more important for you, rest on us",
            "buttonText": "Get Started",
            "buttonLink": "#contact"
        }
    };
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <CarouselTwo videos={videos} slideContent={slideContent} />
            {/* <FeatureSectionTwo /> */}
            <IntroductionSection data={introduction} />
            <WhySection data={benefits} />
            <ProcessSection2 data={process} />
            <SubServicesSection data={services} />
            <BusinessOptimizationForm ref={formSectionRef} />

            {/* <section id="resources" class="py-5">
                <div class="container">
                    <h2 class="text-center mb-4">Resources</h2>
                    <div class="row">
                        <div class="col-md-4 mb-4">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title">Articles</h5>
                                    <p class="card-text">Explore our collection of articles covering various topics related to BusinessOptimization and cybersecurity.</p>
                                    <a href="#" class="btn btn-primary">Read Articles</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title">Whitepapers</h5>
                                    <p class="card-text">Download our whitepapers to learn more about BusinessOptimization methodologies and best practices.</p>
                                    <a href="#" class="btn btn-primary">Download Whitepapers</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title">Industry Reports</h5>
                                    <p class="card-text">Access industry reports and surveys on cybersecurity trends and threats.</p>
                                    <a href="#" class="btn btn-primary">View Reports</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}



        </>
    )
}

export default BusinessOptimization;