import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../images/duci1234.png";

const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-color">
      <Navbar.Brand href="#" className="logo">
        <img className="mx-3"
          src={logo}
          alt="Logo"
          style={{ width: "280px", height: "90px" }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="custom-ml-auto px-5">
          <Nav.Link href="#Home" className="home" style={{fontSize: "25px",letterSpacing: "1.3px"}}>
            Home
          </Nav.Link>
          <Nav.Link href="#AboutMe" className="about" style={{fontSize: "25px",letterSpacing: "1.3px"}}>
            About
          </Nav.Link>
          <Nav.Link href="#MyCard" className="mycard" style={{fontSize: "25px" ,letterSpacing: "1.3px"}}>
            Achievements
          </Nav.Link>
          <Nav.Link href="#project" className="portfolio" style={{fontSize: "25px" ,letterSpacing: "1.3px"}}>
            Project
          </Nav.Link>
          <Nav.Link href="#ContactMe" className="contact" style={{fontSize: "25px",letterSpacing: "1.3px"}}>
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
