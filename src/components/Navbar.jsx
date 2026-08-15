import React, { useState } from 'react';
import { LOGO_NO_BG } from '../constants/images';
import { Navbar as BSNavbar, Nav, Button } from 'react-bootstrap';
import { NavLink, useLocation, Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
import { useLanguage } from '../i18n/LanguageContext';

function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const { t, language, toggleLanguage } = useLanguage();

  // Auto-close menu when route changes (user clicks a link)
  React.useEffect(() => {
    setExpanded(false);
  }, [location.pathname]);

  return (
    <BSNavbar
      bg="light"
      expand="lg"
      className="fixed-top px-3 px-md-5 shadow-sm"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      {/* Language toggle — pinned to the visual top-right corner regardless of language direction.
          Shows the language you'd switch TO, not the current one. */}
      <button
        type="button"
        className="lang-toggle-btn"
        onClick={toggleLanguage}
        aria-label={
          language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'
        }
      >
        {language === 'en' ? 'العربية' : 'English'}
      </button>

      {/* Logo */}
      <BSNavbar.Brand as={NavLink} to="/">
        <img
          src={LOGO_NO_BG}
          alt={t.brand.name}
          style={{ height: '70px' }}
        />
      </BSNavbar.Brand>

      {/* Hamburger Toggle - No border */}
      <BSNavbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />

      {/* Collapsible content */}
      <BSNavbar.Collapse id="basic-navbar-nav">
        {/* Navigation links - centered on desktop */}

        <Nav className="mx-auto text-center mb-4 mb-lg-0">
          <Nav.Link
            as={NavLink}
            to="/"
            className="px-3 py-2"
            onClick={() => setExpanded(false)}
          >
            {t.nav.home}
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/about"
            className="px-3 py-2"
            onClick={() => setExpanded(false)}
          >
            {t.nav.about}
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/products"
            className="px-3 py-2"
            onClick={() => setExpanded(false)}
          >
            {t.nav.products}
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/contact"
            className="px-3 py-2"
            onClick={() => setExpanded(false)}
          >
            {t.nav.contact}
          </Nav.Link>
        </Nav>

        {/* Desktop: Get Started button (hidden on mobile) */}
        <div className="d-none d-lg-block ms-lg-3">
          <Button
            variant="warning"
            className="get-started-btn px-4 py-2"
            as={Link}
            to="/contact"
          >
            {t.nav.getStarted}
          </Button>
        </div>

        {/* Mobile only: Social icons – centered at bottom of menu */}
        <div className="d-flex justify-content-center d-lg-none mt-4 pt-4 pb-3 text-center">
          <div className="d-flex justify-content-center  gap-5 fs-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com/company"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://twitter.com"
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
