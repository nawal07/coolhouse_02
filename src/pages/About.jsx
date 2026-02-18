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
              Coolhouse Trading specializes in delivering commercial
              refrigeration equipment at the convenience of users. Over the
              years we have had the privilege to partner with some of the best
              and leading brands from around the world to bring the premier
              machines for our customers. Since our inception, Coolhouse mission
              has been un-parallel in providing a quality shopping experience in
              every neighborhood, serving customers even in second-tier cities
              and towns from comfort to your Home, Office or anywhere you are.
            </p>
            <Button
              variant="primary"
              style={{
                backgroundColor: '#111f5a',
                borderColor: '#111f5a',
                borderRadius: '10px',
              }}
              size="lg"
              className="mt-3"
              href="/contact"
            >
              Contact Our Team
            </Button>
          </Col>
          <Col lg={6} className="text-center mt-4 mt-lg-0">
            <img
              src="who_we_are.jpg"
              alt="About Us"
              className="img-fluid rounded-4 shadow"
              style={{ maxHeight: '450px', objectFit: 'cover' }}
            />
          </Col>
        </Row>

        {/* Mission & Vision Section */}
        <div className="text-center mb-5 pb-4">
          <h2 className="display-6 fw-bold mt-4 mb-4">Our Vision & Mission</h2>
        </div>

        <Row className="g-5 mb-5">
          {/* Vision Card */}
          <Col lg={6}>
            <Card className="h-100 border-0 shadow-lg p-4 p-md-5 text-center">
              <Card.Body>
                <div className="mb-4">
                  <span
                    style={{ fontSize: '4.5rem', color: 'var(--primary-cool)' }}
                  >
                    🌟
                  </span>
                </div>
                <Card.Title className="fw-bold fs-3 mb-4">
                  Our Vision
                </Card.Title>
                <Card.Text className="fs-5 text-muted lh-lg">
                  Coolhouse is driven by innovation and a vision to be the
                  world's foremost solution provider.
                  <br />
                  <br />
                  Our vision is to be the world's leading commercial
                  refrigeration solution provider.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Mission Card */}
          <Col lg={6}>
            <Card className="h-100 border-0 shadow-lg p-4 p-md-5 text-center">
              <Card.Body>
                <div className="mb-4">
                  <span
                    style={{ fontSize: '4.5rem', color: 'var(--primary-cool)' }}
                  >
                    🎯
                  </span>
                </div>
                <Card.Title className="fw-bold fs-3 mb-4">
                  Our Mission
                </Card.Title>
                <Card.Text className="fs-5 text-muted lh-lg">
                  Since our inception, our mission has remained steadfast — to
                  be a reliable solution provider to our partners by offering
                  durable, efficient cooling solutions.
                  <br />
                  <br />
                  With a mission to serve as a beacon of cooling excellence, our
                  cutting-edge refrigeration equipment caters to the unique
                  needs of various sectors, including Hospitality and
                  Restaurants, Retail and Supermarkets, and the Beverage
                  industry.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Values / Why Us cards */}

        <div className="text-center mb-5">
          <h2 className="display-6 mb-4">Our Core Values</h2>
          <p
            className="lead text-muted"
            style={{ maxWidth: '800px', margin: '0 auto' }}
          >
            The principles that guide everything we do at Coolhouse Trading
          </p>
        </div>

        <Row className="g-4 justify-content-center">
          {/* Innovation */}
          <Col md={6} lg={3}>
            <Card className="h-100 text-center border-0 shadow-sm p-4">
              <div className="mb-3">
                <span
                  style={{ fontSize: '3.5rem', color: 'var(--primary-cool)' }}
                >
                  💡
                </span>
              </div>
              <Card.Title className="fw-bold fs-4 mb-3">Innovation</Card.Title>
              <Card.Text className="text-muted">
                As thought leaders, we thrive on challenging the status quo,
                driving change, and continuously improving our products for the
                betterment of our customers and the environment.
              </Card.Text>
            </Card>
          </Col>

          {/* Respect */}
          <Col md={6} lg={3}>
            <Card className="h-100 text-center border-0 shadow-sm p-4">
              <div className="mb-3">
                <span
                  style={{ fontSize: '3.5rem', color: 'var(--primary-cool)' }}
                >
                  🤝
                </span>
              </div>
              <Card.Title className="fw-bold fs-4 mb-3">Respect</Card.Title>
              <Card.Text className="text-muted">
                We value the trust our partners place in us and honour our
                commitments with respect for all stakeholders, customers, and
                the environment.
              </Card.Text>
            </Card>
          </Col>

          {/* Teamwork */}
          <Col md={6} lg={3}>
            <Card className="h-100 text-center border-0 shadow-sm p-4">
              <div className="mb-3">
                <span
                  style={{ fontSize: '3.5rem', color: 'var(--primary-cool)' }}
                >
                  👥
                </span>
              </div>
              <Card.Title className="fw-bold fs-4 mb-3">Teamwork</Card.Title>
              <Card.Text className="text-muted">
                Together, we work in solidarity, pooling our strengths to help
                our partners and customers achieve their goals.
              </Card.Text>
            </Card>
          </Col>

          {/* Optimism */}
          <Col md={6} lg={3}>
            <Card className="h-100 text-center border-0 shadow-sm p-4">
              <div className="mb-3">
                <span
                  style={{ fontSize: '3.5rem', color: 'var(--primary-cool)' }}
                >
                  ⏳
                </span>
              </div>
              <Card.Title className="fw-bold fs-4 mb-3">Optimism</Card.Title>
              <Card.Text className="text-muted">
                With a positive outlook and a problem-solving approach, we
                confidently embrace the future, striving for the best outcomes.
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
