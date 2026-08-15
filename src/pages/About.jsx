import { WHO_WE_ARE, HERO } from '../constants/images';
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
import Seo from '../components/Seo';
import { buildBreadcrumbJsonLd } from '../constants/seo';
import { useLanguage } from '../i18n/LanguageContext';
import RichText from '../i18n/RichText';

function About() {
  const { t } = useLanguage();
  const a = t.about;
  const ABOUT_JSON_LD = buildBreadcrumbJsonLd([
    { name: t.nav.home, path: '/' },
    { name: a.pageTitle, path: '/about' },
  ]);

  return (
    <div
      className="section d-flex flex-column justify-content-center p-0"
      style={{ backgroundColor: 'var(--bg-light)', overflowX: 'clip' }}
    >
      <Seo title={a.seo.title} description={a.seo.description} jsonLd={ABOUT_JSON_LD} />
      <PageHero title={a.pageTitle} backgroundImage={HERO} />

      <Container fluid className="p-0 mt-5">
        <Row className="align-items-center mb-5 g-4 px-4 px-md-5 ">
          <Col lg={6}>
            <p className="text-uppercase fw-semibold mb-2" style={{ color: '#40c4ff', letterSpacing: '2px', fontSize: '0.85rem' }}>
              {a.established}
            </p>

            <h2 className="fw-bold mb-3" style={{ color: '#111f5a', fontSize: '2rem', lineHeight: '1.2' }}>
              {a.headline}
              <span style={{ color: '#40c4ff' }}>{a.headlineAccent}</span>
            </h2>

            <p className="lead text-muted mb-4" style={{ fontSize: '1.05rem', fontStyle: 'italic' }}>
              {a.lead}
            </p>

            <p className="mb-4">
              <RichText text={a.para1} />
            </p>

            <p className="mb-4">
              <RichText text={a.para2} />
            </p>

            <p className="mb-4">{a.para3}</p>

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
              {a.ctaBtn}
            </Button>
          </Col>
          <Col lg={6} className="text-center mt-4 mt-lg-0">
            <img
              src={WHO_WE_ARE}
              alt={a.pageTitle}
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
