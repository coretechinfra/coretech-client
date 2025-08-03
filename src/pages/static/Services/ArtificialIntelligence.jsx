import React, { useEffect, useRef } from "react";
import CarouselTwo from "../../../components/Carousel/CarouselTwo";
import IntroductionSection from "../Sections/IntroductionSection";
import SubServicesSection from "../Sections/SubServicesSection";
import BenefitsSection from "../Sections/BenefitsSection";
import GetStartedSection from "../Sections/GetStartedSection";

const ArtificialIntelligence = () => {
  const formSectionRef = useRef(null);

  const navigateToSection = () => {
    formSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const videos = [
    "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/ai.mp4",
    "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4",
    "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4",
    "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4",
  ];

  const slideContent = [
    {
      title: "Revolutionize Your Business with AI",
      description:
        "Leverage the power of Artificial Intelligence to drive innovation and efficiency. Our AI solutions help transform your business operations and enhance decision-making.",
      buttonText: "Explore AI Solutions",
      buttonNavigation: "#services",
      animation: "fadeInRight",
    },
    {
      title: "Intelligent Automation",
      description:
        "Automate repetitive tasks and streamline processes with AI-driven solutions. Our AI services offer intelligent automation to improve productivity and reduce operational costs.",
      buttonText: "Learn More",
      buttonNavigation: "#automation",
      animation: "fadeInRight",
    },
    {
      title: "AI-Powered Insights",
      description:
        "Gain valuable insights with AI and Machine Learning. Our solutions provide data-driven analysis to help you make informed and strategic business decisions.",
      buttonText: "Discover Benefits",
      buttonNavigation: "#insights",
      animation: "fadeInRight",
    },
    {
      title: "Transform Customer Experiences",
      description:
        "Enhance customer engagement with AI-powered chatbots and personalized experiences. Our AI solutions ensure seamless and effective customer interactions.",
      buttonText: "Get Support",
      buttonNavigation: "#customer-experience",
      animation: "fadeInRight",
    },
  ];

  const introduction = {
    sectionTitle: "What are Artificial Intelligence Services?",
    title: "Harnessing the Power of Artificial Intelligence",
    description:
      "In the era of digital transformation, Artificial Intelligence (AI) is a key driver of innovation and efficiency. Our AI Solutions team is dedicated to helping your organization leverage AI and Machine Learning technologies to automate processes, enhance decision-making, and create intelligent products and platforms. From chatbot automation to computer vision, we provide a comprehensive suite of AI services tailored to your unique needs.",
    images: [
      "https://cdn.pixabay.com/photo/2018/09/18/11/19/artificial-intelligence-3685928_1280.png",
      "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/resource/ai-2.jpg",
    ],
  };

  const benefits = {
    sectionTitle: "AI Solutions",
    title: "Benefits of Partnering with Coretech for AI Solutions",
    description:
      "With over 20 years of industry experience, we focus on understanding your specific business needs and goals. We work collaboratively to develop a tailored AI strategy that aligns with your organization’s objectives. Our blend of technical expertise and business insight ensures that our solutions deliver measurable outcomes.",
    services: [
      {
        title: "Enhanced Decision-Making",
        description:
          "Leverage AI-driven insights to make informed and strategic business decisions.",
        iconClass: "fa fa-diagram-project", // Bar chart for data-driven decisions
      },
      {
        title: "Process Automation",
        description:
          "Automate repetitive tasks and processes to increase efficiency and reduce operational costs.",
        iconClass: "fa fa-cogs", // Gears for automation
      },
      {
        title: "Personalized Customer Experiences",
        description:
          "Utilize AI to deliver personalized experiences and improve customer satisfaction.",
        iconClass: "fa fa-user", // User icon for personalization
      },
      {
        title: "Innovative Products and Platforms",
        description:
          "Develop intelligent products and platforms that offer unique value propositions.",
        iconClass: "fa fa-lightbulb", // Lightbulb for innovation
      },
      {
        title: "Competitive Advantage",
        description:
          "Stay ahead of the competition by integrating cutting-edge AI technologies.",
        iconClass: "fa fa-trophy", // Trophy for competitive advantage
      },
      {
        title: "Scalable Solutions",
        description:
          "Implement scalable AI solutions that can grow with your business.",
        iconClass: "fa fa-expand", // Expand arrows for scalability
      },
    ],
  };
  
  

  const services = {
    sectionTitle: "Our AI Services Offerings",
    title: "Our AI Solutions and Services",
    description:
      "We offer a wide range of AI services designed to meet the unique needs of businesses across various industries.",
    services: [
      {
        index: "01",
        title: "AI & Machine Learning",
        description:
          "Develop and deploy machine learning models to solve complex problems, automate decision-making, and drive innovation.",
        iconClass: "fa fa-microchip", // Microchip for AI/ML
      },
      {
        index: "02",
        title: "Intelligent Product/Platform",
        description:
          "Create intelligent products and platforms that leverage AI to offer advanced functionalities and improved user experiences.",
        iconClass: "fa fa-puzzle-piece", // Puzzle piece for building blocks of product
      },
      {
        index: "03",
        title: "Chatbot Automation",
        description:
          "Implement chatbot solutions to automate customer interactions, provide instant support, and enhance user engagement.",
        iconClass: "fa fa-comments", // Comments icon for chatbots
      },
      {
        index: "04",
        title: "Computer Vision",
        description:
          "Utilize computer vision technologies to analyze visual data, automate image and video processing tasks, and extract valuable insights.",
        iconClass: "fa fa-eye", // Eye icon for vision
      },
    ],
    cta: {
      text: "Transform your business with AI solutions",
      buttonText: "Get Started",
      buttonLink: "#get-started",
    },
  };
  

  const cta = {
    title: "Get Started with Coretech AI Solutions",
    description:
      "Ready to leverage AI to drive your business forward? Contact Coretech today to explore how our AI Solutions can help you innovate and achieve your goals.",
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

export default ArtificialIntelligence;
