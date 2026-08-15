import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { FaCalendarAlt, FaIndustry, FaCertificate } from 'react-icons/fa';
import { FaEarthAmericas } from 'react-icons/fa6';
import { useLanguage } from '../i18n/LanguageContext';

const ICONS = [FaCalendarAlt, FaIndustry, FaEarthAmericas, FaCertificate];

function TrustBar() {
  const { t } = useLanguage();
  const { heading, items } = t.home.trustBar;

  return (
    <section className="trust-bar py-5 bg-white border-top border-bottom">
      <Container>
        {/* Section Heading */}
        <div className="text-center mb-4">
          <h2 className="fw-bold mb-0" style={{ fontSize: '1.8rem' }}>
            {heading}
          </h2>
        </div>
        <Row className="g-4 text-center justify-content-center">
          {items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <Col xs={6} md={3} key={item.title}>
                <div className="trust-item">
                  <div
                    className="trust-icon mb-3"
                    style={{ fontSize: '2rem', color: '#111f5a' }}
                  >
                    <Icon />
                  </div>
                  <h5 className="fw-bold mb-1">{item.title}</h5>
                  <p className="text-muted small mb-0">{item.desc}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default TrustBar;
