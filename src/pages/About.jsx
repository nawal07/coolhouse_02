import PageHero from '../components/Hero';
import DecadesOfExcellence from '../components/DecadesOfExcellence';
import MarketOpurtunity from '../components/MarketOppurtunity';
import { Container, Row, Col, Button, Card, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import MissionAndVision from '../components/MissionAndVision';
import TargetSegments from '../components/TargetSegments';
import OurPartners from '../components/OurPartners';
import FutureAndSustainability from '../components/FutureAndSustainability';
import ExportsMap from '../components/ExportsMap';

function About() {
  return (
    <div
      className="section d-flex flex-column justify-content-center p-0"
      style={{ backgroundColor: 'var(--bg-light)', overflowX: 'clip' }}
    >
      <PageHero title="About Us" backgroundImage="/hero.jpg" />

      <Container fluid className="p-0 mt-5">
        <Row className="align-items-center mb-5 g-4 px-4 px-md-5 ">
          <Col lg={6}>
            <p className="text-uppercase fw-semibold mb-2" style={{ color: '#40c4ff', letterSpacing: '2px', fontSize: '0.85rem' }}>
              Established 1960
            </p>

            <h2 className="fw-bold mb-3" style={{ color: '#111f5a', fontSize: '2rem', lineHeight: '1.2' }}>
              General Deluxe –{' '}
              <span style={{ color: '#40c4ff' }}>Proven Track Records</span>
            </h2>

            <p className="lead text-muted mb-4" style={{ fontSize: '1.05rem', fontStyle: 'italic' }}>
              Our trusted associate has decades of proven excellence in Electrical appliances and refrigeration.
            </p>

            <p className="mb-4">
              Cool House Trading is the official trading partner and authorized distributor of{' '}
              <strong>General Deluxe (M. Abu Haltam Group for Investment)</strong>, a leading Jordanian
              manufacturer of premium refrigeration solutions. We bring both{' '}
              <strong>commercial refrigeration equipment</strong> and{' '}
              <strong>home appliances</strong> to the Middle East market with unmatched quality and
              reliability, with a strong focus on Saudi Arabia.
            </p>

            <p className="mb-4">
              <strong>General Deluxe</strong> is one of the leading manufacturers in the Middle East,
              producing household and commercial electrical appliances in Jordan such as refrigerators,
              freezers, washing machines, A/C units, and upright freezers and fridges. General Deluxe's
              network has been expanded to cover Middle East, European, and African markets. Currently,
              we are exporting General Deluxe domestic and commercial products to countries like Saudi
              Arabia, Iraq, Egypt, Syria, Lebanon, Ghana, Tunisia, Algeria, Central Africa, and Cyprus.
            </p>

            <p className="mb-4">
              We are proud to be affiliated with the Jordan-based manufacturer behind General Deluxe,
              a globally respected name in high-quality upright fridges, freezers, and commercial cooling
              equipment. With decades of expertise from our manufacturing partner, we bring certified,
              energy-efficient, and durable products to food and non-food industries and sectors across
              the kingdom.
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
              as={Link}
              to="/contact"
            >
              Contact Our Team
            </Button>
          </Col>
          <Col lg={6} className="text-center mt-4 mt-lg-0">
            <img
              src="who_we_are.png"
              alt="About Us"
              className="img-fluid rounded-4 shadow"
              style={{ maxHeight: '450px', objectFit: 'cover' }}
            />
          </Col>
        </Row>

        {/* Decades of excellence*/}
        <DecadesOfExcellence />

        {/* Mission & Vision Section */}
        <MissionAndVision />

        {/* Market Oppurtunity */}
        <MarketOpurtunity />

        {/* TARGET B2B SEGMENTS */}
        <TargetSegments />

        {/* <!-- Trusted Partners Marquee Section --> */}
        {/* <OurPartners /> */}

        {/*  GROWTH & COMMITMENT */}
        <FutureAndSustainability />

        {/* EXPORT MAP */}
        <ExportsMap />
      </Container>
    </div>
  );
}

export default About;
