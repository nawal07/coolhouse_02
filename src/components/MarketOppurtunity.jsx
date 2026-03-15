import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCartShopping, FaClipboardCheck } from 'react-icons/fa6';
import { FaDolly, FaRegSnowflake } from 'react-icons/fa';

function MarketOpportunity() {
  return (
    <section
      className="market-opportunity py-5 "
      style={{ background: '#e6f2ff' }}
    >
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold" style={{ color: '#111f5a' }}>
            Saudi Arabian Market Oppurtunity
          </h2>
          <p className="lead fw-medium">Strategic alignment with VISION 2030</p>
          <p className="text-muted">
            We support the Kingdom’s growth in retail, hospitality, cold chain
            logistics, and sustainable home solutions through modern,
            energy-efficient refrigeration systems.
          </p>
        </div>

        <Row className="g-4 justify-content-center">
          {/* Retail Expansion */}
          <Col lg={6} xl={3}>
            <Card className="h-100 border-0 shadow-sm text-center p-4">
              <div className="mb-4">
                <div className="mb-3">
                  <span style={{ fontSize: '3rem', color: '#111f5a' }}>
                    <FaCartShopping />
                  </span>
                </div>
              </div>
              <Card.Title className="fw-bold fs-4 mb-3">
                RETAIL EXPANSION
              </Card.Title>
              <Card.Text className="text-muted">
                Rapid growth in supermarkets, convenience stores, and
                hospitality sectors is driving sustained demand for commercial
                refrigeration equipment.
              </Card.Text>
            </Card>
          </Col>

          {/* Cold Chain Logistics */}
          <Col lg={6} xl={3}>
            <Card className="h-100 border-0 shadow-sm text-center p-4">
              <div className="mb-4">
                <div className="mb-3">
                  <span style={{ fontSize: '3rem', color: '#111f5a' }}>
                    <FaDolly />
                  </span>
                </div>
              </div>
              <Card.Title className="fw-bold fs-4 mb-3">
                COLD CHAIN LOGISTICS
              </Card.Title>
              <Card.Text className="text-muted">
                Increasing demand for reliable food and pharmaceutical transport
                systems is accelerating investment in refrigeration
                infrastructure.
              </Card.Text>
            </Card>
          </Col>

          {/* Regulatory Compliance */}
          <Col lg={6} xl={3}>
            <Card className="h-100 border-0 shadow-sm text-center p-4">
              <div className="mb-4">
                <div className="mb-3">
                  <span style={{ fontSize: '3rem', color: '#111f5a' }}>
                    <FaClipboardCheck />
                  </span>
                </div>
              </div>
              <Card.Title className="fw-bold fs-4 mb-3">
                REGULATORY COMPLIANCE
              </Card.Title>
              <Card.Text className="text-muted">
                Stricter food safety regulations require modern, certified
                refrigeration systems, pushing businesses toward equipment
                upgrades.
              </Card.Text>
            </Card>
          </Col>

          {/* Consumer Shifts */}
          <Col lg={6} xl={3}>
            <Card className="h-100 border-0 shadow-sm text-center p-4">
              <div className="mb-4">
                <div className="mb-3">
                  <span style={{ fontSize: '3rem', color: '#111f5a' }}>
                    <FaRegSnowflake />
                  </span>
                </div>
              </div>
              <Card.Title className="fw-bold fs-4 mb-3">
                CONSUMER SHIFTS
              </Card.Title>
              <Card.Text className="text-muted">
                Shifting behavior toward frozen and ready-to-eat products is
                increasing demand for upright and display refrigeration
                solutions.
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default MarketOpportunity;
