import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import "./ContactStyles.css";

export const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="col-1">
          <div className="content">
            <div>
              <h2>Get in touch</h2>
              <p>
                Contact us with any questions or to learn more about our data
                management platform. We're here to help. est.
              </p>
            </div>
            <div className="address">
              <p>Rue de la Loi 200</p>
              <p>1040 Brussels, Belgium</p>
            </div>
            <div className="icons">
              <FaPhone style={{ marginRight: "1rem" }} />
              <p>+32 456 78 90 12</p>
            </div>
            <div className="icons">
              <FaEnvelope style={{ marginRight: "1rem" }} />
              <p>support@boxtech.com</p>
            </div>
            <div className="careers">
              <p>
                Looking for careers? <span>View all jop openings.</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-2">
          <form action="">
            <input type="text" placeholder="Full name" />
            <input type="email" placeholder="Email" />
            <input type="phone" placeholder="Phone" />
            <textarea
              name="Message"
              placeholder="Message"
              cols="30"
              rows="10"
            ></textarea>
            <div className="checkbox">
              <input type="checkbox" />
              <p>
                By checking this box, you agree to the{" "}
                <span>Privacy Policy</span> and
                <span>Cookie Policy</span>.
              </p>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
