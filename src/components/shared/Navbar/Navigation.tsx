import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "./Navbar.scss"

const Navigation = () => {

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="navbar">
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={() => handleScroll("introduction-section")} className="nav-link">
                Introduction
              </Nav.Link>
              <Nav.Link onClick={() => handleScroll("skills-section")} className="nav-link">
                Skills
              </Nav.Link>
               <Nav.Link onClick={() => handleScroll("project-section")} className="nav-link">
                Projects
              </Nav.Link>
              <Nav.Link onClick={() => handleScroll("footer-section")} className="nav-link">
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
