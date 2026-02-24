import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { FaCalendarAlt, FaIndustry, FaCertificate } from 'react-icons/fa';
import { FaEarthAmericas } from 'react-icons/fa6';

function TrustBar() {
  return (
    <section className="trust-bar py-5 bg-white border-top border-bottom">
      <Container>
        <Row className="g-4 text-center justify-content-center">
          {/* Established 1960 */}
          <Col xs={6} md={3}>
            <div className="trust-item">
              <div
                className="trust-icon mb-3"
                style={{ fontSize: '2rem', color: '#111f5a' }}
              >
                <FaCalendarAlt />
              </div>
              <h5 className="fw-bold mb-1">ESTABLISHED 1960</h5>
              <p className="text-muted small mb-0">
                Decades of excellence in refrigeration
              </p>
            </div>
          </Col>

          {/* 300,000 Units Capacity */}
          <Col xs={6} md={3}>
            <div className="trust-item">
              <div
                className="trust-icon mb-3"
                style={{ fontSize: '2rem', color: '#111f5a' }}
              >
                <FaIndustry />
              </div>
              <h5 className="fw-bold mb-1">300,000 UNITS CAPACITY</h5>
              <p className="text-muted small mb-0">
                Massive production capability
              </p>
            </div>
          </Col>

          {/* Regional Leader */}
          <Col xs={6} md={3}>
            <div className="trust-item">
              <div
                className="trust-icon mb-3"
                style={{ fontSize: '2rem', color: '#111f5a' }}
              >
                <FaEarthAmericas />
              </div>
              <h5 className="fw-bold mb-1">REGIONAL LEADER</h5>
              <p className="text-muted small mb-0">
                Trusted across the Middle East
              </p>
            </div>
          </Col>

          {/* Certified Quality */}
          <Col xs={6} md={3}>
            <div className="trust-item">
              <div
                className="trust-icon mb-3"
                style={{ fontSize: '2rem', color: '#111f5a' }}
              >
                <FaCertificate />
              </div>
              <h5 className="fw-bold mb-1">CERTIFIED QUALITY</h5>
              <p className="text-muted small mb-0">
                International standards & reliability
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default TrustBar;
