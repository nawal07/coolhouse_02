import React from 'react';
import { DOUBLE_DOOR_IMG, SINGLE_DOOR_IMG, UPRIGHT_FREEZER_IMG } from '../constants/images';
import { Button, Card, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const TEASER_IMAGES = [DOUBLE_DOOR_IMG, SINGLE_DOOR_IMG, UPRIGHT_FREEZER_IMG];

function OurProducts() {
  const { t } = useLanguage();
  const { heading, subheading, items, viewAll } = t.home.ourProducts;

  return (
    <section
      className="section py-5 border-bottom"
      style={{ backgroundColor: 'var(--bg-light)' }}
    >
      <Container fluid className="px-4 px-md-5">
        <h2 className="section-heading">{heading}</h2>
        <p className="section-subheading">{subheading}</p>

        <Row className="g-5">
          {items.map((item, i) => (
            <Col ms={12} key={item.title}>
              <Card className="h-100 border-0 shadow-sm overflow-hidden">
                <Card.Img
                  variant="top"
                  className="mt-3"
                  src={TEASER_IMAGES[i]}
                  style={{
                    height: '250px',
                    objectFit: 'contain',
                  }}
                />
                <Card.Body className="text-center p-4">
                  <h5 className="fw-bold mt-3">{item.title}</h5>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className=" text-center mt-5 pt-4">
          <Button size="md" className="service-btn" as={Link} to="/products">
            {viewAll}
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default OurProducts;
