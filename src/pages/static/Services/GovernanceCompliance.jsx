import React, { useEffect, useRef } from "react";
import CarouselTwo from "../../../components/Carousel/CarouselTwo";
import IntroductionSection from "../Sections/IntroductionSection";
import SubServicesSection from "../Sections/SubServicesSection";
import BenefitsSection from "../Sections/BenefitsSection";
import GetStartedSection from "../Sections/GetStartedSection";

const GovernanceCompliance = () => {
  const formSectionRef = useRef(null);

  const navigateToSection = () => {
    formSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const videos = [
    "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/network.mp4",
    "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4",
    "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4",
    "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4",
  ];

  const slideContent = [
    {
      title: "Achieve ISO Certification",
      description:
        "Ensure your organization meets international standards with our ISO Certification services. We help you navigate the complexities of certification and maintain compliance.",
      buttonText: "Learn More",
      buttonNavigation: "#iso-certification",
      animation: "fadeInRight",
    },
    {
      title: "Ensure Business Continuity",
      description:
        "Our Business Continuity services help you prepare for and recover from disruptions. We develop and implement strategies to ensure your operations remain resilient.",
      buttonText: "Explore Solutions",
      buttonNavigation: "#business-continuity",
      animation: "fadeInRight",
    },
    {
      title: "Manage Risks Effectively",
      description:
        "Identify, assess, and mitigate risks with our comprehensive Risk Management services. We provide the tools and expertise to protect your organization from potential threats.",
      buttonText: "Discover Benefits",
      buttonNavigation: "#risk-management",
      animation: "fadeInRight",
    },
    {
      title: "Streamline Change Management",
      description:
        "Facilitate smooth transitions with our Change Management services. We help you manage organizational changes effectively, ensuring minimal disruption and maximum adoption.",
      buttonText: "Get Support",
      buttonNavigation: "#change-management",
      animation: "fadeInRight",
    },
  ];

  const introduction = {
    sectionTitle: "What are Governance & Compliance Services?",
    title: "Ensuring Governance and Compliance Excellence",
    description:
      "In today's regulatory landscape, maintaining compliance and governance is crucial for business success. Our Governance & Compliance services ensure that your organization adheres to industry standards, manages risks effectively, and optimizes processes. From ISO Certification to Talent Development, we offer comprehensive solutions to help your business thrive in a compliant and efficient manner.",
    images: [
      "https://cdn.pixabay.com/photo/2017/01/31/09/43/arrows-2023449_1280.png",
      "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/resource/gc-2.jpg",
    ],
  };

  const benefits = {
    sectionTitle: "Governance & Compliance Solutions",
    title: "Benefits of Partnering with Coretech for Governance & Compliance",
    description:
      "With over 20 years of industry experience, we focus on understanding your specific business needs and goals. We work collaboratively to develop tailored governance and compliance strategies that align with your organization’s objectives. Our blend of technical expertise and business insight ensures that our solutions deliver measurable outcomes.",
    services: [
      {
        title: "Regulatory Compliance",
        description:
          "Ensure adherence to regulatory requirements and avoid costly penalties.",
        iconClass: "flaticon-access",
      },
      {
        title: "Risk Mitigation",
        description:
          "Identify and manage potential risks to safeguard your business.",
        iconClass: "fa fa-exclamation-triangle",
      },
      {
        title: "Operational Efficiency",
        description:
          "Streamline processes to improve efficiency and reduce operational costs.",
        iconClass: "flaticon-settings",
      },
      {
        title: "Enhanced Resilience",
        description:
          "Develop strategies for business continuity and disaster recovery.",
        iconClass: "flaticon-shield",
      },
      {
        title: "Continuous Improvement",
        description:
          "Implement ongoing improvements to maintain compliance and efficiency.",
        iconClass: "flaticon-update",
      },
      {
        title: "Strategic Advantage",
        description:
          "Gain a competitive edge by adopting best practices in governance and compliance.",
        iconClass: "flaticon-profits",
      },
    ],
  };
  

  const services = {
    sectionTitle: "Our Governance & Compliance Services Offerings",
    title: "Our Governance & Compliance Solutions and Services",
    description:
      "We offer a wide range of governance and compliance services designed to meet the unique needs of businesses across various industries.",
    services: [
      {
        index: "01",
        title: "ISO Certification",
        description:
          "Guide your organization through the ISO certification process, ensuring compliance with international standards.",
        iconClass: "fa fa-certificate", // Certificate icon for ISO
      },
      {
        index: "02",
        title: "Business Continuity",
        description:
          "Develop and implement strategies to ensure your business remains operational during disruptions.",
        iconClass: "fa fa-refresh", // Refresh icon for continuity
      },
      {
        index: "03",
        title: "Risk Management",
        description:
          "Identify, assess, and mitigate risks to protect your organization from potential threats.",
        iconClass: "fa fa-exclamation-triangle", // Warning triangle icon for risk
      },
      {
        index: "04",
        title: "Change Management",
        description:
          "Facilitate smooth transitions and ensure successful adoption of organizational changes.",
        iconClass: "fa fa-exchange", // Exchange icon for change
      },
      {
        index: "05",
        title: "Process Improvement/Optimization",
        description:
          "Optimize your business processes to enhance efficiency and effectiveness.",
        iconClass: "fa fa-line-chart", // Line chart for improvement over time
      },
      {
        index: "06",
        title: "Talent Development & Learning",
        description:
          "Develop your workforce with training programs and learning opportunities tailored to your organizational needs.",
        iconClass: "fa fa-graduation-cap", // Graduation cap for learning
      },
    ],
    cta: {
      text: "Enhance your governance and compliance",
      buttonText: "Get Started",
      buttonLink: "#get-started",
    },
  };
  

  const cta = {
    title: "Get Started with Coretech Governance & Compliance Solutions",
    description:
      "Ready to enhance your governance and compliance practices? Contact Coretech today to discuss how our solutions can help you achieve excellence and drive business growth.",
    meetingLink: "",
    contactLink: "",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CarouselTwo videos={videos} slideContent={slideContent} color="light" />
      <IntroductionSection data={introduction} />
      <SubServicesSection data={services} />
      <BenefitsSection data={benefits} />
      <GetStartedSection data={cta} />
    </>
  );
};

export default GovernanceCompliance;
