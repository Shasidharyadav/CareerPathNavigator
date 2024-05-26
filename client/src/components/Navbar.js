import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const logo = process.env.PUBLIC_URL + '/logo.jpg';

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Career Path Navigator logo"
        />
        Career Path Navigator
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/addCareerPath">Add Career Path</Nav.Link>
          <Nav.Link as={Link} to="/quizzes">Quizzes</Nav.Link>
          <Nav.Link as={Link} to="/mentors">Mentors</Nav.Link>
          <Nav.Link as={Link} to="/resources">Resources</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
