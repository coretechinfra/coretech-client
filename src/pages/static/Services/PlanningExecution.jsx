import React, { useEffect, useRef } from "react";
import CarouselTwo from "../../../components/Carousel/CarouselTwo";
import IntroductionSection from "../Sections/IntroductionSection";
import SubServicesSection from "../Sections/SubServicesSection";
import BenefitsSection from "../Sections/BenefitsSection";
import GetStartedSection from "../Sections/GetStartedSection";

const PlanningExecution = () => {
  const formSectionRef = useRef(null);

  const navigateToSection = () => {
    formSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const videos = [
    "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/execution.mp4",
  "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4",
    "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4",
    "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4",
  ];

  const slideContent = [
    {
      title: "Strategic Portfolio Management",
      description:
        "Align your projects and programs with your business goals through effective portfolio management. We help you prioritize initiatives to maximize value and achieve strategic objectives.",
      buttonText: "Learn More",
      buttonNavigation: "#portfolio-management",
      animation: "fadeInRight",
    },
    {
      title: "Product Management Excellence",
      description:
        "Drive the success of your products with our comprehensive product management services. From ideation to market launch, we ensure your products meet customer needs and business goals.",
      buttonText: "Explore Solutions",
      buttonNavigation: "#product-management",
      animation: "fadeInRight",
    },
    {
      title: "Efficient Program & Project Management",
      description:
        "Deliver projects on time and within budget with our program and project management expertise. We provide the tools and support needed to manage resources, timelines, and stakeholder expectations effectively.",
      buttonText: "Discover Benefits",
      buttonNavigation: "#program-project-management",
      animation: "fadeInRight",
    },
    {
      title: "Seamless Systems Implementation",
      description:
        "Ensure successful implementation of your systems with our expert guidance. We help you manage the complexities of system integration and deployment to ensure a smooth transition.",
      buttonText: "Get Support",
      buttonNavigation: "#systems-implementation",
      animation: "fadeInRight",
    },
  ];

  const introduction = {
    sectionTitle: "What are Planning and Execution Services?",
    title: "Mastering Planning and Execution",
    description:
      "Effective planning and execution are crucial for achieving organizational success. Our Planning and Execution services cover everything from portfolio and product management to program and project management, and systems implementation. We help your organization streamline processes, optimize resources, and achieve strategic objectives through careful planning and precise execution.",
    images: [
      "https://cdn.pixabay.com/photo/2019/03/15/15/42/work-4057334_960_720.jpg",
      "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/resource/planning-2.jpg",
    ],
  };

  const benefits = {
    sectionTitle: "Planning & Execution Solutions",
    title: "Benefits of Partnering with Coretech for Planning & Execution",
    description:
      "With over 20 years of industry experience, we focus on understanding your specific business needs and goals. We work collaboratively to develop tailored planning and execution strategies that align with your organization’s objectives. Our blend of technical expertise and business insight ensures that our solutions deliver measurable outcomes.",
    services: [
      {
        title: "Strategic Alignment",
        description:
          "Ensure all projects and initiatives align with your business goals.",
        iconClass: "flaticon-straight-quotes",
      },
      {
        title: "Resource Optimization",
        description:
          "Efficiently allocate resources to maximize productivity and minimize waste.",
        iconClass: "flaticon-settings",
      },
      {
        title: "Risk Mitigation",
        description:
          "Identify potential risks early and develop strategies to mitigate them.",
        iconClass: "flaticon-shield",
      },
      {
        title: "Enhanced Productivity",
        description:
          "Streamline processes to improve efficiency and achieve better outcomes.",
        iconClass: "flaticon-update",
      },
      {
        title: "Improved Stakeholder Engagement",
        description:
          "Maintain clear communication and strong relationships with stakeholders throughout the project lifecycle.",
        iconClass: "flaticon-phone-call",
      },
      {
        title: "Scalable Solutions",
        description:
          "Implement scalable solutions that can grow with your business.",
        iconClass: "flaticon-graph",
      },
    ],
  };
  

  const services = {
    sectionTitle: "Our Planning & Execution Services Offerings",
    title: "Our Planning & Execution Solutions and Services",
    description:
      "We offer a wide range of planning and execution services designed to meet the unique needs of businesses across various industries.",
    services: [
      {
        index: "01",
        title: "Portfolio Management",
        description:
          "Align projects and programs with business goals, prioritize initiatives, and optimize resource allocation to maximize value.",
        iconClass: "fa fa-briefcase", // Briefcase for portfolio
      },
      {
        index: "02",
        title: "Product Management",
        description:
          "Drive the success of your products from ideation to market launch, ensuring they meet customer needs and business objectives.",
        iconClass: "fa fa-cube", // Cube for product
      },
      {
        index: "03",
        title: "Program & Project Management",
        description:
          "Deliver projects on time and within budget by managing resources, timelines, and stakeholder expectations effectively.",
        iconClass: "fa fa-tasks", // Tasks for project management
      },
      {
        index: "04",
        title: "Systems Implementation",
        description:
          "Manage the complexities of system integration and deployment to ensure a smooth transition and successful implementation.",
        iconClass: "fa fa-cogs", // Gears for implementation and integration
      },
    ],
    cta: {
      text: "Enhance your planning and execution",
      buttonText: "Get Started",
      buttonLink: "#get-started",
    },
  };
  

  const cta = {
    title: "Get Started with Coretech Planning & Execution Solutions",
    description:
      "Ready to master the art of planning and execution? Contact Coretech today to discuss how our solutions can help you streamline processes and achieve your strategic objectives.",
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

export default PlanningExecution;
