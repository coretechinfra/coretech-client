import React, { useEffect, useRef } from "react";
import CarouselTwo from "../../../components/Carousel/CarouselTwo";
import IntroductionSection from "../Sections/IntroductionSection";
import SubServicesSection from "../Sections/SubServicesSection";
import BenefitsSection from "../Sections/BenefitsSection";
import GetStartedSection from "../Sections/GetStartedSection";

const SecurityAndPrivacy = () => {
  const formSectionRef = useRef(null);

  const navigateToSection = () => {
    formSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const videos = [
    "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/security.mp4",
    "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4",
    "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4",
    "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4",
  ];

  const slideContent = [
    {
      title: "Comprehensive Cyber Security Solutions",
      description:
        "Protect your digital assets from cyber threats with our comprehensive cybersecurity solutions. Our experts employ the latest tools and techniques to safeguard your data and systems.",
      buttonText: "Explore Services",
      buttonNavigation: "#cyber-security",
      animation: "fadeInRight",
    },
    {
      title: "Advanced SIEM Solutions",
      description:
        "Implement advanced Security Information and Event Management (SIEM) solutions to detect and respond to security incidents in real-time. Stay ahead of potential threats with our proactive monitoring and alerting.",
      buttonText: "Learn More",
      buttonNavigation: "#siem-solutions",
      animation: "fadeInRight",
    },
    {
      title: "Data Privacy and Compliance",
      description:
        "Ensure compliance with data privacy regulations and protect sensitive information with our data privacy solutions. We help you establish robust policies and procedures to safeguard your data.",
      buttonText: "Discover Benefits",
      buttonNavigation: "#data-privacy",
      animation: "fadeInRight",
    },
    {
      title: "ISO 27001 Certification",
      description:
        "Achieve ISO 27001 certification with our comprehensive compliance services. We guide you through the certification process, ensuring your organization meets the highest standards of information security.",
      buttonText: "Get Started",
      buttonNavigation: "#iso-certification",
      animation: "fadeInRight",
    },
  ];
  
  
  const introduction = {
    sectionTitle: "What are Security & Privacy Services?",
    title: "Protecting Your Business with Advanced Security & Privacy Solutions",
    description:
      "In today’s digital age, ensuring the security and privacy of your data is more critical than ever. Our Security & Privacy Solutions team is dedicated to protecting your organization from cyber threats and ensuring compliance with privacy regulations. From comprehensive cyber security measures to specialized SIEM solutions and ISO:27001 certification, we provide a robust suite of services designed to safeguard your business.",
    images: [
      // "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/resource/security-2.jpg",
      "https://cdn.pixabay.com/photo/2019/03/22/06/27/it-4072549_960_720.png",
    ],
  };
  
  const benefits = {
    sectionTitle: "Security & Privacy Solutions",
    title: "Benefits of Partnering with Coretech for Security & Privacy Solutions",
    description:
      "With over 20 years of industry experience, we focus on understanding your specific business needs and goals. We work collaboratively to develop a tailored security strategy that aligns with your organization’s objectives. Our blend of technical expertise and business insight ensures that our solutions deliver measurable outcomes.",
    services: [
      {
        title: "Comprehensive Protection",
        description:
          "Implement end-to-end security solutions to protect against a wide range of cyber threats.",
        iconClass: "fa fa-shield", // Shield icon
      },
      {
        title: "Regulatory Compliance",
        description:
          "Ensure compliance with industry standards and regulations, including ISO:27001.",
        iconClass: "fa fa-check-square", // Checkbox icon for compliance
      },
      {
        title: "Proactive Threat Management",
        description:
          "Identify and mitigate potential threats before they impact your business operations.",
        iconClass: "fa fa-eye", // Eye icon for vigilance/proactive monitoring
      },
      {
        title: "Data Privacy Assurance",
        description:
          "Safeguard sensitive data and maintain customer trust with robust privacy measures.",
        iconClass: "fa fa-lock", // Lock icon
      },
      {
        title: "Business Continuity",
        description:
          "Maintain uninterrupted operations with effective security incident management and response plans.",
        iconClass: "fa fa-refresh", // Refresh icon for continuity
      },
      {
        title: "Expert Support",
        description:
          "Access around-the-clock support and guidance from security and privacy experts.",
        iconClass: "fa fa-life-ring", // Life ring icon for support
      },
    ],
  };
  
  
  
  const services = {
    sectionTitle: "Our Security & Privacy Services Offerings",
    title: "Our Security & Privacy Solutions and Services",
    description:
      "We offer a wide range of security and privacy services designed to meet the unique needs of businesses across various industries.",
    services: [
      {
        index: "01",
        title: "Cyber Security",
        description:
          "Implement advanced cyber security measures to protect your organization from digital threats, including malware, ransomware, and phishing attacks.",
        iconClass: "fa fa-shield", // Shield icon
      },
      {
        index: "02",
        title: "SIEM Solution",
        description:
          "Deploy and manage Security Information and Event Management (SIEM) solutions to provide real-time analysis of security alerts and ensure proactive threat detection.",
        iconClass: "fa fa-search", // Search icon (for analysis/detection)
      },
      {
        index: "03",
        title: "Data Privacy",
        description:
          "Ensure the privacy and protection of sensitive data with comprehensive data privacy solutions, including data encryption, anonymization, and compliance with privacy regulations.",
        iconClass: "fa fa-lock", // Lock icon 
      },
      {
        index: "04",
        title: "ISO:27001",
        description:
          "Achieve and maintain ISO:27001 certification with our expert guidance and implementation services, ensuring your organization meets international standards for information security management.",
        iconClass: "fa fa-certificate", // Certificate icon
      },
    ],
    cta: {
      text: "Secure your business with advanced security solutions",
      buttonText: "Get Started",
      buttonLink: "#get-started",
    },
  };
  
  
  const cta = {
    title: "Get Started with Coretech Security & Privacy Solutions",
    description: "Ready to enhance your security and privacy measures? Contact Coretech today to explore how our Security & Privacy Solutions can help protect your business and ensure compliance.",
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

export default SecurityAndPrivacy;
