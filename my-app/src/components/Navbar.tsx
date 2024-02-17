import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FaArrowCircleUp } from "react-icons/fa";

const MyNavbar = () => {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [activeLink, setActiveLink] = useState<string>("");
  const [showScrollArrow, setShowScrollArrow] = useState<boolean>(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleString("en-US", { timeZoneName: "short" }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowScrollArrow(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToAboutSection = () => {
    const aboutSection = document.getElementById("AboutMe");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavItemClick = (link: string) => {
    setActiveLink(link);
  };

  const handleLogoClick = () => {
    setActiveLink("");
  };

  return (
    <Navbar expand="lg" className="bg-color">
      <Navbar.Brand className="logo" onClick={handleLogoClick}>
        <img
          className=""
          src="images/IMG_6708.PNG"
          alt=""
          style={{ width: "180px", height: "70px" }}
        />
      </Navbar.Brand>
      {window.innerWidth >= 992 && <div className="timer">{currentTime}</div>}
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        className="navbar-toggler-white"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="custom-ml-auto px-5">
          <Nav.Link
            href="#AboutMe"
            className={`about ${activeLink === "AboutMe" ? "active" : ""}`}
            onClick={() => handleNavItemClick("AboutMe")}
            style={{
              fontSize: "25px",
              letterSpacing: "1.3px",
              color: activeLink === "AboutMe" ? "#C6DCBA" : "#fafafa",
            }}
          >
            About
          </Nav.Link>
          <Nav.Link
            href="#Achievements"
            className={`mycard ${
              activeLink === "Achievements" ? "active" : ""
            }`}
            onClick={() => handleNavItemClick("Achievements")}
            style={{
              fontSize: "25px",
              letterSpacing: "1.3px",
              color: activeLink === "Achievements" ? "#C6DCBA" : "#fafafa",
            }}
          >
            Achievements
          </Nav.Link>
          <Nav.Link
            href="#Project"
            className={`portfolio ${activeLink === "Project" ? "active" : ""}`}
            onClick={() => handleNavItemClick("Project")}
            style={{
              fontSize: "25px",
              letterSpacing: "1.3px",
              color: activeLink === "Project" ? "#C6DCBA" : "#fafafa",
            }}
          >
            Project
          </Nav.Link>
          <Nav.Link
            href="#ContactMe"
            className={`contact ${activeLink === "ContactMe" ? "active" : ""}`}
            onClick={() => handleNavItemClick("ContactMe")}
            style={{
              fontSize: "25px",
              letterSpacing: "1.3px",
              color: activeLink === "ContactMe" ? "#C6DCBA" : "#fafafa",
            }}
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      {showScrollArrow && (
        <div className="scroll-arrow" onClick={scrollToAboutSection}>
          <FaArrowCircleUp
            style={{ fontSize: "30px", backgroundColor: "transparent" }}
          />
        </div>
      )}
    </Navbar>
  );
};

export default MyNavbar;
