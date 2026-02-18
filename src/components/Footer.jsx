import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';

function Footer() {
  return (
    <footer
      style={{ backgroundColor: '#0D1B2A', color: '#E3F2FD' }}
      className="py-5 mt-auto pb-3"
    >
      <div className="container">
        <div className="row border-bottom pb-2">
          <div className="col-md-3">
            <img className="" src="Logo_3_no_bg.png" alt="Cool House" />
            <p className="mt-3">
              Supplying quality materials and trusted solutions across Saudi
              Arabia.
            </p>
            <div className="d-flex gap-4 mt-4 mb-5">
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-4"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-4"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-4"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-4"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-3 mt-4">
            <h5 className="mb-4">Quick Links</h5>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li className="mb-2">
                <a className="links" href="/">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a className="links" href="/about">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a className="links" href="/products">
                  Products
                </a>
              </li>
              <li className="mb-2">
                <a className="links" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mt-4">
            <h5 className="mb-4">Contact Us</h5>
            <p className="d-flex align-items-center gap-3">
              <FaPhoneAlt />
              <a
                href="tel:+966114781100"
                className="text-decoration-none text-reset"
              >
                +966 114 781 100
              </a>
            </p>
            <p className="d-flex align-items-center gap-3">
              <FaWhatsapp />
              <a
                href={`https://wa.me/966598986363?text=${encodeURIComponent("Hello! I'm contacting you from your website.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-white hover-text-primary"
              >
                +966 598 986 363
              </a>
            </p>

            <p className="d-flex align-items-center gap-3">
              <FaEnvelope />
              <a
                href="mailto:info@coolhousetrading.com?subject=Inquiry%20from%20Coolhouse%20Website&body=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20products."
                className="text-decoration-none text-white hover-text-primary"
              >
                info@coolhousetrading.com
              </a>
            </p>
            <p className="d-flex align-items-center gap-3">
              <FaMapMarkerAlt /> Al Malaz , Saudi Arabia
            </p>
          </div>
        </div>
        <p className="text-center pt-4 ">
          Copyright © 2025 COOL HOUSE. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
