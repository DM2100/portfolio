import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaPhone,
  FaFileDownload,
} from "react-icons/fa";

const ContactMe = () => {
  const resumeUrl = process.env.PUBLIC_URL + "/Durak Mustafov-resume.pdf.pdf"; // Replace with the actual filename
  

  return (
    <div className="container section2 contact-container my-5" id="ContactMe">
      <div className="row">
        <div className="col-12 text-center mt-4">
          <h2 className="section-title">Get in Touch</h2>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/_mustafov/"
              className="social-icon instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/durak-mustafov-827880156/"
              className="social-icon linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/durak.mustafov"
              className="social-icon facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          </div>
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-card-icon">
                <FaPhone />
              </div>
              <div className="contact-card-info">
                <div className="label">Phone:</div>
                <div className="value">+389-78/366/142</div>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-card-icon">
                <FaEnvelope />
              </div>
              <div className="contact-card-info">
                <div className="label">Email:</div>
                <div className="value">juniorduci@live.com</div>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-card-icon">
                <FaFileDownload />
              </div>
              <div className="contact-card-info">
                <div className="label">Resume:</div>
                <a
                  href={resumeUrl}
                  className="download-button"
                  download="Durak-Mustafov.resume.pdf"
                >
                  <button className="download-button mt-1 p">Download</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
