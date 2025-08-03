import React, { useEffect, useRef } from 'react';
import CarouselTwo from '../../../components/Carousel/CarouselTwo';
import FeatureSectionTwo from '../Sections/FeatureSectionTwo';
import IntroductionSection from '../Sections/IntroductionSection';
import WhySection from '../Sections/WhySection';
import ProcessSection from '../Sections/ProcessSection';
import SubServicesSection from '../Sections/SubServicesSection';
import VAPTFormSection from '../Sections/VAPTFormSection';
import ApplicationDevelopmentForm from '../Sections/ApplicationDevelopmentForm';





const ApplicationDevelopment = () => {
    const formSectionRef = useRef(null);

    const navigateToSection = () => {
        formSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const videos = [
        'https://cdn.pixabay.com/video/2024/02/23/201625-916080356_large.mp4',
        'https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4',
        'https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4',
        'https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4',
    ];

    const slideContent = [
        {
            title: "Empower Your Business with Cutting-Edge Solutions",
            description: "Unlock the potential of your business with our innovative software solutions. From seamless automation to enhanced customer experiences, we have you covered.",
            buttonText: "Explore Solutions",
            buttonNavigation: navigateToSection,
            animation: 'fadeInRight',
        },
        {
            title: "Streamline Operations, Boost Productivity",
            description: "Transform your workflow with our integrated solutions tailored to your needs. Say goodbye to manual processes and hello to increased efficiency.",
            buttonText: "Learn More",
            buttonNavigation: navigateToSection,
            animation: 'fadeInRight',
        },
        {
            title: "Join the Ranks of Satisfied Clients",
            description: "Discover why our clients rave about our solutions. With a proven track record of success, we deliver results that exceed expectations.",
            buttonText: "See Success Stories",
            buttonNavigation: navigateToSection,
            animation: 'fadeInRight',
        },
        {
            title: "Partner with Us for Your Next Success Story",
            description: "Take the next step towards achieving your business goals. Partner with us to unlock unlimited possibilities and propel your business forward.",
            buttonText: "Get Started Today",
            buttonNavigation: navigateToSection,
            animation: 'fadeInRight',
        },

    ];

    const introduction = {
        "sectionTitle": "What is Application Development?",
        "title": "Customized Software Solutions",
        "description": "Application development refers to the process of creating software applications that are tailored to meet specific business needs. These applications can range from simple mobile apps to complex enterprise solutions.",
        // "paragraphs": [
        //   "Application development involves designing, building, testing, and deploying software applications for various platforms such as web, mobile, and desktop.",
        //   "The goal of application development is to provide businesses with efficient and effective tools to streamline processes, improve productivity, and enhance customer experiences."
        // ],
        "features": [
            {
                "title": "Customization",
                "description": "Develop tailored solutions that align with your unique business requirements.",
                "iconClass": "flaticon-settings"
            },
            {
                "title": "Scalability",
                "description": "Build applications that can scale with your business as it grows and evolves.",
                "iconClass": "flaticon-chart"
            },
            {
                "title": "User Experience",
                "description": "Focus on delivering intuitive and user-friendly interfaces to enhance user satisfaction.",
                "iconClass": "flaticon-interface"
            },
            {
                "title": "Security",
                "description": "Implement robust security measures to protect sensitive data and prevent cyber threats.",
                "iconClass": "flaticon-shield"
            }
        ],
        // "cta": {
        //   "buttonText": "Learn More",
        //   "buttonLink": "#"
        // },
        images: [
            "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/resource/about-3.jpg",
            "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/resource/about-4.jpg"
        ],
    };

    const benifits = {
        sectionTitle: "Benefits of Application Development",
        title: "Unlock the Potential of Custom Software Solutions",
        description: "Investing in application development offers numerous benefits to businesses of all sizes and industries.",
        // paragraphs: [
        //     "By conducting VAPT, organizations can proactively identify and mitigate security weaknesses, protect sensitive data, and prevent potential cyber attacks."
        // ],
        services: [
            {
                title: "Enhanced Efficiency",
                description: " Streamline business processes and workflows with custom-built applications tailored to your specific needs.",
            },
            {
                title: "Improved Productivity",
                description: "Empower employees with tools and systems that automate tasks, reduce manual effort, and increase productivity.",
            },
            {
                title: "Better Decision Making",
                description: "Access real-time data and insights through custom reporting and analytics features, enabling informed decision making.",
            },
            {
                title: "Scalability",
                description: "Scale your applications as your business grows, ensuring they can accommodate increased user demand and evolving requirements.",
            },
            {
                title: "Competitive Advantage",
                description: "Gain a competitive edge by offering unique and innovative solutions that differentiate your business from competitors.",
            },
            {
                title: "Enhanced Customer Experience",
                description: "Deliver personalized experiences to customers through user-friendly interfaces and intuitive functionality.",
            },
        ],

    };

    const process = {
        "sectionTitle": "Our Application Development Process",
        "title": "Streamlined Approach to Success",
        "process": [
          {
            "stepId": 1,
            "title": "Discovery & Planning",
            "description": "Gain a deep understanding of your business goals, target audience, and project requirements.",
            "iconClass": "flaticon-concept"
          },
          {
            "stepId": 2,
            "title": "Design & Prototyping",
            "description": "Create wireframes and prototypes to visualize the user interface and gather feedback from stakeholders.",
            "iconClass": "flaticon-design"
          },
          {
            "stepId": 3,
            "title": "Development & Testing",
            "description": "Build the application according to the approved design, ensuring functionality, performance, and security.",
            "iconClass": "flaticon-programmer"
          },
          {
            "stepId": 4,
            "title": "Deployment & Launch",
            "description": "Deploy the application to the production environment and conduct final testing before launching it to users.",
            "iconClass": "flaticon-access"
          },
          {
            "stepId": 5,
            "title": "Maintenance & Support",
            "description": "Provide ongoing maintenance, updates, and support to ensure the application runs smoothly and meets evolving needs.",
            "iconClass": "flaticon-help"
          }
        ]
      };

    const services = {
        "sectionTitle": "Our Application Development Services",
        "title": "Tailored Solutions for Your Business Needs",
        "description": "We offer a comprehensive range of application development services to help businesses thrive in the digital age.",
        "services": [
            {
                index: "01",
                "title": "Web Application Development",
                "description": "Create dynamic and interactive web applications tailored to your business requirements.",
                "iconClass": "flaticon-web"
            },
            {
                index: "02",
                "title": "Mobile App Development",
                "description": "Build innovative and user-friendly mobile applications for iOS and Android platforms.",
                "iconClass": "flaticon-android"
            },
            {
                index: "03",
                "title": "Enterprise Software Solutions",
                "description": "Develop scalable and secure enterprise software solutions to optimize business processes and drive growth.",
                "iconClass": "flaticon-web-1"
            },
            {
                index: "04",
                "title": "Custom Software Development",
                "description": "Design and build custom software applications to address unique business challenges and opportunities.",
                "iconClass": "flaticon-brain"
            }
        ],
        "cta": {
            "text": "Make your first quality web and app development",
            "buttonText": "Get Started",
            "buttonLink": "#contact"
        },
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <CarouselTwo videos={videos} slideContent={slideContent} array={false}/>
            {/* <FeatureSectionTwo /> */}
            <IntroductionSection data={introduction} />
            <WhySection data={benifits} />
            <ProcessSection data={process} />
            <SubServicesSection data={services} />
            <ApplicationDevelopmentForm ref={formSectionRef} />

            {/* <section id="resources" class="py-5">
                <div class="container">
                    <h2 class="text-center mb-4">Resources</h2>
                    <div class="row">
                        <div class="col-md-4 mb-4">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title">Articles</h5>
                                    <p class="card-text">Explore our collection of articles covering various topics related to ApplicationDevelopment and cybersecurity.</p>
                                    <a href="#" class="btn btn-primary">Read Articles</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title">Whitepapers</h5>
                                    <p class="card-text">Download our whitepapers to learn more about ApplicationDevelopment methodologies and best practices.</p>
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

export default ApplicationDevelopment;