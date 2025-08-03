import React, { useEffect, useRef } from 'react';
import CarouselTwo from '../../../components/Carousel/CarouselTwo';
import FeatureSectionTwo from '../Sections/FeatureSectionTwo';
import IntroductionSection from '../Sections/IntroductionSection';
import WhySection from '../Sections/WhySection';
import ProcessSection from '../Sections/ProcessSection';
import SubServicesSection from '../Sections/SubServicesSection';
import VAPTFormSection from '../Sections/VAPTFormSection';

const videos = [
    'https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4',
    'https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4',
    'https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4',
];




const VAPT = () => {
    const formSectionRef = useRef(null);

    const navigateToSection = () => {
        formSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const slideContent = [
        {
            title: "Comprehensive Security Assessment",
            description: "Identify vulnerabilities across your network, applications, and systems with our comprehensive security assessment.",
            buttonText: 'Find your security loopholes',
            buttonNavigation: navigateToSection,
            animation: 'fadeInRight',
        },
        {
            title: "Proactive Threat Detection",
            description: "Stay ahead of cyber threats with proactive detection and continuous monitoring of your IT infrastructure.",
            buttonText: 'Find your security loopholes',
            buttonNavigation: navigateToSection,
            animation: 'fadeInRight',
        },
        {
            title: "Expert Penetration Testing",
            description: "Leverage our team of experienced security experts to conduct thorough penetration testing and secure your assets.",
            buttonText: 'Find your security loopholes',
            buttonNavigation: navigateToSection,
            animation: 'fadeInRight',
        },

    ];

    const introduction = {
        sectionTitle: "What is VAPT?",
        title: "Vulnerability Assesment and Penetration Testing",
        description: "VAPT stands for Vulnerability Assessment and Penetration Testing. It is a comprehensive security testing process that evaluates the security posture of an organization's systems and infrastructure.",
        paragraphs: [],
        features: [
            {
                title: "Vulnerability Assessment",
                description: "VA identifies and quantifies vulnerabilities in the system.",
                iconClass: "flaticon-user-interface"
            },
            {
                title: "Penetration Testing",
                description: "Exploit these vulnerabilities to assess the effectiveness.",
                iconClass: "flaticon-front-end"
            },
        ],
        cta: {
            buttonText: "Explore now",
            buttonLink: "#"
        },
        images: [
            "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/resource/about-3.jpg",
            "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/resource/about-4.jpg"
        ],
    };

    const whyVapt = {
        sectionTitle: "Why VAPT?",
        title: "It's Very Crucial",
        description: "VAPT (Vulnerability Assessment and Penetration Testing) is crucial for organizations to identify and address security vulnerabilities in their systems before malicious actors exploit them.",
        paragraphs: [
            "By conducting VAPT, organizations can proactively identify and mitigate security weaknesses, protect sensitive data, and prevent potential cyber attacks."
        ],
        services: [
            {
                title: "Proactive Security Measures",
                description: "Identify and mitigate potential security risks and vulnerabilities.",
            },
            {
                title: "Compliance Requirements",
                description: "Exploit these vulnerabilities to assess the effectiveness.",
            },
            {
                title: "Risk Reduction",
                description: "Identifying and addressing vulnerabilities early on.",
            },
            {
                title: "Protecting Customer Data",
                description: "Protect sensitive customer data, such as personal and financial information.",
            },
            {
                title: "Maintaining Reputation",
                description: "Maintain a positive reputation by demonstrating a commitment.",
            },
            {
                title: "Cost Savings",
                description: "Organizations avoid the costly consequences of security breaches.",
            },
        ],

    };

    const process = {
        sectionTitle: "Work Process",
        title: "3 easy working steps",
        process: [
            {
                stepId: 1,
                title: "Vulnerability Assessment",
                description: "Identifying vulnerabilities, misconfigurations, and weaknesses in systems, networks, and applications.",
                iconClass: "flaticon-concept",
            },
            {
                stepId: 2,
                title: "Penetration Testing",
                description: "Simulating real-world cyber attacks to exploit vulnerabilities and assess security controls.",
                iconClass: "flaticon-programmer",
            },
            {
                stepId: 3,
                title: "Reporting and Remediation",
                description: "Providing detailed reports of vulnerabilities and recommendations for remediation.",
                iconClass: "flaticon-access",
            },
        ],
    };

    const services = {
        sectionTitle: "What We’re Offering under VAPT",
        title: `Services we’re offering to clients to secure thier business`,
        analytics: [
            {
                count: 15,
                caption: "Audits Performed"
            },
            {
                count: 195,
                caption: "Amount Saved"
            },
        ],
        services: [
            {
                index: "01",
                title: "Web Application Security Testing",
                description: "Ensure the security of your web applications through comprehensive testing.",
                iconClass: "flaticon-color-sample",
                link: "",
            },
            {
                index: "02",
                title: "Network Security Testing",
                description: "Evaluate the security of your network infrastructure to prevent unauthorized access.",
                iconClass: "flaticon-front-end",
                link: "",
            },
            {
                index: "03",
                title: "System Security Testing",
                description: "Assess the security of your systems and servers to identify vulnerabilities.",
                iconClass: "flaticon-online-shopping",
                link: "",
            },
            {
                index: "04",
                title: "API Security Testing",
                description: "Ensure the security of your APIs to protect data and prevent unauthorized access.",
                iconClass: "flaticon-advertising",
                link: "",
            },
            {
                index: "05",
                title: "Android Application Security Testing",
                description: "Evaluate the security of your Android applications to identify and fix vulnerabilities.",
                iconClass: "flaticon-advertising",
                link: "",
            },
        ],
        cta: {
            text: "Make your first quality web and app auditing",
            buttonText: "Find Your Solution",
            buttonLink: "",
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);


    return (
        <>
            <CarouselTwo videos={videos} slideContent={slideContent} />
            <FeatureSectionTwo />
            <IntroductionSection data={introduction} />
            <WhySection data={whyVapt} />
            <ProcessSection data={process} />
            <SubServicesSection data={services} />
            <VAPTFormSection ref={formSectionRef} />
            {/* <section id="resources" class="py-5">
                <div class="container">
                    <h2 class="text-center mb-4">Resources</h2>
                    <div class="row">
                        <div class="col-md-4 mb-4">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title">Articles</h5>
                                    <p class="card-text">Explore our collection of articles covering various topics related to VAPT and cybersecurity.</p>
                                    <a href="#" class="btn btn-primary">Read Articles</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title">Whitepapers</h5>
                                    <p class="card-text">Download our whitepapers to learn more about VAPT methodologies and best practices.</p>
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

export default VAPT;