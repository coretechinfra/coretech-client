import React from "react";

const BenefitsSection = ({ data }) => {
  return (
    <>
      <section
        className="container-fluid"
        id="benefits"
        style={{ padding: "5em 3.5em" }}
      >
        <div className="container">
          <div className="">
            <h1
              style={{ fontSize: "52px", color: "var(--theme-color2)" }}
              className="text-center"
            >
              <b>The Coretech Approach</b> to <i>{data?.sectionTitle}</i>
            </h1>
          </div>
          <div className="">
            <p className="text-center">{data?.description}</p>
          </div>
        </div>
        <h2
          style={{
            marginTop: "2em",
            fontSize: "2.2rem",
            color: "var(--theme-color2)",
            textAlign: "center",
          }}
        >
          {data?.title}
        </h2>

        <div className="container">
         <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 justify-content-between">
         {data?.services?.map((benefit, index) => (
            <div
            key={index}
              className="service-benefits col d-flex "
              style={{ 
                // maxWidth: "30%", 
                marginTop: "3.5rem" }}
            >
              <i
                className={`icon ${benefit?.iconClass}`}
                style={{
                  fontSize: "55px",
                  marginRight: "25px",
                  color: "var(--theme-color2)",
                }}
              ></i>
              <div className="benefits-content">
                <h5 style={{ fontWeight: "bold", color: "var(--theme-color2" }}>
                  {benefit?.title}
                </h5>
                <p className="text">{benefit?.description}</p>
              </div>
            </div>
          ))}
         </div>
        </div>
      </section>
    </>
  );
};

export default BenefitsSection;
