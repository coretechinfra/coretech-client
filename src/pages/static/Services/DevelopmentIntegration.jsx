import React, { useEffect, useRef } from "react";
import CarouselTwo from "../../../components/Carousel/CarouselTwo";
import IntroductionSection from "../Sections/IntroductionSection";
import SubServicesSection from "../Sections/SubServicesSection";
import BenefitsSection from "../Sections/BenefitsSection";
import GetStartedSection from "../Sections/GetStartedSection";

const DevelopmentIntegration = () => {
  const formSectionRef = useRef(null);

  const navigateToSection = () => {
    formSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const videos = [
    "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/development.mp4",
    
  ];

  const slideContent = [
    {
      title: "Innovative Application Development",
      description:
        "Transform your ideas into reality with our application development services. We create custom applications tailored to your business needs, ensuring seamless integration and exceptional performance.",
      buttonText: "Learn More",
      buttonNavigation: "#application-development",
      animation: "fadeInRight",
    },
    {
      title: "Cutting-Edge Web Development",
      description:
        "Enhance your online presence with our web development solutions. We build responsive, user-friendly websites that drive engagement and deliver a superior user experience.",
      buttonText: "Explore Solutions",
      buttonNavigation: "#web-development",
      animation: "fadeInRight",
    },
    {
      title: "Next-Gen Mobile App Development",
      description:
        "Stay ahead in the mobile-first world with our mobile app development services. We design and develop high-quality mobile apps that meet your business objectives and delight your users.",
      buttonText: "Discover Benefits",
      buttonNavigation: "#mobile-app-development",
      animation: "fadeInRight",
    },
    {
      title: "Seamless Third-Party Integration",
      description:
        "Integrate third-party services and APIs smoothly into your systems with our expert integration services. We ensure compatibility and enhance your existing infrastructure.",
      buttonText: "Get Support",
      buttonNavigation: "#third-party-integration",
      animation: "fadeInRight",
    },
    {
      title: "Tailored Solutions for Unique Needs",
      description:
        "Get solutions tailored to your specific business requirements. Our custom development services provide you with unique, innovative solutions that set you apart from the competition.",
      buttonText: "Get Started",
      buttonNavigation: "#tailored-solutions",
      animation: "fadeInRight",
    },
  ];

  const introduction = {
    sectionTitle: "What are Development & Integration Services?",
    title: "Comprehensive Development & Integration Solutions",
    description:
      "In today’s digital age, effective development and seamless integration are essential for business success. Our Development & Integration services cover everything from application and web development to mobile app development and third-party integrations. We provide tailored solutions to meet your unique needs, ensuring your systems work together flawlessly and your business operates efficiently.",
    images: [
      "https://cdn.pixabay.com/photo/2016/03/23/14/55/matrix-1274888_1280.png",
      "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/resource/dev-2.jpg",
    ],
  };

  const benefits = {
    sectionTitle: "Development & Integration Solutions",
    title: "Benefits of Partnering with Coretech for Development & Integration",
    description:
      "With over 20 years of industry experience, we focus on understanding your specific business needs and goals. We work collaboratively to develop tailored development and integration strategies that align with your organization’s objectives. Our blend of technical expertise and business insight ensures that our solutions deliver measurable outcomes.",
    services: [
      {
        title: "Custom Solutions",
        description:
          "Develop solutions tailored to your unique business requirements, ensuring a perfect fit.",
        iconClass: "flaticon-concept",
      },
      {
        title: "Enhanced Efficiency",
        description:
          "Streamline processes and improve operational efficiency through seamless integration.",
        iconClass: "flaticon-settings-1",
      },
      {
        title: "Scalable Applications",
        description:
          "Build scalable applications that grow with your business and adapt to changing needs.",
        iconClass: "flaticon-bar-chart-1",
      },
      {
        title: "Improved User Experience",
        description:
          "Deliver exceptional user experiences through responsive and user-friendly designs.",
        iconClass: "flaticon-design-2",
      },
      {
        title: "Competitive Advantage",
        description:
          "Stay ahead of the competition with innovative and high-quality development solutions.",
        iconClass: "flaticon-profits",
      },
      {
        title: "Reduced Costs",
        description:
          "Optimize costs by integrating third-party solutions and automating processes.",
        iconClass: "flaticon-dollar-currency-symbol",
      },
    ],
  };
  

  const services = {
    sectionTitle: "Our Development & Integration Services Offerings",
    title: "Our Development & Integration Solutions and Services",
    description:
      "We offer a wide range of development and integration services designed to meet the unique needs of businesses across various industries.",
    services: [
      {
        index: "01",
        title: "Application Development",
        description:
          "Transform your ideas into reality with our custom application development services, ensuring seamless integration and exceptional performance.",
        iconClass: "fa fa-code", // Code icon for application development
      },
      {
        index: "02",
        title: "Web Development",
        description:
          "Enhance your online presence with our web development solutions, building responsive and user-friendly websites.",
        iconClass: "fa fa-globe", // Globe icon for web development
      },
      {
        index: "03",
        title: "Mobile App Development",
        description:
          "Stay ahead in the mobile-first world with our high-quality mobile app development services, meeting your business objectives and delighting your users.",
        iconClass: "fa fa-mobile", // Mobile phone icon for mobile app dev
      },
      {
        index: "04",
        title: "Third-Party Integration",
        description:
          "Integrate third-party services and APIs smoothly into your systems, ensuring compatibility and enhancing your existing infrastructure.",
        iconClass: "fa fa-plug", // Plug icon for integration
      },
      {
        index: "05",
        title: "Tailored Solutions",
        description:
          "Get solutions tailored to your specific business requirements with our custom development services, providing unique and innovative solutions.",
        iconClass: "fa fa-wrench", // Wrench icon for customization
      },
    ],
    cta: {
      text: "Elevate your business with our development & integration services",
      buttonText: "Get Started",
      buttonLink: "#get-started",
    },
  };
  

  const cta = {
    title: "Get Started with Coretech Development & Integration Solutions",
    description:
      "Ready to elevate your business with our development and integration services? Contact Coretech today to explore how our solutions can help you innovate and achieve your goals.",
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

export default DevelopmentIntegration;
