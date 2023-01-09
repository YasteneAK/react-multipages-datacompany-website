import React from "react";
import { FaDatabase } from "react-icons/fa";
import "./TestimonialsStyles.css";

const Testimonials = () => {
  return (
    <div className="testimonial">
      <div className="container">
        <div className="outline">
          <div className="content">
            <i>
              <FaDatabase /> DataPro
            </i>
            <p className="body">
              I've been using the data management services from this company for
              the past year and I'm extremely impressed with the results. The
              platform is user-friendly and has saved my business so much time
              and effort. The customer support team is also top-notch, always
              available to help with any questions or issues I have. I highly
              recommend this company to anyone looking to streamline their data
              management processes.
            </p>
            <div className="name">
              <p>Samantha Smith</p>
              <p>CEO, DataPro</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
