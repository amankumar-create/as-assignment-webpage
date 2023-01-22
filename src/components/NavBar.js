import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import logo from "../assets/logo.png";

//simple navbar component which is fixed at the top when scrolled
// has a brand logo , dropdowns, links , and a book demo button


function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container className="pt-2 pb-2 ps-4" fluid>
        <Navbar.Brand className="ms-5 me-5" href="#home">
          <img className="brand-logo" src={logo}></img>
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavDropdown
            className="me-4"
            title="Product"
            id="basic-nav-dropdown"
          ></NavDropdown>
          <Nav.Link className="me-4" href="#pricing">
            Our Story
          </Nav.Link>
          <NavDropdown
            className="me-4"
            title="Resources"
            id="basic-nav-dropdown"
          ></NavDropdown>
        </Nav>
        <Button
          className="d-flex me-5"
          variant="primary"
          style={{
            backgroundImage: " linear-gradient(135deg,#0084e9,#762cec)",
            color: "#fff",
            borderRadius:"10px",
            fontSize:"16px",
            padding:"10px 22px",
            fontFamily: "Gtwalsheimpro"
          }}
        >
          Book a demo
        </Button>
      </Container>
    </Navbar>
  );
}

export default NavBar;
