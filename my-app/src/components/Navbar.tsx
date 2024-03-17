import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FaBars, FaTimes, FaArrowCircleUp } from "react-icons/fa";

const MyNavbar = () => {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [activeLink, setActiveLink] = useState<string>("");
  const [showScrollArrow, setShowScrollArrow] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);

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
      const position = window.scrollY;
      setScrollPosition(position);

      // Set active link based on scroll position
      if (position >= 0 && position < 600) {
        setActiveLink("AboutMe");
      } else if (position >= 600 && position < 1200) {
        setActiveLink("Achievements");
      } else if (position >= 1200 && position < 1800) {
        setActiveLink("Project");
      } else if (position >= 1800) {
        setActiveLink("ContactMe");
      }

      setShowScrollArrow(position > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavItemClick = (link: string) => {
    setActiveLink(link);
    setIsNavbarOpen(false); // Close the navbar on item click
  };

  const handleLogoClick = () => {
    setActiveLink("");
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
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
        onClick={toggleNavbar}
      >
        {isNavbarOpen ? (
          <FaTimes style={{ fontSize: "24px", color: "white" }} />
        ) : (
          <FaBars style={{ fontSize: "24px", color: "white" }} />
        )}
      </Navbar.Toggle>
      <Navbar.Collapse
        id="basic-navbar-nav"
        className={isNavbarOpen ? "show" : ""}
      >
        <Nav className="custom-ml-auto px-5">
          <Nav.Link
            href="#AboutMe"
            className={`about ${activeLink === "AboutMe" ? "active" : ""}`}
            onClick={() => handleNavItemClick("AboutMe")}
          >
            About
          </Nav.Link>
          <Nav.Link
            href="#Achievements"
            className={`mycard ${
              activeLink === "Achievements" ? "active" : ""
            }`}
            onClick={() => handleNavItemClick("Achievements")}
          >
            Achievements
          </Nav.Link>
          <Nav.Link
            href="#Project"
            className={`portfolio ${activeLink === "Project" ? "active" : ""}`}
            onClick={() => handleNavItemClick("Project")}
          >
            Project
          </Nav.Link>
          <Nav.Link
            href="#ContactMe"
            className={`contact ${activeLink === "ContactMe" ? "active" : ""}`}
            onClick={() => handleNavItemClick("ContactMe")}
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      {showScrollArrow && (
        <div className="scroll-arrow" onClick={scrollToTop}>
          <FaArrowCircleUp
            style={{ fontSize: "30px", backgroundColor: "transparent" }}
          />
        </div>
      )}
    </Navbar>
  );
};

export default MyNavbar;
