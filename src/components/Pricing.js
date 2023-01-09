import React from "react";

import "./PricingStyles.css";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="container">
        <div className="top-content">
          <div>
            <h2>
              Everything you need for <span>59€ a month</span>
            </h2>
            <p>
              Includes every feature we offer plus unlimited projects and
              unlimited users.
            </p>
          </div>
          <div className="btn-div">
            <button>Get started today</button>
          </div>
        </div>
        <div className="bottom-content">
          <div className="card">
            <p>
              <span>Everything you need</span>
            </p>
            <h3>All-in-one platform</h3>
            <p>
              Access, analyze, and visualize data from multiple sources in one
              place. Customizable for businesses of any size. Try it today and
              unlock the full potential of your data.
            </p>
          </div>
          <div className="card">
            <div>
              <p>Data storage and management</p>
            </div>
            <div>
              <p>Data integration and ETL (extract, transform, and load)</p>
            </div>
            <div>
              <p>Data analysis and visualization</p>
            </div>
            <div>
              <p>Business intelligence and reporting</p>
            </div>
            <div>
              <p>Predictive modeling and machine learning</p>
            </div>
          </div>
          <div className="card">
            <div>
              <p>Data governance and security</p>
            </div>
            <div>
              <p>Data quality and cleansing</p>
            </div>
            <div>
              <p>Master data management</p>
            </div>
            <div>
              <p>Big data processing and analytics</p>
            </div>
            <div>
              <p>Cloud data warehousing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
