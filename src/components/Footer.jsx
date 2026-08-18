import React from 'react';
import { LOGO_3_NO_BG } from '../constants/images';
import { Link } from 'react-router-dom';
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
import { useLanguage } from '../i18n/LanguageContext';

function Footer() {
  const { t } = useLanguage();
  return (
    <footer
      style={{ backgroundColor: '#0D1B2A', color: '#E3F2FD' }}
      className="py-5 mt-auto pb-3"
    >
      <div className="container">
        <div className="row border-bottom pb-2">
          <div className="col-md-3">
            <img className="" src={LOGO_3_NO_BG} alt={t.brand.name} />
            <p className="mt-3">{t.footer.tagline}</p>
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
            <h5 className="mb-4">{t.footer.quickLinks}</h5>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li className="mb-2">
                <Link className="links" to="/">
                  {t.nav.home}
                </Link>
              </li>
              <li className="mb-2">
                <Link className="links" to="/about">
                  {t.nav.about}
                </Link>
              </li>
              <li className="mb-2">
                <Link className="links" to="/products">
                  {t.nav.products}
                </Link>
              </li>
              <li className="mb-2">
                <Link className="links" to="/contact">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mt-4">
            <h5 className="mb-4">{t.footer.contactUs}</h5>
            <p className="d-flex align-items-center gap-3">
              <FaPhoneAlt />
              <a
                href="tel:+966540008457"
                className="text-decoration-none text-white  text-primary"
                dir="ltr"
              >
                +966 54 000 8457
              </a>
            </p>
            <p className="d-flex align-items-center gap-3">
              <FaWhatsapp />
              <a
                href={`https://wa.me/966540008457?text=${encodeURIComponent("Hello! I'm contacting you from your website.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-white hover-text-primary"
                dir="ltr"
              >
                +966 54 000 8457
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
            <p className="d-flex align-items-center gap-3 text-white ">
              <FaMapMarkerAlt /> {t.footer.addressLine}
            </p>
          </div>
        </div>
        <p className="text-center pt-4 ">{t.footer.copyright}</p>
      </div>
    </footer>
  );
}

export default Footer;
