import React from "react";
import "./FaqStyles.css";

const Faq = () => {
  return (
    <div className="section-faq">
      <div className="container">
        <div className="col-1">
          <h3>Frequently asked questions</h3>
          <p>Can't find the answer you're looking for?</p>
          <p>
            Reach out to our <span>customer support</span> team.
          </p>
        </div>
        <div className="col-2">
          <div className="faq">
            <h5>How does your all-in-one data platform work?</h5>
            <p>
              Our platform integrates data from various sources and allows you
              to access, analyze, and visualize the data all in one place. You
              can use our platform to gain insights into your business, optimize
              your marketing efforts, and make data-driven decisions.
            </p>
          </div>
          <div className="faq">
            <h5>What types of data can I access through your platform?</h5>
            <p>
              Our platform can integrate and work with a wide variety of data
              types, including structured data from databases, unstructured data
              from social media and other sources, and even real-time data
              streams.
            </p>
          </div>
          <div className="faq">
            <h5>Is your platform secure?</h5>
            <p>
              Yes, our platform is designed with data security in mind. We use
              industry-standard security measures to protect your data,
              including encryption and access controls.
            </p>
          </div>
          <div className="faq">
            <h5>Do you offer any training or support for your platform?</h5>
            <p>
              Yes, we offer a variety of training resources and a knowledgeable
              customer support team to help you get the most out of our
              platform.
            </p>
          </div>
          <div className="faq">
            <h5>
              Can your platform be customized to meet the specific needs of my
              business?
            </h5>
            <p>
              Yes, our platform is highly customizable and can be tailored to
              fit the unique needs and requirements of your business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
