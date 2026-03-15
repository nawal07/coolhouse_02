import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { FaMapLocation, FaLightbulb, FaLeaf } from 'react-icons/fa6';
import { FaFirstAid } from 'react-icons/fa';

function FutureAndSustainability() {
  return (
    <div className="section" style={{ background: '#e6f2ff' }}>
      <div className="text-center mb-5">
        <h2 className="display-6 mb-4 fw-bold" style={{ color: '#111f5a' }}>
          Future & Sustainability
        </h2>
        <p
          className="lead fw-medium"
          style={{ maxWidth: '800px', margin: '0 auto' }}
        >
          The Strategic Roadmap for Growth & Commitment.
        </p>
      </div>

      <Row className="g-4 justify-content-center px-4 px-md-5 ">
        {/* FOOTPRINT EXPANSION */}
        <Col md={6} lg={3}>
          <Card className="h-100 text-center border-0 shadow-sm p-4">
            <div className="mb-3">
              <span style={{ fontSize: '3rem', color: '#111f5a' }}>
                <FaMapLocation />
              </span>
            </div>
            <Card.Title className="fw-bold fs-4 mb-3">
              FOOTPRINT EXPANSION
            </Card.Title>
            <Card.Text className="text-muted">
              Expanding our manufacturing and distribution footprint across KSA
              Tier 1 and Tier 2 cities to ensure regional dominance.
            </Card.Text>
          </Card>
        </Col>

        {/* NEXT-GEN INNOVATION */}
        <Col md={6} lg={3}>
          <Card className="h-100 text-center border-0 shadow-sm p-4">
            <div className="mb-3">
              <span style={{ fontSize: '3rem', color: '#111f5a' }}>
                <FaLightbulb />
              </span>
            </div>
            <Card.Title className="fw-bold fs-4 mb-3">
              NEXT-GEN INNOVATION
            </Card.Title>
            <Card.Text className="text-muted">
              Introducing energy-optimized next- generation models featuring
              smart temperature monitoring and eco- friendly technology.
            </Card.Text>
          </Card>
        </Col>

        {/* SPECIALIZED SOLUTIONS */}
        <Col md={6} lg={3}>
          <Card className="h-100 text-center border-0 shadow-sm p-4">
            <div className="mb-3">
              <span style={{ fontSize: '3rem', color: '#111f5a' }}>
                <FaFirstAid />
              </span>
            </div>
            <Card.Title className="fw-bold fs-4 mb-3">
              SPECIALIZED SOLUTIONS
            </Card.Title>
            <Card.Text className="text-muted">
              Increasing penetration in medical and specialty refrigeration
              sectors with high- precision cooling requirements.
            </Card.Text>
          </Card>
        </Col>

        {/* ECO-COMMITMENT */}
        <Col md={6} lg={3}>
          <Card className="h-100 text-center border-0 shadow-sm p-4">
            <div className="mb-3">
              <span style={{ fontSize: '3rem', color: '#111f5a' }}>
                <FaLeaf />
              </span>
            </div>
            <Card.Title className="fw-bold fs-4 mb-3">
              ECO-COMMITMENT
            </Card.Title>
            <Card.Text className="text-muted">
              Integrating environmentally responsible refrigerants to reduce
              carbon emissions and support sustainable operations.
            </Card.Text>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default FutureAndSustainability;
