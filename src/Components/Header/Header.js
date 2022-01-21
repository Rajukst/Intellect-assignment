import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <h4>
              <Link to="/home">Skills</Link>
            </h4>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
