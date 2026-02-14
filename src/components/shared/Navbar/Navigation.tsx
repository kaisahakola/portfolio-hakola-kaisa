import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "./Navbar.scss"
import logo from "../../../assets/icons/icon-blue.png";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("main-section");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "introduction-section",
        "skills-section",
        "project-section",
        "footer-section",
      ];

      const scrollPosition = window.scrollY + 150;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (window.scrollY + windowHeight >= documentHeight - 5) {
        setActiveSection("footer-section");
        return;
      }

      if (window.scrollY < windowHeight - 75) {
        setActiveSection("main-section");
        return;
      }

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const handleClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="navbar">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand onClick={() => handleClick("main-section")} className="nav-brand">
            <img src={logo} width={45} height={45} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link 
                active={activeSection === "introduction-section"} 
                onClick={() => handleClick("introduction-section")} 
                className="nav-link"
              >
                Introduction
              </Nav.Link>
              <Nav.Link 
                active={activeSection === "skills-section"} 
                onClick={() => handleClick("skills-section")} 
                className="nav-link"
              >
                Skills
              </Nav.Link>
               <Nav.Link 
                active={activeSection === "project-section"} 
                onClick={() => handleClick("project-section")} 
                className="nav-link"
              >
                Projects
              </Nav.Link>
              <Nav.Link 
                active={activeSection === "footer-section"} 
                onClick={() => handleClick("footer-section")} 
                className="nav-link"
              >
                Contacts
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
