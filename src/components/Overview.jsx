import React from 'react';
import { WHO_WE_ARE } from '../constants/images';
import { FaLeaf, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import { FaMicrochip } from 'react-icons/fa6';
import { Button, Card, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import RichText from '../i18n/RichText';

const WHY_CHOOSE_ICONS = [FaMicrochip, FaLeaf, FaChartLine, FaShieldAlt];

function Overview() {
  const { t } = useLanguage();
  const { whoWeAre, whyChoose } = t.home.overview;

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
          <h2 className="section-heading">{whoWeAre.heading}</h2>
          <p className="section-subheading">
            {whoWeAre.subheading}
            <strong> {whoWeAre.subheadingBrand}</strong>.
          </p>

          <Row className="align-items-center g-5">
            <Col lg={6}>
              <h3 className="fw-bold mb-4">{whoWeAre.title}</h3>
              <p className="lead" style={{ fontSize: '1rem' }}>
                <RichText text={whoWeAre.para1} />
              </p>
              <p className="mb-4">
                <RichText text={whoWeAre.para2} />
              </p>
              <Button variant="primary" as={Link} to="/about">
                {whoWeAre.discoverMore}
              </Button>
            </Col>
            <Col lg={1}></Col>
            <Col lg={5}>
              <img
                src={WHO_WE_ARE}
                alt={whoWeAre.heading}
                className="img-fluid rounded-4 shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="section py-5" style={{ backgroundColor: '#e6f2ff' }}>
        <Container>
          <h2 className="section-heading">{whyChoose.heading}</h2>

          <Row className="g-4">
            {whyChoose.items.map((item, i) => {
              const Icon = WHY_CHOOSE_ICONS[i];
              return (
                <Col md={3} key={item.title}>
                  <Card className="h-100 text-center p-4">
                    <div
                      className="mb-3"
                      style={{ fontSize: '3rem', color: '#111f5a' }}
                    >
                      <Icon />
                    </div>
                    <h5>{item.title}</h5>
                    <p className="text-muted small">{item.desc}</p>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Overview;
