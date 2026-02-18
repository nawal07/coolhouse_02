import React from 'react';
import { Carousel, Button, Card, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="mt-5">
      {/* Hero Carousel */}
      <Carousel fade interval={2000} indicators={true} controls={true}>
        <Carousel.Item>
          <div
            className="hero text-center text-white d-flex align-items-center justify-content-center"
            style={{
              backgroundImage: `url('/hero_1.jpg')`, // ← correct path from public/
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              minHeight: '85vh',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0, 0, 0, 0.45)', // dark overlay – change opacity 0.35–0.55
                zIndex: 1,
              }}
            />
            <Container style={{ position: 'relative', zIndex: 2 }}>
              <h1 className=" snowflake-accent mb-4 fw-medium display-5">
                The Future of Cooling Solutions
              </h1>
              <p
                className="lead mb-5 fs-4"
                style={{ maxWidth: '900px', margin: '0 auto' }}
              >
                We offer an extensive range of commercial freezers, chest
                freezers and upright Fridges at reasonable prices.
              </p>
              <div className="btn-group-single">
                <Button
                  variant="primary"
                  size="lg"
                  className="me-3"
                  as={Link}
                  to="/products"
                  style={{
                    backgroundColor: '#111f5a',
                    borderColor: '#111f5a',
                    borderRadius: '10px',
                  }}
                >
                  Our Products
                </Button>
                <Button
                  variant="outline-primary"
                  size="lg"
                  as={Link}
                  to="/contact"
                  style={{
                    color: '#ffffff',
                    borderColor: '#ffffff',
                    borderRadius: '10px',
                  }}
                  className="btn-contact"
                >
                  Contact Us
                </Button>
              </div>
            </Container>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="hero text-center text-white d-flex align-items-center justify-content-center"
            style={{
              backgroundImage: `url('/hero_2.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              minHeight: '85vh',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0, 0, 0, 0.45)',
                zIndex: 1,
              }}
            />

            <Container style={{ position: 'relative', zIndex: 2 }}>
              <h1 className="snowflake-accent display-3 mb-4">
                Trusted destination for commercial refrigeration equipment.
              </h1>
              <p
                className="lead mb-4"
                style={{ maxWidth: '800px', margin: '0 auto' }}
              >
                Ultra compact, convinient and made to fit anywhere.
              </p>
              <div className="btn-group-single">
                <Button
                  variant="primary"
                  style={{
                    backgroundColor: '#111f5a',
                    borderColor: '#111f5a',
                    borderRadius: '10px',
                  }}
                  size="lg"
                  className="me-3"
                  as={Link}
                  to="/products"
                >
                  Our Products
                </Button>
                <Button
                  variant="outline-primary"
                  size="lg"
                  as={Link}
                  to="/contact"
                  style={{
                    color: '#ffffff',
                    borderColor: '#ffffff',
                    borderRadius: '10px',
                  }}
                  className="btn-contact"
                >
                  Contact Us
                </Button>
              </div>
            </Container>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="hero text-center text-white d-flex align-items-center justify-content-center"
            style={{
              backgroundImage: ` url('/hero_3.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              minHeight: '85vh',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0, 0, 0, 0.45)',
                zIndex: 1,
              }}
            />

            <Container style={{ position: 'relative', zIndex: 2 }}>
              <h1 className="snowflake-accent display-3 mb-4">
                Sustainably cooler
              </h1>
              <p
                className="lead mb-4"
                style={{ maxWidth: '800px', margin: '0 auto' }}
              >
                Coolers that comes with ecofriendly hydrocarbon refrigerant.
              </p>
              <div className="btn-group-single">
                <Button
                  variant="primary"
                  size="lg"
                  className="me-3"
                  as={Link}
                  to="/products"
                  style={{
                    backgroundColor: '#111f5a',
                    borderColor: '#111f5a',
                    borderRadius: '10px',
                  }}
                >
                  Our Products
                </Button>
                <Button
                  variant="outline-primary"
                  size="lg"
                  as={Link}
                  to="/contact"
                  style={{
                    color: '#ffffff',
                    borderColor: '#ffffff',
                    borderRadius: '10px',
                  }}
                  className="btn-contact"
                >
                  Contact Us
                </Button>
              </div>
            </Container>
          </div>
        </Carousel.Item>
      </Carousel>

      {/* About Summary */}
      <section
        className="section py-5"
        style={{
          backgroundColor: '#ffffff',
        }}
      >
        <Container>
          <h2 className="section-heading">Who We Are</h2>
          <p className="section-subheading">
            Coolhouse Trading – Your trusted partner with Affordable, High
            quality, and Best Top Brand Genuine products of Commercial
            Refrigeration
          </p>

          <Row className="align-items-center g-5">
            <Col lg={6}>
              <h3 className="fw-bold mb-4">
                Get the best of efficiency and energy saving{' '}
              </h3>
              <p className="mb-4">
                Coolhouse Trading specializes in supplying high-quality
                commercial refrigeration equipment. We offer an extensive range
                of commercial freezers, chest freezers and upright fridges at
                reasonable prices.
              </p>
              <Button variant="primary" as={Link} to="/about">
                Discover More
              </Button>
            </Col>
            <Col lg={6}>
              <img
                src="who_we_are.jpg"
                alt="Who We are"
                className="img-fluid rounded-4 shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="section py-5" style={{ backgroundColor: '#e6f2ff' }}>
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

      {/* Core Products */}
      <section
        className="section py-5 border-bottom"
        style={{ backgroundColor: 'var(--bg-light)' }}
      >
        <Container fluid className="px-4 px-md-5">
          <h2 className="section-heading">Our Products</h2>
          <p className="section-subheading">
            Premium Commercial Refrigeration Solutions – Upright Fridges &
            Freezers
          </p>

          <Row className="g-5">
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm overflow-hidden">
                <Card.Img
                  variant="top"
                  src="gvc_406.png"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <Card.Body className="text-center p-4">
                  <h5 className="fw-bold mt-3">
                    GVC 406 Up-right Showcase Refrigerator (Single Door)
                  </h5>
                  {/* <p className="text-muted small">
                    Split, cassette, ducted, VRV/VRF systems for all sectors
                  </p> */}
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm overflow-hidden">
                <Card.Img
                  variant="top"
                  src="gvc_526.png"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <Card.Body className="text-center p-4">
                  <h5 className="fw-bold mt-3">
                    GVC 526 Up-right Showcase Refrigerator (Single Door)
                  </h5>
                  {/* <p className="text-muted small">
                    Genuine compressors, coils, valves & controls
                  </p> */}
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm overflow-hidden">
                <Card.Img
                  variant="top"
                  src="gvc_636.png"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <Card.Body className="text-center p-4">
                  <h5 className="fw-bold mt-3">
                    GVC 636 Up-right Showcase Refrigerator (Single Door)
                  </h5>
                  {/* <p className="text-muted small">
                    Complete cold storage design & installation
                  </p> */}
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm overflow-hidden">
                <Card.Img
                  variant="top"
                  src="gvc_1106.png"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <Card.Body className="text-center p-4">
                  <h5 className="fw-bold mt-3">
                    GVC 1106 Up-right Showcase Refrigerator (Double Swing Door)
                  </h5>
                  {/* <p className="text-muted small">
                    AHUs, fresh air systems, heat recovery units
                  </p> */}
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm overflow-hidden">
                <Card.Img
                  variant="top"
                  src="gvc_1200.png"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <Card.Body className="text-center p-4">
                  <h5 className="fw-bold mt-3">
                    GVC 1200 Up-right Showcase Refrigerator (Double Sliding
                    Door)
                  </h5>
                  {/* <p className="text-muted small">
                    Smart thermostats, BMS, IoT climate control
                  </p> */}
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm overflow-hidden">
                <Card.Img
                  variant="top"
                  src="gvc_1350.png"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <Card.Body className="text-center p-4">
                  <h5 className="fw-bold mt-3">
                    GVC 1350 Up-right Showcase Refrigerator (Double Sliding
                    Door)
                  </h5>
                  {/* <p className="text-muted small">
                    AMC, emergency repair, genuine spare supply
                  </p> */}
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <div className=" text-center mt-5 pt-4">
            <Button size="md" className="service-btn" as={Link} to="/products">
              View All Products
            </Button>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-5" style={{ backgroundColor: '#ffffff' }}>
        <Container className="d-flex justify-content-center">
          {/* Inner Card */}
          <div className="text-center px-4 py-5 cta-card">
            <h2 className="mb-3 cta-head">
              Need to keep your Products cool and fresh?
            </h2>

            <p className="mb-4 cta-content">
              Let our expert team help you plan, execute, and deliver your
              [product] with efficiency and quality. Contact us today for expert
              consultation and competitive quotes.
            </p>

            <Button size="md cta-button" as={Link} to="/contact">
              Contact Us Today
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Home;
