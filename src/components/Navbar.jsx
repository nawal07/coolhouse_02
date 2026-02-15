import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar as BSNavbar, Nav, Button } from 'react-bootstrap';

function Navbar() {
  const [expanded, setExpanded] = useState(false);
  return (
    <BSNavbar
      expand="lg"
      sticky="top"
      className="px-3 px-md-5"
      collapseOnSelect
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <BSNavbar.Brand as={NavLink} to="/">
        <img src="Logo_no_bg.png" alt="Cool House" style={{ height: '50px' }} />
      </BSNavbar.Brand>
      <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BSNavbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto gap-3" onClick={() => setExpanded(false)}>
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={NavLink} to="/services">
            Services
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact">
            Contact
          </Nav.Link>
        </Nav>
        <Button variant="warning" className="get-started-btn">
          Get Started
        </Button>
      </BSNavbar.Collapse>
    </BSNavbar>
  );
}

export default Navbar;
