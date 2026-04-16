import React from 'react';
import { FaLeaf, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import { FaMicrochip } from 'react-icons/fa6';
import { Button, Card, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Overview() {
  return (
    <>
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
            The official trading partner and authorized distributor of
            <strong> General Deluxe</strong>.
          </p>

          <Row className="align-items-center g-5">
            <Col lg={6}>
              <h3 className="fw-bold mb-4">
                Your Partner in Cooling and Comfort.
              </h3>
              <p className="lead" style={{ fontSize: '1rem' }}>
                Cool House Trading is the official trading partner and authorized distributor of{' '}
                <span className="fw-bold">General Deluxe (M. Abu Haltam Group for Investment)</span>,
                a leading Jordanian manufacturer of premium refrigeration solutions. We bring both{' '}
                <strong>commercial refrigeration equipment</strong> and{' '}
                <strong>home appliances</strong> to the Middle East market with unmatched quality
                and reliability, with a strong focus on Saudi Arabia.
              </p>
              <p className="mb-4">
                <strong>General Deluxe</strong> is one of the leading manufacturers in the Middle East,
                producing household and commercial electrical appliances in Jordan such as refrigerators,
                freezers, washing machines, A/C units, and upright freezers and fridges. General Deluxe's
                network has been expanded to cover Middle East, European, and African markets. Currently,
                we are exporting to countries like Saudi Arabia, Iraq, Egypt, Syria, Lebanon, Ghana,
                Tunisia, Algeria, Central Africa, and Cyprus.
              </p>
              <Button variant="primary" as={Link} to="/about">
                Discover More
              </Button>
            </Col>
            <Col lg={1}></Col>
            <Col lg={5}>
              <img
                src="who_we_are.png"
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
          <h2 className="section-heading">Why Choose Us</h2>
          <p className="section-subheading">THE GENERAL DELUXE EDGE</p>

          <Row className="g-4">
            <Col md={3}>
              <Card className="h-100 text-center p-4">
                <div
                  className="mb-3"
                  style={{ fontSize: '3rem', color: '#111f5a' }}
                >
                  <FaMicrochip />
                </div>
                <h5>High Perfomance</h5>
                {/* <h5>HIGH-PERFOMANCE</h5> */}
                <p className="text-muted small">
                  Equipped with powerful, high-efficiency compressors that
                  maintain stable internal temperatures even under heavy
                  commercial usage.
                </p>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="h-100 text-center p-4">
                <div
                  className="mb-3"
                  style={{ fontSize: '3rem', color: '#111f5a' }}
                >
                  <FaLeaf />
                </div>
                <h5>Energy Efficeny</h5>
                <p className="text-muted small">
                  Optimized systems reduce energy consumption and lower
                  operating costs, aligning with global sustainability
                  standards.
                </p>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="h-100 text-center p-4">
                <div
                  className="mb-3"
                  style={{ fontSize: '3rem', color: '#111f5a' }}
                >
                  <FaChartLine />
                </div>
                <h5>Cost Optimization</h5>
                <p className="text-muted small">
                  Reduced logistics costs, shorter lead times, and avoidance of
                  excessive import duties through regional manufacturing.
                </p>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="h-100 text-center p-4">
                <div
                  className="mb-3"
                  style={{ fontSize: '3rem', color: '#111f5a' }}
                >
                  <FaShieldAlt />
                </div>
                <h5>Proven Reliability</h5>
                <p className="text-muted small">
                  Built to perform in high-demand environments with consistent
                  cooling performance and an extended operational lifespan.
                </p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Overview;
