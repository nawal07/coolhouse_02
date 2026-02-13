import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';

function Footer() {
  return (
    <footer
      style={{ backgroundColor: '#0D1B2A', color: '#E3F2FD' }}
      className="py-5 mt-auto"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <img src="Logo_2_no_bg.png" alt="Cool House" />
            <p>
              Supplying quality materials and trusted solutions across Saudi
              Arabia.
            </p>
            <div className="d-flex gap-5 mt-auto mb-5">
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark fs-2"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark fs-2"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark fs-2"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark fs-2"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <h5>Quick Links</h5>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <p>
              <i className="bi bi-phone"></i> +966530218322
            </p>
            <p>
              <i className="bi bi-envelope"></i> info@coolhouse.com
            </p>
            <p>
              <i className="bi bi-geo-alt"></i> Al Malaz , Saudi Arabia
            </p>
          </div>
        </div>
        <p>Copyright © 2025 COOL HOUSE. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
