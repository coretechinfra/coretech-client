import React, { useEffect, useState } from "react";
import "./ServicesDetails.css";
import Hero from "../../../components/Hero/Hero";
import { FaShieldHalved } from "react-icons/fa6";
import {
  FiShield,
  FiLock,
  FiCheckCircle,
  FiAlertCircle,
  FiMonitor,
  FiTarget,
  FiSettings,
  FiActivity,
  FiAlertOctagon,
  FiTrendingUp,
  FiPhoneCall,
} from "react-icons/fi";
import { useGlobalContext } from "../../../global/context";
import PostCard from "../../../components/Post/PostCard";
import Accordion from "../../../components/Accordion/Accordion";
import { Link } from "react-router-dom";
import { CloudIcon, DataIcon } from "../../../components/Icons";

const ServiceDetails = () => {
  const [latestPosts, setLatestPosts] = useState();
  const { api } = useGlobalContext();

  const getLatestPosts = async () => {
    try {
      const res = await api.get(`/api/post/latest`);
      if (res?.status === 200) {
        console.log(res);
        setLatestPosts(res?.data);
      }
    } catch (error) {
      console.log("Error fetching post", error);
    }
  };

  useEffect(() => {
    getLatestPosts();
  }, []);

  return (
    <>
      <Hero
        heading="Defend Your Digital Assets with Our Cyber Security Solution"
        description="Empowering businesses and individuals to navigate the digital landscape securely."
        imgSrc="https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/service/cyber-security.png"
        link="https://outlook.office365.com/book/CoretechInfrastructureSolutionsInc1@coretechinfra.com/s/-QDgTMR6kUq4LYy9OmsyGg2"
        linkText="Book a Appointment Now"
        linkTarget="_blank"
      />

      <div
        className="sticky-top "
        style={{ backgroundColor: "limegreen", top: "78px", margin: 0, zIndex: 100}}
      >
        <ul
          className="d-flex mx-4 text-white fw-semibold fs-5"
          style={{
            margin: "0px",
            paddingTop: "5px",
            paddingBottom: "5px",
            color: "white",
          }}
        >
          <li className="me-5">
            <a href="#solution" className="text-white me-5">
              SOLUTIONS
            </a>
            <a href="#benefits" className="text-white me-5">
              BENEFITS
            </a>
            <a href="#get-started" className="text-white me-5">
              GET STARTED
            </a>
          </li>
          
        </ul>
        <div
          style={{
            height: "6px",
            width: "100%",
            background:
              "radial-gradient(circle, rgba(45,255,7,1) 6%, rgba(33,56,1,1) 100%)",
            margin: 0,
          }}
        />
      </div>

      <div className="container-fluid py-5 bg-dark">
        <div className="mx-5 d-flex">
          <div
            style={{
              width: "10px",
              //   height: "100%",
              backgroundColor: "yellow",
              marginRight: "30px",
            }}
          />
          <div>
            <div className="d-flex mb-4">
              <div
                className="service-icon p-2"
                style={{
                  backgroundColor: "limegreen",
                  // borderRadius: "10px",
                  width: "50px",
                  height: "50px",
                  marginRight: "20px",
                }}
              >
                <CloudIcon color="white" />
              </div>
              <div
                className="service-icon p-2"
                style={{
                  backgroundColor: "limegreen",
                  // borderRadius: "10px",
                  width: "50px",
                  height: "50px",
                  marginRight: "20px",
                }}
              >
                <DataIcon color="white" />
              </div>
            </div>
            <h5 className="text-white mb-4">SEE IT IN ACTION</h5>
            <p className="text-white fs-2 mb-4" style={{ maxWidth: "40.33%" }}>
              <b className="text-white">Carhartt:</b>{" "}
              <i>The human side of large-scale transformation</i>
            </p>
            <a
              href=""
              className="btn btn-success fw-semibold fs-5 rounded-5 px-3"
            >
              Read story
            </a>
          </div>
        </div>
      </div>

      <section id="solution"
        className="container-fluid "
        style={{ backgroundColor: "limegreen", padding: "5em 3.5em" }}
      >
        <h1 className="text-white" style={{ fontSize: "58px" }}>
          Our Governance & Compliance <br />{" "}
          <i className="fw-bold">solutions</i>
        </h1>

        <div className="row row-cols-3">
          <div
            className="col"
            style={{ marginTop: "3.8em", paddingLeft: "25px" }}
          >
            <h5 className="text-white mb-3 fw-bold">ISO Certification</h5>
            <p className="text-white">
              ISO certification services provide comprehensive support for
              organizations seeking compliance with ISO standards. They include
              gap analysis to assess current practices, implementation of
              standards, development of documentation, conducting internal
              audits, and assisting in achieving certification.
            </p>
          </div>
          <div
            className="col"
            style={{ marginTop: "3.8em", paddingLeft: "25px" }}
          >
            <h5 className="text-white mb-3 fw-bold">ISO Certification</h5>
            <p className="text-white">
              ISO certification services provide comprehensive support for
              organizations seeking compliance with ISO standards. They include
              gap analysis to assess current practices, implementation of
              standards, development of documentation, conducting internal
              audits, and assisting in achieving certification.
            </p>
          </div>
          <div
            className="col"
            style={{ marginTop: "3.8em", paddingLeft: "25px" }}
          >
            <h5 className="text-white mb-3 fw-bold">ISO Certification</h5>
            <p className="text-white">
              ISO certification services provide comprehensive support for
              organizations seeking compliance with ISO standards. They include
              gap analysis to assess current practices, implementation of
              standards, development of documentation, conducting internal
              audits, and assisting in achieving certification.
            </p>
          </div>
          <div
            className="col"
            style={{ marginTop: "3.8em", paddingLeft: "25px" }}
          >
            <h5 className="text-white mb-3 fw-bold">ISO Certification</h5>
            <p className="text-white">
              ISO certification services provide comprehensive support for
              organizations seeking compliance with ISO standards. They include
              gap analysis to assess current practices, implementation of
              standards, development of documentation, conducting internal
              audits, and assisting in achieving certification.
            </p>
          </div>
          <div
            className="col"
            style={{ marginTop: "3.8em", paddingLeft: "25px" }}
          >
            <h5 className="text-white mb-3 fw-bold">ISO Certification</h5>
            <p className="text-white">
              ISO certification services provide comprehensive support for
              organizations seeking compliance with ISO standards. They include
              gap analysis to assess current practices, implementation of
              standards, development of documentation, conducting internal
              audits, and assisting in achieving certification.
            </p>
          </div>
          <div
            className="col"
            style={{ marginTop: "3.8em", paddingLeft: "25px" }}
          >
            <h5 className="text-white mb-3 fw-bold">ISO Certification</h5>
            <p className="text-white">
              ISO certification services provide comprehensive support for
              organizations seeking compliance with ISO standards. They include
              gap analysis to assess current practices, implementation of
              standards, development of documentation, conducting internal
              audits, and assisting in achieving certification.
            </p>
          </div>
        </div>
      </section>

      <section className="container-fluid" id="benefits" style={{ padding: "5em 3.5em" }}>
        <div className="row">
          <div className="col-7">
            <h1 style={{ fontSize: "52px", color: "limegreen" }}>
              <b>The Coretech Approach</b> to <i>Governance & Compliance</i>
            </h1>
          </div>
          <div className="col">
            <p>
              Our approach is collaborative, pragmatic, and results-oriented. We
              work closely with you to understand your specific needs and tailor
              our services to fit your unique environment. We focus on not just
              achieving compliance but also on driving continuous improvement
              and adding value to your organization.
            </p>
          </div>
        </div>
        <h2
          style={{
            marginTop: "2em",
            fontSize: "2.2rem",
            color: "limegreen",
          }}
        >
          Benefits of Partnering with Coretech for Governance & Compliance
        </h2>

        <div className="d-flex justify-content-between flex-wrap">
          <div
            className="service-benefits d-flex align-items-center"
            style={{ maxWidth: "30%", marginTop: "3.5rem" }}
          >
            <i
              className={`icon flaticon-concept`}
              style={{ fontSize: "70px", marginRight: "25px" }}
            ></i>
            <div className="benefits-content">
              <h5 style={{ fontWeight: "bold", color: "limegreen" }}>
                Reduced Risk
              </h5>
              <p>Identify and mitigate risks to protect your business.</p>
            </div>
          </div>
          <div
            className="service-benefits d-flex align-items-center"
            style={{ maxWidth: "30%", marginTop: "3.5rem" }}
          >
            <i
              className={`icon flaticon-concept`}
              style={{ fontSize: "70px", marginRight: "25px" }}
            ></i>
            <div className="benefits-content">
              <h5 style={{ fontWeight: "bold", color: "limegreen" }}>
                Reduced Risk
              </h5>
              <p>Identify and mitigate risks to protect your business.</p>
            </div>
          </div>
          <div
            className="service-benefits d-flex align-items-center"
            style={{ maxWidth: "30%", marginTop: "3.5rem" }}
          >
            <i
              className={`icon flaticon-concept`}
              style={{ fontSize: "70px", marginRight: "25px" }}
            ></i>
            <div className="benefits-content">
              <h5 style={{ fontWeight: "bold", color: "limegreen" }}>
                Reduced Risk
              </h5>
              <p>Identify and mitigate risks to protect your business.</p>
            </div>
          </div>
          <div
            className="service-benefits d-flex align-items-center"
            style={{ maxWidth: "30%", marginTop: "3.5rem" }}
          >
            <i
              className={`icon flaticon-concept`}
              style={{ fontSize: "70px", marginRight: "25px" }}
            ></i>
            <div className="benefits-content">
              <h5 style={{ fontWeight: "bold", color: "limegreen" }}>
                Reduced Risk
              </h5>
              <p>Identify and mitigate risks to protect your business.</p>
            </div>
          </div>
          <div
            className="service-benefits d-flex align-items-center"
            style={{ maxWidth: "30%", marginTop: "3.5rem" }}
          >
            <i
              className={`icon flaticon-concept`}
              style={{ fontSize: "70px", marginRight: "25px" }}
            ></i>
            <div className="benefits-content">
              <h5 style={{ fontWeight: "bold", color: "limegreen" }}>
                Reduced Risk
              </h5>
              <p>Identify and mitigate risks to protect your business.</p>
            </div>
          </div>
          <div
            className="service-benefits d-flex align-items-center"
            style={{ maxWidth: "30%", marginTop: "3.5rem" }}
          >
            <i
              className={`icon flaticon-concept`}
              style={{ fontSize: "70px", marginRight: "25px" }}
            ></i>
            <div className="benefits-content">
              <h5 style={{ fontWeight: "bold", color: "limegreen" }}>
                Reduced Risk
              </h5>
              <p>Identify and mitigate risks to protect your business.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="get-started"
        className="container-fluid"
        style={{ padding: "5em 3.5em", backgroundColor: "greenyellow" }}
      >
        <div className="row">
          <div className="col-7">
            <h1 style={{ fontSize: "52px", color: "green" }}>
              Get Started With Coretech
            </h1>
            <p className="mt-4">
              Ready to strengthen your governance and compliance framework?
              Contact Coretech today for a free consultation. Let's discuss how
              we can help you achieve your goals and build a more resilient and
              successful organization.
            </p>
          </div>
          <div className="col px-5">
            <button style={{ width: "100%", height: "50%", fontSize: "35px", fontWeight: '500' }}>
              Schedule a Meeting
            </button>
            <button
              style={{
                width: "100%",
                height: "50%",
                fontSize: "35px",
                color: "white",
                fontWeight: '500',
                background:
                  "linear-gradient(121deg, rgba(141,221,0,1) 6%, rgba(33,56,1,1) 100%)",
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
