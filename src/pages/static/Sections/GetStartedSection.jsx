import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sections.css";

const GetStartedSection = ({data}) => {
  const navigate = useNavigate();
  return (
    <>
      <section
        id="get-started"
        className="container-fluid"
        style={{ padding: "5em 3.5em", backgroundColor: "var(--theme-color2)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-7">
              <h1 style={{ fontSize: "2.2rem", color: "white" }}>
                {data?.title}
              </h1>
              <p className="mt-4 text-light">
                {data?.description}
              </p>
            </div>
            <div className="col-12 col-md-5 mx-auto cta-btn-group">
              <button
              onClick={() => window.open('https://outlook.office365.com/book/CoretechInfrastructureSolutionsInc1@coretechinfra.com/s/-QDgTMR6kUq4LYy9OmsyGg2','_blank', 'rel=noopener noreferrer')}
              className="cta-btn-light"
               
              >
                Schedule a Meeting
              </button>
              <button
              onClick={() => navigate("/contact")}
               className="cta-btn-dark"
               
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetStartedSection;
