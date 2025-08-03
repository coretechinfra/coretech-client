import React, { useEffect, useRef } from 'react';
import CarouselTwo from '../../../components/Carousel/CarouselTwo';
import FeatureSectionTwo from '../Sections/FeatureSectionTwo';
import IntroductionSection from '../Sections/IntroductionSection';
import WhySection from '../Sections/WhySection';
import ProcessSection from '../Sections/ProcessSection';
import SubServicesSection from '../Sections/SubServicesSection';
import VAPTFormSection from '../Sections/VAPTFormSection';
import CloudArchitectureForm from '../Sections/CloudArchitectureForm';





const CloudArchitecture = () => {
    const formSectionRef = useRef(null);

    const navigateToSection = () => {
        formSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const videos = [
        'https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4',
        'https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4',
        'https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4',
    ];

    const slideContent = [
        {
            "title": "Unlock the Power of Cloud Architecture",
            "description": "Leverage the flexibility and scalability of cloud architecture to transform your IT infrastructure. Embrace innovation and drive business growth with our cloud solutions.",
            "buttonText": "Explore Solutions",
            "buttonNavigation": "#solutions",
            "animation": "fadeInRight"
        },
        {
            "title": "Optimize Performance and Efficiency",
            "description": "Maximize the performance and efficiency of your applications and services with our cloud architecture solutions. Experience seamless scalability and reliability.",
            "buttonText": "Learn More",
            "buttonNavigation": "#performance",
            "animation": "fadeInRight"
        },
        {
            "title": "Secure Your Cloud Environment",
            "description": "Protect your sensitive data and applications with robust security measures. Our cloud architecture solutions ensure compliance and mitigate cyber threats.",
            "buttonText": "Explore Security",
            "buttonNavigation": "#security",
            "animation": "fadeInRight"
        },
        {
            "title": "Achieve Cost Savings and Flexibility",
            "description": "Reduce infrastructure costs and enhance flexibility with our cloud architecture solutions. Pay only for what you use and scale resources as needed.",
            "buttonText": "Get Started",
            "buttonNavigation": "#get-started",
            "animation": "fadeInRight"
        }
    ];
    

    const introduction = {
        "sectionTitle": "What is Cloud Architecture?",
        "title": "Harnessing the Power of Cloud Computing",
        "description": "Cloud architecture refers to the design and structure of cloud-based systems and applications. It encompasses the arrangement of cloud resources, such as servers, storage, networking, and services, to optimize performance, scalability, and reliability.",
        "features": [
            {
                "title": "Scalability",
                "description": "Easily scale resources up or down based on demand, ensuring optimal performance and cost-efficiency.",
                "iconClass": "flaticon-chart"
            },
            {
                "title": "Flexibility",
                "description": "Adapt quickly to changing business needs and requirements by leveraging cloud-native services and architectures.",
                "iconClass": "flaticon-settings"
            },
            {
                "title": "Resilience",
                "description": "Design resilient architectures that minimize downtime and ensure high availability and fault tolerance.",
                "iconClass": "flaticon-shield"
            },
            {
                "title": "Cost-Effectiveness",
                "description": "Optimize resource utilization and pay only for what you use, reducing overall infrastructure costs.",
                "iconClass": "flaticon-money"
            }
        ],
        "images": [
            "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/resource/about-3.jpg",
            "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/resource/about-4.jpg"
        ]
    };
    
    const benefits = {
        "sectionTitle": "Benefits of Cloud Architecture",
        "title": "Unlocking Business Advantages with Cloud Solutions",
        "description": "Cloud architecture offers numerous benefits to organizations of all sizes across various industries.",
        "services": [
            {
                "title": "Scalability & Elasticity",
                "description": "Easily scale resources up or down to accommodate fluctuating workloads and demand spikes.",
            },
            {
                "title": "Cost Optimization",
                "description": "Reduce capital expenses by paying only for the resources and services you use, with no upfront investment required.",
            },
            {
                "title": "Global Accessibility",
                "description": "Access cloud services and applications from anywhere in the world with an internet connection, enabling remote work and global expansion.",
            },
            {
                "title": "Enhanced Security",
                "description": "Leverage built-in security features and compliance certifications to protect sensitive data and ensure regulatory compliance.",
            },
            {
                "title": "Improved Collaboration",
                "description": "Enable seamless collaboration and communication among teams with cloud-based productivity tools and applications.",
            },
            {
                "title": "Innovation & Agility",
                "description": "Accelerate innovation and time-to-market by leveraging cloud-native technologies and DevOps practices.",
            }
        ]
    };
    
    const process = {
        "sectionTitle": "Our Cloud Architecture Process",
        "title": "Streamlined Approach to Cloud Solutions",
        "process": [
            {
                "stepId": 1,
                "title": "Discovery & Assessment",
                "description": "Understand your business needs, existing infrastructure, and goals for cloud adoption.",
                "iconClass": "fa-solid fa-magnifying-glass"
            },
            {
                "stepId": 2,
                "title": "Architecture Design",
                "description": "Design a scalable, resilient, and cost-effective cloud architecture tailored to your requirements.",
                "iconClass": "flaticon-design"
            },
            {
                "stepId": 3,
                "title": "Implementation & Migration",
                "description": "Implement the cloud architecture and migrate existing workloads and data to the cloud.",
                "iconClass": "fa-solid fa-microchip"
            },
            {
                "stepId": 4,
                "title": "Testing & Optimization",
                "description": "Conduct thorough testing to ensure performance, security, and reliability. Optimize resources for efficiency.",
                "iconClass": "fa-solid fa-microscope"
            },
            {
                "stepId": 5,
                "title": "Monitoring & Maintenance",
                "description": "Implement monitoring tools and processes to continuously monitor performance and address any issues. Provide ongoing maintenance and support.",
                "iconClass": "flaticon-help"
            }
        ]
    };
    
    const services = {
        "sectionTitle": "Our Cloud Architecture Services",
        "title": "Comprehensive Cloud Solutions for Your Business",
        "description": "We offer a range of cloud architecture services to help businesses harness the full potential of cloud computing.",
        "services": [
            {
                "index": "01",
                "title": "Cloud Strategy Consulting",
                "description": "Develop a customized cloud strategy tailored to your business goals, requirements, and budget.",
                "iconClass": "flaticon-analytics"
            },
            {
                "index": "02",
                "title": "Cloud Migration Services",
                "description": "Migrate your existing applications, data, and workloads to the cloud securely and efficiently.",
                "iconClass": "flaticon-arrow"
            },
            {
                "index": "03",
                "title": "Cloud Architecture Design",
                "description": "Design scalable, resilient, and cost-effective cloud architectures optimized for performance and reliability.",
                "iconClass": "flaticon-design"
            },
            {
                "index": "04",
                "title": "Cloud Infrastructure Management",
                "description": "Manage and optimize your cloud infrastructure to ensure performance, security, and cost-effectiveness.",
                "iconClass": "flaticon-settings-1"
            }
        ],
        "cta": {
            "text": "Optimize your cloud infrastructure to ensure performance, security, and cost-effectiveness",
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
            <ProcessSection data={process} />
            <SubServicesSection data={services} />
            <CloudArchitectureForm ref={formSectionRef} />

            {/* <section id="resources" class="py-5">
                <div class="container">
                    <h2 class="text-center mb-4">Resources</h2>
                    <div class="row">
                        <div class="col-md-4 mb-4">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title">Articles</h5>
                                    <p class="card-text">Explore our collection of articles covering various topics related to CloudArchitecture and cybersecurity.</p>
                                    <a href="#" class="btn btn-primary">Read Articles</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title">Whitepapers</h5>
                                    <p class="card-text">Download our whitepapers to learn more about CloudArchitecture methodologies and best practices.</p>
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

export default CloudArchitecture;