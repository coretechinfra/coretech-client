import React, { useEffect } from "react";
import BreadCrumb2 from "../../../components/BreadCrumb/BreadCrumb2";
import "./About.css";
import {
  FaBuildingColumns,
  FaChartSimple,
  FaShieldHalved,
} from "react-icons/fa6";
import { PiChartBarHorizontalDuotone } from "react-icons/pi";
import { MdOutlineWeb } from "react-icons/md";
import { FaCloudscale } from "react-icons/fa";
import TeamSection from "../Sections/TeamSection";
import TeamSection2 from "../Sections/TeamSection2";
import ClientsSlider from "../Sections/ClientsSlider";
import CareerSection from "../Sections/CareerSection";

const partners = {
  title: "Our Clients",
  subTitle: "Clients",
  slides: [
    "https://conglobase.com/assets/media/Varients/SVG/conglobase_original.svg",
    "https://www.marquistech.com/wp-content/uploads/2020/02/logo.png",
    "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/partners/altezzasys.png",
    "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/partners/Spyne+Black+png.webp",
  ],
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

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BreadCrumb2 heading="About Us" />

      <section id="company" class="about-section-two">
        <div class="container">
          <div class="row">
            <div
              class="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight"
              data-wow-delay="600ms"
            >
              <div class="inner-column">
                <div class="sec-title">
                  <span class="sub-title">Welcome to Coretech</span>
                  <h2>Empowering Your Digital Transformation</h2>
                  {/* <div class="text">Founded in 2023 and headquartered in Texas, USA, Coretech Infrastructure Solutions Inc. specializes in providing innovative IT services and solutions that cater to businesses of all sizes across various industries.</div> */}
                  {/* <div class="text">Coretech Infrastructure Solutions Inc – Empowering Your Digital Transformation.
                                    </div> */}
                  <p class="text">
                    Coretech Infrastructure Solutions Inc has rapidly emerged as
                    a leader in innovative IT services and consultancy. We are
                    dedicated to helping businesses of all sizes, from startups
                    to Fortune 500 companies, navigate their digital journeys
                    with ease and efficiency.
                  </p>
                  {/* <p class="text">Our comprehensive suite of IT services includes:</p> */}
                </div>

                <div class="row">
                  <div class="about-block col-lg-6 col-md-6">
                    <div class="inner-box">
                      <i class="icon fa fa-cloud"></i>
                      <h6 class="title"> Cloud Solutions</h6>
                      <div class="text">
                        Deployment, migration, and management across major
                        platforms (AWS, Azure, Google Cloud).
                      </div>
                    </div>
                  </div>

                  <div class="about-block col-lg-6 col-md-6">
                    <div class="inner-box">
                      <i class="icon fa fa-shield"></i>
                      <h6 class="title">Security Solutions</h6>
                      <div class="text">
                        Comprehensive security assessments, incident response,
                        and compliance strategies.
                      </div>
                    </div>
                  </div>

                  <div class="about-block col-lg-6 col-md-6">
                    <div class="inner-box">
                      <i class="icon fa fa-code"></i>
                      <h6 class="title">Software Development</h6>
                      <div class="text">
                        Custom software solutions, mobile app development, and
                        system integration.
                      </div>
                    </div>
                  </div>

                  <div class="about-block col-lg-6 col-md-6">
                    <div class="inner-box">
                      <i class="icon fa fa-question-circle"></i>
                      <h6 class="title">IT Consultancy</h6>
                      <div class="text">
                        Strategic IT consulting, project management, and IT
                        infrastructure optimization.
                      </div>
                    </div>
                  </div>
                </div>

                {/* <a href="page-about.html" class="theme-btn btn-style-one"><span class="btn-title">Explore now</span></a> */}
              </div>
            </div>

            {/* <!-- Image Column --> */}
            <div class="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
              <div class="inner-column wow fadeInLeft">
                <figure class="image-1 overlay-anim wow fadeInUp">
                  <img src="images/resource/about-3.jpg" alt="" />
                </figure>
                <figure class="image-2 overlay-anim wow fadeInRight">
                  <img src="images/resource/about-4.jpg" alt="" />
                </figure>
                {/* <div class="experience bounce-y">
                                    <div class="inner">
                                        <i class="icon flaticon-design"></i>
                                        <div class="text">Founded<br /> 2023</div>
                                    </div>
                                </div> */}
              </div>
              <p className="text mt-4">
                Our team consists of highly skilled IT professionals, each with
                deep expertise in various technology stacks and industries,
                enabling us to offer tailored solutions that meet the unique
                needs of our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="mission-section p-0 mb-5">
        <div class="sec-title text-center">
          <span class="sub-title">Mission & Vision</span>
          <h2>We Are Inspired</h2>
          {/* <div class="text">Founded in 2023 and headquartered in Texas, USA, Coretech Infrastructure Solutions Inc. specializes in providing innovative IT services and solutions that cater to businesses of all sizes across various industries.</div> */}
          {/* <p class="text">Our comprehensive suite of IT services includes:</p> */}
        </div>
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-2">
            <div className="col">
              <img
                src="https://img.freepik.com/free-photo/flight-aviation-cloudy-aircraft-airplane_1172-277.jpg?t=st=1713715859~exp=1713719459~hmac=0a27aae777940a5bc6cb7cbdd52850271c6a635f2e72f1524d0cddde891d30a1&w=740"
                alt="about"
                className="w-100 rounded-3"
              />
            </div>
            <div className="col p-5">
              <h1 className="text-warning">Our Mission</h1>
              <p>
                Our mission is to empower businesses with cutting-edge IT
                solutions that enhance operational efficiency and drive digital
                transformation. We commit to delivering reliable, scalable, and
                secure IT services tailored to meet the diverse needs of our
                clients, ensuring they can focus on their core business goals
                with confidence.
              </p>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-2  mb-5">
            <div className="col p-5 ">
              <h1 className="text-warning">Our Vision</h1>
              <p>
                Our vision is to be a global leader in IT services, pioneering
                innovations that redefine technology landscapes and set new
                industry standards. We aim to connect businesses of all sizes
                with emerging technologies, fostering a world where technology
                creates unlimited opportunities for growth and innovation.
              </p>
            </div>
            <div className="col">
              <img
                src="https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/about/mission.jpg"
                alt="about"
                className="w-100 rounded-3"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="services-section container pt-0 pb-0">
        <div className="container">
          <div className="sec-title text-center">
            <span className="sub-title">What We’re Offering</span>
            <h2>
              Services we’re offering to <br />
              our customers
            </h2>
          </div>

          {/* <div className="row">
                        <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon-box"><FaCloudscale className='icon' /></div>
                                <h5 className="title"><a href="#">Cloud Architecture</a></h5>
                                <div className="text">Streamline infrastructure, optimize performance, secure data.</div>
                                <a href="#" className="read-more"><i className="fa fa-long-arrow-alt-right"></i> Read more</a>
                            </div>
                        </div>

                        <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon-box"><FaBuildingColumns className='icon' /></div>
                                <h5 className="title"><a href="#">IT Infrastructure</a></h5>
                                <div className="text">Optimize networks, enhance operations with IT Infrastructure Excellence.</div>
                                <a href="#" className="read-more"><i className="fa fa-long-arrow-alt-right"></i> Read more</a>
                            </div>
                        </div>

                        <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon-box"><FaShieldHalved className='icon' /></div>
                                <h5 className="title"><a href="#">Cyber Security</a></h5>
                                <div className="text">Safeguard data, protect networks, mitigate risks.</div>
                                <a href="#" className="read-more"><i className="fa fa-long-arrow-alt-right"></i> Read more</a>
                            </div>
                        </div>
                        <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon-box"><FaShieldHalved className='icon' /></div>
                                <h5 className="title"><a href="#">Business Optimization</a></h5>
                                <div className="text">Tincidunt elit magnis nulla facilisis sags maecenas nunc amet ultrices.</div>
                                <a href="#" className="read-more"><i className="fa fa-long-arrow-alt-right"></i> Read more</a>
                            </div>
                        </div>
                        <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon-box"><FaShieldHalved className='icon' /></div>
                                <h5 className="title"><a href="#">Service Management</a></h5>
                                <div className="text">Tincidunt elit magnis nulla facilisis sags maecenas nunc amet ultrices.</div>
                                <a href="#" className="read-more"><i className="fa fa-long-arrow-alt-right"></i> Read more</a>
                            </div>
                        </div>
                        <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon-box"><FaShieldHalved className='icon' /></div>
                                <h5 className="title"><a href="#">Cloud & Infra Security</a></h5>
                                <div className="text">Tincidunt elit magnis nulla facilisis sags maecenas nunc amet ultrices.</div>
                                <a href="#" className="read-more"><i className="fa fa-long-arrow-alt-right"></i> Read more</a>
                            </div>
                        </div>
                    </div> */}
          <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 ">
              {services?.map((benefit, index) => (
                <div
                  key={index}
                  className="service-benefits col d-flex "
                  style={{
                    // maxWidth: "30%",
                    marginTop: "3.5rem",
                  }}
                >
                  <div className="row">
                    <div className="col col-2">
                      <i
                        className={`icon ${benefit?.iconClass}`}
                        style={{
                          fontSize: "40px",
                          // marginRight: "25px",
                          color: "var(--theme-color2)",
                        }}
                      ></i>
                    </div>
                    <div className="col col-10">
                      <div className="benefits-content">
                        <h5
                          style={{
                            fontWeight: "bold",
                            color: "var(--theme-color2)",
                          }}
                        >
                          {benefit?.title}
                        </h5>
                        <p className="text text-justify">{benefit?.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bottom-box">
            <div className="text">
              Trust the experts for all your <strong>IT solutions</strong>
            </div>
            <a href="/services" className="theme-btn btn-style-one">
              <span className="btn-title">Explore now</span>
            </a>
          </div>
        </div>
      </section>

      <section id="clients">
        <ClientsSlider data={partners} autoplay={false} dots={false} logoHeight={50} />
      </section>

      <section id="partners">
        <ClientsSlider data={technologies} />
      </section>

      {/* <TeamSection2 /> */}
      <CareerSection />
    </>
  );
};

export default About;
