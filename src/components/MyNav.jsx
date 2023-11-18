import { Container, Nav, Navbar } from "react-bootstrap";
import { FaCode } from "react-icons/fa6";
import ScrollToTopButton from "./ScrollToTop";
import "../styles/MyNav.css";

function MyNavbar() {
  return (
    <>
      <Navbar className="header" expand="md">
        <Container>
          <Navbar.Brand href="#">
            <FaCode className="mx-2 code-icon"/>
            Daniel Merkin
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about" className="nav-link">
                About
              </Nav.Link>
              <span className="separator">|</span>
              <Nav.Link href="#skills" className="nav-link">
                Skills
              </Nav.Link>
              <span className="separator">|</span>
              <Nav.Link href="#portfolio" className="nav-link">
                Portfolio
              </Nav.Link>
              <span className="separator">|</span>
              <Nav.Link href="#contact" className="nav-link">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ScrollToTopButton />
    </>
  );
}

export default MyNavbar;
