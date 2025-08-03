import React, { useEffect, useRef } from "react";
import CarouselTwo from "../../../components/Carousel/CarouselTwo";
import IntroductionSection from "../Sections/IntroductionSection";
import SubServicesSection from "../Sections/SubServicesSection";
import BenefitsSection from "../Sections/BenefitsSection";
import GetStartedSection from "../Sections/GetStartedSection";

const Data = () => {
  const formSectionRef = useRef(null);

  const navigateToSection = () => {
    formSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const videos = [
    "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/data.mp4",
    "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4",
    "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4",
    "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4",
  ];

  const slideContent = [
    {
      title: "Unlock the Power of Your Data",
      description:
        "Harness the full potential of your data with our comprehensive data solutions. We help you collect, store, and analyze data to gain actionable insights and drive business growth.",
      buttonText: "Explore Services",
      buttonNavigation: "#services",
      animation: "fadeInRight",
    },
    {
      title: "Transform Data into Insights",
      description:
        "Our data analytics services turn raw data into valuable insights. Make informed decisions and stay ahead of the competition with our advanced analytics and reporting solutions.",
      buttonText: "Learn More",
      buttonNavigation: "#analytics",
      animation: "fadeInRight",
    },
    {
      title: "Ensure Data Quality and Integrity",
      description:
        "Maintain the accuracy and reliability of your data with our data management and governance services. We ensure your data is clean, secure, and compliant with industry standards.",
      buttonText: "Discover Benefits",
      buttonNavigation: "#data-management",
      animation: "fadeInRight",
    },
    {
      title: "Customized Data Solutions",
      description:
        "Tailor our data solutions to meet your unique business needs. From data engineering to visualization, we offer end-to-end services that align with your strategic objectives.",
      buttonText: "Get Started",
      buttonNavigation: "#custom-solutions",
      animation: "fadeInRight",
    },
  ];
  

  const introduction = {
    sectionTitle: "What are Data Services?",
    title: "Transforming Data into Actionable Insights",
    description:
      "We understand the value of data in today’s time. We know that data is the lifeblood of modern businesses. Our Data Solutions team understands the potential of data and is ready to work with you to help your Organization harness the power of your data to gain valuable insights, make informed decisions, and drive business growth. We offer a comprehensive suite of services that cover the entire data lifecycle, from collection and storage to analysis and visualization.",
    
    images: [
      // "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/resource/about-3.jpg",
      "https://cdn.pixabay.com/photo/2017/02/01/11/50/clones-2029896_1280.png",
    ],
  };

  const benefits = {
    sectionTitle: "Data Solutions",
    title: "Benefits of Partnering with Coretech for Data Solutions",
    description:
      "With more than 20 years of industry experience, our approach is centered on understanding your specific business needs and goals and working collaboratively to develop a tailored data strategy that aligns with your overall Organization objectives. We combine technical expertise with business acumen to ensure that our solutions deliver tangible results.",
    services: [
      {
        title: "Enterprise Data Strategy and Roadmap",
        description:
          "Map multidomain MDM roadmap for customer, supplier, product.",
        iconClass: "fa fa-road",  // Road icon for roadmap/strategy
      },
      {
        title: "Data-Driven Decision-Making",
        description:
          "Understand business and make informed decisions using reliable data.",
        iconClass: "fa fa-bar-chart",  // Bar chart icon for data-driven decisions
      },
      {
        title: "Improved Operational Efficiency",
        description:
          "Streamline processes and identify opportunities for cost savings.",
        iconClass: "fa fa-line-chart",  // Line chart icon for efficiency trends
      },
      {
        title: "Enhanced Customer Experience",
        description:
          "Personalize interactions and tailor offerings based on customer data.",
        iconClass: "fa fa-users", // Users icon for customer experience
      },
      {
        title: "Competitive Advantage",
        description:
          "Gain a strategic edge over competitors by leveraging data-driven insights.",
        iconClass: "fa fa-trophy", // Trophy icon for competitive advantage
      },
      {
        title: "Future-Ready",
        description:
          "Build a scalable and flexible data infrastructure that can adapt to changing business needs.",
        iconClass: "fa fa-cubes", // Cubes icon to represent building blocks for the future
      },
    ],
  };
  
  


  const services = {
    sectionTitle: "Our Data Services Offerings",
    title: "Our Data Solutions and Services",
    description:
      "We offer a wide range of managed services tailored to meet the unique needs and requirements of businesses across various industries.",
    services: [
      {
        index: "01",
        title: "Data Engineering & Architecture",
        description:
          "Designs and implements data architectures, manages data infrastructure, develops data models, and ensures data quality and integrity.",
        iconClass: "fa fa-cogs",  // Gear icon (cogs) for engineering/building
      },
      {
        index: "02",
        title: "Data Management & Governance",
        description:
          "Master Data Management (MDM), Data quality management, Data lineage and metadata management, Data privacy and security, Data governance frameworks and policies",
        iconClass: "fa fa-database", // Database icon to represent data management
      },
      {
        index: "03",
        title: "Data Reporting & Analytics",
        description:
          "Custom report development and dashboards, Data visualization and storytelling, Business intelligence (BI) solutions, Self-service analytics platforms, Ad-hoc data analysis and exploration",
        iconClass: "fa fa-bar-chart", // Bar chart icon for analytics/reporting
      },    
    ],
    cta: {
      text: "Get your data more organised",
      buttonText: "Get Started",
      buttonLink: "#get-started",
    },
  };
  

  const cta = {
    title: "Get Started with Coretech Data Solutions",
    description: "Ready to unleash the power of your data? Contact Coretech today to discuss how our Data Solutions can help you unlock valuable insights and drive business growth.",
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

export default Data;
