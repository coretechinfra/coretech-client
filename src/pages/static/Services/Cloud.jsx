import React, { useEffect, useRef } from "react";
import CarouselTwo from "../../../components/Carousel/CarouselTwo";
import IntroductionSection from "../Sections/IntroductionSection";
import SubServicesSection from "../Sections/SubServicesSection";
import BenefitsSection from "../Sections/BenefitsSection";
import GetStartedSection from "../Sections/GetStartedSection";

const Cloud = () => {
  const formSectionRef = useRef(null);

  const navigateToSection = () => {
    formSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const videos = [
    
    "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4",
    "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4",
    "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4",
    "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4",
  ];

  const slideContent = [
    {
      title: "Seamless Migration & Modernization",
      description:
        "Effortlessly migrate your infrastructure to the cloud and modernize your applications. Our expert team ensures a smooth transition, minimizing downtime and maximizing efficiency.",
      buttonText: "Explore Services",
      buttonNavigation: "#migration-modernization",
      animation: "fadeInRight",
    },
    {
      title: "Optimized Cloud Infrastructure",
      description:
        "Optimize your cloud infrastructure for performance, scalability, and cost-efficiency. Our cloud solutions ensure your systems are always available and fully optimized.",
      buttonText: "Learn More",
      buttonNavigation: "#optimization",
      animation: "fadeInRight",
    },
    {
      title: "Robust Cloud Infrastructure",
      description:
        "Build a robust cloud infrastructure tailored to your business needs. Our system design experts design and implement scalable, secure, and resilient cloud architectures.",
      buttonText: "Discover Benefits",
      buttonNavigation: "#infrastructure",
      animation: "fadeInRight",
    },
  ];
  
  
  const introduction = {
    sectionTitle: "What are Cloud Services?",
    title: "Transforming Cloud Capabilities into Business Value",
    description:
      "In the modern business landscape, leveraging the cloud is crucial for agility, scalability, and innovation. Our Cloud Solutions team is dedicated to helping your organization harness the full potential of cloud technologies. From migration and modernization to optimization and system design, we provide comprehensive cloud services tailored to your unique needs.",
    images: [
      "https://cdn.pixabay.com/photo/2016/03/29/21/24/cloud-1289396_1280.png",
      "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/resource/cloud-2.jpg",
    ],
  };
  
  const benefits = {
    sectionTitle: "Cloud Solutions",
    title: "Benefits of Partnering with Coretech for Cloud Solutions",
    description:
      "With over 20 years of industry experience, we focus on understanding your specific business needs and goals. We work collaboratively to develop a tailored cloud strategy that aligns with your organization’s objectives. Our blend of technical expertise and business insight ensures that our solutions deliver measurable outcomes.",
    services: [
      {
        title: "Scalable Solutions",
        description:
          "Easily scale your infrastructure to meet changing business demands.",
        iconClass: "fa fa-expand", // Expanding arrows in FA4
      },
      {
        title: "Cost Efficiency",
        description:
          "Optimize costs by leveraging cloud resources and reducing capital expenditures.",
        iconClass: "fa fa-piggy-bank",  // Money icon in FA4
      },
      {
        title: "Enhanced Security",
        description:
          "Implement robust security measures to protect your data and applications.",
        iconClass: "fa fa-shield-halved", 
      },
      {
        title: "Business Continuity",
        description:
          "Ensure uninterrupted operations with reliable backup and disaster recovery solutions.",
        iconClass: "fa fa-refresh", // Refresh icon for continuity
      },
      {
        title: "Agility and Innovation",
        description:
          "Accelerate your digital transformation with agile and innovative cloud solutions.",
        iconClass: "fa fa-rocket", 
      },
      {
        title: "Expert Support",
        description:
          "Access around-the-clock support and guidance from cloud experts.",
        iconClass: "fa fa-life-ring", 
      },
    ],
  };
  
  
  
  const services = {
    sectionTitle: "Our Cloud Services Offerings",
    title: "Our Cloud Solutions and Services",
    description:
      "We offer a wide range of cloud services designed to meet the unique needs of businesses across various industries.",
    services: [
      {
        index: "01",
        title: "Migration & Modernization",
        description:
          "Seamlessly migrate your existing applications and infrastructure to the cloud, and modernize your IT landscape for enhanced performance and scalability.",
        iconClass: "fa fa-cloud-upload-alt",
      },
      {
        index: "02",
        title: "Optimization",
        description:
          "Optimize your cloud environment for cost, performance, and reliability. Ensure your resources are used efficiently to maximize value.",
        iconClass: "fa fa-chart-line", // Using a more relevant icon here
      },
      {
        index: "03",
        title: "Infrastructure",
        description:
          "Design, deploy, and manage a robust cloud infrastructure tailored to your business needs. Ensure high availability and reliability with our expert solutions.",
        iconClass: "fa fa-server",
      },
      {
        index: "04",
        title: "System Design",
        description:
          "Develop comprehensive cloud system designs that support your business objectives. Leverage best practices for architecture, security, and compliance.",
        iconClass: "fa fa-sitemap",
      },
    ],
    cta: {
      text: "Transform your business with cloud solutions",
      buttonText: "Get Started",
      buttonLink: "#get-started",
    },
  };
  
  
  const cta = {
    title: "Get Started with Coretech Cloud Solutions",
    description: "Ready to elevate your business with cloud technology? Contact Coretech today to explore how our Cloud Solutions can help you achieve your goals and drive innovation.",
    meetingLink: "",
    contactLink: "",
  };
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CarouselTwo videos={videos} slideContent={slideContent} />
      <IntroductionSection data={introduction} />
      <SubServicesSection data={services} />
      <BenefitsSection data={benefits} />
      <GetStartedSection data={cta} />
    </>
  );
};

export default Cloud;
