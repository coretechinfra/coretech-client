import React, { useEffect, useRef } from 'react';
import CarouselTwo from '../../../components/Carousel/CarouselTwo';
import FeatureSectionTwo from '../Sections/FeatureSectionTwo';
import IntroductionSection from '../Sections/IntroductionSection';
import WhySection from '../Sections/WhySection';
import ProcessSection from '../Sections/ProcessSection';
import SubServicesSection from '../Sections/SubServicesSection';
import VAPTFormSection from '../Sections/VAPTFormSection';
import ITInfrastructureForm from '../Sections/ITInfrastructureForm';





const Infrastructure = () => {
    const formSectionRef = useRef(null);

    const navigateToSection = () => {
        formSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const videos = [
        'https://cdn.pixabay.com/video/2018/03/09/14900-259623335_large.mp4',
        'https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4',
        'https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4',
        'https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4',
    ];

    const slideContent = [
        {
            "title": "Optimize Your IT Infrastructure for Efficiency",
            "description": "Maximize the performance and reliability of your IT infrastructure with our tailored solutions. From network architecture to server management, we ensure seamless operations.",
            "buttonText": "Explore Solutions",
            "buttonNavigation": "#solutions",
            "animation": "fadeInRight"
        },
        {
            "title": "Enhance Security and Compliance",
            "description": "Protect your data and meet regulatory requirements with our robust security measures. From firewalls to data encryption, we prioritize the confidentiality and integrity of your information.",
            "buttonText": "Learn More",
            "buttonNavigation": "#security",
            "animation": "fadeInRight"
        },
        {
            "title": "Scale Your Infrastructure for Growth",
            "description": "Future-proof your business with scalable infrastructure solutions. Whether you're expanding your operations or adopting new technologies, we ensure your IT environment can support your growth.",
            "buttonText": "See Success Stories",
            "buttonNavigation": "#success-stories",
            "animation": "fadeInRight"
        },
        {
            "title": "Drive Innovation and Collaboration",
            "description": "Enable innovation and collaboration across your organization with agile IT infrastructure. From cloud computing to collaboration tools, we empower your teams to work smarter.",
            "buttonText": "Get Started Today",
            "buttonNavigation": "#get-started",
            "animation": "fadeInRight"
        }
    ];
    

    const data = {
        "introduction": {
            "sectionTitle": "What is IT Infrastructure?",
            "title": "Foundation for Business Operations",
            "description": "IT infrastructure refers to the hardware, software, networks, and facilities that support the operation of an organization's IT environment. It serves as the foundation for delivering IT services and enabling business operations.",
            "features": [
                {
                    "title": "Scalability",
                    "description": "Build a flexible infrastructure that can scale up or down to meet changing business needs.",
                    "iconClass": "flaticon-chart"
                },
                {
                    "title": "Reliability",
                    "description": "Ensure the availability and reliability of IT systems and services to minimize downtime and disruptions.",
                    "iconClass": "flaticon-interface"
                },
                {
                    "title": "Security",
                    "description": "Implement robust security measures to protect sensitive data and defend against cyber threats.",
                    "iconClass": "flaticon-shield"
                },
                {
                    "title": "Efficiency",
                    "description": "Optimize IT resources and processes to improve operational efficiency and reduce costs.",
                    "iconClass": "flaticon-settings"
                }
            ],
            "images": [
                "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/resource/about-3.jpg",
                "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/resource/about-4.jpg"
            ]
        },
        "benefits": {
            "sectionTitle": "Benefits of IT Infrastructure",
            "title": "Empower Your Business with Reliable IT Infrastructure",
            "description": "Investing in robust IT infrastructure offers numerous benefits to organizations, enabling them to thrive in today's digital landscape.",
            "services": [
                {
                    "title": "Improved Productivity",
                    "description": "Streamline business operations and workflows with efficient IT infrastructure solutions.",
                    "iconClass": "flaticon-user-interface"
                },
                {
                    "title": "Enhanced Security",
                    "description": "Protect sensitive data and critical systems from cyber threats and unauthorized access.",
                    "iconClass": "flaticon-security"
                },
                {
                    "title": "Scalability",
                    "description": "Easily expand or upgrade IT infrastructure to accommodate business growth and changing needs.",
                    "iconClass": "flaticon-web"
                },
                {
                    "title": "Cost Savings",
                    "description": "Reduce IT-related costs through efficient resource utilization and optimized processes.",
                    "iconClass": "flaticon-money"
                },
                {
                    "title": "Business Continuity",
                    "description": "Ensure uninterrupted business operations and minimize downtime with reliable IT infrastructure.",
                    "iconClass": "flaticon-customer-support"
                },
                {
                    "title": "Competitive Advantage",
                    "description": "Gain a competitive edge by leveraging advanced IT infrastructure to innovate and deliver superior services.",
                    "iconClass": "flaticon-trophy"
                }
            ]
        },
        "services": {
            "sectionTitle": "Our IT Infrastructure Services",
            "title": "Comprehensive Solutions for Your IT Needs",
            "description": "We offer a wide range of IT infrastructure services to help organizations build, optimize, and manage their IT environments.",
            "services": [
                {
                    "index": "01",
                    "title": "Network Infrastructure",
                    "description": "Design, implement, and manage secure and reliable network infrastructure solutions.",
                    "iconClass": "flaticon-network"
                },
                {
                    "index": "02",
                    "title": "Cloud Services",
                    "description": "Leverage the power of cloud computing to increase agility, scalability, and cost-effectiveness.",
                    "iconClass": "flaticon-cloud-computing"
                },
                {
                    "index": "03",
                    "title": "Server Infrastructure",
                    "description": "Deploy and maintain robust server infrastructure to support business-critical applications and services.",
                    "iconClass": "flaticon-server"
                },
                {
                    "index": "04",
                    "title": "Storage Solutions",
                    "description": "Implement scalable and efficient storage solutions to manage and protect data effectively.",
                    "iconClass": "flaticon-data-storage"
                },
                {
                    "index": "05",
                    "title": "Data Center Management",
                    "description": "Optimize data center operations and ensure reliability, security, and efficiency.",
                    "iconClass": "flaticon-data-center"
                },
                {
                    "index": "06",
                    "title": "IT Security",
                    "description": "Protect your IT infrastructure and sensitive data from cyber threats with comprehensive security solutions.",
                    "iconClass": "flaticon-cyber-security"
                }
            ],
            "cta": {
                "text": "Optimize Your IT Infrastructure for Efficiency",
                "buttonText": "Get Started",
                "buttonLink": "#contact"
            }
        },
        "process": {
            "sectionTitle": "IT Infrastructure Process",
            "title": "Streamlined Approach to Success",
            "process": [
              {
                "stepId": 1,
                "title": "Discovery & Planning",
                "description": "Gain a deep understanding of your organization's IT needs, requirements, and goals.",
                "iconClass": "flaticon-concept"
              },
              {
                "stepId": 2,
                "title": "Design & Architecture",
                "description": "Create a comprehensive design and architecture plan tailored to meet your specific IT infrastructure needs.",
                "iconClass": "flaticon-design"
              },
              {
                "stepId": 3,
                "title": "Implementation & Deployment",
                "description": "Execute the design plan and deploy the necessary hardware, software, and networking components.",
                "iconClass": "flaticon-programmer"
              },
              {
                "stepId": 4,
                "title": "Testing & Optimization",
                "description": "Conduct rigorous testing to ensure the IT infrastructure meets performance, security, and scalability requirements. Optimize as needed.",
                "iconClass": "flaticon-access"
              },
              {
                "stepId": 5,
                "title": "Monitoring & Maintenance",
                "description": "Implement monitoring tools and processes to continuously monitor the IT infrastructure's performance and address any issues. Provide ongoing maintenance and support.",
                "iconClass": "flaticon-help"
              }
            ]
          }
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);


    return (
        <>
            <CarouselTwo videos={videos} slideContent={slideContent} />
            {/* <FeatureSectionTwo /> */}
            <IntroductionSection data={data?.introduction} />
            <WhySection data={data?.benefits} />
            <ProcessSection data={data?.process} />
            <SubServicesSection data={data?.services} />
            <ITInfrastructureForm ref={formSectionRef} />

            {/* <section id="resources" class="py-5">
                <div class="container">
                    <h2 class="text-center mb-4">Resources</h2>
                    <div class="row">
                        <div class="col-md-4 mb-4">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title">Articles</h5>
                                    <p class="card-text">Explore our collection of articles covering various topics related to Infrastructure and cybersecurity.</p>
                                    <a href="#" class="btn btn-primary">Read Articles</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title">Whitepapers</h5>
                                    <p class="card-text">Download our whitepapers to learn more about Infrastructure methodologies and best practices.</p>
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

export default Infrastructure;