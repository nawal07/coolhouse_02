import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

function About() {
  return (
    <div
      className="section d-flex flex-column justify-content-center"
      style={{ backgroundColor: 'var(--bg-light)' }}
    >
      <Container fluid className="px-4 px-md-5">
        {/* Hero-like section */}
        <Row className="align-items-center mb-5 g-4">
          <Col lg={6}>
            <h1 className="snowflake-accent mb-4">About Coolhouse Trading</h1>
            <p className="lead text-muted" style={{ fontSize: '1.25rem' }}>
              Your trusted partner in premium cooling solutions across the
              region.
            </p>
            <p>
              Coolhouse Trading specializes in the supply and distribution of
              high-quality HVAC systems, refrigeration spare parts, air
              conditioning units, and related industrial cooling products. With
              years of experience and strong partnerships with global
              manufacturers, we deliver reliable, energy-efficient, and
              innovative solutions tailored to commercial, industrial, and
              residential needs.
            </p>
            <Button variant="primary" size="lg" className="mt-3">
              Contact Our Team
            </Button>
          </Col>
          <Col lg={6} className="text-center mt-4 mt-lg-0">
            <img
              src="image-2.jpg"
              alt="Modern HVAC installation"
              className="img-fluid rounded-4 shadow"
              style={{ maxHeight: '450px', objectFit: 'cover' }}
            />
          </Col>
        </Row>

        {/* Values / Why Us cards */}
        <h2 className="text-center mb-5">Our Core Values</h2>
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 text-center">
              <Card.Body>
                <div style={{ fontSize: '3rem', color: 'var(--primary-cool)' }}>
                  ❄
                </div>
                <Card.Title>Quality First</Card.Title>
                <Card.Text>
                  We source only from certified manufacturers to ensure
                  durability and performance.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 text-center">
              <Card.Body>
                <div style={{ fontSize: '3rem', color: 'var(--primary-cool)' }}>
                  ⚡
                </div>
                <Card.Title>Energy Efficiency</Card.Title>
                <Card.Text>
                  Supporting sustainable cooling solutions that reduce energy
                  costs.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 text-center">
              <Card.Body>
                <div style={{ fontSize: '3rem', color: 'var(--primary-cool)' }}>
                  🤝
                </div>
                <Card.Title>Reliable Support</Card.Title>
                <Card.Text>
                  Fast delivery, after-sales service, and technical assistance
                  you can count on.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
