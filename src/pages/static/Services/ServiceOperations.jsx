import React, { useEffect, useRef } from "react";
import CarouselTwo from "../../../components/Carousel/CarouselTwo";
import IntroductionSection from "../Sections/IntroductionSection";
import SubServicesSection from "../Sections/SubServicesSection";
import BenefitsSection from "../Sections/BenefitsSection";
import GetStartedSection from "../Sections/GetStartedSection";

const ServiceOperations = () => {
  const formSectionRef = useRef(null);

  const navigateToSection = () => {
    formSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const videos = [
    "https://cdn.pixabay.com/video/2022/12/05/141672-778334998_large.mp4",
    "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4",
    "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4",
    "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4",
  ];

  const slideContent = [
    {
      title: "Round-the-Clock System Support",
      description:
        "Ensure your systems are always up and running with our 24/7 support services. Our dedicated team is available around the clock to provide immediate assistance and resolve issues swiftly.",
      buttonText: "Learn More",
      buttonNavigation: "#system-support",
      animation: "fadeInRight",
    },
    {
      title: "Comprehensive Annual Maintenance",
      description:
        "Keep your systems in peak condition with our Annual Maintenance Contract services. We provide regular maintenance and proactive support to prevent downtime and ensure optimal performance.",
      buttonText: "Explore Services",
      buttonNavigation: "#maintenance-contract",
      animation: "fadeInRight",
    },
    {
      title: "Expert System Administration & Improvement",
      description:
        "Optimize your IT infrastructure with our system administration and improvement services. We ensure your systems are secure, efficient, and aligned with your business objectives.",
      buttonText: "Discover Benefits",
      buttonNavigation: "#system-administration",
      animation: "fadeInRight",
    },
  ];

  const introduction = {
    sectionTitle: "What are Service Operations?",
    title: "Ensuring Seamless Operations with Expert Service Management",
    description:
      "Our Service Operations team is dedicated to ensuring your IT systems run smoothly and efficiently. From 24/7 support to comprehensive maintenance and proactive system administration, we provide a full range of services to keep your business operations seamless and uninterrupted.",
    images: [
      "https://cdn.pixabay.com/photo/2021/04/27/14/49/gears-6211702_1280.jpg",
      "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/resource/service-operations-2.jpg",
    ],
  };

  const benefits = {
    sectionTitle: "Service Operations Solutions",
    title: "Benefits of Partnering with Coretech for Service Operations",
    description:
      "With over 20 years of industry experience, we focus on understanding your specific business needs and goals. We work collaboratively to develop a tailored service strategy that aligns with your organization’s objectives. Our blend of technical expertise and business insight ensures that our solutions deliver measurable outcomes.",
    services: [
      {
        title: "Reliable 24/7 Support",
        description:
          "Ensure continuous operations with round-the-clock support and immediate issue resolution.",
        iconClass: "flaticon-phone-call",
      },
      {
        title: "Proactive Maintenance",
        description:
          "Prevent downtime and optimize performance with our proactive maintenance services.",
        iconClass: "flaticon-settings-1",
      },
      {
        title: "Improved Efficiency",
        description:
          "Streamline operations and enhance system efficiency through expert administration and improvement.",
        iconClass: "flaticon-brain-1",
      },
      {
        title: "Cost Savings",
        description:
          "Reduce operational costs with comprehensive maintenance and efficient system management.",
        iconClass: "flaticon-brain",
      },
      {
        title: "Enhanced Security",
        description:
          "Protect your systems and data with our robust security measures and proactive monitoring.",
        iconClass: "flaticon-shield",
      },
      {
        title: "Scalable Solutions",
        description:
          "Implement scalable support solutions that grow with your business needs.",
        iconClass: "flaticon-graph",
      },
    ],
  };
  

  const services = {
    sectionTitle: "Our Service Operations Offerings",
    title: "Our Service Operations Solutions and Services",
    description:
      "We offer a wide range of service operations designed to meet the unique needs of businesses across various industries.",
    services: [
      {
        index: "01",
        title: "24/7 System Support",
        description:
          "Ensure your systems are always up and running with our 24/7 support services, providing immediate assistance and issue resolution.",
        iconClass: "fa fa-life-ring", // Life ring icon for support
      },
      {
        index: "02",
        title: "Annual Maintenance Contract",
        description:
          "Keep your systems in peak condition with our Annual Maintenance Contract services, providing regular maintenance and proactive support.",
        iconClass: "fa fa-wrench", // Wrench icon for maintenance
      },
      {
        index: "03",
        title: "System Administration & Improvement",
        description:
          "Optimize your IT infrastructure with our system administration and improvement services, ensuring security, efficiency, and alignment with business objectives.",
        iconClass: "fa fa-cogs", // Cogs icon for system administration
      },
    ],
    cta: {
      text: "Ensure seamless operations with our service solutions",
      buttonText: "Get Started",
      buttonLink: "#get-started",
    },
  };
  

  const cta = {
    title: "Get Started with Coretech Service Operations Solutions",
    description:
      "Ready to ensure seamless operations with our expert service management? Contact Coretech today to explore how our solutions can help you maintain and optimize your IT systems.",
    meetingLink: "",
    contactLink: "",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CarouselTwo videos={videos} slideContent={slideContent} color="dark" />
      <IntroductionSection data={introduction} />
      <SubServicesSection data={services} />
      <BenefitsSection data={benefits} />
      <GetStartedSection data={cta} />
    </>
  );
};

export default ServiceOperations;

