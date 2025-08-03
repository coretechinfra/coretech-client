import React, { useEffect, useRef } from 'react';
import CarouselTwo from '../../../components/Carousel/CarouselTwo';
import FeatureSectionTwo from '../Sections/FeatureSectionTwo';
import IntroductionSection from '../Sections/IntroductionSection';
import WhySection from '../Sections/WhySection';
import ProcessSection from '../Sections/ProcessSection';
import SubServicesSection from '../Sections/SubServicesSection';
import VAPTFormSection from '../Sections/VAPTFormSection';
import ProcessSection2 from '../Sections/ProcessSection2';
import CloudInfraForm from '../Sections/CloudInfraForm';


const CloudInfraSecurity = () => {
    const formSectionRef = useRef(null);

    const navigateToSection = () => {
        formSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const videos = [
        'https://cdn.pixabay.com/video/2016/02/16/2182-155747492_large.mp4',
        'https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4',
        'https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4',
        'https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4',
    ];

    const slideContent = [
        {
            "title": "Secure Your Cloud Environment",
            "description": "Protect your cloud infrastructure from cyber threats and unauthorized access. Our comprehensive security solutions ensure the integrity, confidentiality, and availability of your cloud resources.",
            "buttonText": "Explore Solutions",
            "buttonNavigation": "#solutions",
            "animation": "fadeInRight"
        },
        {
            "title": "Compliance and Governance",
            "description": "Ensure compliance with industry regulations and best practices. Our cloud security services help you implement robust governance frameworks and meet regulatory requirements.",
            "buttonText": "Learn More",
            "buttonNavigation": "#compliance",
            "animation": "fadeInRight"
        },
        {
            "title": "Identity and Access Management",
            "description": "Control access to your cloud resources with identity and access management solutions. Our IAM services help you manage user identities, permissions, and authentication.",
            "buttonText": "Discover Benefits",
            "buttonNavigation": "#iam",
            "animation": "fadeInRight"
        },
        {
            "title": "Threat Detection and Response",
            "description": "Detect and respond to security threats in real-time. Our threat detection and response services leverage advanced analytics and machine learning to identify and mitigate security incidents.",
            "buttonText": "Get Started",
            "buttonNavigation": "#threat-detection",
            "animation": "fadeInRight"
        }
    ];
    

    const introduction = {
        "sectionTitle": "What is Cloud and Infrastructure Security?",
        "title": "Protecting Your Digital Assets",
        "description": "Cloud and infrastructure security refers to the practices, technologies, and tools used to safeguard an organization's cloud-based resources, networks, and IT infrastructure from cyber threats, data breaches, and unauthorized access. It encompasses a range of security measures aimed at ensuring the confidentiality, integrity, and availability of digital assets hosted in the cloud and on-premises infrastructure.",
        "features": [
            {
                "title": "Data Encryption",
                "description": "Encrypt sensitive data to prevent unauthorized access and protect confidentiality.",
                "iconClass": "flaticon-security"
            },
            {
                "title": "Identity and Access Management",
                "description": "Implement robust authentication and access controls to verify user identities and manage permissions effectively.",
                "iconClass": "flaticon-acces"
            },
            {
                "title": "Network Security",
                "description": "Secure networks and communication channels to prevent cyber attacks and unauthorized data access.",
                "iconClass": "flaticon-network"
            },
            {
                "title": "Vulnerability Management",
                "description": "Identify and address security vulnerabilities in cloud and infrastructure components to mitigate risks.",
                "iconClass": "flaticon-shield"
            }
        ],
        "images": [
            "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/resource/about-3.jpg",
            "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/resource/about-4.jpg"
        ]
    };
    
    const benefits = {
        "sectionTitle": "Benefits of Cloud and Infrastructure Security",
        "title": "Securing Your Digital Infrastructure",
        "description": "Implementing robust cloud and infrastructure security measures offers numerous benefits to organizations by safeguarding sensitive data, mitigating risks, and ensuring the uninterrupted operation of critical business processes.",
        "services": [
            {
                "title": "Data Protection",
                "description": "Protect sensitive data and intellectual property from unauthorized access, data breaches, and cyber threats.",
            },
            {
                "title": "Compliance Compliance",
                "description": "Ensure compliance with industry regulations, data protection laws, and privacy standards.",
            },
            {
                "title": "Risk Mitigation",
                "description": "Identify and mitigate security risks and vulnerabilities to prevent potential data breaches and financial losses.",
            },
            {
                "title": "Business Continuity",
                "description": "Maintain the availability and resilience of IT infrastructure and services to support business continuity.",
            },
            {
                "title": "Cost Savings",
                "description": "Minimize the financial impact of security incidents and data breaches by implementing effective security measures.",
            },
            {
                "title": "Reputation Management",
                "description": "Protect brand reputation and customer trust by demonstrating a commitment to security and data protection.",
            }
        ]
    };
    
    const process = {
        "sectionTitle": "Our Cloud and Infrastructure Security Process",
        "title": "Securing Your Digital Assets",
        "process": [
            {
                "stepId": 1,
                "title": "Assessment & Analysis",
                "description": "Conduct a comprehensive assessment of existing cloud and infrastructure security posture and identify potential risks and vulnerabilities.",
                "iconClass": "flaticon-analytics"
            },
            {
                "stepId": 2,
                "title": "Security Design & Implementation",
                "description": "Develop and implement a customized security strategy and architecture to protect cloud and infrastructure assets.",
                "iconClass": "flaticon-design"
            },
            {
                "stepId": 3,
                "title": "Monitoring & Detection",
                "description": "Deploy advanced monitoring tools and techniques to detect and respond to security threats and incidents in real-time.",
                "iconClass": "flaticon-monitoring"
            },
            {
                "stepId": 4,
                "title": "Response & Remediation",
                "description": "Take prompt action to mitigate security incidents, address vulnerabilities, and implement remediation measures.",
                "iconClass": "flaticon-response"
            }
        ]
    };
    
    const services = {
        "sectionTitle": "Our Cloud and Infrastructure Security Services",
        "title": "Comprehensive Security Solutions",
        "description": "We offer a range of cloud and infrastructure security services designed to protect your digital assets, mitigate risks, and ensure compliance with regulatory requirements.",
        "services": [
            {
                "index": "01",
                "title": "Cloud Security Assessment",
                "description": "Conduct a thorough assessment of cloud environments to identify security gaps and vulnerabilities.",
                "iconClass": "flaticon-cloud"
            },
            {
                "index": "02",
                "title": "Infrastructure Hardening",
                "description": "Harden infrastructure components and configurations to minimize security risks and prevent unauthorized access.",
                "iconClass": "flaticon-security"
            },
            {
                "index": "03",
                "title": "Incident Response",
                "description": "Develop and implement incident response plans to effectively respond to and mitigate security incidents.",
                "iconClass": "flaticon-response"
            },
            {
                "index": "04",
                "title": "Security Training & Awareness",
                "description": "Provide security training and awareness programs to educate employees and stakeholders about security best practices.",
                "iconClass": "flaticon-education"
            }
        ],
        "cta": {
            "text": "Secure your cloud and infrastructure",
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
            <ProcessSection2 data={process} size='lg'/>
            <SubServicesSection data={services} />
            <CloudInfraForm ref={formSectionRef} />

            {/* <section id="resources" class="py-5">
                <div class="container">
                    <h2 class="text-center mb-4">Resources</h2>
                    <div class="row">
                        <div class="col-md-4 mb-4">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title">Articles</h5>
                                    <p class="card-text">Explore our collection of articles covering various topics related to CloudInfraSecurity and cybersecurity.</p>
                                    <a href="#" class="btn btn-primary">Read Articles</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title">Whitepapers</h5>
                                    <p class="card-text">Download our whitepapers to learn more about CloudInfraSecurity methodologies and best practices.</p>
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

export default CloudInfraSecurity;