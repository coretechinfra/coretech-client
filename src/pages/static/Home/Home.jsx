import React, { useEffect } from "react";
import "./home.css";
import "../Sections/Sections.css";
import Carousel from "../../../components/Carousel/Carousel";
import Featured from "../../../components/Featured/Featured";
import TeamSection from "../Sections/TeamSection";
import ClientsSlider from "../Sections/ClientsSlider";
import WhyChooseUs from "../Sections/WhyChooseUs";
import TeamSection2 from "../Sections/TeamSection2";
import BlogSection from "../Sections/BlogSection";
import AboutSection from "../Sections/AboutSection";
import WhatWeDoSection from "../Sections/WhatWeDoSection";
import TestimonialSection from "../Sections/TestimonialSection";
import CTASection from "../Sections/CTASection";

const Home = () => {
  const videos = [
    "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/data.mp4",
    "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4",
    "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/development.mp4",
    "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/pixels.mp4",
    "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/security.mp4",
    // "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/network.mp4",
    // "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/security.mp4",
    // "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/security.mp4",
  ];

  const slideContent = [
    {
      title: "Data Services",
      description:
        "Unlock the power of your data with our advanced analytics and management solutions.",
      buttonText: "Learn More About Data Services",
      buttonLink: "/services/data",
      animation: "fadeInUp",
    },
    {
      title: "Cloud Solutions",
      description:
        "Leverage the cloud to enhance scalability, flexibility, and efficiency.",
      buttonText: "Discover Cloud Solutions",
      buttonLink: "/services/cloud",
      animation: "fadeInRight",
    },
    {
      title: "Development Services",
      description: "Custom software development to meet your business needs.",
      buttonText: "Explore Development Services",
      buttonLink: "/services/development-and-integration",
      animation: "fadeInLeft",
    },
    {
      title: "Consulting Services",
      description:
        "Expert guidance to optimize your IT strategy and operations.",
      buttonText: "Learn More About Consulting",
      buttonLink: "/services/planning-and-execution",
      animation: "fadeInUp",
    },
    {
      title: "Security and Privacy",
      description: "Want to secure your infrastructure?",
      buttonText: "Learn More About Security",
      buttonLink: "/services/security-and-privacy",
      animation: "fadeInLeft",
    },
  ];

  const featuredContent = {
    sectionName: "About Us",
    title: "Who we are",
    description:
      "At Coretech, we believe technology is the fuel for a brighter future. Our purpose is to ignite your potential, helping individuals and organizations dream bigger, move faster, and build a better tomorrow.",
    content: {
      para: "We achieve this by providing comprehensive IT consulting services. We help you:",
      list: [
        {
          heading: "Solidify your software foundation",
          description:
            "We optimize your software architecture for agility and scalability, ensuring it supports your growth.",
        },
        {
          heading: "Craft a winning digital strategy",
          description:
            "We collaborate with you to develop a tech-driven roadmap that aligns perfectly with your business goals.",
        },
        {
          heading: "Streamline your software portfolio",
          description:
            "We identify opportunities to optimize your software ecosystem, maximizing efficiency and cost-effectiveness.",
        },
      ],
    },
    analytics: [
      {
        count: "500+",
        name: "Projects Done",
      },
      {
        count: "20K+",
        name: "Happy Clients",
      },
    ],
    imgSrc:
      "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/about/1.png",
  };

  const technologies = {
    title: "We Deliver Expertise",
    subTitle: "Service Partners",
    slides: [
      "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/technologies/vmware.jpg",
      "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/technologies/azure.png",
      "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/technologies/gcp.png",
      "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/technologies/aws-logo.webp",
    ],
  };

  const services = [
    {
      title: "Data",
      description:
        "Harness the power of data with our expert engineering, architecture, management, and analytics solutions.",
      iconClass: "fas fa-database",
    },
    {
      title: "Cloud",
      description:
        "Seamlessly migrate, modernize, and optimize your infrastructure on the cloud for enhanced scalability and efficiency.",
      iconClass: "fas fa-cloud-upload-alt",
    },
    {
      title: "Security & Privacy",
      description:
        "Safeguard your systems, data, and operations with robust cybersecurity measures and privacy protocols.",
      iconClass: "fas fa-shield-alt",
    },
    {
      title: "Artificial Intelligence",
      description:
        "Leverage AI and machine learning to unlock new insights, automate processes, and drive innovation.",
      iconClass: "fas fa-robot",
    },
    {
      title: "Governance & Compliance",
      description:
        "Ensure regulatory compliance, risk management, and operational excellence through effective governance frameworks.",
      iconClass: "fas fa-balance-scale",
    },
    {
      title: "Planning and Execution",
      description:
        "Achieve your strategic goals with comprehensive portfolio, product, program, and project management expertise.",
      iconClass: "fas fa-tasks",
    },
    {
      title: "Development & Integration",
      description:
        "Build custom applications, websites, and mobile apps tailored to your unique requirements and integrate them seamlessly.",
      iconClass: "fas fa-code",
    },
    {
      title: "Service Operations",
      description:
        "Ensure smooth system operation and continuous improvement with our 24/7 support and maintenance services.",
      iconClass: "fas fa-tools",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Carousel videos={videos} slideContent={slideContent} />
      <WhyChooseUs />
      {/* <Featured featuredContent={featuredContent} /> */}
      <AboutSection />
      <WhatWeDoSection services={services} />
      <TestimonialSection />

      <ClientsSlider data={technologies} />
      {/* <TeamSection2/> */}
      <BlogSection title="Latest Updates" subTitle={"Blogs"} />
      <CTASection
        title="Book your free consultation now."
        link="https://outlook.office365.com/book/CoretechInfrastructureSolutionsInc1@coretechinfra.com/s/-QDgTMR6kUq4LYy9OmsyGg2"
        linkText="Register"
      />
      {/* Contact Us  */}
    </>
  );
};

export default Home;
