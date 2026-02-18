import React from 'react';
import { Navbar as BSNavbar, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';

function Navbar() {
  return (
    <BSNavbar
      bg="light"
      expand="lg"
      sticky="top"
      className="px-3 px-md-5 shadow-sm"
    >
      {/* Logo */}
      <BSNavbar.Brand as={NavLink} to="/">
        <img
          src="/Logo_no_bg.png"
          alt="Coolhouse Trading"
          style={{ height: '50px' }}
        />
      </BSNavbar.Brand>

      {/* Hamburger Toggle - No border */}
      <BSNavbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />

      {/* Collapsible content */}
      <BSNavbar.Collapse id="basic-navbar-nav">
        {/* Navigation links - centered on desktop */}
        <Nav className="mx-auto text-center">
          <Nav.Link as={NavLink} to="/" className="px-3 py-2">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about" className="px-3 py-2">
            About
          </Nav.Link>
          <Nav.Link as={NavLink} to="/products" className="px-3 py-2">
            Products
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact" className="px-3 py-2">
            Contact
          </Nav.Link>
        </Nav>

        {/* Desktop: Get Started button (hidden on mobile) */}
        <div className="d-none d-lg-block ms-lg-3">
          <Button variant="warning" className="get-started-btn px-4 py-2">
            Get Started
          </Button>
        </div>

        {/* Mobile only: Social icons – centered at bottom of menu */}
        <div className="d-flex justify-content-center d-lg-none mt-4 pt-4 pb-3 text-center">
          <div className="d-flex justify-content-center  gap-5 fs-3">
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com/company/yourcompany"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </BSNavbar.Collapse>
    </BSNavbar>
  );
}

export default Navbar;
