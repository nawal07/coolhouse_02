
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
      style={{ backgroundColor: 'var(--bg-light)' }}
    >
      <PageHero title="About Us" backgroundImage="/hero_1.jpg" />

      <Container fluid className="p-0 mt-5">
        <Row className="align-items-center mb-5 g-4 px-4 px-md-5 ">
          <Col lg={6}>
            <h1 className="snowflake-accent mb-4" style={{ fontSize: '2rem' }}>
              Your Partner in Cooling and Comfort
            </h1>
            <p className="lead" style={{ fontSize: '1rem' }}>
              Solutions, serving the Middle East market with a strong focus on
              Saudi Arabia.{' '}
            </p>
            <p className="mb-4">
              With a legacy dating back to 1960, the company has evolved from a
              premium appliance importer into a fully integrated manufacturing
              operation with an annual production capacity of 300,000 units.
              Today, Cool House stands as a trusted partner for retail, food
              service, healthcare, and beverage sectors, delivering
              high-performance refrigeration systems designed for reliability,
              efficiency, and long-term operational value.
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
              src="who_we_are.jpg"
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
        <OurPartners />

        {/*  GROWTH & COMMITMENT */}
        <FutureAndSustainability />

        {/* EXPORT MAP */}
        <ExportsMap/>
        
      </Container>
    </div>
  );
}

export default About;
