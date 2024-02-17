import { useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import {
  FaEnvelope,
  FaPhone,
  FaFileDownload,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import React from "react";

export const ContactSection = () => {
  const contactRef = useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    if (contactRef.current) {
      observer.observe(contactRef.current);
    }
    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);
  const contactAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(-50px)",
  });

  const socialMediaAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(50px)",
  });
  const downloadPdf = () => {
    const pdfUrl = process.env.PUBLIC_URL + "/Durak Mustafov-resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", "Durak Mustafov-resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <div className="container py-5 " ref={contactRef} id="ContactMe">
      <div className="row my-5 py-3">
        <div className="col-lg-6">
          <animated.div
            className="container contact-section py-5"
            style={contactAnimation}
          >
            <h1 className="text-center get-touch-text my-3 py-3">
              Get In Touch
            </h1>
            <div className="row my-3 py-3">
              <div className="col-lg-4 col-md-4 mb-3">
                <div className="text-center">
                  <FaPhone className="icon-style" />
                  <p className="contact-text">+389 78-366-142</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 mb-3">
                <div className="text-center">
                  <FaEnvelope className="icon-style" />
                  <p className="contact-text">juniorduci@live.com</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 mb-3">
                <div className="text-center">
                  <FaFileDownload className="icon-style" />
                  <button className="download-btn mt-2" onClick={downloadPdf}>
                    Download resume
                  </button>
                </div>
              </div>
            </div>
          </animated.div>
        </div>
        <div className="col-lg-6">
          <animated.div
            className="container social-media-section py-5 contact-section"
            style={socialMediaAnimation}
          >
            <h1 className="text-center social-media-title my-3 py-3">
              Social Media
            </h1>
            <div className="text-center mt-4 mx-">
              <a href="https://www.facebook.com/durak.mustafov" target="_blank">
                <FaFacebook className="social-icon-facebook mx-2" />
              </a>
              <a
                href="https://www.linkedin.com/in/durak-mustafov-827880156/"
                target="_blank"
              >
                <FaLinkedin className="social-icon-linkedin mx-2" />
              </a>
              <a
                href="https://www.instagram.com/_mustafov/?igsh=MXdoNXR4b2ZxMmdkcA%3D%3D"
                target="_blank"
              >
                <FaInstagram className="social-icon-instagram mx-2" />
              </a>
            </div>
          </animated.div>
        </div>
      </div>
    </div>
  );
};
