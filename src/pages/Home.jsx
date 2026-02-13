import React from 'react';
import { Carousel, Button, Card, Row, Col, Container } from 'react-bootstrap';

function Home() {
  return (
    <div>
      {/* Hero Carousel */}
      <Carousel>
        <Carousel.Item>
          <div
            className="hero text-center py-5 py-md-5"
            style={{ backgroundImage: 'image-2.jpg' }}
          >
            <Container>
              <h1 className=" snowflake-accent display-3 fw-bold mb-4">
                Expert Air Conditioning Services
              </h1>
              <p
                className="lead mb-4"
                style={{ maxWidth: '800px', margin: '0 auto' }}
              >
                We deliver Reliable Cooling Solutions and Unmatched Comfort for
                Homes and Businesses Alike
              </p>
              <div className="btn-group-single">
                <Button variant="primary" size="lg" className="me-3">
                  Our Services
                </Button>
                <Button variant="outline-primary" size="lg">
                  Contact Us
                </Button>
              </div>
            </Container>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="hero text-center py-5 py-md-5">
            <Container>
              <h1 className="snowflake-accent display-3 fw-bold mb-4">
                Building Excellence
              </h1>
              <p
                className="lead mb-4"
                style={{ maxWidth: '800px', margin: '0 auto' }}
              >
                We deliver Reliable Cooling Solutions and Unmatched Comfort for
                Homes and Businesses Alike
              </p>
              <div className="btn-group-single">
                <Button variant="primary" size="lg" className="me-3">
                  Our Services
                </Button>
                <Button variant="outline-primary" size="lg">
                  Contact Us
                </Button>
              </div>
            </Container>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="hero text-center py-5 py-md-5">
            <Container>
              <h1 className="snowflake-accent display-3 fw-bold mb-4">
                Reliable Equipment powering your projects
              </h1>
              <p
                className="lead mb-4"
                style={{ maxWidth: '800px', margin: '0 auto' }}
              >
                We deliver Reliable Cooling Solutions and Unmatched Comfort for
                Homes and Businesses Alike
              </p>
              <div className="btn-group-single">
                <Button variant="primary" size="lg" className="me-3">
                  Our Services
                </Button>
                <Button variant="outline-primary" size="lg">
                  Contact Us
                </Button>
              </div>
            </Container>
          </div>
        </Carousel.Item>
      </Carousel>

      {/* About Summary */}
      <section className="section py-5">
        <Container>
          <h2 className="section-heading">Who We Are</h2>
          <p className="section-subheading">
            Coolhouse Trading – Your trusted partner in advanced cooling
            technology
          </p>

          <Row className="align-items-center g-5">
            <Col lg={6}>
              <h3 className="fw-bold mb-4">Building Excellence in Cooling</h3>
              <p className="mb-4">
                Coolhouse Trading specializes in supplying high-quality HVAC
                systems, refrigeration components, cold room solutions, and
                energy-efficient climate control products across the region.
              </p>
              <Button variant="primary">Discover More</Button>
            </Col>
            <Col lg={6}>
              <img
                src="image-2.jpg"
                alt="Professional HVAC installation"
                className="img-fluid rounded-4 shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section
        className="section py-5"
        style={{ backgroundColor: 'var(--bg-light)' }}
      >
        <Container>
          <h2 className="section-heading">Why Choose Coolhouse</h2>
          <p className="section-subheading">
            What makes us the preferred choice for cooling solutions
          </p>

          <Row className="g-4">
            <Col md={3}>
              <Card className="h-100 text-center p-4">
                <div
                  className="mb-3"
                  style={{ fontSize: '3rem', color: 'var(--primary-cool)' }}
                >
                  ★
                </div>
                <h5>Proven Quality</h5>
                <p className="text-muted small">
                  Only certified, reliable products. We maintain strict safety
                  and quality standards for exceptional project outcomes.
                </p>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="h-100 text-center p-4">
                <div
                  className="mb-3"
                  style={{ fontSize: '3rem', color: 'var(--primary-cool)' }}
                >
                  ⚡
                </div>
                <h5>Energy Efficient</h5>
                <p className="text-muted small">
                  Solutions that save power & costs. We manage complete project
                  lifecycle with skilled manpower and advanced equipment.
                </p>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="h-100 text-center p-4">
                <div
                  className="mb-3"
                  style={{ fontSize: '3rem', color: 'var(--primary-cool)' }}
                >
                  🚚
                </div>
                <h5>Fast Delivery</h5>
                <p className="text-muted small">
                  Timely supply across the region. Our expert team ensures
                  timely project completion through efficient resource planning.
                </p>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="h-100 text-center p-4">
                <div
                  className="mb-3"
                  style={{ fontSize: '3rem', color: 'var(--primary-cool)' }}
                >
                  🛠️
                </div>
                <h5>Expert Support</h5>
                <p className="text-muted small">
                  Technical assistance & after-sales. We consistently deliver
                  high-quality industrial projects with reliable performance.
                </p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Core Services */}
      <section className="section py-5">
        <Container fluid className="px-4 px-md-5">
          <h2 className="section-heading">Our Core Services</h2>
          <p className="section-subheading">
            Comprehensive cooling and support solutions engineered for
            performance, reliability, and efficiency
          </p>

          <Row className="g-5">
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm overflow-hidden">
                <Card.Img
                  variant="top"
                  src="https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <Card.Body className="text-center p-4">
                  <h5 className="fw-bold mt-3">Air Conditioning Systems</h5>
                  <p className="text-muted small">
                    Split, cassette, ducted, VRV/VRF systems for all sectors
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm overflow-hidden">
                <Card.Img
                  variant="top"
                  src="https://images.pexels.com/photos/5816792/pexels-photo-5816792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <Card.Body className="text-center p-4">
                  <h5 className="fw-bold mt-3">Refrigeration Spare Parts</h5>
                  <p className="text-muted small">
                    Genuine compressors, coils, valves & controls
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm overflow-hidden">
                <Card.Img
                  variant="top"
                  src="https://images.pexels.com/photos/8818912/pexels-photo-8818912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <Card.Body className="text-center p-4">
                  <h5 className="fw-bold mt-3">
                    Cold Room & Freezer Solutions
                  </h5>
                  <p className="text-muted small">
                    Complete cold storage design & installation
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm overflow-hidden">
                <Card.Img
                  variant="top"
                  src="https://images.pexels.com/photos/5854189/pexels-photo-5854189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <Card.Body className="text-center p-4">
                  <h5 className="fw-bold mt-3">
                    Ventilation & Air Handling Units
                  </h5>
                  <p className="text-muted small">
                    AHUs, fresh air systems, heat recovery units
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm overflow-hidden">
                <Card.Img
                  variant="top"
                  src="https://images.pexels.com/photos/6691961/pexels-photo-6691961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <Card.Body className="text-center p-4">
                  <h5 className="fw-bold mt-3">Controls & Automation</h5>
                  <p className="text-muted small">
                    Smart thermostats, BMS, IoT climate control
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm overflow-hidden">
                <Card.Img
                  variant="top"
                  src="https://images.pexels.com/photos/4498370/pexels-photo-4498370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <Card.Body className="text-center p-4">
                  <h5 className="fw-bold mt-3">Maintenance & After-Sales</h5>
                  <p className="text-muted small">
                    AMC, emergency repair, genuine spare supply
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <div className="text-center mt-5 pt-4">
            <Button variant="primary" size="lg" className="px-4 py-2">
              View All Services
            </Button>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section
        className="py-5 text-center text-white"
        style={{ backgroundColor: '#0D1B2A' }}
      >
        <Container>
          <h2 className="mb-4 display-5">Ready to Cool Your Space?</h2>
          <p
            className="lead mb-5"
            style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.3rem' }}
          >
            Let our expert team help you plan, execute, and deliver your project
            with efficiency and quality. Contact us today for expert
            consultation and competitive quotes
          </p>
          <Button variant="primary" size="lg" className="px-4 py-2">
            Get in Touch Now
          </Button>
        </Container>
      </section>
    </div>
  );
}

export default Home;
